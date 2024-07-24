import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
