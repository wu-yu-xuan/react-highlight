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
        When in 
        <mark
          class="highlight"
        >
          the
        </mark>
         Course of human events it becomes necessary f
        <mark
          class="highlight"
        >
          or
        </mark>
         one people to dissolve 
        <mark
          class="highlight"
        >
          the
        </mark>
         political b
        <mark
          class="highlight"
        >
          and
        </mark>
        s which have connected 
        <mark
          class="highlight"
        >
          the
        </mark>
        m with ano
        <mark
          class="highlight"
        >
          the
        </mark>
        r 
        <mark
          class="highlight"
        >
          and
        </mark>
         to assume among 
        <mark
          class="highlight"
        >
          the
        </mark>
         powers of 
        <mark
          class="highlight"
        >
          the
        </mark>
         earth, 
        <mark
          class="highlight"
        >
          the
        </mark>
         separate 
        <mark
          class="highlight"
        >
          and
        </mark>
         equal station to which 
        <mark
          class="highlight"
        >
          the
        </mark>
         Laws of Nature 
        <mark
          class="highlight"
        >
          and
        </mark>
         of Nature's God entitle 
        <mark
          class="highlight"
        >
          the
        </mark>
        m, a decent respect to 
        <mark
          class="highlight"
        >
          the
        </mark>
         opinions of mankind requires that 
        <mark
          class="highlight"
        >
          the
        </mark>
        y should declare 
        <mark
          class="highlight"
        >
          the
        </mark>
         causes which impel 
        <mark
          class="highlight"
        >
          the
        </mark>
        m to 
        <mark
          class="highlight"
        >
          the
        </mark>
         separation.
      </span>
    </div>
  `);
});
