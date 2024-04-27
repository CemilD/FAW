class ShowArea {
    constructor() {
        this.dropzone = document.getElementById('dropzone');
        this.dropzone.addEventListener('dragover', this.handleDragOver.bind(this));
        this.dropzone.addEventListener('drop', this.handleDrop.bind(this));
    }

    handleDragOver(event) {
        event.preventDefault();
        this.dropzone.classList.add('dragover');
    }

    handleDrop(event) {
        event.preventDefault();
        this.dropzone.classList.remove('dragover');
        const files = event.dataTransfer.files;
        // Hier können Sie den Code zum Verarbeiten der hochgeladenen Dateien hinzufügen
    }
}

class ComponentsList {
    constructor() {
        this.list = document.getElementById('components-list');
    }

    addComponent(componentName) {
        const listItem = document.createElement('li');
        listItem.textContent = componentName;
        this.list.appendChild(listItem);
    }
}

const showArea = new ShowArea();
const componentsList = new ComponentsList();

// Beispiel für das Hinzufügen eines Komponentennamens zur Liste
componentsList.addComponent('Komponente 1');