"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductsUserController = class ProductsUserController {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async getUser(id) {
        return this.productsRepository.user(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/products/{id}/user', {
        responses: {
            '200': {
                description: 'User belonging to Products',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.User) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsUserController.prototype, "getUser", null);
ProductsUserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductsRepository])
], ProductsUserController);
exports.ProductsUserController = ProductsUserController;
//# sourceMappingURL=products-user.controller.js.map