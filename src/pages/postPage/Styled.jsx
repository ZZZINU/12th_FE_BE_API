import { styled } from 'styled-components';

export const PostLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 700px;
  background-color: white;
  padding: 40px;
`;

export const PostTitle = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border: none;
  font-size: 44px;
  font-weight: bold;
`;

export const PostLine = styled.div`
  background: rgb(73, 80, 87);
  height: 6px;
  width: 72px;
  margin-bottom: 20px;
  border-radius: 1px;
`;

export const PostContent = styled.textarea`
  width: 100%;
  font-size: 18px;
  border: none;
  color: #212529;
  resize: none;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const PostBottom = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100px;
`;

export const PostButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: #12b886;
  border-radius: 6px;
  cursor: pointer;
`;
