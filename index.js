// Get all draggable elements
const draggables = document.querySelectorAll(".list-group-item");

// Get all drop areas
const dropAreas = document.querySelectorAll(".slot, .dropzone");

// Add event listeners for drag and drop events
for (const draggable of draggables) {
    draggable.addEventListener("dragstart", (event) => {
        // Store the ID of the dragged element
        event.dataTransfer.setData("text/plain", event.target.id);
    });
}

for (const dropArea of dropAreas) {
    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dropArea.addEventListener("drop", (event) => {
        // Prevent default action
        event.preventDefault();

        // Get the ID of the dragged element
        const draggedElementId = event.dataTransfer.getData("text/plain");

        // Get the dragged element
        const draggedElement = document.getElementById(draggedElementId);

        // Append the dragged element to the drop area
        dropArea.appendChild(draggedElement);
    });
}


