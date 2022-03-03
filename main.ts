function rollDice () {
    return randint(1, 6)
}
let Dice4 = 0
let Dice3 = 0
let SecondSum = 0
let Dice1 = rollDice()
let Dice2 = rollDice()
let Sum = Dice1 + Dice2
if (Sum == 7 || Sum == 11) {
    game.splash("Winner!")
} else if (Sum == 2 || Sum == 3 || Sum == 12) {
    game.splash("Loser")
} else {
    while (!(SecondSum == 7 || SecondSum == Sum)) {
        Dice3 = rollDice()
        Dice4 = rollDice()
        SecondSum = Dice3 + Dice4
    }
    if (SecondSum == 7) {
        game.splash("Loser")
    } else {
        game.splash("Winner!")
    }
}
