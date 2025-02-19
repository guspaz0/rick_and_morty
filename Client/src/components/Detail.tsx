import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button1, Card1, Img, Specie, Name, Gender, Status, Origen, Locacion, P1 } from '../CSS/detail'
import characterActions from '../redux/characters/actions';
import { useDispatch, useSelector } from "react-redux";
import { CharacterId, Character } from "../interfaces/Character";
import { TAppState, TDispatch } from "../redux/store";


export function Detail() {

    const dispatch = useDispatch<TDispatch>()
    const [character, setCharacter] = useState<Character>()

    const {characterId} = useParams();
    const Characters = useSelector(({characters}: TAppState) => characters.characters)

    useEffect(() => {
        if (characterId){
            if (Characters.some(char => char.id === +characterId)) {
                if (!character) {
                    setCharacter(Characters.find(char => char.id == +characterId))
                }
            } else {
                dispatch(characterActions.addCharacter(+characterId))
            }
        }
    }, [dispatch, Characters, character, characterId]);
    
    const navigate = useNavigate();
    const GoBack = () => {
        navigate('/home')
    };
    return(
    <Card1>
        {character?.id === +characterId
            ?   <>
                <Img src={character.image} alt={character.name}/>
                <Name>{character.name}</Name>
                <Status>Status: {character.status}</Status>
                <Gender>Gender: {character.gender}</Gender>
                <Specie>Specie: {character.species}</Specie>
                <Origen>Origen: {character.origin? character.origin.name: 'none'}</Origen>
                <Locacion>Locacion: {character.location? character.location.name: 'none'}</Locacion>
                <Button1 onClick={GoBack}>Volver</Button1>
            </>
            : <p>Cargando...</p>
        }
    </Card1> 
    )
}