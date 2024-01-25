/**
 * Één tot drie spelers.
 * 
 * Iedere speler krijgt een kleur toegewezen.
 * 
 * Willekeurig "valt" een kleur naar beneden en 
 * 
 * als de speler "zijn" kleur ziet tikt hij op zijn knop.
 * 
 * Kloppen de kleuren dan krijgt hij een punt.
 * 
 * Klopt het niet dan gaat er een punt af.
 * 
 * Een speler start met 5 punten en heeft gewonnen als hij 15 punten heeft.
 */
/**
 * Kies willeurig een kleur en zet deze boven in de rij
 */
let LENGTE = 64
let LED_matrix = neopixel.create(DigitalPin.P8, LENGTE, NeoPixelMode.RGB)
LED_matrix.setMatrixWidth(8)
let strip = LED_matrix.range(0, 64)
basic.pause(200)
LED_matrix.clear()
basic.pause(200)
LED_matrix.show()
basic.forever(function () {
    for (let Rij = 0; Rij <= 7; Rij++) {
        for (let Kolom = 0; Kolom <= 7; Kolom++) {
            LED_matrix.setMatrixColor(Kolom, Rij, neopixel.colors(NeoPixelColors.Yellow))
            LED_matrix.show()
            basic.pause(0)
        }
    }
    for (let Rij = 0; Rij <= 7; Rij++) {
        for (let Kolom = 0; Kolom <= 7; Kolom++) {
            LED_matrix.setMatrixColor(Rij, Kolom, neopixel.colors(NeoPixelColors.Red))
            LED_matrix.show()
            basic.pause(0)
        }
    }
    strip.showBarGraph(64, 64)
    for (let Rij = 0; Rij <= 7; Rij++) {
        for (let Kolom = 0; Kolom <= 7; Kolom++) {
            LED_matrix.setMatrixColor(Kolom, Rij, neopixel.colors(NeoPixelColors.Green))
            LED_matrix.show()
            basic.pause(0)
        }
    }
    for (let Rij = 0; Rij <= 7; Rij++) {
        for (let Kolom = 0; Kolom <= 7; Kolom++) {
            LED_matrix.setMatrixColor(Rij, Kolom, neopixel.colors(NeoPixelColors.Blue))
            LED_matrix.show()
            basic.pause(0)
        }
    }
    strip.showBarGraph(-64, 64)
    basic.pause(0)
})
