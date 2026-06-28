import productsData from '../data/products.json';

export function getAllProducts() {
  return productsData;
}

export function getProductBySlug(slug) {
  return productsData.find((product) => product.slug === slug);
}

export function getAllProductSlugs() {
  return productsData.map((product) => ({
    params: { slug: product.slug },
  }));
}