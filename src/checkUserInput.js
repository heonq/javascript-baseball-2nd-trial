const {ERROR_MESSAGE} = require("./constants.js");

const checkUserInput=(input)=>{
    if(input.length!==3) throw new Error(ERROR_MESSAGE.THREE_DIGITS);

    if(new Set(input.split("")).size!==3) throw new Error(ERROR_MESSAGE.DUPLICATED);

    if(/[^1-9]/.test(input)) throw new Error(ERROR_MESSAGE.NOTANUMBER);
}

module.exports = checkUserInput;