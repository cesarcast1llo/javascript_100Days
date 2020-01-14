// function solution(X) {
var arr = [
  // { id: 100, parentID: -1, Name: 'Business', Keyword: 'Money' },
  // { id: 200, parentID: -1, Name: 'Tutoring', Keyword: 'Teaching' },
  // { id: 101, parentID: 100, Name: 'Accounting', Keyword: 'Taxes' },
  // { id: 102, parentID: 100 },
  // { id: 201, parentID: 200 },
  // { id: 103, parentID: 101 },
  // { id: 202, parentID: 201 },
  // { id: 109, parentID: 101 }

  {
    id: 100,
    parentId: -1,
    name: 'Business',
    keyword: 'Money',
    children: [
      {
        id: 101,
        parentId: 100,
        name: 'Accounting',
        keyword: 'Taxes',
        children: [
          { id: 103, parentId: 101 },
          { id: 109, parentId: 101 }
        ]
      },
      { id: 102, parentId: 100 }
    ]
  },

  {
    id: 200,
    parentId: -1,
    name: 'Tutoring',
    keyword: 'Teaching',
    children: [
      { id: 201, parentId: 200, children: [{ id: 202, parentId: 201 }] }
    ]
  }
  // hierchy -1, 100/200, 101/102/201, 103/202/109 -CHECK
  // loop through array, and figure out hierchy
  //loop again for keyword, if has none, use hierchy to find parent and pull keyword
];

function solution(id, keyword) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].id === id) {
      if (arr[i].hasOwnProperty(keyword) === true) {
        return arr[i][keyword];
      } else {
        return 'dont have have ' + keyword;
      }
    }
  }
  return id + ` doesn't have id // where we make func looking for parents id`;
}
console.log(solution(100, 'keyword'));

// var lookup = {};

// function mapIt(node) {
//   lookup[node.id] = node;
//   node.children;
// }

// mapIt(arr);
// console.log(arr);

// function findAncestors(nodeId) {
//   var ancestors = [];
//   var parentId = lookup[nodeId] && lookup[nodeId].parentId;
//   while (parentId !== undefined) {
//     ancestors.unshift(parentId);
//     parentId = lookup[parentId] && lookup[parentId].parentId;
//   }
//   return ancestors;
// }
