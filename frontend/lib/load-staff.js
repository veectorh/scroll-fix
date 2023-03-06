export async function loadStaff() {
  const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/staff-members?populate=*`)
  const data = await response.json()

  return data;
}