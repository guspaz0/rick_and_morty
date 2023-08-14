
const express = require('express');
const router = express.Router();
const {
    getCharById,
    postFav,
    deleteFav,
    login,
    postUser,
    getFav,
} = require("../controllers/index");

router.get("/", async (req,res) => {
    try{
        res.status(200).json('Api rick and morty')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
})
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post('/login', postUser);
router.post("/fav", postFav);
router.get('/fav', getFav)
router.delete("/fav/:id", deleteFav);

module.exports = router;