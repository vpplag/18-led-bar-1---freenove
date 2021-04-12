input.onButtonPressed(Button.A, function () {
    if (reverse == 1) {
        reverse = 0
    } else {
        reverse = 1
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (reverse == 1) {
        reverse = 0
    } else {
        reverse = 1
    }
})
let led2 = 0
let reverse = 0
Freenove.Initialization(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2)
reverse = 0
basic.forever(function () {
    for (let index = 0; index <= 7; index++) {
        if (reverse == 0) {
            led2 = index
        } else {
            led2 = 7 - index
        }
        Freenove.Write_Data(Freenove.Shift_Operators(1, shift_operator.left, led2), Order.MSBFIRST)
        basic.pause(200)
    }
})
