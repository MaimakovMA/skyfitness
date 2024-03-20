import * as S from './ListOfCourses.styles.js';
import { Cards } from '../../components/Cards/Cards.jsx';
import { Heading } from '../../components/Heading/Heading.jsx';
//import { useSelector } from "react-redux";

export const ListOfCourses = () => {

    //const { coursesList } = useSelector(({ courses }) => courses);

    return(
        <S.Conteiner>
            <S.Anchor href="top"></S.Anchor>
            <Heading />
            <Cards />
          <S.Footer>
              <S.Button href='#top'>Наверх ↑</S.Button>
          </S.Footer> 
        </S.Conteiner>
    )
}