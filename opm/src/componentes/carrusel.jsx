import React, { useState, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import  './styles/module.css'

const tenis=<img src='https://i.imgur.com/Vuk4IFQ_d.jpeg?maxwidth=520&shape=thumb&fidelity=high'/>
const balon=<img src='https://i.imgur.com/PKlH0WP_d.png?maxwidth=520&shape=thumb&fidelity=high'/>
const canilleras=<img src='https://i.imgur.com/Flj3kWa_d.png?maxwidth=520&shape=thumb&fidelity=high'/>
const pages = [
  ({ style }) => <animated.div style={style}>{tenis}</animated.div>,
  ({ style }) => <animated.div style={style}>{balon}</animated.div>,
  ({ style }) => <animated.div style={style}>{canilleras}</animated.div>,
]

export default function App() {
  const [index, setIndex] = useState(0)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(20%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-20%,0,0)' },
    config:{tension: 170, friction: 26}
  })
  useEffect(() => {
    transRef.start()
  }, [index,transRef])

  useEffect(()=>{
    const intervalo=setInterval(()=>{
      setIndex(prev=>(prev+1)%pages.length)
    },3000)
    return ()=>clearInterval(intervalo)
  },[])
  return (
    <div  className='imagenes'>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
