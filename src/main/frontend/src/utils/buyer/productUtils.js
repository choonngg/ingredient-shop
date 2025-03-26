export const generateSampleProducts = (count) => {
    const products = [];
    for (let i = 1; i <= count; i++) {
      products.push({
        id: i,
        name: `상품 ${i}`,
        price: Math.floor(Math.random() * 50 + 10) * 1000,
        imageUrl: '/no-image.png',
      });
    }
    return products;
  };

// export const generateSampleProducts = (count, startIndex = 0) => {
//   const products = [];
//   for (let i = 1; i <= count; i++) {
//     const productId = startIndex + i;
//     products.push({
//       id: productId,
//       name: `상품 ${productId}`,
//       price: Math.floor(Math.random() * 50 + 10) * 1000,
//       imageUrl: '/no-image.png',
//     });
//   }
//   return products;
// };