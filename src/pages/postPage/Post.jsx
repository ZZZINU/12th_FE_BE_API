import React, { useState } from 'react';
import {
  PostLayout,
  PostWrapper,
  PostTitle,
  PostLine,
  PostContent,
  PostBottom,
  PostButton,
} from './Styled';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  // 제목과 내용을 담을 상태 변수 선언
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  // 실습3: (POST) 새 post 작성
  // 게시글을 생성하기 위한 함수를 만들어주세요! (제목이랑 내용)
  // ** TIP **
  // 생성 후에는
  // (1) alert('Post 성공 :)');  |  alert('Post 실패 :(');
  //     생성의 성공 여부를 alert창을 통해 띄워주세요! 확인하기 편해요
  // (2) navigate('/');
  //     생성 후에는 홈페이지로 이동하기!

  return (
    <PostLayout>
      <PostWrapper>
        {/* 제목 입력 */}
        <PostTitle
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <PostLine />

        {/* 내용 입력 */}
        <PostContent
          placeholder="당신의 이야기를 적어보세요..."
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        {/* 출간하기 버튼 */}
        <PostBottom>
          <PostButton>출간하기</PostButton>
        </PostBottom>
      </PostWrapper>
    </PostLayout>
  );
};

export default Post;
