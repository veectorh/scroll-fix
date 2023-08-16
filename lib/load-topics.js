export async function loadTopics() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/topics?sort[0]=name`)
  const data = await response.json()

  return data;
}