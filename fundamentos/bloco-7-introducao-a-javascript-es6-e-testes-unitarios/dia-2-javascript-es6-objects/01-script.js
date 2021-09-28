const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const deliveryP = order.order.delivery.deliveryPerson;
  const orderP = order.name;
  const telephone = order.phoneNumber;
  const streetName = order.address.street;
  const streetNo = order.address.number;
  const apNumber = order.address.apartment;
  return `Olá ${deliveryP}, entrega para: ${orderP}, Telefone: ${telephone}, ${streetName}, N°: ${streetNo}, AP: ${apNumber}.`;
}

customerInfo(order);

const orderModifier = (order) => {
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const orderP = order.name = 'Luiz Silva';
  const price = order.payment.total = 50;
  const pizzas = Object.keys(order.order['pizza']);
  const drink = order.order.drinks.coke.type;
  
  return `Olá ${orderP}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${price},00.`;
}

console.log(orderModifier(order));


// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.