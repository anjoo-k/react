import React, { useState, useRef } from 'react'

const UseRefTest = () => {

    const[name, setName] = useState("");
    const[gender, setGender] = useState("남자");

    const nameInput = useRef();

    
    const handleChangeName = (event) => {
        setName(event.target.value); // 이벤트가 일어나는. 타겟. "의 값"
    }
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) =>{
        alert(`이름 : ${name}, 성별 : ${gender}`)
        event.preventDefault();
    }

    const handleReset = (ev) => {
        setName("");
        setGender("남자");
        nameInput.current.focus();
        // 저절로 입력창에 커서 가도록
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            이름 : 
            <input type='text'
                   value={name}
                   onChange={handleChangeName}
                   ref={nameInput}
            />                     
            {/* 화면에서 onChange가 없으면 입력이 되지 않는이유:
            input 창 자체가 props라서 리렌더링이 안된다고...?*/}
        </label>
        <br />
        <label>
            성별 : 
            <select value={gender} onChange={handleChangeGender}>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select>
        </label>
        <button type='submit'>제출</button>
        <button type='button' onClick={handleReset}>초기화</button>
    </form>
  )
}

export default UseRefTest
