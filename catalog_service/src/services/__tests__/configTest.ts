import { mockData } from "../../repo/mockData"
import { data } from "../../repo/data"
import { CatalogService } from "../configServices"
import { faker } from "@faker-js/faker";
import { Product } from "../../models/product";
import { error } from "console";


function mockProduct(rest: any) {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int({ min: 10, max: 100 }),
        ...rest,
    };
}
describe("catalogService",()=>{
    let repo: data
    beforeEach(()=>{
        repo = new mockData()
    })
    afterEach(()=>{
        repo = {} as mockData
    })
    describe("create",()=>{
        test("should create product",async()=>{
            const service = new CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker.commerce.price
            })
            const res = await service.createProduct(reqBody)
            expect(res).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description:expect.any(String),
                price: expect.any(Number),
                stock: expect.any(Number),
        })
        })
        test("not able to create product",async()=>{
            const service = new CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker.commerce.price
            })
            const duplicate= jest.spyOn(repo,"create")
            duplicate.mockImplementationOnce(()=> Promise.resolve({} as Product))
            await expect(service.createProduct(reqBody)).rejects.toThrow(
                "not able to create product"
            ) 
        })
        // jest
        // .spyOn(repository, "create")
        // .mockImplementationOnce(() =>
        //   Promise.reject(new Error("product already exist"))
        // );
        test("duplicate product",async()=>{
            const service = new CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker.commerce.price
            })
            const duplicate= jest.spyOn(repo,"create")
            duplicate.mockImplementationOnce(()=> Promise.reject(new Error("duplicate product")))
            await expect(service.createProduct(reqBody)).rejects.toThrow(
                "duplicate product"
            ) 
        })

    })
    describe("update",()=>{
        test("should update the products", async()=>{
            const service = new CatalogService(repo)
            const reqBody = mockProduct({
                price: +faker.commerce.price(),
                id: faker.number.int({ min: 10, max: 1000 }),
              });
              const result = await service.updateProduct(reqBody);
              expect(result).toMatchObject(reqBody);            

        })
        test("show throw error when no product matches",async()=>{
            const service = new CatalogService(repo)
            const reqBody = mockProduct({
                price: +faker.commerce.price(),
                id: faker.number.int({ min: 10, max: 1000 }),
              });
            const unknown=jest.spyOn(repo,"update")
            unknown.mockImplementationOnce(()=>{
                throw new Error("product not found")
            }) 
            expect(service.updateProduct(reqBody)).rejects.toThrow(
                "product not found"
            )
        })

    })
})