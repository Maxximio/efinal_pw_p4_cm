<template>

<h1>Juego Casino</h1>
<Juego></Juego>

<div v-if="perdedor" class="perdedor">
    <p >Has utilizado tus 5 intentos </p>
    <p>El juego ha termindo, intentalo nuevamente</p>
</div>

<div v-if="ganador" class="ganador">
    <p >Puntaje: {{puntaje}}</p>
    <p>Felicitaciones has ganado un premio de $10.000,00</p>
</div>

<div v-if="mostrarBoton" class="boton">
    <button>Nuevo Juego</button>
</div>

</template>

<script>
import Juego from "../components/Juego.vue"

export default {
    components: {
    Juego
  },
  data(){
    return{
        puntaje:0,
        ganador: false,
        perdedor: false,
        mostrarBoton: false
    }
  }
}

</script>

<style>

</style>
