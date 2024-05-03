import React, { Component } from 'react'
import Comment from './Comment';

const serverComments = [
    {
        id: 1,
        message: "안녕하세요. 오늘 쉬나요?"
    },{
        id: 2,
        message: "안녕하세요. 저는 안쉽니다."
    },{
        id: 3,
        message: "아하 저는 쉬어요."  
    }
]

let timer;

/*
    class Component
    state(필드 대체)를 가지고 있고 이를 수정할 수 있다.
    라이프사이클에 따른 생명주기 메소드를 사용할 수 있다.
    :리액트 생명주기 검색
*/




export default class CommentList extends Component {
  constructor(props){
        super(props)
        //props => 

        this.state = {
            commentList: [],
        }
  }

  componentDidMount(){
    console.log("componentDidMount")
    const { commentList }= this.state; //비구조할당
    
    //setInterval : 일정시간마다 특정 함수를 반복해서 실행
    timer = setInterval(() => {
        // 2초마다 실행되는 부분
        if(commentList.length < serverComments.length){
            const index = commentList.length; // 0
            commentList.push(serverComments[index]);
            this.setState({
                ...commentList
            })
        } else {
            this.setState({
                commnetList: []
            })
            clearInterval(timer)
        }
    }, 2000)

  }
  render() {
    return (
      <div>
        {
            this.state.commentList.map(c => {
                return(
                    <Comment
                        key={c.id}
                        id={c.id}
                        message={c.message}
                    />
                )
            })
        }
      </div>
    )
  }
}

// const add(data){
//     const sum = data.a + data.b
//     data.a = 7
//     return sum;
// }

// let t = {
//     a: 5,
//     b: 3
// }

// result = add(t)

//t