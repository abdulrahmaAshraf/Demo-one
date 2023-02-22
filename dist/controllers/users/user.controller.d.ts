import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { SchemaObject } from '@loopback/rest';
import { User } from '../../models';
import { UserRepo } from '../../repositories';
import { MyUserService, Credentials, UserRepository } from '@loopback/authentication-jwt';
import { TokenService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    userRepo: UserRepo;
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    protected userRepository: UserRepository;
    constructor(userRepo: UserRepo, jwtService: TokenService, userService: MyUserService, user: UserProfile, userRepository: UserRepository);
    signUp(newUserRequest: User): Promise<User>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    count(where?: Where<User>): Promise<Count>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
}
