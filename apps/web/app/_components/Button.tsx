"use client"
import React from 'react'
import {Button} from "@repo/ui"

interface ButtonProps {
    text: string
    onClick?: () => void
}
const defaultOnClick = (): void => {
    console.log("Hello from ui using react-native")
}
const WrappedButton = ({onClick = defaultOnClick, text}: ButtonProps) => {
  return (
    <Button onClick={onClick} text={text}/>
  )
}

export default WrappedButton