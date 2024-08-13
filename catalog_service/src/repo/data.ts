import { comands } from "../interface/comandingTheRepo";
import { Product } from "../models/product";

export class data implements comands{
    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): void {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: Number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    
}