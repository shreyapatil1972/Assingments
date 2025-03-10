function fetchRealTimeData(url, options) {
    setInterval(async () => {
        try {
            const response = await fetch(url, options)
            const data = await response.json();
            console.log(data)

        }
        catch (error) {
            console.error("Error Fetching Data:", error);
        }
    }, 5000)
}
const url = 'https://social-api4.p.rapidapi.com/v1/audio_info?audio_canonical_id=18404792044021762';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f5334cd8a5mshc9d7b080084905bp1c5ddejsn2eb1be768678',
        'x-rapidapi-host': 'social-api4.p.rapidapi.com'
    }
};
fetchRealTimeData(url, options)