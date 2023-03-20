export async function loadFeaturedSpeakers() {
  // Fetch data from external API
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/speakers?fields[0]=fullName&fields[1]=tagLine&fields[2]=slug&fields[3]=featured&populate[0]=photo&sort[0]=fullName&filters[featured][$eq]=true`)
  const speakers = await response.json()

  const featuredSpeakers = await speakers.data.sort(() => Math.random() - 0.5);

  // Pass data to the page via props
  return featuredSpeakers.slice(0, 4);
}