const romanInt = (roman) => {
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    if (symbols[roman[i]] < symbols[roman[i + 1]]) {
      total -= symbols[roman[i]];
    } else {
      total += symbols[roman[i]];
    }
  }
  return total;
};
