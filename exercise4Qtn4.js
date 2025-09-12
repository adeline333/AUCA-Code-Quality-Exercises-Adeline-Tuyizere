const reverseVowels = (str) => {
  const vowels = "aeiouAEIOU";
  const arr = str.split("");

  const vowelChars = arr.filter((char) => vowels.includes(char));

  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = vowelChars.pop();
    }
  }
  return arr.join("");
};
