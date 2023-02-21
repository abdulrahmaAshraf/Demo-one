import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Products,
  User,
} from '../models';
import {ProductsRepository} from '../repositories';

export class ProductsUserController {
  constructor(
    @repository(ProductsRepository)
    public productsRepository: ProductsRepository,
  ) { }

  @get('/products/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Products',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Products.prototype.id,
  ): Promise<User> {
    return this.productsRepository.user(id);
  }
}
