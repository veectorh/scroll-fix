export async function loadSingleSpeakers(id) {
    // Fetch data from external API
    const response = await fetch(`https://speakout-backend-g62z.onrender.com/api/speakers?filters[slug][$eq]=${id}&populate[0]=products.image&populate[1]=photo&populate[2]=quotes&populate[3]=topics&populate[4]=related_links&populate[5]=related_speakers.photo&populate[6]=publicity_packet&populate[7]=videos`)
    const data = await response.json()

    // Pass data to the page via props
    return data;
}