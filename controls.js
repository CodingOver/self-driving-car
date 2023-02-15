class Controls {
    constructor() {
        this.forward = false
        this.left = false
        this.right = false
        this.reverse = false
        this.#addKeyboardListeners()
    }

    #addKeyboardListeners() {
        addEventListener("keydown", (event) => {
            console.log(event.key)
            switch (event.key) {
                case "ArrowUp":
                    this.forward = true
                    break;
                case "ArrowRight":
                    this.right = true
                    break;
                case "ArrowLeft":
                    this.left = true
                    break;
                case "ArrowDown":
                    this.reverse = true
                    break;
            }
            console.table(this)
        })
        addEventListener("keyup", (event) => {
            console.log(event.key)
            switch (event.key) {
                case "ArrowUp":
                    this.forward = false
                    break;
                case "ArrowRight":
                    this.right = false
                    break;
                case "ArrowLeft":
                    this.left = false
                    break;
                case "ArrowDown":
                    this.reverse = false
                    break;

            }
            console.table(this)
        })
    }

}