export function calcNumberSum(numberArray) {
  const INITIAL_SUM = 0;
  return numberArray.reduce((sum, number) => sum + number, INITIAL_SUM);
}
