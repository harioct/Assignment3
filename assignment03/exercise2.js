function threeStepsAB (text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' && text[i + 4] === 'b') {
            return true;
        }
        if (text[i] === 'b' && text[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}

// TEST CASES
console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are boring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));