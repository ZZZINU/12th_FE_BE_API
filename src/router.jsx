// Router.jsx

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/homePage/Home';
import Post from './pages/postPage/Post';
import Detail from './pages/detailPage/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // 메인페이지
      { path: '/', element: <Home /> },
      { path: '/post', element: <Post /> },
      { path: '/detail/:post_id', element: <Detail /> },

      // // 첫 번째 실습
      // { path: '/first', element: <First /> },
      // { path: '/first/postTest', element: <FirstApiPostTest /> },

      // //두 번째 실습
      // { path: '/second', element: <SecondPage /> },

      // //세 번째 실습
      // { path: '/third', element: <ThirdPage /> },
      // { path: '/third/news', element: <NewsList /> },
    ],
  },
]);

export default router;
