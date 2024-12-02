import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'dobasok.txt')

let dobasok = []

function readDataFromFile() {
    let content, rdata;
    try {
        content = fs.readFileSync(filePath, 'utf8')
        rdata = content.split(',').map((num) => Number(num.trim()))
    } catch (err) {
        console.log('Hiba történt a fájl beolvasásakor!', err)
    }
    return rdata
}

dobasok = readDataFromFile()

let pozicio = 1;
let letramezok = 0;
let jatekosPoziciok = [];
let befejezte = false;

for (let i = 0; i < dobasok.length; i++) {
  pozicio += dobasok[i];
  
  if (pozicio >= 45) {
    jatekosPoziciok.push(pozicio);
    befejezte = true;
    break;
  }

  if (pozicio % 10 === 0) {
    pozicio -= 3;
    letramezok++;
  }
  
  jatekosPoziciok.push(pozicio);
}

console.log("2. feladat");
console.log(jatekosPoziciok.join(" "));

console.log("3. feladat");
console.log("A játék során " + letramezok + " alkalommal lépett létrára.");

console.log("4. feladat");
if (befejezte) {
  console.log("A játékot befejezte.");
} else {
  console.log("A játékot abbahagyta.");
}
