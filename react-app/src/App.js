import logo from './logo.svg';
import './App.css';
import LandingPage from './sample/LandingPage';
import UseEffectTest from './reactHook/UseEffectTest';
import UseMemoTest from './reactHook/useMemo/UseMemoTest';
import ViewItem from './reactHook/useCallback/ViewItem';
import UseCallbackTest from './reactHook/useCallback/UseCallbackTest';
import UseRefTest from './reactHook/useMemo/UseRefTest';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
 // 화면에 보이는 부분

 // 숫자는 안먹으니까 스크립트로 적기


 /**
  * react-router-dom
  * react로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리
  * 
  * BrowserRouter(Router)
  * history API를 이용해서 history 객체를 생성한다.
  * 라우팅을 진행할 컴포넌트 상위에 Router컴포넌트를 생성하고 감싸주어야한다.
  * 
  * RouteS
  * 모든 Route의 상위경로에 존재해야하며, location 변경 시 하위에 있는 모든 Route 중에서
  * 현재 location과 맞는 Route를 찾아준다.
  * 
  * Route
  * 현재 브라우저의 location(window.href.location 정보를 가져온다.) => 상태에 따라서 다른 element를 랜더링한다.
  */
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Food'>Food List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/food' element={<FoodMenu />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// APP : 컴포넌트
// 노드환경에 등록시킨다
// index.js에 import 됨