import React from 'react';
import { ReactHighlightProps, useHighlight } from 'react-highlight';

export default function ReactHighlight(props: ReactHighlightProps) {
  const { highlightClassName, children, searchWords, ...rest } = props;
  const chunks = useHighlight(children, searchWords);

  return (
    <span {...rest}>
      {chunks.map(({ text, highlight }, index) => (
        <mark
          className={highlight ? highlightClassName : undefined}
          key={index}
        >
          {text}
        </mark>
      ))}
    </span>
  );
}
