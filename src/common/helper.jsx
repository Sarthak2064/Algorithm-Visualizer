// replaceall regex to string (g - global search flag)
export function convertInputToArrayString(string) {
  string = string.replaceAll(/\s/g, ""); // space
  string = string.replaceAll(/\d{4}/g, ""); // 4 contiguous digits
  string = string.replaceAll(/\s\s/g, " "); // 2 spaces
  string = string.replaceAll(/\s,/g, ","); // space and comma
  string = string.replaceAll(/,,/g, ","); // 2 commas
  string = string.replaceAll(/[^0-9,\s]/g, ""); // characters other than 0-9
  return string;
}

export function convertArrayStringToArray(string) {
  return string
    .split(",") // splits by commas
    .filter((v) => v !== "") // deletes empty strings in array
    .map((v) => +v); // converts strings to numbers
}

// returns array of size 'length' initialized with random numbers
export function getRandomArray(length = generateRandomNumberInRange(5, 30)) {
  return Array.from(new Array(length), () => generateRandomNumberInRange());
}

export function getScreenWidth() {
  return window.innerWidth; // includes width of vertical scrollbar
}

// return resolved promise after delay of 'time'
export function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// returns random numbers between min and max
function generateRandomNumberInRange(lowerLimit = 0, upperLimit = 999) {
  return lowerLimit + Math.floor(Math.random() * upperLimit);
}
