import { Editor } from "@tiptap/react";
import { ChangeEvent } from "react";


export const getFileUrl = (file: File) => {
  const url = URL.createObjectURL(file);
  // TODO: upload image here and use the url
  return url;
}


export const getImage = (editor: Editor | null) => (e: ChangeEvent<HTMLInputElement>) => {
  const file = (e.target.files || [])[0];
  if (!file) return;
  const url = getFileUrl(file);
  if (url) {
    editor!.chain().focus().setImage({ src: url }).run()
  }
}
