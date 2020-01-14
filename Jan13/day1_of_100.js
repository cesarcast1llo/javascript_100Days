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
  // hierchy -1, 100/200, 101/102/201, 103/202/109 - CHECK
  // loop through array, and figure out hierchy - CHECK
  // structured with children to figure out the hiercharchy
  //loop again for keyword, if has none, use hierchy to find parent and pull keyword - almost CHECK
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
// passes in parameter into `solution(x)`
// if it has keyword, it returns it. if not, says don't have keyword
// if doesn't have an ID, returns don't have an ID

// next - in the else statement, figure out it's parent, if parent has an ID take it
// all elements in arr have keyword, or have parent that does - all elements return something
