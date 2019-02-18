
export const sortBubble = (arr) => {
  for (let index1 = 0; index1 < arr.length; index1 += 1) {
    for (let index2 = 0; index2 < arr.length - 1 - index1; index2 += 1) {
      if (arr[index2] > arr[index2 + 1]) {
        const temp = arr[index2];
        arr[index2] = arr[index2 + 1];
        arr[index2 + 1] = temp;
      }
    }
  }
  return arr;
};
