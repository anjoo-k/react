export const CallGpt = async ({prompt}) => {
    //fetch(url, json)

    //fetch는 Promise 객체를 반환한다.
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages" : [{
                "role" : "user",
                "content" : prompt,
            }],
            "temperature" : 0.7,
            "max_tokens" : 1_000,
        })
    });

    const responseDate = await response.json();
    
    const message = responseDate.choices[0].message.content;
    return message;
}
