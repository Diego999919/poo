function Jingle () {
	
}
input.onButtonPressed(Button.A, function () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("F - F - F - F - ", 500)
    basic.pause(1000)
    music.playMelody("B - B - B - B - ", 500)
    music.setVolume(255)
    basic.pause(1000)
    music.playMelody("F - F - F - F - ", 500)
    basic.pause(1000)
    music.playMelody("A - B - B - B - ", 500)
    music.setVolume(255)
    basic.pause(1000)
    music.playMelody("D D D D D D D D ", 500)
    music.playMelody("D D E E E E C C ", 500)
    music.playMelody("C C C C C C C C ", 500)
    music.playMelody("G G G G E E E E ", 500)
    music.playMelody("D D D C C C C C ", 500)
    music.playMelody("C C C C C C C C ", 500)
    music.playMelody("C C C C C C C C ", 500)
    music.playMelody("C C C C C C C C ", 500)
    music.playMelody("D D D D F F F F ", 500)
    music.playMelody("E E E E E E E E ", 500)
    music.playMelody("F F F F C C C C ", 500)
})
input.onButtonPressed(Button.B, function () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
})
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(40)
basic.showLeds(`
    . # # # .
    # # . # .
    # # # # .
    . # # # .
    . # . # .
    `)
basic.forever(function () {
	
})
