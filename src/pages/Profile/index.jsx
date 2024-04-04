import * as S from './profile.styled';
import MyProfile from '../../components/MyProfile/MyProfile';
import MyCourseInProfile from '../../components/MyCourseInProfile/MyCourseInProfile';
import Header from 'components/header/header';

export default function Profile() {

    return (
      <S.StyledSection>
        <Header />
        <MyProfile />
        <MyCourseInProfile />
      </S.StyledSection>
    )
  }