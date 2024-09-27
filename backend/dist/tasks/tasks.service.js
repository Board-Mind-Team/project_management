"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TasksService", {
    enumerable: true,
    get: function() {
        return TasksService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _typeorm1 = require("typeorm");
const _taskentity = require("./entities/task.entity");
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
let TasksService = class TasksService {
    create(task) {
        return this.tasksRepository.save(task);
    }
    findAll() {
        return this.tasksRepository.find({
            relations: [
                'assignedTo'
            ]
        });
    }
    findOne(id) {
        return this.tasksRepository.findOne({
            where: {
                id
            },
            relations: [
                'assignedTo'
            ]
        });
    }
    async update(id, taskData) {
        await this.tasksRepository.update(id, taskData);
        return this.findOne(id);
    }
    async remove(id) {
        await this.tasksRepository.delete(id);
    }
    constructor(tasksRepository){
        this.tasksRepository = tasksRepository;
    }
};
TasksService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_taskentity.Task)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], TasksService);

//# sourceMappingURL=tasks.service.js.map