'use client'

import styles from "./styles/editor.module.css";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Image from '@tiptap/extension-image'
import Controller from "./Controller";


export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Image
    ],
    content: 'Hello World! 🌎️',
  })

  

  return (
    <div> 
      <Controller editor={editor} />
      <EditorContent className={'w-[400px] aspect-square ' + styles.editor} editor={editor} />
    </div>
  )
}