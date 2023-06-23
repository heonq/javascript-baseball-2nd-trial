const MissionUtils = require("@woowacourse/mission-utils");
const {GAME_MESSAGE} = require("./constants")

class Game {
    constructor() {
        this.computer = this.randomGenerateNumber();
    }

    play(){
        this.printIntro();
        this.getUserInput(GAME_MESSAGE.INPUT);
    }

    printIntro(){
        print(GAME_MESSAGE.INTRO);
    }
    
    randomGenerateNumber() {
        const computer = [];
        while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    getUserInput(message){
        MissionUtils.Console.readLine(message,(answer)=>{
            this.user = answer;
            this.getUserInput(message);
        })
    }
}

const print=(message)=>MissionUtils.Console.print(message);

module.exports = Game;