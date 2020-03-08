import { find } from 'react-highlight';

/**
 * @see https://bvaughn.github.io/react-highlight-words/
 */
it('should find keywods', () => {
  const source =
    "When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";
  const searchWords = 'and or the'.split(' ');
  const result = [
    find(source, searchWords),
    find('', searchWords),
    find(source, [''])
  ];
  expect(result).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "highlight": false,
          "text": "When in ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " Course of human events it becomes necessary f",
        },
        Object {
          "highlight": true,
          "text": "or",
        },
        Object {
          "highlight": false,
          "text": " one people to dissolve ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " political b",
        },
        Object {
          "highlight": true,
          "text": "and",
        },
        Object {
          "highlight": false,
          "text": "s which have connected ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": "m with ano",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": "r ",
        },
        Object {
          "highlight": true,
          "text": "and",
        },
        Object {
          "highlight": false,
          "text": " to assume among ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " powers of ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " earth, ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " separate ",
        },
        Object {
          "highlight": true,
          "text": "and",
        },
        Object {
          "highlight": false,
          "text": " equal station to which ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " Laws of Nature ",
        },
        Object {
          "highlight": true,
          "text": "and",
        },
        Object {
          "highlight": false,
          "text": " of Nature's God entitle ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": "m, a decent respect to ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " opinions of mankind requires that ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": "y should declare ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " causes which impel ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": "m to ",
        },
        Object {
          "highlight": true,
          "text": "the",
        },
        Object {
          "highlight": false,
          "text": " separation.",
        },
      ],
      Array [
        Object {
          "highlight": false,
          "text": "",
        },
      ],
      Array [
        Object {
          "highlight": false,
          "text": "When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.",
        },
      ],
    ]
  `);
});
