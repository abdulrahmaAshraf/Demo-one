"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestUsersController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let GuestUsersController = class GuestUsersController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(filter) {
        return this.userRepository.find(filter);
    }
    async findById(id, filter) {
        return this.userRepository.findById(id, filter);
    }
    async updateById(id, user) {
        await this.userRepository.updateById(id, user);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/guests/users'),
    (0, rest_1.response)(200, {
        description: 'Array of User model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.User, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.User)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GuestUsersController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/guests/users/{id}'),
    (0, rest_1.response)(200, {
        description: 'User model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.User, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GuestUsersController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/guests/users/{id}'),
    (0, rest_1.response)(204, {
        description: 'User PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], GuestUsersController.prototype, "updateById", null);
GuestUsersController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepo)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepo])
], GuestUsersController);
exports.GuestUsersController = GuestUsersController;
//# sourceMappingURL=guest-users.controller.js.map