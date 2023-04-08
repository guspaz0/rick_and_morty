const Axios = require('axios');
//const http = require('http');

const getCharById = (res, id) => {
    Axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        let objeto = response.data;
        let Character = { id: objeto.id, name: objeto.name, species: objeto.species, origin: objeto.origin, image: objeto.image, status: objeto.status };
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(Character));
    }).catch((error) => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(error.message)})
};

module.exports =getCharById;