const WRAPPER_ID = 'options_wrapper';
const SUMMARY_TEXT = 'Select Product';
const SEARCH_TEXT = 'Search';

class SelectWithSearch {
  constructor (element, handleClick) {
    this.element = element;
    this.summary = document.createElement('summary');
    this.summary.innerText = SUMMARY_TEXT;
    this.element.appendChild(this.summary);
    this.wrapper = document.createElement('div');
    this.handleClick = handleClick;
  }

  addList (textList) {
    this.textList = textList || [];
  }

  appendOption (text) {
    const li = document.createElement('li');
    li.addEventListener('click', () => this.handleClick(text));
    li.innerText = text;
    this.ul.appendChild(li);
  }

  showOptions ({ value }) {
    this.ul.innerHTML = '';
    if (value.length < 2) return;
    for (let i = 0; i < this.textList.length; i++) {
      const text = this.textList[i];
      if (text.toUpperCase().includes(value.toUpperCase())){
        this.appendOption(text);
      }
    }
  }

  createOptionsWrapper () {
    this.wrapper.className = 'options';
    this.wrapper.id = WRAPPER_ID;
    this.element.appendChild(this.wrapper);
  }

  createInput () {
    const input = document.createElement('input');
    input.placeholder = SEARCH_TEXT;
    input.addEventListener('keyup', (e) => this.showOptions(e.target));
    this.wrapper.appendChild(input);
  }

  createUL () {
    this.ul = document.createElement('ul');
    this.wrapper.appendChild(this.ul);
  }

  config () {
    this.createOptionsWrapper();
    this.createInput();
    this.createUL();
  }
}