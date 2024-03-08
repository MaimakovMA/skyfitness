import * as S from './App.styles.js';
import { AppRoutes } from "./routes";

export const App = () => {

  return (
    <S.Wrapper>
      <S.Container>
        <AppRoutes />
      </S.Container>
    </S.Wrapper>
  );
};