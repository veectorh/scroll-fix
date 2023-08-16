export async function loadQuotes() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/quotes`)
  const data = await response.json()

  return data;
}