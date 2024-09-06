import { Types } from "../../models/cart";
import {faker} from "@faker-js/faker"
import { CatalogService } from "../cart_service";
import { data } from "../../repo/cart_data";
import { title } from "process";
function mockProduct(rest: any) {
    return {
        title: faker.commerce.productName(),
        customerId: faker.number.int({min:1000, max:9999}),
        ...rest,
    };
}
describe("catalogService",()=>{
    let repo: data
    beforeEach(()=>{
        repo = new data()
    })
    afterEach(()=>{
        repo = {} as data
    })
    describe("create",()=>{
        test("should create the cart",async()=>{
            const service = new CatalogService(repo);
            const reqBody = mockProduct({
                amount: +faker.commerce.price
            })
            const res = await service.createCart(reqBody)
            expect(res).toMatchObject({
                id: expect.any(Number),
                customerId: expect.any(Number),
                title:expect.any(String),
                amount: expect.any(Number),
        })
        })

    })
})