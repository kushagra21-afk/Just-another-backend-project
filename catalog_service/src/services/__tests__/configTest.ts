import { mockData } from "../../repo/mockData"
import { data } from "../../repo/data"
import { CatalogService } from "../configServices"
import { faker } from "@faker-js/faker";

const mockProduct = (rest: any) => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    ...rest,
  };
};
describe("catalogService",()=>{
    let repo: data
    beforeEach(()=>{
        repo = new mockData()
    })
    afterEach(()=>{
        repo = {} as mockData
    })
    describe("catalogService",()=>{
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
        test("should not create duplicate products",async()=>{
            const service = new CatalogService(repo);
            const reqBody = mockProduct({
                price: +faker.commerce.price
            })
            const duplicate= jest.spyOn(repo,"create")
            duplicate.mockImplementationOnce()
            await expect(service.createProduct(reqBody)).rejects.toThrow(
                "not able to create product"
            ) 
        })
    })
})