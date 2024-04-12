import faker from 'faker';

const mount = (el) => {
  let productsData = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    productsData += `<div>${name}</div>`;
  }

  console.log(productsData)
  el.innerHTML = productsData;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
