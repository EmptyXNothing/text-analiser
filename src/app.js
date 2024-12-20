import watch from './view.js';

const app = () => {
  const state = {
    text: '',
  };

  const elements = {
    textArea: document.querySelector('textarea'),
    countOfSymbols: document.querySelector('.count-symbols'),
    countOfWords: document.querySelector('.count-words'),
    theLongestWord: document.querySelector('.the-longest-word'),
  };
  const watchedState = watch(state, elements);
  elements.textArea.addEventListener('input', () => {
    watchedState.text = elements.textArea.value;
  });
};

export default app;
