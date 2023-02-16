// Canvas Initial Setup
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 200

// Building Road
let road = new Road(canvas.width / 2, canvas.width * 0.9)
// build new car
let car = new Car(road.getLaneCenter(1), 100, 30, 50)



function animate() {
    car.update()

    canvas.height = innerHeight

    ctx.save()
    ctx.translate(0, -car.y + canvas.height * 0.5)

    road.draw(ctx)
    car.draw(ctx)

    ctx.restore()
    requestAnimationFrame(animate)
}

animate()