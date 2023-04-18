import React from 'react'
import {  ButtonT } from './Type'

export default function Button(props:ButtonT):JSX.Element {
  const {change, customBgColor, customTextcolor, defaultBgColor, defaultTextcolor, isDefault} = props
   
  return (
    <div style={{ backgroundColor:(  isDefault?  defaultBgColor: customBgColor ) , width: "600px", minHeight: "400px"}}>
      <p style={{fontSize:'40px', color:(isDefault?  defaultTextcolor: customTextcolor)}}>text</p>
      <button type='button' onClick={change}>change color</button>
    </div>
  )
}
