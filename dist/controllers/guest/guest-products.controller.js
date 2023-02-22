"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestProductsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const repositories_1 = require("../../repositories");
// import {inject} from '@loopback/core';
let GuestProductsController = class GuestProductsController {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async getProducts() {
        return await this.productRepo.find();
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/products'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GuestProductsController.prototype, "getProducts", null);
GuestProductsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductsRepository])
], GuestProductsController);
exports.GuestProductsController = GuestProductsController;
//# sourceMappingURL=guest-products.controller.js.map