/*Strokes  Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!" */

const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];

function golfScore(par, strokes) {

    if(strokes === 1){
        return console.log('%s', names[0]);s
    }

    if(strokes <= (par-2)){
        return console.log('%s', names[1]);
    }

    if(strokes === (par-1)){
        return console.log('%s', names[2]);
    }
    
    if(strokes === par){
        return console.log('%s', names[3]);
    }

    if(strokes === (par + 1)){
        return console.log('%s', names[4]);
    }
    
    if(strokes === (par + 2)){
        return console.log('%s', names[5]);
    }

    if(strokes >= (par + 3)){
        return console.log('%s', names[6]);
    }
}

golfScore(4, 7);