export async function loadSummerInstitutes() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/summer-institutes?populate[sessions][populate][0]=speaker&populate[speakers][populate][1]=photo`)
  const data = await response.json()

  return data;
}