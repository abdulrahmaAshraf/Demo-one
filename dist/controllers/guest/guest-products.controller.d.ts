import { Products } from "../../models";
import { ProductsRepository } from "../../repositories";
export declare class GuestProductsController {
    private productRepo;
    constructor(productRepo: ProductsRepository);
    getProducts(): Promise<Products[]>;
}
