export async function loadDirectors() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/board-members?populate=*`)
  const data = await response.json()

  return data;
}