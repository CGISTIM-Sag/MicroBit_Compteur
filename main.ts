input.onButtonPressed(Button.A, function () {
    if (i < 9) {
        i += 1
    } else {
        i = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (i > 0) {
        i += -1
    } else {
        i = 9
    }
})
let i = 0
i = 0
basic.forever(function () {
    basic.showNumber(i)
})
