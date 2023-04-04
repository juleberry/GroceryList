// accessing elements
const inputBox = document.querySelector('input')
const btn = document.querySelector('button')
const itemList = document.getElementById('listItems')

// add event to each button element
btn.addEventListener("click", () => {
  const listItem = document.createElement('li');
  const inputText = inputBox.value;
  const listArea = document.createElement('div')
  listArea.textContent = inputText
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete";
  listItem.appendChild(listArea)
  listItem.appendChild(deleteBtn)
  itemList.appendChild(listItem)
  inputBox.value = ""
})

// add event to each item in list
itemList.addEventListener("click", (event) => {
  if (event.target.nodeName === 'BUTTON') {
    itemList.removeChild(event.target.parentNode)
  }
})