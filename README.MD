<h1 align="center">
Rick And Morty APP
</h1>

<div align="center">
    <img src="Server/src/assets/rickandmorty.jpg" alt="Rick And Morty"/>

<table>
    <caption>Tecnologias:</caption>
    <tbody>
        <tr><th>Backend</th><th>Frontend</th></tr>
        <tr>
            <td colspan="2" align="center">
                <img src="https://img.shields.io/badge/Node-latest-green?style=flat-square"/>
                <img src="https://img.shields.io/badge/TypeScript-latest-blue?style=flat-square">
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://img.shields.io/badge/Express-latest-white?style=flat-square">
            </td>
            <td>
                <img src="https://img.shields.io/badge/Redux-latest-purple?style=flat-square">
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://img.shields.io/badge/postgreSQL-latest-slateblue?style=flat-square">
            </td>
            <td>
                <img src="https://img.shields.io/badge/React-latest-blue?style=flat-square">
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://img.shields.io/badge/classValidator-latest-yellow?style=flat-square">
            </td>
            <td>
                <img src="https://img.shields.io/badge/Vite-latest-slateblue?style=flat-square">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Despliegue: <img src="https://img.shields.io/badge/Docker-latest-blue?style=flat-square"> (opcional)
            </td>
        </tr>
    </tbody>
</table>
</div>


---
App donde se puede listar personajes de la serie animada "Rick & Morty". El usuario se registra y puede guardar sus personajes favoritos.

## Instrucciones
- Si tienes git instalado. clonar el repositorio
```
git clone https://github.com/guspaz0/rick_and_morty.git
```
- O bien descargar el repo directamente de github y descomprimir el contenido. 
### Local Sin Docker:
- instalar dependencias.
```
## levantar el backend
cd Server
npm install
npm start

## levantar el fronend
cd ../Client
npm install
npm run dev
```

### Local con Docker
- descargar imagenes de docker e instalar dependencias
```aiignore
docker compose build
```
- configurar variables de entorno locales. puede variar en cada caso.
- levantar maquinas virtuales del proyecto
```aiignore
docker compose up
```
- ingresar al frontend por el navegador de preferencia a la ruta http://localhost:5173

---
Proyecto de practica actualizado al nuevo programa del bootcamp de Full Stack de Henry 2024.
Este proyecto tiene algo especial, ya que fue mi primer App en aprender a programar por el año 2022 y por eso se merece un buen refactor con las ultimas tecnologias del bootcamp y con la experiencia adquirida a la fecha! 