export default async function postData(data) {
    const response = fetch("https://example.com", {
        method: 'POST',
        body:
            dados = {
                "name": data[0],
                "email": data[1],
                "whatsapp": data[2],
                "state": data[3],
                "city": data[4],
                "has_avc": data[5], // true | false
                "has_another_condition": data[6],
                "investment_amount": data[7]
            }
    });
    console.log(response)
    const result = await response.json();
}