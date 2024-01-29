const word =
  "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

const dictionary = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encrypt(phrase) {
  let newPhrase = "";
  for (let i = 0; i < phrase.length; i++) {
    const isAbleToEncryp = Object.keys(dictionary).includes(phrase[i]);

    if (isAbleToEncryp) {
      newPhrase += dictionary[phrase[i]];
    } else {
      newPhrase += phrase[i];
    }
  }

  return newPhrase;
}

function decrypt(phrase) {
  let newPhrase = phrase;

  for (const key in dictionary) {
    const element = dictionary[key];
    while (newPhrase.includes(element)) {
      newPhrase = newPhrase.replace(element, key);
    }
  }

  return newPhrase;
}

console.log(decrypt(word));
encrypt(word);
