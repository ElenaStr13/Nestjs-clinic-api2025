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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorEntity = void 0;
const typeorm_1 = require("typeorm");
const clinic_entity_1 = require("../../clinics/entities/clinic.entity");
const service_entity_1 = require("../../services/entities/service.entity");
let DoctorEntity = class DoctorEntity {
    id;
    firstName;
    lastName;
    phone;
    email;
    clinics;
    services;
};
exports.DoctorEntity = DoctorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => clinic_entity_1.ClinicEntity, (clinic) => clinic.doctors),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], DoctorEntity.prototype, "clinics", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => service_entity_1.ServiceEntity, (service) => service.doctors),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], DoctorEntity.prototype, "services", void 0);
exports.DoctorEntity = DoctorEntity = __decorate([
    (0, typeorm_1.Entity)('doctors')
], DoctorEntity);
//# sourceMappingURL=doctor.entity.js.map