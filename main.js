// Canvas Initial Setup
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 200

// build new car
let mycar = new Car(canvas.width / 2, canvas.height / 2, 30, 50)



function animate() {
    mycar.update()



    canvas.height = innerHeight
    mycar.draw(ctx)
    requestAnimationFrame(animate)
}

animate()