const GAME_MESSAGE = {
    INTRO : "숫자 야구 게임을 시작합니다.",
    INPUT : "숫자를 입력해주세요 : ",
    RESTART : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
}

const GAME_RESULT = {
    BALL : {
        0 : "",
        1 : "1볼",
        2 : "2볼",
        3 : "3볼",
    },
    STRIKE : {
        0 : "낫싱",
        1 : "1스트라이크",
        2 : "2스트라이크",
        3 : "3스트라이크",
    },
    CORRECT : "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
}

const ERROR_MESSAGE = {
    THREE_DIGITS : "3자리의 숫자를 입력해주세요.",
    DUPLICATED : "중복되지 않은 3자리의 숫자를 입력해주세요.",
    NOTANUMBER : "1부터 9까지 숫자로 이루어진 3자리 숫자를 입력해주세요.",
    ONEORTWO : "1과 2 중 하나의 값을 입력해주세요.",
}

module.exports = {GAME_MESSAGE,GAME_RESULT,ERROR_MESSAGE};