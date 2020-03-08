import escapeRegExp from './escapeRegExp';
import { Position, Chunk } from 'react-highlight';

/**
 * it's very functional :)
 * @param text
 * @param searchWords
 */
export default function find(text = '', searchWords: string[] = []): Chunk[] {
  const result = searchWords
    .filter(searchWord => searchWord)
    .map(searchWord => escapeRegExp(searchWord))
    .reduce<Position[]>((prev, next) => {
      const regexp = new RegExp(next, 'gi');
      let match;
      while ((match = regexp.exec(text))) {
        const start = match.index;
        const end = regexp.lastIndex;
        /**
         * @see https://blog.mscorlib.top/blog/%E6%8A%80%E6%9C%AF/%E5%89%8D%E7%AB%AF/%E8%BD%AC%E8%BD%BD/Watch-Out-for-Zero-Length-Matches
         */
        if (start === end) {
          regexp.lastIndex++;
        }
        prev.push({ start, end });
      }
      return prev;
    }, [])
    .sort((a, b) => a.start - b.start)
    .reduce<Position[]>((prev, next) => {
      if (prev.length === 0) {
        return [next];
      }
      const last = prev[prev.length - 1];
      if (last.end >= next.start) {
        // 两者发生重叠
        last.end = Math.max(last.end, next.end);
        return prev;
      }
      return [...prev, next];
    }, [])
    .reduce<Chunk[]>(
      (prev, next, index, arr) =>
        index === arr.length - 1
          ? [
              ...prev,
              {
                highlight: false,
                text: text.slice(arr[index - 1]?.end ?? 0, next.start)
              },
              {
                highlight: true,
                text: text.slice(next.start, next.end)
              },
              {
                highlight: false,
                text: text.slice(next.end)
              }
            ]
          : [
              ...prev,
              {
                highlight: false,
                text: text.slice(arr[index - 1]?.end ?? 0, next.start)
              },
              {
                highlight: true,
                text: text.slice(next.start, next.end)
              }
            ],
      []
    )
    .filter(chunk => chunk.text);
  return result.length ? result : [{ text, highlight: false }];
}
