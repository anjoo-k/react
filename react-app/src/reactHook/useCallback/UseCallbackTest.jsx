import React, { useCallback, useState } from 'react'
import ViewItem from './ViewItem';

/**
 * useCallback
 * useCallbakc 또한 메모이제이션 기법으로 컴포넌트 성능을 최적화시켜주는 도구이다.
 * useMemo와 같은 경우 함수가 리턴하는 결과값을 메모이제이션 하는 것
 * useCallback은 인자로 전달한 콜백함수 그 자체를 메모이제이션하는 것이다.
 * 
 * 사용법
 *   const getItems = useCallback(() => {
      return result;
      }, [item])
      함수를 그대로 useCallback에 넣어주고
      두번째 인자로 의존성배열을 넣어주면 된다.
 */


      // 일반적으로 useMemo 쓰다가
      // 자식 컴포턴트에서 보내줄 일이 생기면
      // useCallback 사용하면 된다.
      // -> 안써도 되지만 최적화 시켜주는 껏

const UseCallbackTest = () => {
  const [num, setNum] = useState(1);
  const[dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [num, num + 1, num + 2]
  // }

  const getItems = useCallback((addNum) => {
      return [num, num+addNum+1, num+addNum+2];
  }, [num])

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color : dark ? "#fff" : "#333"
  }
  
  const onChangeNum = (ev) => {
    setNum(parseInt(ev.target.value))
  }

  return (
    <div style={theme}>
      <input
          type="number"
          value={num}
          onChange={onChangeNum}
      
      />
      <button onClick={() => {setDark(!dark)}}>
          테마 변경
      </button>
      <ViewItem getItems = {getItems}/>
    </div>
  )
}

export default UseCallbackTest
