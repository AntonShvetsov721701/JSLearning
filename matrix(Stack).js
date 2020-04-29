function spiralRound(entryArray) {
  var exitArray = [];
  //Повторяем действие пока entryArray не останентся пустым
  while (entryArray.length) {
    //Добавление в exitArray первого вложенного массива из entryArray. 
    //shift() возвращает первый вложенный массив и удаляет его из entryArray.
    exitArray.push(...entryArray.shift());
 
    //Добавляем в exitArray каждый последний элемент из каждого оставщегося массива в entryArray.
    //pop() возвращает последний элемент массива и удаляет его из исходного 
    entryArray.map(row => exitArray.push(row.pop()));
 
    //Разворачиваем оставщийся массив на 180 градусов
    entryArray.reverse().map(row => row.reverse());
  }
  //Возвращаем результат
  return exitArray;
}

let testArray = [];
console.log("0x0:" + spiralRound(testArray));

testArray = [
  [1]
];
console.log("1x1:" + spiralRound(testArray));

testArray = [
  [1, 2],
  [3, 4]
];
console.log("2x2:" + spiralRound(testArray));

testArray = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]
console.log("4x4:" + spiralRound(testArray));

testArray = [
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
  [1, 2, 3, 4, 12, 13, 14, 5, 7, 8],
]
console.log("10x10:" + spiralRound(testArray));