import { render } from '@testing-library/react';
import ReactHighlight from 'react-highlight';
import React from 'react';

it('should render ReactHighlight', () => {
  const source =
    "When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";
  const searchWords = 'and or the'.split(' ');
  const highlightClassName = 'highlight';
  const { container } = render(
    <ReactHighlight
      searchWords={searchWords}
      highlightClassName={highlightClassName}
    >
      {source}
    </ReactHighlight>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <span>
        <mark>
          When in 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           Course of human events it becomes necessary f
        </mark>
        <mark
          class="highlight"
        >
          or
        </mark>
        <mark>
           one people to dissolve 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           political b
        </mark>
        <mark
          class="highlight"
        >
          and
        </mark>
        <mark>
          s which have connected 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
          m with ano
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
          r 
        </mark>
        <mark
          class="highlight"
        >
          and
        </mark>
        <mark>
           to assume among 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           powers of 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           earth, 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           separate 
        </mark>
        <mark
          class="highlight"
        >
          and
        </mark>
        <mark>
           equal station to which 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           Laws of Nature 
        </mark>
        <mark
          class="highlight"
        >
          and
        </mark>
        <mark>
           of Nature's God entitle 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
          m, a decent respect to 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           opinions of mankind requires that 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
          y should declare 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           causes which impel 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
          m to 
        </mark>
        <mark
          class="highlight"
        >
          the
        </mark>
        <mark>
           separation.
        </mark>
      </span>
    </div>
  `);
});
