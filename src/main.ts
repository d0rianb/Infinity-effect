import { Point, Triangle } from './geometry'

const canvas: HTMLCanvasElement = document.querySelector('#canvas')
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

let trianglesDetectionRadius = 200

const color = {
    backgroundStart: '#01579b',
    backgroundEnd: '#001f38'
}

let [width, height]: [number, number] = [0, 0]
let points: Point[] = []
let triangles: Triangle[] = []

function createGradient(): void {
    const gradient = ctx.createLinearGradient(0, height, width, 0)
    gradient.addColorStop(0.5, color.backgroundStart)
    gradient.addColorStop(1, color.backgroundEnd)
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
}

function createTriangles(): Triangle[] {
    let triangles = []
    for (let point1 of points) {
        for (let point2 of points) {
            for (let point3 of points) {
                if (point1 !== point2 && point2 !== point3 && point3 !== point1) {
                    if (point1.dist(point2) < trianglesDetectionRadius &&
                        point2.dist(point3) < trianglesDetectionRadius) {
                        const triangle: Triangle = new Triangle(point1, point2, point3)
                        const alreadyExist: boolean = triangles.filter(other => triangle.equals(other)).length > 0
                        if (!alreadyExist) triangles.push(triangle)
                    }
                }
            }
        }
    }
    return triangles
}

function render(): void {
    ctx.clearRect(0, 0, width, height)
    createGradient()
    points.forEach(p => p.render(ctx))
    ctx.save()
    triangles.forEach(t => t.render(ctx))
    ctx.restore()

}

window.onload = () => {
    [width, height] = [window.innerWidth, window.innerHeight];
    [canvas.width, canvas.height] = [width, height];
    createGradient()
}

window.addEventListener('click', e => {
    const point: Point = new Point(e.clientX, e.clientY)
    points.push(point)
    triangles = createTriangles()
    render()
})