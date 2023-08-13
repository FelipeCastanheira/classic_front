const WRAPPER_ID = 'options_wrapper';
const SEARCH_TEXT = 'Search';

class SelectWithSearch {
  constructor (element, handleClick) {
    this.element = element;
    this.wrapper = document.createElement('div');
    this.handleClick = handleClick;
    this.textList = [];
  }

  addList (textList) {
    this.textList = textList.map((item) => {
      const upperText = item.text.toUpperCase();
      return {...item, upperText }
    });
  }

  appendOption (item) {
    const li = document.createElement('li');
    const { upperText, ...itemProps } = item;
    li.addEventListener('click', () => {
      this.handleClick(itemProps);
      this.reset();
    });
    li.innerText = item.text;
    this.ul.appendChild(li);
  }

  showOptions ({ value }) {
    this.ul.innerHTML = '';
    if (value.length < 2) return;
    const upperCaseValue = value.toUpperCase();
    for (let i = 0; i < this.textList.length; i++) {
      const item = this.textList[i];
      if (item.upperText.includes(upperCaseValue)){
        this.appendOption(item);
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
    this.input = input;
    this.wrapper.appendChild(input);
  }

  createUL () {
    this.ul = document.createElement('ul');
    this.wrapper.appendChild(this.ul);
  }

  reset () {
    this.input.value = '';
    this.ul.innerHTML = '';
  }

  config () {
    this.createOptionsWrapper();
    this.createInput();
    this.createUL();
  }
}