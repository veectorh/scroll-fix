export async function loadSingleSpeakers(id) {
    // Fetch data from external API
    const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/speakers?filters[slug][$eq]=${id}&populate=*`)
    const data = await response.json()

    // Pass data to the page via props
    return data;
}