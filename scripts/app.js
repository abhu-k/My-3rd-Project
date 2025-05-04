// Select the button and container where lists will be added
const addListBtn = document.getElementById("addList");
const listsContainer = document.querySelector(".lists"); // Add this class to your HTML container

// Counter to track list IDs (optional)
let listCount = 0;

// Function to create a new list
function createNewList() {
  listCount++;

  // Create a new list element
  const newList = document.createElement("div");
  newList.className = "list";
  newList.innerHTML = `
    <h3>List ${listCount}</h3>
    <ul class="tasks">
      <li>Task 1</li>
      <li>Task 2</li>
    </ul>
    <button class="delete-list">Delete</button>
  `;

  // Add delete functionality
  const deleteBtn = newList.querySelector(".delete-list");
  deleteBtn.addEventListener("click", () => {
    newList.remove();
  });

  // Append the new list to the container
  listsContainer.appendChild(newList);
}

// Attach the event listener to the button
addListBtn.addEventListener("click", createNewList);
