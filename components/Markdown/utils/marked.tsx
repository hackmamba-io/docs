import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
const getEscapeReplacement = (ch: string) => escapeReplacements[ch];
function escape(html: string, encode: string | boolean) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);
marked.use({
  renderer: {
    code(code, infostring, escaped) {
      const self = this as any;
      const lang = ((infostring || "").match(/\S*/) || [])[0];
      if (self.options.highlight) {
        const out = self.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }

      code = code.replace(/\n$/, "") + "\n";

      if (!lang) {
        return (
          "<pre class='codeblock'" +
          (escaped ? code : escape(code, true)) +
          "</pre>\n"
        );
      }

      return (
        '<pre class="codeblock ' +
        (self.options.langPrefix || "lang-") +
        escape(lang, true) +
        '">' +
        (escaped ? code : escape(code, true)) +
        "</pre>\n"
      );
    },
  },
});

export default marked;
