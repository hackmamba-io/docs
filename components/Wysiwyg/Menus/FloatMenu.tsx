import { Editor, FloatingMenu } from "@tiptap/react";
import React from "react";

export default function FloatMenu(props: { editor: Editor | null }) {
  const { editor } = props;
  return (
    editor && (
      <FloatingMenu
        className="floating-menu"
        tippyOptions={{ duration: 100 }}
        editor={editor}
      >
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            (editor.isActive("heading", { level: 1 })
              ? "bg-slate-700 text-white"
              : "") + " p-3 bg-slate-200"
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            (editor.isActive("heading", { level: 2 })
              ? "bg-slate-700 text-white"
              : "") + " p-3 bg-slate-200"
          }
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            (editor.isActive("bulletList") ? "bg-slate-700 text-white" : "") +
            " p-3 bg-slate-200"
          }
        >
          Bullet List
        </button>
      </FloatingMenu>
    )
  );
}
