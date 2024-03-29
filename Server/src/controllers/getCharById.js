const Axios = require('axios');
//import axios from 'axios';
//const http = require('http');

// const getCharById = (res, id) => {
//     Axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         let objeto = response.data;
//         let Character = { id: objeto.id, name: objeto.name, species: objeto.species, origin: objeto.origin, image: objeto.image, status: objeto.status };
//         res.writeHead(200,{'Content-Type': 'application/json'});
//         res.end(JSON.stringify(Character));
//     }).catch((error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end(error.message)})
// };

const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = function (req, res) {
//     const { id } = req.params;
//     Axios.get(URL+id)
//         .then((data) => data.data)
//         .then((objeto) => {
//             if (objeto.error) {
//                 res.writeHead(404, {'Content-Type':'text/plain'})
//                 res.end(JSON.stringify(objeto.error))
//             } else {
//             const character = { 
//                 id: objeto.id,
//                 name: objeto.name,
//                 species: objeto.species,
//                 origin: objeto.origin,
//                 image: objeto.image,
//                 status: objeto.status,
//                 location: objeto.location }
//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.end(JSON.stringify(character))
//             }
//         })
//         .catch((error) => {
//             res.writeHead(500, {'Content-Type':'text/plain'});
//             res.end({message: error})
//         })
//     }
    const getCharById = async (req, res) => {
        // con async await
        try {
            const {id} = req.params
            const {data} = await Axios.get(URL+id)
            const { status, name, species, origin, image, gender, location } = data;
            res.status(200).json({ id: parseInt(id), status, name, species, origin, image, gender, location });
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }



module.exports = getCharById;
