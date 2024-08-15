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
    delete(id: any): void {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        
    }
    findOne(id: Number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    
}