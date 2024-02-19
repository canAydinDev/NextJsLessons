

export async function getCategoriesFromProducts() {
  
  const resp = await fetch(`${config.apiURL}/products`);
  const products = await resp.json();

  
  const categories = [];

  
  products.forEach(product => {
      const category = product.category;
      if (!categories.includes(category)) {
          categories.push(category);
      }
  });

  return categories;
}