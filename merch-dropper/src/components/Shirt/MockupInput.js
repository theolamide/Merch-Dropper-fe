import React from 'react'
import ShirtForm from './ShirtForm'

const MockupInput = (props) => {
  return (
    <div>
<ShirtForm garment={props.garment} setGarment={props.setGarment} handleScale={props.handleScale}/>
    </div>
  )
}

export default MockupInput
