export async function loadPerformances() {
  const response = await fetch(`https://speakout-backend.onrender.com/api/performances?populate=*`)
  const data = await response.json()

  return data;
}