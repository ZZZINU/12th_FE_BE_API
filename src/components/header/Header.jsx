import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.png';
import { Logo, LogoContainer, NewPostBtn } from './Styled';

const Header = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <Logo src={LogoImg} />
      </Link>

      <Link to="/post">
        <NewPostBtn>새 글 작성</NewPostBtn>
      </Link>
    </LogoContainer>
  );
};

export default Header;
