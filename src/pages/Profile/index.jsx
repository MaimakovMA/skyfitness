import * as S from './profile.styled';
import MyProfile from '../../components/MyProfile/MyProfile';
import MyCourseInProfile from '../../components/MyCourseInProfile/MyCourseInProfile';
import { useAuth } from 'hooks/use-auth';
import Header from 'components/header/header';

export default function Profile() {
   
  const { email } = useAuth()

    return (
      <S.StyledSection>
        <Header />
        <MyProfile />
        <MyCourseInProfile />
      </S.StyledSection>
    )
  }