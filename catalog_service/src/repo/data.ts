import { PrismaClient } from "@prisma/client";
import { comands } from "../interface/comandingTheRepo";
import { Product } from "../models/product";
import { ProductFactory } from "../utils/fixtures";

export class data implements comands{
    prism: PrismaClient
    constructor(){
        this.prism= new PrismaClient()
    }
    async create(data: Product): Promise<Product> {

        return this.prism.product.create({
            data,
        })
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