export async function loadTopics() {
  const response = await fetch(`https://speakout-backend.onrender.com/api/topics`)
  const data = await response.json()

  return data;
}