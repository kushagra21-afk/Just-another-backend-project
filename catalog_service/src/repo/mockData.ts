import { comands } from "../interface/comandingTheRepo";
import { Product } from "../models/product";

export class mockData implements comands{
    create(data: Product): Promise<Product> {
        const product= {
            id:123,
            ...data
        } as Product
        return Promise.resolve(product)
    }
    update(data: Product): Promise<Product> {
       return Promise.resolve(data as unknown as Product)
    }
    delete(id: any): Promise<any> {
        return Promise.resolve(id)
    }
    find(limit:Number, offset:Number): Promise<Product[]> {
        return Promise.resolve([]);
    }
    findOne(id: Number): Promise<Product> {
        return Promise.resolve({id} as unknown as Product)
    }
    
}