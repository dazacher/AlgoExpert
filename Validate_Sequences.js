function isValidSubsequence(array, sequence) {
    // Write your code here.if (sequence.length > array.length){
    let equalIntegers = [];
    let indexOfSequence = 0;
    if (array.length < sequence.length) {
        return false
    } else {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < sequence.length; j++) {
                if (array[i] === sequence[j]) {
                    equalIntegers.push(sequence[j])
                    console.log(equalIntegers)
                    i++
                    indexOfSequence++
                    if (indexOfSequence > sequence.indexOf(sequence[j + 1])) {
                        break
                    }
                }
            }
        }
    }

    console.log(JSON.stringify(equalIntegers) === JSON.stringify(sequence))
    if (JSON.stringify(equalIntegers) === JSON.stringify(sequence)) {
        return true
    } else {
        return false
    }

}