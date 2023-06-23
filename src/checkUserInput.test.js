const checkUserInput = require("./checkUserInput.js");
const {ERROR_MESSAGE} = require("./constants.js");

describe("사용자의 입력값이 유효한지 테스트한다.",()=>{
    test("3자리의 숫자를 입력하지 않을 경우 에러 발생",()=>{
        const answers=["1","12","1546"];

        expect(()=>answers.forEach((answer)=>{
            return checkUserInput(answer);
        })).toThrow(Error(ERROR_MESSAGE.THREE_DIGITS));
    })

    test("중복된 숫자가 있을 경우 에러 발생",()=>{
        const answers=["112","211","131"];

        expect(()=>answers.forEach((answer)=>{
            return checkUserInput(answer);
        })).toThrow(Error(ERROR_MESSAGE.DUPLICATED));
    })
})