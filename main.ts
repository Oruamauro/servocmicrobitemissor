input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showString("F")
})
radio.setGroup(13)
