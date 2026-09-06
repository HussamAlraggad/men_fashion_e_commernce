"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TryOnModule = exports.TRY_ON_MODULE = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = require("./service");
exports.TRY_ON_MODULE = "try_on";
const tryOnModule = (0, utils_1.Module)(exports.TRY_ON_MODULE, {
    service: service_1.TryOnService,
});
exports.default = tryOnModule;
class TryOnModule {
}
exports.TryOnModule = TryOnModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy90cnktb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBQ2xELHVDQUF3QztBQUUzQixRQUFBLGFBQWEsR0FBRyxRQUFRLENBQUE7QUFFckMsTUFBTSxXQUFXLEdBQUcsSUFBQSxjQUFNLEVBQUMscUJBQWEsRUFBRTtJQUN4QyxPQUFPLEVBQUUsc0JBQVk7Q0FDdEIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsV0FBVyxDQUFBO0FBRTFCLE1BQWEsV0FBVztDQUFHO0FBQTNCLGtDQUEyQiJ9