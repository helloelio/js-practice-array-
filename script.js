const names = ['wes', 'kait', 'snickers', 'wes'];
console.log(names);
console.log('Last element in array: ' + names[names.length - 1]);
console.log('this is array? ' + Array.isArray(names));

// ==========

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
const numbersReverse = numbers.reverse();
console.log(numbersReverse);

// ==============

const comments = [
  { text: 'Cool Beans', id: 123 },
  { text: 'Love this', id: 133 },
  { text: 'Neato', id: 233 },
  { text: 'good bikes', id: 333 },
  { text: 'so good', id: 433 },
];

const kaitIndex = names.findIndex((name) => name === 'kait');
console.log(kaitIndex);

const newNamesWithOutKait = [
  // get everything up to the kait index
  ...names.slice(0, kaitIndex),
  // everything after
  ...names.slice(kaitIndex + 1),
];

console.log(newNamesWithOutKait);

let deleteComment = (id, comments) => {
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
};
console.log(comments);

console.log(deleteComment(233, comments));
