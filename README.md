# Configuraciones

## Project setup


## Create project

``` 
npm create name
```


Va a reconstruir los modulos desde cero, en caso de que esten corruptos los datos, eliminados, **ABRIR EN OTRA TERMINAL**
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Unidad 2

## Taller 13

- preincipales frameworks de javaScript

- react.js: lleva la delantera por ser un framework más antiguo.
- vue.js: framework progresivo, tiene el potencial de convertirse en el framework más utilizado en 3 años aprox.
- angular: es uno de los frameworks de JS más potentes y la mejor opción cuando se pretende originar sitios web de una sola página con elementos interactivos.


- ventajas de utilizar vue.js
- fácil de iniciar
- versátil: los frameworks versatiles se refieren a que se logran adaptar a más frameworks para que se complementen las funcionalidades de la página web que creamos, vue es altamente escalable.
- rendimiento: dentro del dom actua múy rápido.

- su eficacia es percecptible cuando la página está tratada bajo un sistema copmplejo, por otro lado en una página sencilla se es implementado no se nota su eficiencia (rendimiento).

- puede ir migrando, construyendo por partes los componentes de una página.


``` html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

- vue funciona con options API (estructura de la página web)
- una de esas opciones es el template

- se debe declarar desde el body y no en forma de metadatos.

Si yo quiero ejecutar JS debo ejecutarlo con `{{}}`

La buena practica es incrustar el codigo HTML en dentro de las paginas, en vez de los componentes de Vue

DATA API SON PROPIEDADES QUE ME PERMITEN CREAR PROPIEDADES REACTIVAS, me permiten vincular info de la vista, con mi programacion js

MVC Model View Controller, vista va a enviar peticiones a un componente llamado controlador que controla requests, todo lo mandado es el modelo, 

![MVC](/img/mvc.PNG)



Palabras reservadas del Options API de Vue.js

- `data()`
- `methods:{}`

Directivas
- v-on: para gestionar eventos(si voy a utilizar la palabra reservada dentro de js, tengo que usar la palabra reservada `this` )

reactiva porque detecta que hubo un cambio en la propiedad reactiva, y vue envia info al navegador

### SPA (Single Page Application)
voy a manejar una unica pagina, xq ya se trajeron
- la primera iteracion es mas lenta, xq trata de cargar todo al inicio, para facilitar futuros request

Demora menos en la carga tradicional vs Demora mas en la carga spa

Demora un poco en cada carga vs Demora menos en despues de la carga inicial

La experiencia de usuario mejora en la navegacion SPA, inclusive la carga inicial es practicamente imperceptible.

- cuando ejecutamos un evento, involucra codigo js

## v-for

- for: es una sentencia que permite iterar sobre una lista.

- transladado dentro del framework, nos permite también construir dinámicamente elementos, como 6 botónes rápidamente o una imagen.

v-model: directiva para formularios vincular info de ida o de retorno en `input `

this.miarreglo.unshift(nuevoEstudiante);//principio
        this.miarreglo.push(nuevoEstudiante);//final

'v-on:keypress.enter='
modificadores de evento

`v-if` construye o no un elemento HTML, dependiendo de un boolean, crea un comentario, actua a nivel de dom, por lo que es recomnendable usarlo de manera puntual
`v-show` oculta el elemento de estilo, con un `display:none`, es mas útil usarlo cuando se trata de quitar y poner un elemento de manera repetitiva (uso principalmente en juegos).

**visualmente** se comportan igual

en un ejemplo e una página que incorpore v-if, es más útil usarlo si se trata de cargar una página con varios elementos en donde queremos que dicha página sea más ligera ya que los elementos se mostrarán a medida en la que el usuario requiera visualizarlos.

-node.js es un runtime de js, cualquier framework se puede ejecutar sobre node.js

- es necesario instalar Vue CLI (command line interface)

-al momento de instalar el vue en un nuevo proyecto:

Babel: gestionar las dependencias de Vue

TypeScript: JavaScript con funciones más avanzadas (version mejorada de javaScript por Microsoft)

Progresive Web App (PWA) Support: incorpora partes pequeñas en un proyecto con diferentes lenguajes.

Router: dependencia quye permite gestionar rutas y redireccionamientos de una página web.

VueX: Permite agregar ciertas funcionalidades a vue.

CSS-Pre-Processors: añade preprocesamiento de css

Linter/Formater: da formato al código.

Unit Testing: contruir una aplicación con test unitarios

E2E Testing: sirve para hacer pruebas unitarias de la misma manera.

Dos librerias para test unitarios: Jest, Mocha + Chai





- `node_modules` :modulos del proyecto y librerias que se descargo para trabajar con vue, aqui esta todo el core de vue

`public` : recursos de caracter publico
`src`: es la carpeta destinada para realizar la programacion
    `assets`: contenido multimedia (imagenes, videos), pero podemos utilizar en una carpeta `img` tambien

`components`: Vue trabaja con componentes (los componentes son piezas que se organizan para consrtuir la pagina web. Estos componentes son **reutilizables** dentro de diferentes páginas web)

- La pagina principal también es un componente, tiene (.vue), El App.vue es la página principal.

- el main.js: es la parte en la que se configura el proyecto.

- tests: es para configurar y programar los test unitarios.

- browserlistsdads: informativo.
- gitignore: configurar que es lo que no quiero que se suba al repositorio de git (generalmente los __node_modules__).
 
- README.md: cualquier tipo de datos y documentacion relevante para el proyecto.

- la base de cada componente debe ser: html, css y js, y para esto los componentes tienen secciones

- la sección que me permite programar con javaScript es **script**, y los estilos es **style** y para html es **template**


- cada componente maneja una sesion independiente

## Propiedades Computadas

- son identificadores si un metodo tiene el mismo resultado, optimiza y reutiliza el calculo antes calculado.

- caso contrario los resultados se obtienen de cache

- sin **parentesis** los metodos se las propiedades computadas

- entre componentes se puede editar el estilo para darle una distincion dado el estilo del componente principal. Para el componente que queramos cambiar, se debe agregar un **valor variable** desde la clase padre. Dicho componente se denomina **props** o properties.

- Es posible remplazar `v-on:click=` por `@click=` 

- los props tienen una forma mas de eficiente de validar

- `v:bind  ` para tratar todo como JS: de lo contrario se van a agregar de forma de String, el atajo es `:`

dentro del prop existe una configuracion
me permite validar el valor que esta enviandose en el props

cual es el mecanismo que tiene vue para comunicarse entre los componentes padres y los componentes hijos: props

API (Application Programming Interface): de un conjunto de protocolos 
(**Servicios Web** (Restful, Soap), Cola de mensajeria, ....), 
definiciones (urls, el nombre de la API) y contratos (defino las directrices que se deben cumplir, lo que recibo del frontEnd al backEnd), que me permiten interconectar/interoperar/integrar **componentes de software**.

comunmente el frontend con el backend

- watch: u observador agrega un evento al momento de observar una propiedad reactiva, tiene una firma de metodo especifica.

- las apis deben consumirse en un solo método.

- cada vez que ejecutemos el fetch debemos esperar una respuesta , se usa el await(siempre que use el **await** debo tambien utilizar el **async**).

- se tiene que usar el await desde afuera porque la espera se hereda.

- el await (la espera) depende de la logica de negocio.

## Declaración de estilos exrternos en Vue.

- se agrega en el main.js en forma de import.

## Modulos
- los módulos son una manera de organizar

- componentes: Estos componentes son **reutilizables** dentro de diferentes páginas web.
- services: si en algún momento tengo una lógica (no se trata de lógica de negocios).

- helpers: Carpeta que tiene un archivo que será el **cliente** del archivo (consumir el Api), un archivo por cada Api.

- router: se colocan las configuraciones de las rutas de mi página.

- store: hace alución a una fuente en donde se colocarán archivos que se usarán en el proyecto (como archivos multimedia), también podriamos usar img para carpeta de imagenes, pero lo importante es mantener la estructura de módulos.


- cada componente debe tener una funcionalidad bien determinada, y bien independiente, para eso debo tener claro que debo hacer

- entre dos componentes se pueden comunicar dos componentes a traves del componente padre

- La palabra reservada `scoped` es para el alcance de los estilos dentro de un componente.

- cuando un componente necesita ejecutar logica de presesentacion, es correcto que se cree una programacion externa.

- export default obtenerFachadaPokemon esto se hace para consumir el método desde un componente.

- fase de montaje: cuando montamos el componente dentro de la página web (se renderiza) , cada una de estas fases son paropciones del OptionApi.

- llamamos al mounted para contruir un metodo.

- solo los metodos que construimos deben llevar el await y el async, mounted por otra parte es parte del Api y no lo necesita