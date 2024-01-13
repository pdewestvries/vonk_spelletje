input.onPinPressed(TouchPin.P0, function () {
    if (kleur_speler1 == RandomKleur) {
        score_speler1 += 1
        if (score_speler1 == 10) {
            gewonnen()
        }
    } else {
        score_speler1 += -1
        if (score_speler1 == 0) {
            verloren()
        }
    }
})
function verloren () {
	
}
input.onButtonPressed(Button.A, function () {
    score_speler1 = 3
    kleur_speler2 = 3
    kleur_speler3 = 3
})
function gewonnen () {
	
}
let kleur_spelers: number[] = []
let kleur_waarde = 0
let kleur_speler3 = 0
let kleur_speler2 = 0
let score_speler1 = 0
let RandomKleur = 0
let kleur_speler1 = 0
let A = 0
let LENGTE = 20
let SEGMENT_LENGTE = 15
let WACHT = 500
let WACHT_DELAY = WACHT
let B = A + SEGMENT_LENGTE
let STRIP = neopixel.create(DigitalPin.P8, LENGTE, NeoPixelMode.RGB)
let Speler1 = STRIP.range(0, 4)
let Speler2 = STRIP.range(4, 4)
let Speler3 = STRIP.range(8, 4)
let range = STRIP.range(12, 20)
let begin = STRIP.range(12, 1)
basic.pause(200)
STRIP.clear()
basic.pause(200)
STRIP.show()
loops.everyInterval(1000, function () {
    kleur_waarde = randint(0, 10)
    if (kleur_waarde == 0) {
        RandomKleur = neopixel.colors(NeoPixelColors.Red)
    } else {
        if (kleur_waarde == 1) {
            RandomKleur = neopixel.colors(NeoPixelColors.Green)
        } else {
            if (kleur_waarde == 2) {
                RandomKleur = neopixel.colors(NeoPixelColors.Blue)
            } else {
                RandomKleur = neopixel.colors(NeoPixelColors.White)
            }
        }
    }
    range.setPixelColor(1, RandomKleur)
})
loops.everyInterval(10000, function () {
    kleur_spelers = [
    [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue)],
    [neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Green)],
    [neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Green)],
    [neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red)],
    [neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Blue), neopixel.colors(NeoPixelColors.Red)],
    [neopixel.colors(NeoPixelColors.Green), neopixel.colors(NeoPixelColors.Red), neopixel.colors(NeoPixelColors.Blue)]
    ]._pickRandom()
    kleur_speler1 = kleur_spelers[0]
    kleur_speler2 = kleur_spelers[1]
    kleur_speler3 = kleur_spelers[2]
    Speler1.showColor(kleur_speler1)
    Speler2.showColor(kleur_speler2)
    Speler3.showColor(kleur_speler3)
})
basic.forever(function () {
    begin.showColor(neopixel.colors(NeoPixelColors.White))
    range.shift(1)
    basic.pause(10)
})
