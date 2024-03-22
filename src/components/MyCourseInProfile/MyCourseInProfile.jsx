import * as S from './MyCourseInProfile.styles';
import { Cards } from '../Cards/Cards.jsx';

function MyCourseInProfile() {
    return (
        <S.HeaderStyleMyProfile>
          <S.NameCourseUser>Мои Курсы</S.NameCourseUser>

          <Cards />
    </S.HeaderStyleMyProfile>
  )
}

export default MyCourseInProfile