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