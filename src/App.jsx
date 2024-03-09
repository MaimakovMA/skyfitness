// import * as S from './App.styles.js';



// import Profile from './pages/profile/index.jsx';



// export const App = () => {

//   return (
//     <S.Wrapper>
//       <S.Container>
//         <Profile />
//       </S.Container>
//     </S.Wrapper>
//   );
// };

// export default App;

import * as S from './App.styled'
import './App.css'
import AppRoutes from './routes'
// import database from './Firebase'

function App() {
  // console.log(database)
  return (
    <S.MainApp>
      <AppRoutes />
    </S.MainApp>
  )
}

export default App