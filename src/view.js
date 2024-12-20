import onChange from 'on-change';
import anime from 'animejs';

export default (state, elements) => {
  const getSpan = (textContent) => {
    const span = document.createElement('span');
    span.textContent = textContent;
    span.style.display = 'inline-block';
    span.style.transform = 'scale(0.5)';
    span.style.opacity = 0;
    anime({
      targets: span,
      easing: 'linear',
      duration: 300,
      scale: 1,
      opacity: 1,
    });
    return span;
  };
  const handleCountSymbols = (text) => {
    const countSymbols = text.split('').filter((item) => item !== ' ').length;
    elements.countOfSymbols.textContent = 'Количество символов: ';
    const span = getSpan(countSymbols);
    elements.countOfSymbols.append(span);
  };

  const handleCountWords = (text) => {
    const countWords = text !== '' ? text.trim().split(' ').length : 0;
    elements.countOfWords.textContent = 'Количество слов: ';
    const span = getSpan(countWords);
    elements.countOfWords.append(span);
  };

  const handleTheLongestWord = (text) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const alphabetUpper = alphabet.toUpperCase();
    const array = text.split('').filter((symbol) => alphabet.includes(symbol) || alphabetUpper.includes(symbol));
    const words = array.join('').split(' ');
    words.sort((word1, word2) => word1.length - word2.length);
    const bigWord = words[words.length - 1];
    elements.theLongestWord.textContent = 'Самое длинное слово: ';
    const span = getSpan(bigWord);
    elements.theLongestWord.append(span);
  };

  const watchedState = onChange(state, (path, value) => {
    if (path === 'text') {
      handleCountSymbols(value);
      handleCountWords(value);
      handleTheLongestWord(value);
    }
  });
  return watchedState;
};
