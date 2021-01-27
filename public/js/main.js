// let affiche = document.getElementsByTagName('h1')[1]
// console.log(affiche);


// let afficheLi = document.getElementsByTagName('li')[3]
// console.log(afficheLi);


// let afficheP = document.getElementsByTagName('p')[0].innerText.toUpperCase()


let afficheLi2 = document.getElementsByTagName('li')
let test = Array.from(afficheLi2)
console.log(test);

test.forEach(element => {
    console.log(element.innerText.toUpperCase());
});





