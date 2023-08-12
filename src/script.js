const details = document.querySelector('#product_picker');

const handleClick = (value) => console.log(value);

const select = new SelectWithSearch(details, handleClick);
select.config();
select.addList(TEXT_DATA);