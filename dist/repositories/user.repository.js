"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UserRepo = class UserRepo extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productsRepositoryGetter) {
        super(models_1.User, dataSource);
        this.productsRepositoryGetter = productsRepositoryGetter;
        this.products = this.createHasManyRepositoryFactoryFor('products', productsRepositoryGetter);
        this.registerInclusionResolver('products', this.products.inclusionResolver);
    }
};
UserRepo = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('ProductsRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], UserRepo);
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repository.js.map