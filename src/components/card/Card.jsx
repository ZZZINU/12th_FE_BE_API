import Thumbnail from '../../assets/images/thumbnail.png';
import {
  CardContainer,
  CardImg,
  CardWrapper,
  CardTitle,
  CardContent,
  CardDate,
} from './Styled';

const Card = ({ data }) => {
  return (
    <CardContainer to={`/detail/${data.id}`}>
      <CardImg src={Thumbnail} />
      <CardWrapper>
        <CardTitle>{data.title}</CardTitle>
        <CardContent>{data.context}</CardContent>
        <CardDate>{data.created_at}</CardDate>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
