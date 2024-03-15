import * as S from './profile.styled'
import MyProfile from '../../components/MyProfile/MyProfile'
import MyCourseInProfile from '../../components/MyCourseInProfile/MyCourseInProfile'
import { useAuth } from 'hooks/use-auth';

export default function Profile() {
   
  const { email } = useAuth()

    return (
      <S.StyledSection>
        <S.LogoBox to="/">
            <S.LogoChoose src="/img/logo.svg" alt="logo" />
            </S.LogoBox>
            <S.LogoUser src="/img/profileImg.png" alt="logoUser"></S.LogoUser>
        <S.User>{email}</S.User>
        
        {/* <Header /> */}
        <MyProfile />
        <MyCourseInProfile />
      </S.StyledSection>
    )
  }