export async function loadFeaturedProducts() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/products?populate=*&filters[featured][$eq]=true`)
  const products = await response.json()

  const data = await products.data.sort(() => Math.random() - 0.5);

  // Pass data to the page via props
  return data.slice(0, 4);
}