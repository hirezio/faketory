# Faketory
Simple utility class for managing fake factories

## Example

```ts

// product.faketory.ts

import { Product } from './product.type'
import { faker } from '@faker-js/faker';
import { Faketory } from './faketory.class';

export class ProductFaketory extends Faketory<Product>{
  constructor() {
    super(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.product()
    }));
  }
}

export const productFaketory = new ProductFaketory();

productFaketory.fakeOne();

productFaketory.fakeMany(3);

// Override props or items

productFaketory.fakeOne({id: 'customId'});

productFaketory.fakeMany(2, [
  {id: 'customId_1'},
  {id: 'customId_2'}
]);

```