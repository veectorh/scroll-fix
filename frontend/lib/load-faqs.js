export async function loadFAQs() {
  // Fetch data from external API
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/faqs`)
  const data = await response.json()

  // Pass data to the page via props
  return data;
}