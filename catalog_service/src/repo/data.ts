import { comands } from "../interface/comandingTheRepo";
import { Product } from "../models/product";
import { ProductFactory } from "../utils/fixtures";

export class data implements comands{
    async create(data: Product): Promise<Product> {
        const product = ProductFactory.build()
        return Promise.resolve(product)
    }
    async update(data: Product): Promise<Product> {
        const product = ProductFactory.build()
        return Promise.resolve(product)
    }
    async delete(id: any): Promise<any> {
        const product = ProductFactory.build()
        return Promise.resolve(product)
    }
    async find(limit: number, offset: number): Promise<Product[]> {
        const product = ProductFactory.buildList(limit)
        return Promise.resolve(product)
    }
    findOne(id: number): Promise<Product> {
        const product = ProductFactory.build()
        return Promise.resolve(product)
    }
    
}