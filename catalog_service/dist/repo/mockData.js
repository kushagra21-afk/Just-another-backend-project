"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockData = void 0;
class mockData {
    create(data) {
        const product = Object.assign({ id: 123 }, data);
        return Promise.resolve(product);
    }
    update(data) {
        return Promise.resolve(data);
    }
    delete(id) {
        return Promise.resolve(id);
    }
    find(limit, offset) {
        return Promise.resolve([]);
    }
    findOne(id) {
        return Promise.resolve({ id });
    }
}
exports.mockData = mockData;
