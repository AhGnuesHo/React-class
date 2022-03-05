/* eslint-disable */

import React, {useState} from 'react'; // 리액트의 내장 함수를 사용
import logo from './logo.svg';
import './App.css'; 
//리액트는 데이터 바인딩 쉽게할 수 있다. 
//데이터는 변수에 넣거나, state에 넣거나 한다.
function App(){

  let[글제목, 글제목변경] = useState(['코트 추천','우동 추천','개발 공부']);
  // 두개의 배열이 생성됨 [a, b] a는 state, b는 state 변경 함수
  // state 변수 대신 쓰는 데이터 저장 공간
  // useState()를 이용해 만들어야한다. 
  // useState안에는 배열이나 오브젝트가 들어가도 된다. useState(['코트 추천','우동 추천']) { 글 제목[1] }
  // state를 사용하는 이유는 웹이 app처럼 동작하게 만들고 싶어서 사용한다 
  // state는 변경되면 랜더링이 자동으로 된다. 새로고침이 필요없다. 즉 자주바뀌는 데이터는 state사용
  
  let [별, 별변경] = useState(0);
  // state 변경 할 수 있는 방법
  // 별변경 함수를 사용

  // 모달 창이 보이는지 안보이는지 상태 저장
  let [모달, 모달변경] = useState(false);
  
  let posts = '강남 고기 맛집';
  
  function 제목바꾸기() {
    // 글제목에 있던 0번째 데이터를 옛날 코트 추천으로 바꾸기
    // 복사본생성 deep copy (등호는 값 공유하는 것임)
    // 리액트의 대원칙 immutable data
    // 값을 직접 수정하는 것이 아니라 복사본을 만들어서 수정하는 것
    // ... es6 문법
    var newArray = [...글제목]; 
    newArray[0] = '옛날코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* 수시로 바뀌지 않는 데이터는 변수로 사용하는 것이 좋다 */}
        <div>개발 blog</div> 
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>{ 글제목[0]}
        {/* 클릭이벤트 */}
          <span onClick={ ()=>{ 별변경(별 + 1)} }>⭐️</span> {별} </h3>
        <p>3월 5일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>3월 4일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={()=>모달변경(true)}>{ 글제목[2] }</h3>
        <p>3월 3일 발행</p>
        <hr/>
      </div>
      {/*  <div className='modal'>
              <h2>제목</h2>
              <p>날짜</p>
              <p>상세내용</p>
            </div> */}

      {/* if 대신 삼항 연산자 */}
      {
         모달 === true ? <Modal/> : null 
      }
      <dutton onClick = {() => {모달 === true ? 모달변경(false) : 모달변경(true)}}> 버튼 </dutton>

    </div>
  )
}

// html을 한 단어로 줄여서 쓸수 있는 방법 : Component 
// 컴포넌트 만드는 경우 :
// 반복적으로 나오는 html
// 사이트에서 자주 바뀌는 Ui
// 다른 페이지를 만들 때
// 컴포넌트를 많이 만들때의 단점 :
// state를 쓸때 복잡해짐
function Modal(){ // 태그이름짓기 대문자로 시작
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div> // 원하는 html
  )
}

export default App;
