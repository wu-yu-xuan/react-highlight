import { useMemo } from 'react';
import { find } from 'react-highlight';

export default function useHighlight(text: string, searchWords: string[]) {
  return useMemo(() => find(text, searchWords), [
    text,
    JSON.stringify(searchWords)
  ]);
}
