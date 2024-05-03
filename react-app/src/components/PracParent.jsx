import React from 'react'
const prac = [
  {
    kind:"cat",
    age: 10,
    name: "야옹이"
  },{
    kind:"dog",
    age: 5,
    name: "멍멍이"
  },{
    kind:"rabbit",
    age: 2,
    name: "토깽이"
  }]

const Prac = () => {
  return (
    <div>
      {prac.map(p => {
        return <PracChild kind={prac.kind} age={prac.age} name={prac.name}/>
      })}
      
    </div>
  )
}

export default Prac
