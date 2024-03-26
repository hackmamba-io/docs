import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import getPDFstyles from "./getPDFstyles";
import marked from "marked";
import toImage from "dom-to-image"
import download from "downloadjs"
import html2pdf from "html2pdf.js"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleSaveAsHTML(code: string) {
  const fileName = prompt("Name your file", "mark.html");
  if (!fileName) {
    return;
  }
  const file = createFile(marked(code));
  const fileNameWithExt =
    fileName.replace(/.html$/, "") + ".html" || "mark.html";
  exportFile(fileNameWithExt, file);
}

export function handleSaveFile(code: string) {
  const fileName = prompt("Name your file", "mark.md");
  if (!fileName) {
    return;
  }
  const file = createFile(code);
  const fileNameWithExt = fileName.replace(/.md$/, "") + ".md" || "mark.md";
  exportFile(fileNameWithExt, file);
}

async function handleSaveAsPDF(code: string) {
  try {
    let htmlString = marked(code);
    htmlString += `<style>
    ${getPDFstyles()}
    </style>`;
    const options = {
      margin: 0.25,
      filename: "mark.pdf",
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(htmlString, "string").to("pdf").save();
  } catch (err) {
    console.error(err);
  }
}
export async function handleSaveAsImage() {
  try {

    setTimeout(() => {
      toImage
        .toBlob(document.querySelector(".markdown-preview"), {
          bgcolor: "#fff",
        })
        .then((blob: any) => {
          download(blob, `mark.png`, "image/png");
        
        })
        .catch((err: any) => {
          console.error(err);
        });
    }, 250);
  } catch (err) {
    console.error(err);
  }
}

function createFile(data: any) {
  return new Blob([data], { type: "text/plain" });
}

function exportFile(filename: string, file: File | Blob | string, generateDataURI = true) {
  const a = document.createElement("a");
  document.body.appendChild(a);
  let uri;
  if (generateDataURI) {
    uri = window.URL.createObjectURL(file as File);
  } else {
    uri = file as string;
  }
  a.href = uri;
  a.download = filename;
  a.click();
  document.body.removeChild(a);
}
