import "./style.css";

interface MusicalInfo {
  name: string;
  year: number;
  active: boolean;
  genre: string;
}

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const classical = "🎼 Classical";

const beatles: MusicalInfo = {
  name: "The Beatles",
  year: 1960,
  active: true,
  genre: popRock,
};

const queen: MusicalInfo = {
  name: "Queen",
  year: 1970,
  active: false,
  genre: rock,
};

const acdc: MusicalInfo = {
  name: "AC/DC",
  year: 1973,
  active: true,
  genre: hardRock,
};

const ludwig: MusicalInfo = {
  name: "Ludwig van Beethoven",
  year: 1770,
  active: false,
  genre: classical,
};

const rolling: MusicalInfo = {
  name: "The Rolling Stones",
  year: 1962,
  active: true,
  genre: rock,
};

console.log(
  "%c" + beatles.name,
  "font-size:20px; font-weight:bold; background:green;",
  "Year: ",
  beatles.year,
  "Active :",
  beatles.active,
  "Genre :",
  beatles.genre,
);

console.log(
  "%c" + queen.name,
  "font-size:20px; font-weight:bold; background:green;",
  "Year: ",
  queen.year,
  "Active :",
  queen.active,
  "Genre :",
  queen.genre,
);

console.log(
  "%c" + acdc.name,
  "font-size:20px; font-weight:bold; background:green;",
  "Year: ",
  acdc.year,
  "Active :",
  acdc.active,
  "Genre :",
  acdc.genre,
);

console.log(
  "%c" + ludwig.name,
  "font-size:20px; font-weight:bold; background:green;",
  "Year: ",
  ludwig.year,
  "Active :",
  ludwig.active,
  "Genre :",
  ludwig.genre,
);
console.log(
  "%c" + rolling.name,
  "font-size:20px; font-weight:bold; background:green;",
  "Year: ",
  rolling.year,
  "Active :",
  rolling.active,
  "Genre :",
  rolling.genre,
);
