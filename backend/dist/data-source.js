"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppDataSource", {
    enumerable: true,
    get: function() {
        return AppDataSource;
    }
});
const _typeorm = require("typeorm");
const AppDataSource = new _typeorm.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'gestion_proyectos',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}'
    ],
    migrations: [
        __dirname + '/migrations/**/*{.ts,.js}'
    ],
    synchronize: false
});

//# sourceMappingURL=data-source.js.map