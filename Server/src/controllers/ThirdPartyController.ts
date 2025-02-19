import Axios from 'axios';
import {Request, Response} from "express";
import { Character } from '../interfaces/Character';

const URL = "https://rickandmortyapi.com/api/character/"

export default {
    getCharById: async function(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { data } = await Axios.get<Character>(URL+id)
            const { status, name, species, origin, image, gender, location } = data;
            res.status(200).json({ id: parseInt(id), status, name, species, origin, image, gender, location });
        } catch (error: any) {
            res.status(500).json({message: error.message})
        }
    }
}