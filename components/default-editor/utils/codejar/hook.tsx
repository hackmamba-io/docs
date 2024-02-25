import * as React from "react";
import { CodeJar } from "./codejar";
import { getCaretOffset, setCurrentCursorPosition } from "./caret";
import { Props } from "./types";

export const useCodeJar = (props: Props) => {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const jar = React.useRef<CodeJar | null>(null);
  const [cursorOffset, setCursorOffset] = React.useState(0);

  React.useEffect(() => {
    if (!editorRef.current) return;
    const highlight = props.highlight;

    jar.current = CodeJar(editorRef.current, highlight, props.options, window);
    jar.current.updateCode(props.code);
    jar.current.onUpdate((txt) => {
      if (!editorRef.current) return;
      setCursorOffset(getCaretOffset(editorRef.current));
      props.onUpdate(txt);
    });

    return () => jar.current!.destroy();
  }, []);

  React.useEffect(() => {
    if (!jar.current || !editorRef.current) return;
    jar.current.updateCode(props.code);
    setCurrentCursorPosition(editorRef.current, cursorOffset);
  }, [props.code]);

  React.useEffect(() => {
    if (!jar.current || !props.options) return;
    jar.current.updateOptions(props.options);
  }, [props.options]);

  return editorRef;
};
