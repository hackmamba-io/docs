import WysiwygEditor from "@/components/wysiwyg/editor";
import MarkdownEditor from "@/components/default-editor/editor";
import MarkdownPreview from "@/components/default-editor/preview";
import React, { useState } from "react";

export default function index() {
  const [code, setCode] = useState("");
  return (
    <div className="w-[100vh] items-end">
      <div className="flex flex-row items-end">
        <div className="w-full">
          <MarkdownEditor onChange={(code) => setCode(code)} />
        </div>
        <div className="w-full">
          <MarkdownPreview code={code} />
        </div>
      </div>
      <WysiwygEditor />
    </div>
  );
}
