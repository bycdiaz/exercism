const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const colorCode = (input) => {
  return colors.indexOf(input.toLowerCase());
};

export const decodedValue = (input) => {
  return Number(input.slice(0,2).map(color => colorCode(color)).join(''))
};