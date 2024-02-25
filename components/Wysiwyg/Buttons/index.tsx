import React, { ChangeEvent, useRef } from "react";

export function ImageButton(props: {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
  const input = useRef<HTMLInputElement>(null);
  return (
    <button className="p-3" onClick={() => input.current?.click()}>
      Add Image
      <input
        type="file"
        ref={input}
        onChange={props.onChange}
        className="hidden"
      />
    </button>
  );
}
