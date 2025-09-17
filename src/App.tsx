import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
    <LikeButton />
    </>
  )
}

function LikeButton() {
  const [count, setCount] = useState(999);
  return <span className="likeButton">♥ {count}</span>
}
export default App
