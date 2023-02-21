import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Products,
} from '../../models';
import {UserRepository} from '../../repositories';

export class UserProductsController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/products', {
    responses: {
      '200': {
        description: 'Array of User has many Products',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Products)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Products>,
  ): Promise<Products[]> {
    return this.userRepository.products(id).find(filter);
  }

  @post('/users/{id}/products', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Products)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Products, {
            title: 'NewProductsInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) products: Omit<Products, 'id'>,
  ): Promise<Products> {
    return this.userRepository.products(id).create(products);
  }

  @patch('/users/{id}/products', {
    responses: {
      '200': {
        description: 'User.Products PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Products, {partial: true}),
        },
      },
    })
    products: Partial<Products>,
    @param.query.object('where', getWhereSchemaFor(Products)) where?: Where<Products>,
  ): Promise<Count> {
    return this.userRepository.products(id).patch(products, where);
  }

  @del('/users/{id}/products', {
    responses: {
      '200': {
        description: 'User.Products DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Products)) where?: Where<Products>,
  ): Promise<Count> {
    return this.userRepository.products(id).delete(where);
  }
}
