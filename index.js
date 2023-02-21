function loadPage() {
    console.log("The Page has loaded, run the program")
}

console.log(loadPage)

loadPage()

function renderPokemon(character) {
    console.log(`Rendering ${character}`)
}

renderPokemon("Mewtoo")

function compareFunctions(firstFunction, secondFunction) {
    const first = firstFunction()
    const second = secondFunction()

    if (first > second) {
        return "First Function is Higher!"
    } else if (second > first) {
        return "Second Function is Higher!"
    } else {
        return "Draw!"
    }
}

console.log(compareFunctions(() => 1, () =>10))
console.log(compareFunctions(() => 10, () => 1))
console.log(compareFunctions(() => 10, () => 10))