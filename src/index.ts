let $body
let $div

if (typeof window !== 'undefined') {
    $body = document.querySelector<HTMLBodyElement>("body")
    $div = document.querySelector<HTMLDivElement>("div")
} else {
    console.log('You are on the server')
}

if ($div && $body) {
    console.log("true")
    $div.textContent = "Hello"
    $body.append($div)

}

export function hello() {
    return "Hello"
}

type PokemonData = {
    name: string;
    imageUrl: string;
}

type PokemonResponse = {
    data?: {
        pokemon: PokemonData
    }
    errors?: { message: string }[]
}


if (typeof window !== 'undefined') {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto"
    fetch(url)
        .then((response) => response.json())
        .then((response: PokemonResponse) => {
            console.log(response.data?.pokemon.name || "") // Safe
        }).catch((error) => {
            const message = (error instanceof Error)
                ? error.message
                : "Unknown error"
            console.error(message)
        })
} else {
    console.log('You are on the server')
}

module.exports = hello
