class Task {
    constructor(id, title, completed) {
        Object.definedProperty(this, "id", {
            value: id,
            writable: false,
            enumerable: true,
            congigurable: false
        });
        this.title = title;
        this.completed = completed;
    }

    toggle() {
        return new Task(this.id, this.title, !this.completed);
    }
}