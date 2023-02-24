export async function loadPerformances() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.comapi/performances?populate=*`)
  const data = await response.json()

  return data;
}