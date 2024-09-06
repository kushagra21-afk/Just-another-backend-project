
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
        const cart_data = {
            id: 112,
            ...data,
        } as Types
        return Promise.resolve(cart_data)
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