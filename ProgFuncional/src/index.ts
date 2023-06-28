const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];

//map

let charactersNames = characters.map(function (character) {
    return character.name;
});

console.log(charactersNames);

let charactersHeights = characters.map(function (character) {
    return character.height;
});

let charactersNamesAndHeights = charactersNames.map(function (name, index) {
    return { "name": name, "height": charactersHeights[index] };
});

//reduce

const initialMass = 0;

let totalMass = characters.reduce((finalMass, character) => {
    finalMass = finalMass + parseInt(character.mass);
    return finalMass;
}, initialMass);


let totalHeight = characters.reduce((finalHeight, character) => {
    finalHeight = finalHeight + parseInt(character.height);
    return finalHeight;
}, 0);

let totalChars = characters.reduce((finalChars, character) => {
    finalChars = finalChars + character.name.length;
    return finalChars;
}, 0);

let charsByEyeColor = characters.reduce((countMap, character) => {
    const eyeColor = character.eye_color;
    const nameLength = character.name.length;

    if (countMap.has(eyeColor)) {
        countMap.set(eyeColor, countMap.get(eyeColor)! + nameLength);
    } else {
        countMap.set(eyeColor, nameLength);
    }

    return countMap;
}, new Map<string, number>());

console.assert(totalMass === 346);
console.assert(totalHeight === 712);
console.assert(totalChars === 52);

//filter

let massOver100 = characters.filter(function (character) {
    return parseInt(character.mass) > 100;
});

let heightUnder200 = characters.filter(function (character) {
    return parseInt(character.height) < 200;
});

let maleCharacters = characters.filter(function (character) {
    return character.gender === 'male';
});

let femaleCharacters = characters.filter(function (character) {
    return character.gender === 'female';
});

//sort

characters.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
});

characters.sort(function (a, b){
    
    const massA = parseInt(a.mass);
    const massB = parseInt(b.mass);

    if(massA < massB){
        return -1;
    } else if(massA > massB){
        return 1;
    } else{
        return 0;
    }
})

characters.sort(function (a, b){
    
    const heightA = parseInt(a.height);
    const heightB = parseInt(b.height);

    if(heightA < heightB){
        return -1;
    } else if(heightA > heightB){
        return 1;
    } else{
        return 0;
    }
})

characters.sort(function (a, b){
    
    const genderA = parseInt(a.gender);
    const genderB = parseInt(b.gender);

    if(genderA < genderB){
        return -1;
    } else if(genderA > genderB){
        return 1;
    } else{
        return 0;
    }
})

//every

const isEyeColorBlue = characters.every(function(character){
    return character.eye_color === 'blue';
});

const isMassOver40 = characters.every(function(character){
    return parseInt(character.mass) > 40;
});

const isHeightUnder200 = characters.every(function(character){
    return parseInt(character.height) < 200;
});

const areCharactersMales = characters.every(function(character){
    return character.gender === 'male';
});

console.assert(isEyeColorBlue === false);
console.assert(isMassOver40 === true);
console.assert(isHeightUnder200 === false);
console.assert(areCharactersMales === false);

//some

const isThereAMale = characters.some(function(character){
    return character.gender === 'male';
});

const areThereBlueEyes = characters.some(function(character){
    return character.eye_color === 'blue';
});

const isThereHeightOver200 = characters.some(function(character){
    return parseInt(character.height) > 200;
});

const isThereMassUnder50 = characters.some(function(character){
    return parseInt(character.mass) < 50;
});

console.assert(isThereAMale === true);
console.assert(areThereBlueEyes === true);
console.assert(isThereHeightOver200 === true);
console.assert(isThereMassUnder50 === true);