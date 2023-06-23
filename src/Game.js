const MissionUtils = require("@woowacourse/mission-utils");
const {GAME_MESSAGE} = require("./constants")

class Game {
    
    play(){
        this.printIntro();
    }

    printIntro(){
        print(GAME_MESSAGE.INTRO);
    }
    
}

const print=(message)=>MissionUtils.Console.print(message);

module.exports = Game;