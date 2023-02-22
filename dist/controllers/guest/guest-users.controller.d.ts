import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { User } from '../../models';
import { UserRepo } from '../../repositories';
export declare class GuestUsersController {
    userRepository: UserRepo;
    constructor(userRepository: UserRepo);
    find(filter?: Filter<User>): Promise<User[]>;
    findById(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
}
