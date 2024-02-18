"use client";

import styles from "./styles/editor.module.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Image from "@tiptap/extension-image";
import CharacterCount from "@tiptap/extension-character-count";
import { Emoji } from "./Extensions/Emoji";
import MainMenu from "./Menus/MainMenu";
import FloatMenu from "./Menus/FloatMenu";
import PopMenu from "./Menus/PopMenu";
import WordCount from "./Utils/WordCount";

export default () => {
  const limit = 2000000;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Image,
      Emoji,
      CharacterCount.configure({
        limit,
      }),
    ],
    content: "Hello World! 🌎️",
  });

  return (
    <div className="w-full relative aspect-square ">
      <MainMenu editor={editor} />
      <FloatMenu editor={editor} />
      <PopMenu editor={editor} />
      <div className="flex h-full flex-col justify-between">
        <EditorContent className={styles.editor} editor={editor} />
        <WordCount editor={editor} limit={limit} />
      </div>
    </div>
  );
};
