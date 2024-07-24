import React, { useState, useEffect } from 'react';
import Card from '../../components/card/Card';
import { HomeWrapper, HomeGrid } from './Styled';
import { API } from '../../api'; // 정의한 API 인스턴스를 가져오기

const Home = () => {
  const [data, setData] = useState([]); //상태 변수 data와 상태를 갱신하는 setData 함수를 선언

  const fetchData = async () => {
    try {
      // API.get을 사용하여 '/api/posts' 엔드포인트에 GET 요청 보내기
      const response = await API.get('/api/posts');
      console.log(response.data); // (선택) 데이터 출력해서 확인해보기
      setData(response.data); // 응답 데이터(response.data)를 data 상태 변수에 저장
    } catch (error) {
      console.log(error);
    }
  };

  // 컴포넌트가 마운트될 때, fetchData 함수를 호출하여 데이터를 가져오기
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HomeWrapper>
      <HomeGrid>
        {/* 카드 컴포넌트에 data 전달 */}
        {data.map(data => (
          <Card key={data.id} data={data} />
        ))}
      </HomeGrid>
    </HomeWrapper>
  );
};

export default Home;
