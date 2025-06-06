"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const configuration_1 = require("../configs/configuration");
const clinic_entity_1 = require("../modules/clinics/entities/clinic.entity");
const doctor_entity_1 = require("../modules/doctors/enteties/doctor.entity");
const service_entity_1 = require("../modules/services/entities/service.entity");
let TypeormModule = class TypeormModule {
};
exports.TypeormModule = TypeormModule;
exports.TypeormModule = TypeormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const db = configService.get('database');
                    return {
                        type: db?.type || 'mysql',
                        host: db?.host,
                        port: db?.port,
                        username: db?.user,
                        password: db?.password,
                        database: db?.name,
                        entities: [clinic_entity_1.ClinicEntity, doctor_entity_1.DoctorEntity, service_entity_1.ServiceEntity],
                        synchronize: true,
                        autoLoadEntities: true,
                    };
                },
            }),
        ],
    })
], TypeormModule);
//# sourceMappingURL=typeorm.module.js.map