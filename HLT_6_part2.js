const fruits = [
  "Apple",
  "Orange",
  "Banana",
  "Pear",
  "Peach",
  "Strawberry",
  "Cherry",
  "Acai",
];
fruity = (fruits) => {
  //array for vowels
  const vow = ["a", "e", "i", "o", "u"];

  //loop through array of fruits
  for (let i = 0; i < fruits.length; i++) {
    word = fruits[i];
    function countVowel(word) {
      // initialize count for vowels and consonants
      let vCount = 0;
      let cCount = 0;
      // loop through string to test if each character is a vowel
      for (let letter of fruits[i].toLowerCase()) {
        if (vow.includes(letter)) {
          vCount++;
          // if its not a vowel, then it is a consonant
        } else {
          cCount++;
        }
      }

      // return number of vowels
      return `${fruits[i]} has ${vCount} vowels and ${cCount} consonants.`;
    }
    const result = countVowel(fruits);

    console.log(result);
  }
};

fruity(fruits);
