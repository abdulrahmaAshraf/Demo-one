"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const tslib_1 = require("tslib");
const rest_1 = require("@loopback/rest");
// import {inject} from '@loopback/core';
class HelloController {
    constructor() { }
    sayHello() {
        return 'Hello';
    }
}
tslib_1.__decorate([
    (0, rest_1.get)('/hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], HelloController.prototype, "sayHello", null);
exports.HelloController = HelloController;
//# sourceMappingURL=hello.controller.js.map