import WysiwygEditor from "@/components/Wysiwyg/Editor";
import MarkdownEditor from "@/components/Markdown/Editor";
import MarkdownPreview from "@/components/Markdown/Preview";
import Editor from "@/components/Wysiwyg/Editor";
import React, { useState } from "react";

export default function index() {
  const [code, setCode] = useState("");
  return (
    <div className=" w-full flex flex-row items-end">
      <MarkdownEditor onChange={(code) => setCode(code)} />
      <MarkdownPreview code={code} />
      <WysiwygEditor />
    </div>
  );
}
