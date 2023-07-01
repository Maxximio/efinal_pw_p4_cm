function getNumneroAleatorio(min , max){
    const numAlea=Math.floor(Math.random() * (max - min + 1) + min)
    return numAlea
}

const consumirApi=async(id)=>{
    const img=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json())
    const {name}=data
    const tupla={
        link:img,
        id:id,
        nombre: data.name
    }
    
    return tupla
}

const obtenerPokemon=async()=>{
    const image=await obtenerNombre(getNumneroAleatorio(1,5))
    return image
}

const obtenerNombre=async(id)=>{
    const image=await consumirApi(id)

    return image
}

const obtenerFachadaPokemonImg=async()=>{
    console.log('paso por la fachada');
    return  await obtenerPokemon()
}

export default obtenerFachadaPokemonImg