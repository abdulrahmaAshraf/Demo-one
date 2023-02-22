import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { User } from '../../models';
import { UserRepo } from '../../repositories';
export declare class AdminUsersController {
    userRepository: UserRepo;
    constructor(userRepository: UserRepo);
    create(user: Omit<User, 'id'>): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
}
