const products = [
  {
    _id: 1,
    name: "Airpods Wireless Bluetooth Headphones",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/042456/1.jpg?2575",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 2,
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/781166/1.jpg?7012",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 3,
    name: "Cannon EOS 80D DSLR Camera",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/762026/1.jpg?7716",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 4,
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/973734/1.jpg?4289",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 5,
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/388841/1.jpg?8433",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 6,
    name: "Amazon Echo Dot 3rd Generation",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/875405/1.jpg?8033",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];

const TopSellingProducts = [
  {
    _id: 7,
    name: "Airpods Wireless Bluetooth Headphones",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/042456/1.jpg?2575",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    newPrice: 1000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 8,
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/781166/1.jpg?7012",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 9,
    name: "Cannon EOS 80D DSLR Camera",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/762026/1.jpg?7716",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 10,
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/973734/1.jpg?4289",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    newPrice: 199.89,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 11,
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/388841/1.jpg?8433",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 12,
    name: "Amazon Echo Dot 3rd Generation",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/875405/1.jpg?8033",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];
const DealsOfTheDay = [
  {
    _id: 13,
    name: "Airpods Wireless Bluetooth Headphones",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/002423/1.jpg?8562",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 800,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 14,
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/242456/1.jpg?3299",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 15,
    name: "Cannon EOS 80D DSLR Camera",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/815962/1.jpg?1606",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 16,
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/864824/1.jpg?6508",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 17,
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/781166/1.jpg?7012",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 18,
    name: "Amazon Echo Dot 3rd Generation",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/875405/1.jpg?8033",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];
const scent = [
  {
    _id: 19,
    name: "Airpods Wireless Bluetooth Headphones",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/538576/1.jpg?1375",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 800,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 20,
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/439386/1.jpg?5243",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 21,
    name: "Cannon EOS 80D DSLR Camera",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/017534/1.jpg?8357",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 22,
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/636985/1.jpg?8520",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 23,
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/482054/1.jpg?0171",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: 24,
    name: "Amazon Echo Dot 3rd Generation",
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/041295/1.jpg?4425",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];

export { products, TopSellingProducts, DealsOfTheDay, scent };
