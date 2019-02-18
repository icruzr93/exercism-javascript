
export const sortSelection = (arr) => {
  for (let index1 = 0; index1 < arr.length; index1 += 1) {
    let minIndex = index1;
    for (let index2 = index1 + 1; index2 < arr.length; index2 += 1) {
      if (arr[minIndex] > arr[index2]) {
        minIndex = index2;
      }
    }
    const temp = arr[minIndex];
    arr[minIndex] = arr[index1];
    arr[index1] = temp;
  }
  return arr;
};
