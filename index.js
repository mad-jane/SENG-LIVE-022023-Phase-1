const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

const test2 = document.querySelector('div')
// const test = document.querySelectorAll('div')

// console.log(test)
// console.log(test2)

// const welcomeP = document.createElement('p')

// welcomeP.innerHTML = "<span class ='hello'> hello world </span>"

// test2.appendChild(welcomeP)

// test2.remove()

const pokeForm = document.getElementById('poke-form')
console.log(pokeForm)

const pokeContainer = document.querySelector('#poke-container')
console.log(pokeContainer)

const labels = document.getElementsByClassName('form-label')
console.log(labels)

const allDivs = document.querySelectorAll('div')
console.log(allDivs)

const goals = document.getElementById('lecture-goals')
goals.remove()

const renderPokemon = () => {
    // const pokeDiv = document.getElementById('poke-container')
    const pokeDiv = document.querySelector('#poke-container')
    pokemons.forEach((poke) => {
        const pokeP = document.createElement('p')
        pokeP.setAttribute('align', 'center')
        pokeP.innerHTML = `<img src=${poke.img} width="550" height="400">`
        // const pokeHTML = `<p align ="center"> <img src=${poke.img} width="550" height="400"> </p>`
        // debugger
        pokeDiv.appendChild(pokeP)
    })
}

renderPokemon()

// const text= '<p>hello again</p>'

// test2.appendChild(text)