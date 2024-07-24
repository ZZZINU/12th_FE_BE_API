import { styled } from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f8f9fa;
`;

export const HomeGrid = styled.div`
  display: grid;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 36px;
`;
