let list = [1, 2, 3, 4];

let newList = [...list, 5];

let newnewList = [...list.slice(0, 2), 5, ...list.slice(2, 4)];

console.log(newnewList);
