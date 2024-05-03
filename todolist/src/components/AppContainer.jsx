import React from 'react'
import styled from 'styled-components'

const App = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// styled component는 component라서 무조건 대문자
const Container = styled.div`
    width: calc(100% - 24px);
    padding: 24px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 52px;
    font-weight: 900;
    text-align: center;
    margin: 0px;
`
// 위의 스타일과 동일한데 일부만 스타일 바꾸고 싶을 때
// mui, ant design
// const Title2 = styled(Title)`
//     font-size: 12px;
// `

const AppContainer = ({title, children}) => {
  return (
    <App className='App'>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </App>
  )
}

export default AppContainer
