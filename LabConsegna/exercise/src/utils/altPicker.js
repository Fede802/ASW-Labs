import { loadData } from "./dbUtils.js";
import fs from 'node:fs';
const content = 'Some content!';

let maindb = await loadData("http://localhost:3000/recipes.json")
let db = maindb.map((recipe) => recipe.url);
console.log(await altPicker(maindb, db));
fs.writeFile('recipes_with_alt.json', JSON.stringify(maindb), err => {});

async function altPicker(maindb, db) {
    let alts = [];
    for (let i = 0; i < db.length; i++) {
        await fetch(db[i]).then(async (response) => {
            console.log(i);
            maindb[i].alt = (await response.text()).split('alt="')[1].split('"')[0]
        });
    }
    return alts;
}
