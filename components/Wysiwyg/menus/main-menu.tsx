import { Editor } from "@tiptap/react";
import React from "react";
import { ImageButton } from "../buttons";
import { getImage } from "../utils";

type Props = {
  editor: Editor | null;
};

export default function MainMenu(props: Props) {
  const { editor } = props;
  if (!editor) return <div>Loading...</div>;

  return (
    editor && (
      <>
        <div className="bg-slate-300">
          <ImageButton onChange={getImage(editor)} />
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              (editor.isActive("bold") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              (editor.isActive("italic") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={
              (editor.isActive("strike") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            strike
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={
              (editor.isActive("code") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            code
          </button>
          {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            clear marks
          </button>
          <button onClick={() => editor.chain().focus().clearNodes().run()}>
            clear nodes
          </button> */}
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={
              (editor.isActive("paragraph") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            paragraph
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              (editor.isActive("heading", { level: 1 })
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            h1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              (editor.isActive("heading", { level: 2 })
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            h2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              (editor.isActive("heading", { level: 3 })
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            h3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              (editor.isActive("heading", { level: 4 })
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            h4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              (editor.isActive("heading", { level: 5 })
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            h5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              (editor.isActive("heading", { level: 6 })
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            h6
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              (editor.isActive("bulletList") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            bullet list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              (editor.isActive("orderedList")
                ? "bg-slate-600 text-white"
                : "") + " p-3"
            }
          >
            ordered list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={
              (editor.isActive("codeBlock") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            code block
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              (editor.isActive("blockquote") ? "bg-slate-600 text-white" : "") +
              " p-3"
            }
          >
            blockquote
          </button>
          <button
            className="p-3"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            horizontal rule
          </button>
          <button
            className="p-3"
            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            hard break
          </button>
          <button
            className="p-3"
            onClick={() => editor.chain().focus().undo().run()}
          >
            undo
          </button>
          <button
            className="p-3"
            onClick={() => editor.chain().focus().redo().run()}
          >
            redo
          </button>
        </div>
      </>
    )
  );
}
