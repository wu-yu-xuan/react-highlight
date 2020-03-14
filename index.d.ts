declare module 'react-highlight' {
  export interface Position {
    start: number;
    end: number;
  }

  export interface Chunk {
    highlight: boolean;
    text: string;
  }

  export interface ReactHighlightProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    > {
    children: string;
    searchWords: string[];
    highlightClassName: string;
  }

  export function find(text: string, searchWords: string[]): Chunk[];

  export function useHighlight(text: string, searchWords: string[]): Chunk[];

  export default function ReactHighlight(
    props: ReactHighlightProps
  ): React.ReactElement;
}
