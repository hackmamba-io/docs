import { Editor } from "@tiptap/react";
import React from "react";

export default function WordCount(props: {
  editor: Editor | null;
  limit?: number;
}) {
  const editor = props.editor;
  const limit = props.limit || 200000;
  return (
    editor && (
      <div>
        {editor?.storage.characterCount.characters() || 0}/{limit} characters
      </div>
    )
  );
}
