const products = [
  {
    id: 1,
    name: "Продукт 1",
    price: 199,
    image: "https://pulsefit.bg/uploads/tinymce/58069.jpg",
    description: "Описание на <i>продукт</i> 1",
    type: "cardio",
  },
  {
    id: 2,
    name: "Продукт 2",
    price: 299,
    image:
      "https://jkfitness.bg/image/cache/catalog/TOORX/Kombiniran-fitnes-ured-MSX-50-TOORX-jkfitness.bg%20(6)-900x900.jpg",
    description: "Описание на продукт 2",
    type: "strength",
  },
  {
    id: 3,
    name: "Продукт 3",
    price: 399,
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/lmxovp8ho052-BG/image",
    description: "Описание на продукт 3",
    type: "accessories",
  },
  {
    id: 4,
    name: "Продукт 4",
    price: 499,
    image:
      "https://cdn.technomarket.bg/ng/media/cache/mid_thumb/uploads/marketplace/43/650711-1.jpg.webp",
    description: "Описание на продукт 4",
    type: "cardio",
  },
  {
    id: 5,
    name: "Продукт 5",
    price: 599,
    image:
      "https://cdncloudcart.com/32450/products/images/18955/veloergometar-k-fit-mount-image_6406909b70057_600x600.jpeg?1678151842",
    description: "Описание на продукт 5",
    type: "strength",
  },
  {
    id: 6,
    name: "Продукт 6",
    price: 699,
    image:
      "https://nadaspa.eu/cdn/shop/products/1_5f3c21c4-1727-43b9-9a6e-efe3ea7d78d6_720x1000.jpg?v=1606237369",
    description: "Описание на продукт 6",
    type: "accessories",
  },
  {
    id: 7,
    name: "Продукт 7",
    price: 799,
    image: "https://sporti.bg/g/30/komplekt-dambeli-20-kg.webp",
    description: "Описание на продукт 7",
    type: "strength",
  },
  {
    id: 8,
    name: "Продукт 8",
    price: 899,
    image:
      "https://homeco.bg/media/catalog/product/cache/520332c47eb5e742430b01c96310ed79/F/A/FA1002-0.jpg",
    description: "Описание на продукт 8",
    type: "accessories",
  },
  {
    id: 9,
    name: "Продукт 9",
    price: 999,
    image:
      "https://homeco.bg/media/catalog/product/cache/520332c47eb5e742430b01c96310ed79/F/A/FA1002-0.jpg",
    description: "Описание на продукт 9",
    type: "accessories",
  },
  {
    id: 10,
    name: "Продукт 10",
    price: 1099,
    image: "https://via.placeholder.com/280",
    description: "Описание на продукт 10",
    type: "cardio",
  },
  {
    id: 11,
    name: "Продукт 11",
    price: 1199,
    image: "https://via.placeholder.com/280",
    description: "Описание на продукт 11",
    type: "strength",
  },
  {
    id: 12,
    name: "Продукт 12",
    price: 1299,
    image: "https://via.placeholder.com/280",
    description: "Описание на продукт 12",
    type: "accessories",
  },
];

const promotions = [
  {
    id: 1,
    name: "Фитнес уред",
    discount: 20,
    oldPrice: 200,
    newPrice: 160,
    image:
      "https://beautyandpower.eu/6852-large_default/postelka-za-fitnes-i-joga.jpg",
    description:
      "Удобна постелка за фитнес и йога, подходяща за ежедневна употреба.",
  },
  {
    id: 2,
    name: "Спортни обувки",
    discount: 15,
    oldPrice: 120,
    newPrice: 102,
    image: "path-to-your-image/product2.jpg",
    description:
      "Висококачествени спортни обувки, идеални за тренировки и спорт.",
  },
  {
    id: 3,
    name: "Тренировъчен комплект",
    discount: 17,
    oldPrice: 300,
    newPrice: 250,
    image: "path-to-your-image/product3.jpg",
    description:
      "Комплект за тренировки, включващ необходимото за пълноценна тренировка.",
  },
];

const filters = [
  {
    id: 1,
    predicate: (product) => product.price < 100,
    name: "Под 100 лв.",
    type: "price",
    orderNumber: 1,
  },
  {
    id: 2,
    predicate: (product) => product.price >= 100 && product.price < 500,
    name: "100 - 500 лв.",
    type: "price",
    orderNumber: 2,
  },
  {
    id: 3,
    predicate: (product) => product.price >= 500,
    name: "Над 500 лв.",
    type: "price",
    orderNumber: 3,
  },
  {
    id: 4,
    predicate: (product) => product.type === "accessories",
    name: "Аксесоари",
    type: "type",
    orderNumber: 1,
  },
  {
    id: 5,
    predicate: (product) => product.type === "strength",
    name: "Сила",
    type: "type",
    orderNumber: 2,
  },
  {
    id: 6,
    predicate: (product) => product.type === "cardio",
    name: "Кардио",
    type: "type",
    orderNumber: 3,
  },
];
