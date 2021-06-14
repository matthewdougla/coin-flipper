input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
basic.forever(function () {
	
})
