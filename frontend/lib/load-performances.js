export async function loadPerformances() {
  // const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/performances?populate=*`)
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/performances?populate[artist_name][populate][0]=photo&populate[image][populate][0]=url`)
  const data = await response.json()

  return data;
}