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
exports.DoctorRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("../../doctors/enteties/doctor.entity");
let DoctorRepository = class DoctorRepository extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(doctor_entity_1.DoctorEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async searchDoctors(query) {
        return this.createQueryBuilder('doctor')
            .where('doctor.firstName LIKE :query', { query: `%${query}%` })
            .orWhere('doctor.lastName LIKE :query', { query: `%${query}%` })
            .orWhere('doctor.phone LIKE :query', { query: `%${query}%` })
            .orWhere('doctor.email LIKE :query', { query: `%${query}%` })
            .getMany();
    }
};
exports.DoctorRepository = DoctorRepository;
exports.DoctorRepository = DoctorRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], DoctorRepository);
//# sourceMappingURL=doctor.repository.js.map