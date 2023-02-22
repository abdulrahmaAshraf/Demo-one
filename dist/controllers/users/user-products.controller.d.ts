import { Count, Filter, Where } from '@loopback/repository';
import { User, Products } from '../../models';
import { UserRepo } from '../../repositories';
export declare class UserProductsController {
    protected userRepository: UserRepo;
    constructor(userRepository: UserRepo);
    find(id: string, filter?: Filter<Products>): Promise<Products[]>;
    create(id: typeof User.prototype.id, products: Omit<Products, 'id'>): Promise<Products>;
    patch(id: string, products: Partial<Products>, where?: Where<Products>): Promise<Count>;
    delete(id: string, where?: Where<Products>): Promise<Count>;
}
