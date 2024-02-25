import javascript from "highlight.js/lib/languages/javascript";
import markdown from "highlight.js/lib/languages/markdown";
import golang from "highlight.js/lib/languages/go";
import php from "highlight.js/lib/languages/php";
import java from "highlight.js/lib/languages/java";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import plaintext from "highlight.js/lib/languages/plaintext";
import { HLJSApi } from "highlight.js";

export const supported = {
  java,
  javascript,
  markdown,
  php,
  bash,
  plaintext,
  typescript,
  golang,
}

export function registerSupportedCodeLanguages(hljs: HLJSApi) {
  Object.entries(supported).map(([key, value]) => hljs.registerLanguage(key, value));
}

