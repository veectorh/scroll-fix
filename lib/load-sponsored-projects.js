export async function loadSponsoredProjects() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/sponsored-projects?populate=*`)
  const data = await response.json()

  return data;
}