"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProductsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let UserProductsController = class UserProductsController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        return this.userRepository.products(id).find(filter);
    }
    async create(id, products) {
        return this.userRepository.products(id).create(products);
    }
    async patch(id, products, where) {
        return this.userRepository.products(id).patch(products, where);
    }
    async delete(id, where) {
        return this.userRepository.products(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/users/{id}/products', {
        responses: {
            '200': {
                description: 'Array of User has many Products',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Products) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserProductsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/{id}/products', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Products) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Products, {
                    title: 'NewProductsInUser',
                    exclude: ['id'],
                    optional: ['userId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserProductsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}/products', {
        responses: {
            '200': {
                description: 'User.Products PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Products, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Products))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserProductsController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}/products', {
        responses: {
            '200': {
                description: 'User.Products DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Products))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserProductsController.prototype, "delete", null);
UserProductsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepo)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepo])
], UserProductsController);
exports.UserProductsController = UserProductsController;
//# sourceMappingURL=user-products.controller.js.map