const originObj = { list: [1, 2, 3] };

const aliasForList = originObj.list;

aliasForList[0] = 42;

console.log(originObj.list);

//list: [42, 2, 3]

const { list } = originObj;

originObj.list = [100, 200, 300];

console.log(originObj.list); // [42, 2, 3]
console.log(list); // [100, 200, 300]
