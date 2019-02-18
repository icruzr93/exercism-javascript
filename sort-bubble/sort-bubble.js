
export const sortBubble = (arr) => {
  for(let i1 = 0; i1 < arr.length; i1++){
    for(let i2 = 0; i2 < arr.length; i2++){
      if(arr[i2] > arr[i1]){
        let temp = arr[i2];
        arr[i2] = arr[i1];
        arr[i1] = temp;
      }
    }
  }
  return arr;
};
