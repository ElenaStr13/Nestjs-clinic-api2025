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
exports.ServiceRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const service_entity_1 = require("../../services/entities/service.entity");
let ServiceRepository = class ServiceRepository extends typeorm_1.Repository {
    dataSource;
    constructor(dataSource) {
        super(service_entity_1.ServiceEntity, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async searchByName(namePart, order = 'ASC') {
        return this.createQueryBuilder('service')
            .where('LOWER(service.name) LIKE LOWER(:namePart)', {
            namePart: `%${namePart}%`,
        })
            .orderBy('service.name', order)
            .getMany();
    }
};
exports.ServiceRepository = ServiceRepository;
exports.ServiceRepository = ServiceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ServiceRepository);
//# sourceMappingURL=service.repository.js.map