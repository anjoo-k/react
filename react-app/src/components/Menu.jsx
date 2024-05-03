import React from 'react' //rafce
import Food from './Food';

const Menu = () => {
  return (
    <div id="menu">
     <Food name={"짜장면"} price={7000}/>
     <Food name={"햄버거"} price={4000}/>
     <Food name={"김밥"} price={4000}/>
    </div>
  )
}

export default Menu
