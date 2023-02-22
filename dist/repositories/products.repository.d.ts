import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Products, ProductsRelations, User } from '../models';
import { UserRepo } from './user.repository';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.id, ProductsRelations> {
    protected userRepositoryGetter: Getter<UserRepo>;
    readonly user: BelongsToAccessor<User, typeof Products.prototype.id>;
    constructor(dataSource: DbDataSource, userRepositoryGetter: Getter<UserRepo>);
}
