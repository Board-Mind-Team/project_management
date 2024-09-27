"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProjectsService", {
    enumerable: true,
    get: function() {
        return ProjectsService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _projectentity = require("./entities/project.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let ProjectsService = class ProjectsService {
    create(project) {
        return this.projectsRepository.save(project);
    }
    findAll() {
        return this.projectsRepository.find();
    }
    findOne(id) {
        return this.projectsRepository.findOne({
            where: {
                id
            }
        });
    }
    async update(id, projectData) {
        await this.projectsRepository.update(id, projectData);
        return this.findOne(id);
    }
    async remove(id) {
        await this.projectsRepository.delete(id);
    }
    constructor(projectsRepository){
        this.projectsRepository = projectsRepository;
    }
};
ProjectsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_projectentity.Project)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], ProjectsService);

//# sourceMappingURL=projects.service.js.map