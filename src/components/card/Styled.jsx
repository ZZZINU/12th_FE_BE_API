import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  width: 320px;
  height: 347px;
  text-decoration: none;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-10px);
  }
  border-radius: 0px 0px 4px 4px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 166px;
`;

export const CardWrapper = styled.div`
  width: 288px;
  height: 149px;
  padding: 16px;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  color: #212529;
  margin-bottom: 4px;
`;

export const CardContent = styled.div`
  height: 83px;
  font-size: 14px;
  margin-bottom: 24px;
  color: #495057;
`;

export const CardDate = styled.div`
  font-size: 12px;
  color: #868e96;
`;
