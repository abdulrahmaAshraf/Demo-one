"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
let Products = class Products extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Products.prototype, "price", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User),
    tslib_1.__metadata("design:type", String)
], Products.prototype, "userId", void 0);
Products = tslib_1.__decorate([
    (0, repository_1.model)({ settings: {
            foreignKeys: {
                fk_todo_todoListId: {
                    name: 'fk_product_userId',
                    entity: 'user',
                    entityKey: 'id',
                    foreignKey: 'userId',
                },
            }
        } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Products);
exports.Products = Products;
//# sourceMappingURL=products.model.js.map