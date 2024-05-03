import React, { useState } from 'react'

/*
    Hook이란?
    함수형 컴포넌트에서 react state와 life cycle메서드의 기능을 사용할 수 있게 해주는 함수
    hook은 class 안에서는 동작하지 않는다. 대신 class없이 React를 사용할 수 있게 해줌

    React안에 use가 들어있음
    즉 다른사람이 만들어놓은 함수를 가져다 쓰는 것

                  변수명을 수정할 때
    const[변수명, set변수명] = useState(초기값);    여러개 사용가능
     - 변수명: 원하는 state명 설정
     - set변수명 : 해당 state 값을 변경할 함수

    state : 컴포넌트의 상태값을 말한다
    useState : 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 react hook

    컴포넌트는 state 값이 변경되면 이를 확인하고 요소를 리랜더링 해줌


    함수는 한번 실행되고나면 값을 반납한다
    그래서 다른 함수(state)에 그 함수를 담아서 저장해두는 것
    props나 state 값을 바꿔줘야 화면에 리렌더링된다



*/


// button이라는 컴포넌트에 onclick이라는 함수 걸어준 것
const UseStateTest = () => {
    // let num = 0;
    const[num, setNum] = useState(0);
    // setNum(값);

    const onClick1 = () => {
        // num++;
        setNum(num + 1); // 콘솔에 찍어주면 바로바로 적용된 값이 안나온다
        console.log("onClick1 : " + num);
    }
    const onClick2 = () => {
        // num--;
        setNum(num - 1);
        console.log("onClick2 : " + num);
    }


  return (
    <div>
      <span>COUNT : {num}</span>
      <div>
        <button onClick={onClick1}>+</button>
        <button onClick={onClick2}>-</button>
      </div>
    </div>
  )
}

export default UseStateTest
