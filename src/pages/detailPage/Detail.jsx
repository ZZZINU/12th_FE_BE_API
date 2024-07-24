import React, { useEffect, useState } from 'react';
import {
  DetailLayout,
  DetailWrapper,
  DetailTitle,
  DetailDateDelete,
  DetailDate,
  DetailDelete,
  DetailThumbnail,
  DetailContent,
} from './Styled';
import { useNavigate, useParams } from 'react-router-dom';
import Thumbnail from '../../assets/images/thumbnail.png';

const Detail = () => {
  const navigate = useNavigate();
  const { post_id } = useParams(); // useParams을 이용하여 URL 매개변수에서 post_id를 추출

  // 실습1: (GET) 개별 post 반환
  // 디테일 페이지를 구성하기 위해 데이터를 불러와주세요!
  // ** TIP **
  // 위에서 추출한 post_id를 이용해보세요!

  // 실습2: (DELETE) 개별 post 삭제
  // 게시글을 삭제하기 위한 함수를 만들어주세요!
  // ** TIP **
  // 삭제 후에는
  // (1) alert('삭제 성공 :>');  |  alert('삭제 실패 :<');
  //     삭제의 성공 여부를 alert창을 통해 띄워주세요! 확인하기 편해요
  // (2) navigate('/');
  //     삭제 후에는 홈페이지로 이동하기!

  // useEffect 사용!

  // if (!data) {
  //   return <>게시물을 찾을 수 없습니다.</>;
  // }

  // 아래의 제목, 날짜, 내용 부분도 수정해야겠죠 !?
  return (
    <DetailLayout>
      <DetailWrapper>
        <DetailTitle>제목</DetailTitle>
        <DetailDateDelete>
          <DetailDate>날짜</DetailDate>
          <DetailDelete>삭제</DetailDelete>
        </DetailDateDelete>
        <DetailThumbnail src={Thumbnail} />
        <DetailContent>내용</DetailContent>
      </DetailWrapper>
    </DetailLayout>
  );
};

export default Detail;
