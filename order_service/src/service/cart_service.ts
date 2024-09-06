import { comands} from "../repo/cart_data";
export class CatalogService {
    private _repository: comands;
  
    constructor(repository: comands) {
      this._repository = repository;
    }
    
    async createCart(input: any) {
      const data = await this._repository.create(input);
      if (!data.id) {
        throw new Error("not able to create cart");
      }
      return data;
    }
  
    async updateCart(input: any) {
      const data = await this._repository.update(input);
      if (!data.id) {
        throw new Error("unable to update cart");
      }
      return data;
    }
    async getCarts(limit: number, offset: number) {
      const Carts = await this._repository.find(limit, offset);
  
      return Carts;
    }
  
    async getCart(id: number) {
      const cart = await this._repository.findOne(id);
      return cart;
    }
  
    async deleteCart(id: number) {
      const response = await this._repository.delete(id);
      return response;
    }
  }