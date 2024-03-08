import * as S from './App.styles.js';
import { AppRoutes } from "./routes";
import { useState } from 'react';


export const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  return (
    <S.Wrapper>
      <S.Container>
        <AppRoutes  isLoading={isLoading} 
                    setIsLoading={setIsLoading}
        />
      </S.Container>
    </S.Wrapper>
  );
};