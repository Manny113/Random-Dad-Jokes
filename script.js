const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click', generateJoke)

gererateJoke()

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json', 
        },
    }


const response = await fetch('https://icanhazdadjoke.com', config)



const data = await response.json()

jokeEl.innerHTML = data.joke

}