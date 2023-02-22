import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    id?: string;
    name: string;
    price: number;
    description: string;
    userId: string;
    [prop: string]: any;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export type ProductsWithRelations = Products & ProductsRelations;
