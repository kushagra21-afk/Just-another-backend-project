
import { DB } from "../db/db.connection";
import { carts } from "../db/schema";
import { Types } from "../models/cart";
// import { TypesFactory } from "../utils/fixtures";
export interface comands{
    create(data: Types): Promise <Types>;
    update(data: Types): Promise <Types>;
    delete(id: any): Promise<any>;
    find(limit:number, offset: number): Promise <Types[]>;
    findOne(id: number): Promise<Types>
}

export class data implements comands{
    
    async create(data: Types): Promise<Types> {
        const result = await DB.insert(carts)
        .values({
          customerId: 121,
        }).returning({cart_id: carts.id})
        console.log(result)
        return Promise.resolve(data)
    }
    async update(data: Types): Promise<Types> {
        
        return Promise.resolve(data as unknown as Types)
    }
    async delete(id: any): Promise<any> {
        return Promise.resolve()
    }
    async find(limit: number, offset: number): Promise<Types[]> {
        return Promise.resolve(
            []
        )
    }
    findOne(id: number): Promise<Types> {
        return Promise.resolve(data as unknown as Types)
    }
    
}