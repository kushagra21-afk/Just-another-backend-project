"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const fixtures_1 = require("../utils/fixtures");
class data {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = fixtures_1.ProductFactory.build();
            return Promise.resolve(product);
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = fixtures_1.ProductFactory.build();
            return Promise.resolve(product);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = fixtures_1.ProductFactory.build();
            return Promise.resolve(product);
        });
    }
    find(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = fixtures_1.ProductFactory.buildList(limit);
            return Promise.resolve(product);
        });
    }
    findOne(id) {
        const product = fixtures_1.ProductFactory.build();
        return Promise.resolve(product);
    }
}
exports.data = data;
