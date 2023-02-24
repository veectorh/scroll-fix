export async function loadTopics() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.comapi/topics`)
  const data = await response.json()

  return data;
}