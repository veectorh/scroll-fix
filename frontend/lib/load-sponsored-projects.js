export async function loadSponsoredProjects() {
  const response = await fetch(`https://speakout-backend.onrender.com/api/sponsored-projects?populate=*`)
  const data = await response.json()

  return data;
}