const radius = .1
const defaultColor = 'rgba(250, 250, 250, 0.5)'

class Point {
    public x: number
    public y: number
    public color: string

    constructor(x: number, y: number, color ? : string) {
        this.x = x
        this.y = y
        this.color = color || defaultColor
    }

    public equals(point: Point): boolean {
        return this.x === point.x && this.y === point.y
    }

    public dist(point: Point): number {
        return Math.sqrt((this.x - point.x)**2 + (this.y - point.y)**2)
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI)
        ctx.fill()
    }

}

class Line {
    public a: Point
    public b: Point

    constructor(a: Point, b: Point) {
        this.a = a
        this.b = b
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()
        ctx.moveTo(this.a.x,this.a.y)
        ctx.lineTo(this.b.x, this.b.y)
        ctx.stroke()
    }
}

class Triangle {
    public a: Point
    public b: Point
    public c: Point

    constructor(a: Point, b: Point, c: Point) {
        this.a = a
        this.b = b
        this.c = c
    }

    private center(): Point{
        let centerX: number = (this.a.x + this.b.x + this.c.x) / 3
        let centerY: number = (this.a.y + this.b.y + this.c.y) / 3
        return new Point(centerX, centerY)
    }

    public equals(triangle: Triangle): boolean {
        return this.center().equals(triangle.center())
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'rgba(230, 230, 230, .15)'
        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.moveTo(this.a.x, this.a.y)
        ctx.lineTo(this.b.x, this.b.y)
        ctx.lineTo(this.c.x, this.c.y)
        ctx.lineTo(this.a.x, this.a.y)
        ctx.fill()
    }
}

export { Point, Triangle, Line }