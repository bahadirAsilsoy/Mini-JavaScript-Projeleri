const jokeEl = document.getElementById('joke')
const jokeButton = document.getElementById('jokeButton')

jokeButton.addEventListener('click', generateJoke)

generateJoke()

// async
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

