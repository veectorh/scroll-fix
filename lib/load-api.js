export async function loadAPI(url) {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/${url}?populate[artist_name][populate][0]=photo&populate[image][populate][0]=url`)
  const data = await response.json()

  return data;
}
