

import { HLJSApi } from "highlight.js";
import { detectLanguage, extractCodeBlocks } from ".";


// CDN List https://cdnjs.com/libraries/highlight.js
export const setTheme = async (theme = "nord") => {
  return new Promise((resolve, reject) => {
    const base = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${theme}.min.css`;
    let link = document.querySelector<HTMLLinkElement>(`link[href="${base}"]`);
    if (link) document.head.removeChild(link);
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = base;
    document.head.appendChild(link);
    link.onload = () => resolve(true)
    link.onerror = () => reject(false)
  })
};

export const highlightInline = (hljs: HLJSApi, content: string) => {
  const m = document.createElement("div");
  m.innerHTML = hljs.highlight("markdown", content)?.value;
  const codes = m.querySelectorAll(".hljs-code");
  codes.forEach((code) => {
    const codeHTML = code.innerHTML;
    const lang = detectLanguage(codeHTML);
    code.setAttribute("data-lang", lang);
    const codeContent = extractCodeBlocks(codeHTML)[0];

    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    const convert = hljs.highlight(codeContent || "", {
      language,
    }).value;
    code.innerHTML = code.innerHTML.replace(codeContent, convert);
  });

  return m.innerHTML;
};
