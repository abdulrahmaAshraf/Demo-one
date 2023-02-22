import {  Filter, repository } from "@loopback/repository";
import { get, getModelSchemaRef, param, response } from "@loopback/rest";
import { Product } from "../../models";
import { ProductRepository } from "../../repositories";



export class GuestProductsController {
  constructor(
    @repository(ProductRepository)
    public productRepository : ProductRepository,
  ) {}

  @get('/guests/products')
  @response(200, {   
    description: 'Array of Product model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Product, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Product) filter?: Filter<Product>
  ): Promise<Product[]> {
    return this.productRepository.find(filter);
  }
}
