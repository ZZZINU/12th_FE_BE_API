import { styled } from 'styled-components';

export const DetailLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const DetailWrapper = styled.div`
  width: 768px;
  height: 100%;
`;

export const DetailTitle = styled.div`
  margin-top: 50px;
  color: #212529;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 50px;
`;

export const DetailDateDelete = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailDate = styled.div`
  color: #495057;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const DetailDelete = styled.div`
  color: #868e96;
  font-size: 16px;
  cursor: pointer;
`;

export const DetailThumbnail = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

export const DetailContent = styled.div`
  color: #212529;
  font-size: 18px;
  padding-bottom: 50px;
`;
