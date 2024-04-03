// DEFINO EL ESTILO DE LOS TÍTULOS
const nombreGrupo = "font-style:bold; font-size:18px; color:green;";


// INTERFACE DE LA INFORMACIÓN DE LOS GRUPOS
interface InfoGrupo {
    nombreCantanteCompositor : string;
    fundacion : number;
    activo : boolean;
    genero : string;
}

// GENEROS MUSICALES
const popRock : string = `🎵Pop-Rock`;
const rock : string = `🎸Rock`;
const hardRock : string = `🤘Hard-Rock`;
const clasica : string = `🎼Clásica`;

// DIFERENTES GRUPOS
const beatles : InfoGrupo = {
    nombreCantanteCompositor: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: `${popRock}`,
};

const queen : InfoGrupo = {
    nombreCantanteCompositor:"Queen",
    fundacion:1970,
    activo: false,
    genero: `${rock}`,
};

const acdc : InfoGrupo = {
    nombreCantanteCompositor:"ACDC",
    fundacion:1973,
    activo: true,
    genero: `${hardRock}`,
};

const beethoven : InfoGrupo = {
    nombreCantanteCompositor:"Ludwing Van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: `${clasica}`,
}

const rollingStone : InfoGrupo = {
    nombreCantanteCompositor:"The Rolling Stone",
    fundacion: 1962,
    activo: true,
    genero: `${rock}`,
}


// CONSOLE LOG PARA MOSTRAR LOS GRUPOS
console.log(`%cThe Beatles`, nombreGrupo);
console.log(beatles);

/*------QUEEN-------*/ 

console.log(`%cQueen`, nombreGrupo);
console.log(queen);

/*------ACDC-------*/

console.log(`%cACDC`, nombreGrupo);
console.log(acdc);

/*------BEETHOVEN-------*/

console.log(`%cLudwig Van Beethoven`, nombreGrupo);
console.log(beethoven);

/*------ROLLING-STONE-------*/

console.log(`%cThe Rolling Stonces`, nombreGrupo);
console.log(rollingStone);