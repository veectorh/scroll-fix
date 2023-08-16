export async function loadDirectors() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/board-members?populate=*&sort=lastName`)
  const data = await response.json()

  return data;
}