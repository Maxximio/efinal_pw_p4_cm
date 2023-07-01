<template>

<div class="container">


    <div v-if="juegoActivo" class="marcador">
        <p>Puntaje: {{puntaje}}</p>
        <p>Intento: {{intentos}}</p>
    </div>


<div v-if="juegoActivo" class="imagen">
    <img :src="img1" alt="">
    <img :src="img2" alt="">
    <img :src="img3" alt="">
</div>

<div v-if="juegoActivo" class="nombres">
    <p>{{txt1}}</p>
    <p>{{txt2}}</p>
    <p>{{txt3}}</p>
</div>

<div>
    <button v-if="juegoActivo" v-on:click="jugar">Jugar</button>
</div>

<div v-if="perdedor" class="perdedor">
    <p >Has utilizado tus 5 intentos </p>
    <p>El juego ha termindo, intentalo nuevamente</p>
</div>

<div v-if="ganador" class="ganador">
    <p >Puntaje: {{puntaje}}</p>
    <p>Felicitaciones has ganado un premio de $10.000,00</p>
</div>

<div v-if="!juegoActivo" class="boton">
    <button v-on:click="reiniciar">Nuevo Juego</button>
</div>

</div>
</template>


<script>

import obtenerObjeto from "../helpers/ClienteApi";

export default{

    props:{
        puntaje:0,
    },

    data(){
        return{
            img1:null,
            img2:null,
            img3:null,

            txt1:'XXXXXXXXXX',
            txt2:'XXXXXXXXXX',
            txt3:'XXXXXXXXXX',
            
            intentos:0,
            puntaje:0,
            juegoActivo: true,
            perdedor:false,
            ganador:false 

        }
        
    },
    mounted(){
        this.img1='https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg'
        this.img2='https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg'
        this.img3='https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg'
    
    },
    methods:{
        async jugar(){

            this.intentos=this.intentos+1

            const i1=await obtenerObjeto()
            const i2=await obtenerObjeto()
            const i3=await obtenerObjeto()

            this.txt1=i1.nombre
            this.txt2=i2.nombre
            this.txt3=i3.nombre

            this.img1=i1.link
            this.img2=i2.link
            this.img3=i3.link

            if(i1.id==i2.id && i2.id==i3.id){
                this.puntaje=this.puntaje+5


            }else if(i1.id==i2.id || i2.id==i3.id || i1.id==i3.id){
                this.puntaje=this.puntaje+2
            }

            if(this.intentos>5){
                this.juegoActivo=false
                this.comprobar()
            }

        },

        comprobar(){
            if(this.puntaje>=10){
                this.ganador=true
            }
            else{
                this.perdedor=true
            }
        },

        reiniciar(){
            this.ganador=false,
            this.perdedor=false,
            this.puntaje=0,
            this.intentos=0,
            this.juegoActivo=true,
            this.txt1='XXXXXXXXXX',
            this.txt2='XXXXXXXXXX',
            this.txt3='XXXXXXXXXX',
            this.img1='https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg'
            this.img2='https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg'
            this.img3='https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg'
        
        },
            

        }
    }

</script>

<style>

.container{
    border-style: groove;
}


.imagen img{
    height: 100px;
    width: 100px;
    margin-left: 30px;
    margin-right: 30px;
}

.marcador p{
    display: inline;
    margin-left: 30px;
    margin-right: 30px;
}

.nombres p{
    display: inline;
    margin-left: 30px;
    margin-right: 30px;
}

.ganador p{
    color: blue;
}
.perdedor{
    color:red
}


</style>