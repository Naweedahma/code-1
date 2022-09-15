input.onButtonPressed(Button.A, function () {
    basic.showNumber(num)
    num += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num)
    num += -1
})
input.onGesture(Gesture.Shake, function () {
    Random = randint(0, 10)
    basic.showNumber(Random)
    Sum = num + 5
    basic.showNumber(Sum)
    Product = num * 7
    basic.showNumber(Product)
    powers = powers ** 2
    basic.showNumber(powers)
})
let powers = 0
let Product = 0
let Sum = 0
let Random = 0
let num = 0
basic.showIcon(IconNames.Rollerskate)
num = 0
basic.showNumber(num)
basic.forever(function () {
	
})
