// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {UserService} from '@loopback/authentication';
import {BindingKey} from '@loopback/context';
import {User} from './models';
import {Credentials} from './repositories';
import {PasswordHasher} from './services/hash.password.bcryptjs';
import { FileUploadHandler } from './types';

export namespace PasswordHasherBindings {
  export const PASSWORD_HASHER =
    BindingKey.create<PasswordHasher>('services.hasher');
  export const ROUNDS = BindingKey.create<number>('services.hasher.round');
}

export namespace UserServiceBindings {
  export const USER_SERVICE = BindingKey.create<UserService<User, Credentials>>(
    'services.user.service',
  );
}

export namespace FileUploadService {
  export const FILE_UPLOAD_SERVICE = BindingKey.create<FileUploadHandler>(
    'services.FileUpload',
  );
}

/**
 * Binding key for the storage directory
 */
export const STORAGE_DIRECTORY = BindingKey.create<string>('storage.directory');