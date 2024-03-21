import * as S from './Cards.js';
import { useAuth } from 'hooks/use-auth';
import { useSelector } from "react-redux";
import React, { useState } from "react";

export const Cards =() => {

    const { isAuth } = useAuth()
    const { coursesList } = useSelector(({ courses }) => courses);
    const [currentPage] = useState(0);
    const itemsPerPage = 6;
    const offset = currentPage * itemsPerPage;
    const paginatedData = coursesList.slice(offset, offset + itemsPerPage);

    return isAuth ? (
    <S.MainBlockCards>
      { paginatedData ?.sort((a, b) => a.order - b.order).map(({ id , name, image }) => { return(  
        <S.BlockCard key={id}>  
          <S.Card   style={{ backgroundImage: `url(${image})`}}>
            <S.CourseName >{name}</S.CourseName>
          </S.Card>
        </S.BlockCard>
        )})}
    </S.MainBlockCards>) : (
    <S.MainBlockCards>
      { paginatedData ?.sort((a, b) => a.order - b.order).map(({ id , name, image }) => { return(  
        <S.BlockCard to={`/selectworkout/${id}`} key={id}>         
          <S.Card  style={{ backgroundImage: `url(${image})`}} >
            <S.CourseName >{name}</S.CourseName>
          </S.Card>
        </S.BlockCard>
            )})}
    </S.MainBlockCards>
    )
}