import { Entity } from '@loopback/repository';
import { Products } from './products.model';
export declare class User extends Entity {
    id?: string;
    name: string;
    email: string;
    password: string;
    products: Products[];
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
