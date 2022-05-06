import React from 'react'
import { useSelector } from 'react-redux';
function Helloword() {
  const {string} = useSelector((state) => state.content)
  return (
    <div>{string}</div>
  )
}

export default Helloword