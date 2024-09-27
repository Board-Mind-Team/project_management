"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _projectsmodule = require("./projects/projects.module");
const _tasksmodule = require("./tasks/tasks.module");
const _usersmodule = require("./users/users.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'user',
                password: 'password',
                database: 'gestion_proyectos',
                entities: [
                    __dirname + '/**/*.entity{.ts,.js}'
                ],
                synchronize: true,
                migrations: [
                    'dist/migrations/**/*{.ts,.js}'
                ]
            }),
            _projectsmodule.ProjectsModule,
            _tasksmodule.TasksModule,
            _usersmodule.UsersModule
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map