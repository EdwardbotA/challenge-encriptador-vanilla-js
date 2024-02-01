const textToWork = document.querySelector('textarea')
const encryptBtn = document.querySelector('.encrypt-btn')
const decryptBtn = document.querySelector('.decrypt-btn')
const paragraphResult = document.querySelector('.result-text-container p')
const infoPlaceholder = document.querySelector('.result-none-container')

const dictionary = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encrypt(e) {
  e.preventDefault()

  let phrase = textToWork.value;
  let newPhrase = ''

  for (let i = 0; i < phrase.length; i++) {
    const isAbleToEncryp = Object.keys(dictionary).includes(phrase[i]);

    if (isAbleToEncryp) {
      newPhrase += dictionary[phrase[i]];
    } else {
      newPhrase += phrase[i];
    }
  }

  paragraphResult.parentElement.classList.remove('inactive')
  paragraphResult.innerText = newPhrase
  infoPlaceholder.classList.add('inactive')
}

function decrypt(e) {
  e.preventDefault()

  let newPhrase = textToWork.value;

  for (const key in dictionary) {
    const element = dictionary[key];
    while (newPhrase.includes(element)) {
      newPhrase = newPhrase.replace(element, key);
    }
  }

  paragraphResult.parentElement.classList.remove('inactive')
  paragraphResult.innerText = newPhrase
  infoPlaceholder.classList.add('inactive')

}

encryptBtn.addEventListener('click', encrypt)
decryptBtn.addEventListener('click', decrypt)