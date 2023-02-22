import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { User, UserRelations, Products } from '../models';
import { ProductsRepository } from './products.repository';
export declare class UserRepo extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected productsRepositoryGetter: Getter<ProductsRepository>;
    readonly products: HasManyRepositoryFactory<Products, typeof User.prototype.id>;
    constructor(dataSource: DbDataSource, productsRepositoryGetter: Getter<ProductsRepository>);
}
