import hljs from "highlight.js";
import React, { useCallback, useEffect } from "react";
import { useCodeJar } from "./utils/codejar/hook";
import { setTheme, highlightInline } from "./utils/hljs-config";
import themes from "./utils/themes";
import { registerSupportedCodeLanguages } from "./utils/languages";
import { ImageButton } from "./lib/button/img";
import { getFileUrl } from "./utils";

interface Props {
  onChange: (value: string) => void;
}

registerSupportedCodeLanguages(hljs);

export default function Editor({ onChange }: Props) {
  const [code, setCode] = React.useState("");

  const updateTheme = useCallback((s: string) => setTheme(s), []);

  const editorRef = useCodeJar({
    options: { tab: "\t" },
    onUpdate: setCode,
    lineNumbers: false,
    style: {},
    code,
    highlight(e) {
      const c = e.textContent || "";
      e.innerHTML = highlightInline(hljs, c);
    },
  });

  useEffect(() => {
    updateTheme("nord");
  }, []);

  useEffect(() => {
    onChange && onChange(code);
  }, [code]);

  return (
    <div>
      <select onChange={(e) => updateTheme(e.target.value)}>
        <option value="" disabled={true}>
          -- Select --
        </option>
        {themes.map((theme, idx) => (
          <option key={idx} value={theme.value}>
            {theme.label} Theme
          </option>
        ))}
      </select>
      <ImageButton
        onChange={(e) => {
          const file = (e.target.files || [])[0];
          const imgUrl = getFileUrl(file);
          setCode((code) => `${code}\n![${file?.name}](${imgUrl})`);
        }}
      />
      <div ref={editorRef} className="bg-slate-200 p-3 hljs w-full h-[200px]">
        &nbsp;
      </div>
    </div>
  );
}
