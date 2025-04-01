class Player {
    constructor(
        playerOption    // Human or CPU
    ) {
        this.playerOption
    }
}

class HumanPlayer extends Player {
    constructor(
        playerOption
    ) {
        super(
            "PlayerController"
        )
    }
}

class ComputerPlayer extends Player {
    constructor(
        playerOption
    ) {
        super(
            "ComputerController"
        )
    }
}

class Game {
    // static roundCount = 0
    // static winCounter = 5

    constructor (
        roundCount,
        winCounter,

    ) {}
}