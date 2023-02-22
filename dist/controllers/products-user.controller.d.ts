import { Products, User } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ProductsUserController {
    productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    getUser(id: typeof Products.prototype.id): Promise<User>;
}
