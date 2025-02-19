import React from 'react';
import { PaginationInfo } from '../interfaces/Character';
import { useDispatch } from 'react-redux';
import { TDispatch } from '../redux/store';
import characterActions from '../redux/characters/actions';

interface Props{
    pageInfo: PaginationInfo
    perPage: number
}

export default function Pagination({pageInfo, perPage}: Props){
    
    const dispatch = useDispatch<TDispatch>()

    function handleNext(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        dispatch(characterActions.pagesRequest(pageInfo.next))
    }

    function handlePrev(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        dispatch(characterActions.pagesRequest(pageInfo.prev))
    }
    const prevPage = new URLSearchParams(pageInfo.prev?.split("/").slice(-1)[0])?.get("page")
    const nextPage = new URLSearchParams(pageInfo.next?.split("/").slice(-1)[0])?.get("page")
    const currentPage = prevPage? +prevPage+1 : +nextPage-1

    return(
        <div className='pagination'>
            <span>
                <button onClick={handlePrev} disabled={pageInfo.prev === null}>Anterior</button>
                <button onClick={handleNext} disabled={pageInfo.next === null}>Siguiente</button>
            </span>
            <small>Pagina {currentPage} de {pageInfo.pages}. Mostrando {perPage} resultados de {pageInfo.count} en total</small>
        </div>
    )
}