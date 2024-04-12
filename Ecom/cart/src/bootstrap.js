import faker from 'faker'

const mount = (el) => {
  const cartText = `<div>You have ${faker.datatype.number()}</div>`

  console.log(cartText)
  el.innerHTML=cartText
}

if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-carts');
  if (el) {
    mount(el);
  }
}

export {mount}



