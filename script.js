// accessing elements
const inputBox = document.querySelector('input')
const btn = document.querySelector('button')
const itemList = document.getElementById('listItems')
const addItemBtn = document.getElementById("addItemBtn")
// const itemListArea = document.getElementById("listItems")
const newItem = document.getElementById('newItem')

// add event to each button element button will only work if there is value
btn.addEventListener("click", () => {
  if (inputBox.value !== "") {
  const listItem = document.createElement('li');
  listItem.classList.add('eachItem')
  listItem.id = "newItem"
  const inputText = inputBox.value;
  const listArea = document.createElement('div')
  listArea.id = "strike"
  listArea.id = "eachItem"
  listArea.id = "listItem"
  listArea.textContent = inputText
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtns")
  listItem.appendChild(listArea)
  listItem.appendChild(deleteBtn)
  itemList.appendChild(listItem)
  inputBox.value = ""
  } else {
    alert("You did not enter an item. Please try again.")
  }
})

// enables user to hit "enter" instead of having to click; set to only work when input has value
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
    }
  }
})