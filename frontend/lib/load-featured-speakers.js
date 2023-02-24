export async function loadFeaturedSpeakers() {
  // Fetch data from external API
  const response = await fetch(`https://speakout-backend-g62z.onrender.comapi/speakers?populate=*`)
  const speakers = await response.json()
 
  // Filter to only return Speakers that have featured === true
  const featuredSpeakers = speakers.data.filter(speaker => speaker.attributes.featured === true);

  // Pass data to the page via props
  return featuredSpeakers;
}