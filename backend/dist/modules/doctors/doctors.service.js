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
exports.DoctorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doctor_entity_1 = require("./enteties/doctor.entity");
const clinic_entity_1 = require("../clinics/entities/clinic.entity");
const service_entity_1 = require("../services/entities/service.entity");
let DoctorsService = class DoctorsService {
    doctorRepo;
    clinicRepo;
    serviceRepo;
    constructor(doctorRepo, clinicRepo, serviceRepo) {
        this.doctorRepo = doctorRepo;
        this.clinicRepo = clinicRepo;
        this.serviceRepo = serviceRepo;
    }
    async create(dto) {
        const clinics = await this.clinicRepo.find({
            where: { id: (0, typeorm_2.In)(dto.clinics) },
        });
        const services = await this.serviceRepo.find({
            where: { id: (0, typeorm_2.In)(dto.services) },
        });
        const doctor = this.doctorRepo.create({
            ...dto,
            clinics,
            services,
        });
        return this.doctorRepo.save(doctor);
    }
    findAll(firstName, lastName, phone, email, sortBy, sortOrder) {
        const where = {};
        if (firstName)
            where.firstName = (0, typeorm_2.Like)(`%${firstName}%`);
        if (lastName)
            where.lastName = (0, typeorm_2.Like)(`%${lastName}%`);
        if (phone)
            where.phone = (0, typeorm_2.Like)(`%${phone}%`);
        if (email)
            where.email = (0, typeorm_2.Like)(`%${email}%`);
        return this.doctorRepo.find({
            where,
            order: sortBy ? { [sortBy]: sortOrder || 'ASC' } : {},
            relations: ['clinics', 'services'],
        });
    }
};
exports.DoctorsService = DoctorsService;
exports.DoctorsService = DoctorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.DoctorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(clinic_entity_1.ClinicEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(service_entity_1.ServiceEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DoctorsService);
//# sourceMappingURL=doctors.service.js.map