// Uncomment these imports to begin using these cool features!

import { inject } from "@loopback/core";
import { get, HttpErrors, oas, param, Response, RestBindings } from "@loopback/rest";
import path from "path";
import { promisify } from "util";
import { STORAGE_DIRECTORY } from "../keys";
import fs from 'fs'
import { authenticate } from "@loopback/authentication";

const readdir = promisify(fs.readdir);

export class FileDownloadController {
  constructor(@inject(STORAGE_DIRECTORY) private storageDirectory: string) {}
  @get('/files', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        description: 'A list of files',
      },
    },
  })
  @authenticate('jwt')
  async listFiles() {
    const files = await readdir(this.storageDirectory);
    return files;
  }

  @get('/files/{filename}')
  @oas.response.file()
  @authenticate('jwt')
  downloadFile(
    @param.path.string('filename') fileName: string,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ) {
    const file = this.validateFileName(fileName);
    response.download(file, fileName);
    return response;
  }

  private validateFileName(fileName: string) {
    const resolved = path.resolve(this.storageDirectory, fileName);
    if (resolved.startsWith(this.storageDirectory)) return resolved;
    // The resolved file is outside sandbox
    throw new HttpErrors.BadRequest(`Invalid file name: ${fileName}`);
  }
}