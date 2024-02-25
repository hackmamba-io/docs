
export type CodejarOptions = {
  tab: string;
  indentOn: RegExp;
  spellcheck: boolean;
  catchTab: boolean;
  preserveIdent: boolean;
  history: boolean;
  window: any;
  addClosing: boolean;
};

export interface Props {
  highlight: (e: HTMLElement, pos?: Position) => void;
  options?: Partial<CodejarOptions>;
  code: string;
  style: React.CSSProperties;
  onUpdate: (code: string) => void;
  lineNumbers?: boolean;
}


export type Options = {
  tab: string
  indentOn: RegExp
  moveToNewLine: RegExp
  spellcheck: boolean
  catchTab: boolean
  preserveIdent: boolean
  addClosing: boolean
  history: boolean
  window: typeof window
}

export type HistoryRecord = {
  html: string
  pos: Position
}

export type Position = {
  start: number
  end: number
  dir?: '->' | '<-'
}



