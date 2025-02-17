import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button1, Card1, Img, Specie, Name, Gender, Status, Origen, Locacion, P1 } from '../CSS/detail'
import characterActions from '../redux/characters/actions';
import { useDispatch, useSelector } from "react-redux";
import { CharacterId } from "../interfaces/Character";
import {GlobalState} from '../interfaces/globalState';


export function Detail() {

    const dispatch = useDispatch()
    const [character, setCharacter]: React.ComponentState = useState()

    const { id }: React.ParamHTMLAttributes<CharacterId> = useParams();
    const Characters = useSelector((state: GlobalState) => state.characters.characters)

    useEffect(() => {
        if (Characters.some(char => char.id === +id)) {
            setCharacter(Characters.find(char => char.id === +id))
        } else {
            dispatch(characterActions.addCharacter(id))
        }
    }, 
    [dispatch, Characters]);
    
    const navigate = useNavigate();
    const GoBack = () => {
        navigate('/home')
    };
    return(
    <Card1>
        {character 
            ?   <p>Cargando...</p>
            :   <>
                <Img src={character.image} alt='not found'/>
                <P1/>
                <Name>{character.name}</Name>
                <Img/>
                <Status>Status: {character.status}</Status>
                <Gender>Gender: {character.gender}</Gender>
                <Specie>Specie: {character.species}</Specie>
                <Origen>Origen: {character.origin? character.origin.name: 'none'}</Origen>
                <Locacion>Locacion: {character.location? character.location.name: 'none'}</Locacion>
                <Button1 onClick={GoBack}>Volver</Button1>
            </>
        }
    </Card1> 
    )
}