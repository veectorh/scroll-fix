export async function loadProducts() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/products?populate=*`)
  const data = await response.json()

  return data;
}