export async function loadSpeakers() {
  // Fetch data from external API
  const response = await fetch(`https://speakout-backend-g62z.onrender.comapi/speakers?populate=*`)
  const data = await response.json()

  // Pass data to the page via props
  return data;
}