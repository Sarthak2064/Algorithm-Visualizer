export async function* OddEvenSort(array, swap, highlight, marksort) {
  let sorted = false;
  let n = array.length;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < n - 1; i += 2) {
      yield await highlight([i, i + 1]);
      if (array[i] > array[i + 1]) {
        yield await swap(i, i + 1);
        sorted = false;
      }
    }
    for (let i = 0; i < n - 1; i += 2) {
      yield await highlight([i, i + 1]);
      if (array[i] > array[i + 1]) {
        yield await swap(i, i + 1);
        sorted = false;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    marksort(i);
  }
}
