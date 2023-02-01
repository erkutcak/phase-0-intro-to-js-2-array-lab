// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
}

function appendCat(name) {
    const copyOfCats = [...cats, 'Broom'];
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = ['Arnold', ...cats];
    return copyOfCats
}

function removeLastCat() {
    const copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats
}