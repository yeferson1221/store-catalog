import { faker } from '@faker-js/faker';

var database = { products: [] };

for (let ii=0; ii < 300; ii++) {
  database.products.push({
    id: ii,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    imageUrl: 'https://picsum.photos/400?random=' + ii,
    quantity: faker.random.numeric()
  });
}

console.log(JSON.stringify(database));
