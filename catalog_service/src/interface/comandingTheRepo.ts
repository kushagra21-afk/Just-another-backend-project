import {Product} from "../models/product"
export interface comands{
    create(data: Product): Promise <Product>;
    update(data: Product): Promise <Product>;
    delete(id: any): Promise<any>;
    find(limit:number, offset: number): Promise <Product[]>;
    findOne(id: number): Promise<Product>
}