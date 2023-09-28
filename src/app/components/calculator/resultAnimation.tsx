import React, { useState, useEffect, useRef } from "react"
import styles from "./resultAnimation.module.css"

interface resultAnimationProps {
  value: string;
  period: string
}

const ResultAnimation: React.FC<resultAnimationProps> = ({ value, period }) => {
    const [bounce, setBounce] = useState(false)
    const prevValueRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (prevValueRef.current !== undefined && prevValueRef.current !== value) {
        setBounce(true)
        const timer = setTimeout(() => {
        setBounce(false)
      }, 700)

      return () => {
        clearTimeout(timer)
      }
    }
    prevValueRef.current = value
  }, [value])

  return (
    <p className={`${styles["finalValue"]} ${bounce ? styles["bounce"] : ""}`}>
      {value}€<span style={{fontWeight:"400", fontSize:"1.5rem"}}>{period}</span>
    </p>
  )
}

export default ResultAnimation
