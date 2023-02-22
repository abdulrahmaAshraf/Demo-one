import {BootMixin} from '@loopback/boot';
import {ApplicationConfig, createBindingFromClass} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RestApplication} from '@loopback/rest';
import path from 'path';
import {MySequence} from './sequence';
import { RepositoryMixin, SchemaMigrationOptions } from '@loopback/repository';
import { BcryptHasher } from './services/hash.password.bcryptjs';
import {PasswordHasherBindings, UserServiceBindings} from './keys';
import { JWTAuthenticationComponent, TokenServiceBindings } from '@loopback/authentication-jwt';
import { JWTService } from './services/jwt.service';
import { AuthenticationComponent } from '@loopback/authentication';
import { UserManagementService } from './services/user-management.service';
import crypto from 'crypto';
import { ErrorHandlerMiddlewareProvider } from './middlewares';
 
export {ApplicationConfig};

export class DemotestApplication extends BootMixin(RepositoryMixin(RestApplication)) {
  constructor(options: ApplicationConfig = {}) {
    super(options);


    // Set up the custom sequence
    this.sequence(MySequence);

    // Bind authentication component related elements
    this.component(AuthenticationComponent);
    this.component(JWTAuthenticationComponent);
    this.setUpBindings()

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }

  // @ts-ignore
  async start(): Promise<void> {
    // Use `databaseSeeding` flag to control if products/users should be pre
    // populated into the database. Its value is default to `true`.
    if (this.options.databaseSeeding !== false) {
      await this.migrateSchema();
    }
    return super.start();
  }

  async migrateSchema(options?: SchemaMigrationOptions): Promise<void> {
    await super.migrateSchema(options);
  }

  setUpBindings(): void {
    // Bind bcrypt hash services
    this.bind(PasswordHasherBindings.ROUNDS).to(10);
    this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);
    this.bind(TokenServiceBindings.TOKEN_SERVICE).toClass(JWTService);

    this.bind(UserServiceBindings.USER_SERVICE).toClass(UserManagementService);
    this.add(createBindingFromClass(ErrorHandlerMiddlewareProvider));

    // Use JWT secret from JWT_SECRET environment variable if set
    // otherwise create a random string of 64 hex digits
    const secret =
      process.env.JWT_SECRET ?? crypto.randomBytes(32).toString('hex');
    this.bind(TokenServiceBindings.TOKEN_SECRET).to(secret);
  }
}
