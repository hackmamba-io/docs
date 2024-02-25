export function getFileUrl(file: File) {
  const url = URL.createObjectURL(file);
  // TODO: upload image here and use the url
  return url;
}

export function detectLanguage(code: string): string {
  if (!code) {
    return "Unknown";
  }

  const lines = code.trim().split("\n");

  // Check for single-line language declaration
  const singleLineMatch = code.match(/```(\w+)[\s\n]/);
  if (singleLineMatch) {
    return singleLineMatch[1].toLowerCase();
  }

  // Check for multi-line format (unchanged from previous version)
  if (lines.length >= 2 && lines[0].startsWith("```") && lines[1]) {
    const language = lines[1].trim();
    return language.toLowerCase();
  }

  return "Unknown";
}

export function extractCodeBlocks(markdown: string): string[] {
  const codeBlocks = [];

  // Split the markdown into blocks separated by empty lines
  const blocks = markdown.trim().split(/\n{2,}/);

  for (const block of blocks) {
    const lines = block.trim().split("\n");

    // Check for multi-line code blocks
    if (lines.length >= 2 && lines[0].startsWith("```")) {
      const content = lines
        .slice(1)
        .filter((line) => !line.startsWith("```"))
        .join("\n");
      codeBlocks.push(content);
    }

    // Check for single-line code blocks
    const singleLineMatch = block.match(/`(\w+)[\s\n]([^`]*)```/);
    if (singleLineMatch) {
      codeBlocks.push(singleLineMatch[2]);
    }
  }

  return codeBlocks;
}

