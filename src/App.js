import logo from './logo.svg';
import './App.css'; 
//리액트는 데이터 바인딩 쉽게할 수 있다. 

function App() {

  let posts = '강남 고기 맛집';

  // function 함수(){
  //   return 100;
  // }

  return ( 
    // html 작성 가능
    <div className="App">
      <div className="black-nav">
        {/*오브젝트 형식으로 넣아야함, 카멜케이스 사용해야함 */}
        <div style = {{color : 'blue', fontSize : '30px'}}>개발 Blog</div>
      </div>
      {/* <img src ={ logo }></img> */}
      {/* 이미지 임포트하는법 */}
      <h4> { posts } </h4>
      {/* <h4> { 함수() } </h4> */}
    </div>
  );
}

export default App;
