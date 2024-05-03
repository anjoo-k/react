import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCircleXmark } from "react-icons/fa6";

const ListContainer = styled.ul`
    width: 100%;
    margin: 12px 0px;
    padding: 0px 30px;    
`
const TodoRow = styled.li`
    height: 34px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`
const RemoveButton = styled.button`
    cursor: pointer;
    width: 34px;
    height: 34px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    background-color: aliceblue;
    border: none;
`

const DoneRow = styled(TodoRow)`
    text-decoration: line-through;
`


const TodoListveiw = ({todos, onRemove, onToggle}) => {

  return (
      <ListContainer>
        {
            todos.map((todo) =>
                            todo.isDone ? 
                            <DoneRow
                                key={todo.id}
                                onClick={() => onToggle(todo.id)}
                            >
                                {todo.title}
                                <RemoveButton onClick={() => {onRemove(todo.id)}}>
                                    <FaCircleXmark/>
                                </RemoveButton>
                            </DoneRow> :
                            <TodoRow
                                key={todo.id}
                                onClick={() => onToggle(todo.id)}
                                >
                                {todo.title}
                                <RemoveButton onClick={(ev) => {
                                                            ev.stopPropagation() // 이벤트 확산 방지
                                                            // ev.preventDefault() // 고유 동작 방지
                                                            onRemove(todo.id)                                                             
                                                            }
                                                        }>
                                    <FaCircleXmark/>
                                </RemoveButton>
                            </TodoRow>
                        )
        }        
      </ListContainer>
  )
}

export default TodoListveiw
