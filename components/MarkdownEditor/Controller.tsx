import { Editor } from '@tiptap/react'
import React from 'react'
import { ImageButton } from './Buttons'
import { getImage } from './utils'

type Props = {
  editor: Editor | null
}

export default function Controller(props: Props) {
  return (
    <div>
      <ImageButton onChange={getImage(props.editor)} />
    </div>
  )
}
