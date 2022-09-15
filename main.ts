input.onButtonPressed(Button.A, function () {
    basic.showNumber(num)
    num += 1
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num)
    num += -1
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let num = 0
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Rollerskate)
sprite = game.createSprite(0, 0)
num = 1
basic.showNumber(num)
basic.forever(function () {
	
})
