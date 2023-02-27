export async function loadPerformances() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/performances?populate=*`)
  const data = await response.json()

  return data;
}