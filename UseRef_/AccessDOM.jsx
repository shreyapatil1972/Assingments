import React, { useEffect, useRef } from 'react'

const AccessDOM = () => {
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <input ref={inputRef} type='text'></input>
  )
}

export default AccessDOM