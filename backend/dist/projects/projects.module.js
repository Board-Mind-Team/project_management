"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProjectsModule", {
    enumerable: true,
    get: function() {
        return ProjectsModule;
    }
});
const _common = require("@nestjs/common");
const _projectsservice = require("./projects.service");
const _projectscontroller = require("./projects.controller");
const _typeorm = require("@nestjs/typeorm");
const _projectentity = require("./entities/project.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _projectentity.Project
            ])
        ],
        controllers: [
            _projectscontroller.ProjectsController
        ],
        providers: [
            _projectsservice.ProjectsService
        ]
    })
], ProjectsModule);

//# sourceMappingURL=projects.module.js.map