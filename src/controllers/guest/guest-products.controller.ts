// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { get } from "@loopback/rest";
import { Products } from "../../models";
import { ProductsRepository } from "../../repositories";

// import {inject} from '@loopback/core';


export class GuestProductsController {
  constructor(
    @repository(ProductsRepository) private productRepo: ProductsRepository
  ) {}

  @get('/products')
  async getProducts(): Promise<Products[]>{
    return await this.productRepo.find()
  }
}
