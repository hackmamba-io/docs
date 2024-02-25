import { BubbleMenu, Editor } from "@tiptap/react";
import React from "react";

export default function PopMenu(props: { editor: Editor | null }) {
  const { editor } = props;
  return (
    editor && (
      <BubbleMenu
        className="bubble-menu"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            (editor.isActive("bold") ? "p-3 bg-slate-700" : "") +
            "p-3 bg-slate-100"
          }
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            (editor.isActive("italic") ? "p-3 bg-slate-700" : "") +
            "p-3 bg-slate-100"
          }
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            (editor.isActive("strike") ? "p-3 bg-slate-700" : "") +
            "p-3 bg-slate-100"
          }
        >
          Strike
        </button>
      </BubbleMenu>
    )
  );
}
