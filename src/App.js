
import './App.css';

//페이지 이동 컴포넌트 임포트 
import Home from './pages/Home';
import About from './pages/About';
import Company from './pages/Company';
import Gallery from './pages/Gallery';
import Edit from './pages/Edit';

// 라우팅(페이지 이동) 을 처리하는 컴포넌트를 import 
import {Routes , Route, Link} from 'react-router-dom' ; 

// useNavigate 
import { useNavigate } from 'react-router-dom';

import Edit2 from './pages/Edit2';
import UseEffect from './pages/UseEffect';
import Footer from './pages/Footer';
import NotFoundPage from './pages/NotFoundPage';

function App() {

// 라우팅 : 요청( /company )에 대해서 해당 컴포넌트(page) 를 이동  

/* React Router  : anker 태그 : a href = "index.html"
    - SPA 에서 다른 화면 전환 
    - SPA : 화면의 Page 를 이동하도록 함. 
    - 요청 (Link) ==>  ( Routes => Route path="/about"  element= {</About /> }) 

    - 라이브러리 설치가 필요함. : react-router : 모바일 앱 , react-router-dom ( 웹앱 )
        - npm install react-routor-dom
        - yarn add react-routor-dom 

        - package.json  <== 설치된 라이브러리 등록 ( "react-router-dom": "^6.22.3" )
        - react-router-dom : 6이상 버젼에서 많이 변경됨. 
    
    - 라우터 셋팅 : 
        -  BrowserRouter  전체 페이지에서 감싸 줘야 함.  index.js 에서 <App /> 를 감싸서 처리 
            - 하위 컴포넌트에서 발생하는 페이지 전환을 감지 해서 처리  
              import { BrowserRouter } from 'react-router-dom'; 

        - Routes 컴포넌트 블락 내부에 , Route 컴포넌트에서 요청하는 정보에 대해서 이동할 컴포넌트 셋팅 
            path="/" : 요청을 받음 ===> element= {<Home /> 해당 컴포넌트 호출 
        - 요청 정보를 보내는 <Link to = "/about"> About </Link>

    // react-router-dom v6 에서 신기능 3가지
    1. Path Variable 을 사용 할 수 있음.   "/edit/:id"  , useParams 에서 처러
          <Edit /> 
    2. Query String 을 사용 할 수 있음.    "/edit?id=1&mode=abc"  , useSearchParms  에서 처리
          <Edit2 /> 
    3. Page Moving : 이벤트가 발생할때 특정 페이지 이동 : useNavigate 를 사용 
          // JavaScript : location.href "index.html";   <== MPA 
          // 라우트에게 요청을 보내는 것. ("/about")  : navigate("/about")
          // 이전 페이로 이동 : navigate(-1)
          // 다음 페이지로 이동 : navigate(1) 
          // 이전 이전 페이지로 이동 : navigate(-2) 
          // 버튼을 클릭시 특정 페이지로 이동 : useNavigate 
          // 함수 내부에서 함수를 처리후 특정 페이지로 이동 : useNavigate 를 사용  

*/

  // useNavigate Hook을 사용 할 객체 선언 : navigate 
  const navigate = useNavigate(); 

  return (
    <div className="App">
      <h1> React Router 실습</h1>
      <hr /> 

      {/* 라우팅을 호출 : Link */}
      <nav>
        <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about"> About </Link> </li>
            <li> <Link to="/company"> Company </Link></li>
            <li> <Link to="/gallery"> Gallery </Link></li>
            <li> <Link to="/edit/100"> Edit : Path Variable 예제  </Link> </li>
            <li> <Link to="/edit2?id=200&mode=abc"> Edit2 : Query String 예제 `</Link></li>
            <li>
              <button onClick={()=> {navigate("/")}} > 홈으로 이동 </button>
            </li>
            <li>
              <button onClick={()=> {navigate("/company")}}  > 회사페이지 이동 </button>
            </li>
            <li> 
              <button onClick={()=> {navigate(-1)}}  > 이전 페이지 이동 </button>
            </li>
            <li>
               <button onClick={()=> {navigate(1)}}  > 다음 페이지 이동 </button>
            </li>
            <li>
            <button onClick={()=> {navigate(-2)}}  > 이전 이전  페이지 이동 </button>
            </li>
            <li> 
               <button onClick={()=> {navigate("/useEffect")}}  > useEffect 호출 </button>
            </li>

        </ul>
      </nav>

      {/* 라우팅을 처리 (Routes > Route ) : Controller 와 같은 기능   */}
      <Routes>
        <Route path="/" element= {<Home />}> </Route>
        <Route path="/about" element= {<About />}> </Route>
        <Route path="/company" element= {<Company />}> </Route>
        <Route path="/gallery" element= {<Gallery />}> </Route>
        <Route path="/edit/:id" element= {<Edit />}> </Route>
        <Route path="/edit2" element={<Edit2 />}> </Route>
        <Route path="/useEffect" element={<UseEffect />}> </Route>
        <Route path="*" element={<NotFoundPage />}> </Route>
      </Routes>

      <Footer /> 

    </div>
  );
}

export default App;
