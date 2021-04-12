def on_button_pressed_a():
    global reverse
    if reverse == 1:
        reverse = 0
    else:
        reverse = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

led2 = 0
reverse = 0
Freenove.initialization(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2)
reverse = 0

def on_forever():
    global led2
    for index in range(8):
        if reverse == 0:
            led2 = index
        else:
            led2 = 7 - index
        Freenove.Write_Data(Freenove.Shift_Operators(1, shift_operator.LEFT, led2),
            Order.MSBFIRST)
        basic.pause(200)
basic.forever(on_forever)
