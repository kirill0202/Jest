export const filterArray = <T>(
  array: T[],
  callback: (a: any) => boolean
): T[] => {
  const newArray: T[] = [];
  for (let i = 0; i < array.length; i++) {
    console.log("array[i]", array[i]);
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
