## Recursion

1. Write a recursive function to determine whether all digits of the number are odd or not.

| ### Input | ### Output |
| :-------- | :--------- |
| 4211133   | false      |
| 7791      | true       |
| 5         | true       |

[solution is here](https://github.com/Gayane25/Algorithms-DS/blob/master/ifOddTrue.js)

3. Given an array of numbers which is almost sorted in ascending order. Find the index
   where sorting order is violated.

| ### Input                 | ### Output |
| :------------------------ | :--------- |
| [2, 12, 15, 48, 64]       | -1         |
| [-9, -4, -4, 3, 12, 4, 5] | 5          |

[solution is here](https://github.com/Gayane25/Algorithms-DS/blob/master/violatedSortingOrder.js)

5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
   function that concats arrays).

| ### Input                    | ### Output          |
| :--------------------------- | :------------------ |
| [1, [3, 4, [1, 2]], 10]      | [1, 3, 4, 1, 2, 10] |
| [14, [1, [[[3, []]], 1], 0]] | [14, 1, 3, 1, 0]    |

[solution is here](https://github.com/Gayane25/Algorithms-DS/blob/master/flattensArr.js)

6. Given an array and a number N. Write a recursive function that rotates an array N
   places to the left. (Hint: to add element to the beginning use `javascript arr.unshift()`)

| ### Input                                   | ### Output                               |
| :------------------------------------------ | :--------------------------------------- |
| [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] ,3 | [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’] |
| [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2 | [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’] |

[solution is here](https://github.com/Gayane25/Algorithms-DS/blob/master/rotateToLeft.js)
