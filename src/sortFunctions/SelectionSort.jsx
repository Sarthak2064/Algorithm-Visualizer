export async function* SelectionSort(array, swap, highlight, marksort) {
  if (array.length === 1) {
    marksort(0);
    yield;
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (var j = i + 1; j < array.length; j++) {
      yield await highlight([minIndex, j]);
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    yield await highlight([i, minIndex]);
    if (minIndex != i && array[minIndex] != array[i]) {
      yield await swap(i, minIndex);
    }
    marksort(i);
    yield;
  }
}
