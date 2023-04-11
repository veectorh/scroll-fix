export async function loadSpeakers() {
  // Fetch data from external API
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/speakers?fields[0]=fullName&fields[1]=tagLine&fields[2]=slug&populate[0]=photo&populate[1]=topics&sort[0]=lastName`)
  const data = await response.json()

  // Pass data to the page via props
  return data;
}