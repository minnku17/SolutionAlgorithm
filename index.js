//Mini-Max Sum
/**
 * Mini-Max Sum

    Given five positive integers, find the minimum and maximum values that can be calculated by summing
    exactly four of the five integers. Then print the respective minimum and maximum values as a single line
    of two space-separated long integers.
    For example arr = [1, 3, 5, 7, 9], . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24

    We would print
    16 24
 Function Description
    Complete the miniMaxSum function in the editor below. It should print two space-separated integers on
    one line: the minimum sum and the maximum sum of 4 of 5 elements.

    miniMaxSum has the following parameter(s): arr: an array of 5 intergers

    Input format
    A single line of five space-separated intergrs

    Output format
    Print two space-separated long integers denoting the respective minimum and maximum values that can
    be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit
    integer.)
    Simple input
    1 2 3 4 5
    Simple input
    10 14
 */
const arr = [1,2,3,4,5];
const miniMaxSum = (arr) =>{
    arr.sort((a, b) => a - b) //sort array ascending
    const minimumSum = arr.slice(0, 4).reduce((arr, cur) =>{
        return arr + cur
    },0)
    const maximumSum = arr.slice(1).reduce((arr, cur) =>{
        return arr + cur
    },0)
    const inputFormat = arr.join(' ')
    return `Simple input: ${inputFormat} | output: ${minimumSum}  ${maximumSum}`
}
console.log(miniMaxSum(arr))//Simple input: 1 2 3 4 5 | output: 10  14
/**
 Our initial numbers are 1, 2, 3, 4 and 5. We can calculate the following sums using four of the five
    integers:
    1: If we sum everything except 1, our sum is: 2 + 3 + 4 + 5 = 14
    2: If we sum everything except 2, our sum is: 1 + 3 + 4 + 5 = 13
    3: If we sum everything except 3, our sum is: 1 + 2 + 4 + 5 = 12
    4: If we sum everything except 4, our sum is: 1 + 2 + 3 + 5 = 11
    5: If we sum everything except 5, our sum is: 1 + 2 + 3 + 4 = 10
 */
const exceptCalculate =(n) => {
    const index = arr.findIndex((item) => item === n)
    const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)]
    const sum = newArr.reduce((acc, arr) => acc + arr)
    return `If we sum everything except ${n}, our sum is: ${newArr.join(" + ")} = ${sum}`
}
console.log(exceptCalculate(3)) //If we sum everything except 3, our sum is: 1 + 2 + 4 + 5 = 12


//Bouns:
const Bouns = () =>{
    const toTalArray = arr.reduce((acc, cur) => acc + cur)
    const minInArray = Math.min(...arr);
    const maxInArray = Math.max(...arr);
    const evenArray = []
    const oldArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        } else {
            oldArray.push(arr[i])
        }
    }
    return {
        toTalArray,
        minInArray,
        maxInArray,
        evenArray: evenArray.join(' '),
        oldArray: oldArray.join(' ')
    }
}
console.log("checkk", Bouns()) 
/*
    {
        toTalArray: 15,
        minInArray: 1,
        maxInArray: 5,
        evenArray: '2 4',
        oldArray: '1 3 5'
    }
*/ 