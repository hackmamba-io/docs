import React, { useEffect, useState } from "react";
import marked from "./Utils/marked";
import preview from "./Styles/preview.module.css";

interface Props {
  code: string;
}

export default function Preview({ code }: Props) {
  const [$code, setCode] = useState("");
  useEffect(() => {
    (async () => {
      setCode(await marked.parse(code));
    })();
  }, [code]);
  return (
    <div className={"bg-slate-200 w-[200px] h-[200px] " + preview.wrapper}>
      <div dangerouslySetInnerHTML={{ __html: $code }}></div>
      {/* {$code} */}
    </div>
  );
}
