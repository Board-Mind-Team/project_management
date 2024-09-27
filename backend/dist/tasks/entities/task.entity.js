"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Task: function() {
        return Task;
    },
    TaskStatus: function() {
        return TaskStatus;
    }
});
const _typeorm = require("typeorm");
const _userentity = require("../../users/entities/user.entity");
const _projectentity = require("../../projects/entities/project.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
var TaskStatus;
(function(TaskStatus) {
    TaskStatus["NEW"] = "new";
    TaskStatus["PENDING"] = "pending";
    TaskStatus["IN_PROGRESS"] = "in_progress";
    TaskStatus["COMPLETED"] = "completed";
    TaskStatus["DISCARDED"] = "discarded";
})(TaskStatus || (TaskStatus = {}));
let Task = class Task {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)(),
    _ts_metadata("design:type", Number)
], Task.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], Task.prototype, "title", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", String)
], Task.prototype, "description", void 0);
_ts_decorate([
    (0, _typeorm.Column)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Task.prototype, "dueDate", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'enum',
        enum: TaskStatus,
        default: "new"
    }),
    _ts_metadata("design:type", String)
], Task.prototype, "status", void 0);
_ts_decorate([
    (0, _typeorm.ManyToOne)(()=>_userentity.User, (user)=>user.tasks),
    _ts_metadata("design:type", typeof _userentity.User === "undefined" ? Object : _userentity.User)
], Task.prototype, "assignedTo", void 0);
_ts_decorate([
    (0, _typeorm.ManyToOne)(()=>_projectentity.Project, (project)=>project.tasks),
    _ts_metadata("design:type", typeof _projectentity.Project === "undefined" ? Object : _projectentity.Project)
], Task.prototype, "project", void 0);
Task = _ts_decorate([
    (0, _typeorm.Entity)()
], Task);

//# sourceMappingURL=task.entity.js.map