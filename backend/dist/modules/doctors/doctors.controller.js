"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsController = void 0;
const common_1 = require("@nestjs/common");
const doctors_service_1 = require("./doctors.service");
const create_doctor_dto_1 = require("./dto/create-doctor.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
let DoctorsController = class DoctorsController {
    doctorService;
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    create(dto) {
        return this.doctorService.create(dto);
    }
    findAll(firstName, lastName, phone, email, sortBy, sortOrder) {
        return this.doctorService.findAll(firstName, lastName, phone, email, sortBy, sortOrder);
    }
};
exports.DoctorsController = DoctorsController;
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", void 0)
], DoctorsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'firstName', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'lastName', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'phone', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'email', required: false }),
    (0, swagger_1.ApiQuery)({
        name: 'sortBy',
        enum: ['firstName', 'lastName'],
        required: false,
    }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', enum: ['ASC', 'DESC'], required: false }),
    __param(0, (0, common_1.Query)('firstName')),
    __param(1, (0, common_1.Query)('lastName')),
    __param(2, (0, common_1.Query)('phone')),
    __param(3, (0, common_1.Query)('email')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], DoctorsController.prototype, "findAll", null);
exports.DoctorsController = DoctorsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiTags)('Doctors'),
    (0, common_1.Controller)('doctors'),
    __metadata("design:paramtypes", [doctors_service_1.DoctorsService])
], DoctorsController);
//# sourceMappingURL=doctors.controller.js.map