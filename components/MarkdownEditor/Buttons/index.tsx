import React, { useRef } from 'react'

export function ImageButton(props: { onChange: any }) {
  const input = useRef<HTMLInputElement>(null);
  return (
    <button onClick={() => input.current?.click()}> 
      Add Image
      <input type="file" ref={input} onChange={props.onChange} className='hidden'/>
    </button>
  )
}
