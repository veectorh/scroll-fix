export async function loadSponsoredProjects() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.comapi/sponsored-projects?populate=*`)
  const data = await response.json()

  return data;
}