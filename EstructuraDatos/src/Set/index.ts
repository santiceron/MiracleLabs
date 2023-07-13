//Item 1

const myArray1: number[] = [1, 2, 2, 3, 3, 4, 7, 7, 7];

let mySet = new Set(myArray1);

//console.log(mySet);

//Item 2

function uniqueElements(array1: number[], array2: number[]): number[] {
    const singleArray = array1.concat(array2);

    const newSet = new Set(singleArray);

    const uniqueElements = Array.from(newSet);

    return uniqueElements;
}

const myArray2: number[] = [1, 2, 5, 5, 7, 8, 15, 23];

//console.log(uniqueElements(myArray1, myArray2));