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
const mockData_1 = require("../../repo/mockData");
const configServices_1 = require("../configServices");
const faker_1 = require("@faker-js/faker");
function mockProduct(rest) {
    return Object.assign({ name: faker_1.faker.commerce.productName(), description: faker_1.faker.commerce.productDescription(), stock: faker_1.faker.number.int({ min: 10, max: 100 }) }, rest);
}
describe("catalogService", () => {
    let repo;
    beforeEach(() => {
        repo = new mockData_1.mockData();
    });
    afterEach(() => {
        repo = {};
    });
    describe("create", () => {
        test("should create product", () => __awaiter(void 0, void 0, void 0, function* () {
            const service = new configServices_1.CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker_1.faker.commerce.price
            });
            const res = yield service.createProduct(reqBody);
            expect(res).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(Number),
                stock: expect.any(Number),
            });
        }));
        test("not able to create product", () => __awaiter(void 0, void 0, void 0, function* () {
            const service = new configServices_1.CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker_1.faker.commerce.price
            });
            const duplicate = jest.spyOn(repo, "create");
            duplicate.mockImplementationOnce(() => Promise.resolve({}));
            yield expect(service.createProduct(reqBody)).rejects.toThrow("not able to create product");
        }));
        // jest
        // .spyOn(repository, "create")
        // .mockImplementationOnce(() =>
        //   Promise.reject(new Error("product already exist"))
        // );
        test("duplicate product", () => __awaiter(void 0, void 0, void 0, function* () {
            const service = new configServices_1.CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker_1.faker.commerce.price
            });
            const duplicate = jest.spyOn(repo, "create");
            duplicate.mockImplementationOnce(() => Promise.reject(new Error("duplicate product")));
            yield expect(service.createProduct(reqBody)).rejects.toThrow("duplicate product");
        }));
    });
    describe("update", () => {
        test("should update the products", () => __awaiter(void 0, void 0, void 0, function* () {
            const service = new configServices_1.CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker_1.faker.commerce.price(),
                id: faker_1.faker.number.int({ min: 10, max: 1000 }),
            });
            const result = yield service.updateProduct(reqBody);
            expect(result).toMatchObject(reqBody);
        }));
        test("show throw error when no product matches", () => __awaiter(void 0, void 0, void 0, function* () {
            const service = new configServices_1.CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker_1.faker.commerce.price(),
                id: faker_1.faker.number.int({ min: 10, max: 1000 }),
            });
            const unknown = jest.spyOn(repo, "update");
            unknown.mockImplementationOnce(() => {
                throw new Error("product not found");
            });
            expect(service.updateProduct(reqBody)).rejects.toThrow("product not found");
        }));
    });
});
