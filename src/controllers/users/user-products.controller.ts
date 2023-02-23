import { Filter, repository } from "@loopback/repository";
import { get, getModelSchemaRef, param, response } from "@loopback/rest";
import { Product } from "../../models";
import { ProductRepository, TransactionProductsRepository } from "../../repositories";


export class UserProductsController {
  constructor(
    @repository(ProductRepository)
    public productRepository : ProductRepository,
    @repository(TransactionProductsRepository)
    public transactionProductsRepository : TransactionProductsRepository,
  ) {}

  @get('/users/products')
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

  @get('/users/products/random')
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
  async findRandom(
    @param.filter(Product) filter?: Filter<Product>
  ): Promise<Product> {
    return this.transactionProductsRepository.playWithTransaction();
  }


  
}
