const form = document.getElementById("sendForm")

function clearInput () {
	document.getElementById("sendForm").reset()
}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	let checkbox = document.getElementById("checkbox")
	let email = document.getElementById("email")

	if (checkbox.checked === false || email.value === '') {
		alert("Parece que nos faltó algo...")
	} else {
		alert("!Felicitaciones! Pronto escucharás de nosotros")
		clearInput()
	}
	document.getElementById("checkbox").checked = false
})

// let pokemon = {
// 	name: '',
// 	height: '',
// 	weight: '',
// 	types: []
// }

// const getData = async (pokemonName) => {
// 	try {

// 		const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
// 		const data = await resp.json()
// 		// console.log(data)
// 		let { name, height, weigth, types } = data
// 		pokemon.name = name && name.toUpperCase()
// 		pokemon.height = height
// 		// misspelling ok: weight => bad: weigth
// 		pokemon.weight = weigth ?? '2kg'
// 		// only have one type: normal
// 		pokemon.types = [types[0]?.type.name, types[1]?.type.name]
// 		console.log(pokemon)
// 	} catch (err) {
// 		console.log("ese pokemon no existe!")
// 		console.log(err)
// 	}
// }

// getData('ditto')