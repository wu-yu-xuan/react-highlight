import { useState, useEffect } from 'react';
import { Chunk, find } from 'react-highlight';

export default function useHighlight(text: string, searchWords: string[]) {
  const [chunks, setChunks] = useState<Chunk[]>([{ text, highlight: false }]);
  useEffect(() => {
    setChunks(find(text, searchWords));
  }, [text, searchWords]);
  return chunks;
}
