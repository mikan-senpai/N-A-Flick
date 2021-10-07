fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].fallback;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })




// const api_url = "https://icanhazdadjoke.com/slack"

// async function getjokes(){
//     const response = await fetch(api_url);
//     const text = await response.json();
//     console.log(text);



    
// }

// getjokes();



