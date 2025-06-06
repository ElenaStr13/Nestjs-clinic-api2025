"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_dto_1 = require("./create-service.dto");
const swagger_1 = require("@nestjs/swagger");
let UpdateServiceDto = class UpdateServiceDto extends (0, mapped_types_1.PartialType)(create_service_dto_1.CreateServiceDto) {
};
exports.UpdateServiceDto = UpdateServiceDto;
exports.UpdateServiceDto = UpdateServiceDto = __decorate([
    (0, swagger_1.ApiExtraModels)()
], UpdateServiceDto);
//# sourceMappingURL=update-service.dto.js.map