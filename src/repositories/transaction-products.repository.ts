import {inject} from '@loopback/core';
import {DefaultTransactionalRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

export class TransactionProductsRepository extends DefaultTransactionalRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Product, dataSource);
  }

  async playWithTransaction(): Promise<Product>{
    const trx = await this.beginTransaction({setTimeout: 300});
    try {
      const [produt1, product2] = await Promise.all([
        this.findById(1, {}, {transaction: trx}),
        this.findById(2,  {}, {transaction: trx})
      ]);

      // choose one product randomly.
      const choosedProduct = [produt1, product2][Math.ceil(Math.random() * 1)];
      
      const insertedProduct = await this.create({
        price: choosedProduct.price,
        description: choosedProduct.description,
        details: choosedProduct.details,
        name: choosedProduct.name + ' copy',
        image: choosedProduct.image
      }, {transaction: trx})

      // throw new Error('just assuming an error happen while transaction is running.')
      await trx.commit();

      return insertedProduct;
    } catch (error) {
      await trx.rollback()
      console.log('transaction rolled back.', trx.isActive())
      throw error;
    }
  }
}
