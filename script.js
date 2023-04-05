// accessing elements
const inputBox = document.querySelector('input')
const btn = document.querySelector('button')
const itemList = document.getElementById('listItems')
const addItemBtn = document.getElementById("addItemBtn")

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

// enables user to hit "enter" instead of having to click; only works when input has value
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && inputBox.value) {
    event.preventDefault()
    document.getElementById("addItemBtn").click();
  }
})

// add event to each item in list
// prompts user to confirm deletion of item
itemList.addEventListener("click", (event) => {
  if (event.target.nodeName === 'BUTTON') {
    if (confirm("Are you sure you want to delete this item?")) {
    itemList.removeChild(event.target.parentNode)
    } else {

    }
  }
})