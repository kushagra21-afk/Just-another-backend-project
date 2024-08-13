import {Product} from "../models/product"
export interface comands{
    create(data: Product): Promise <Product>;
    update(data: Product): Promise <Product>;
    delete(id: any): void;
    find(): Promise <Product[]>;
    findOne(id: Number): Promise<Product>
}