// Question 1
const portillos = document.getElementById(`portillos`);

// Question 2
const images = document.getElementsByTagName(`img`);

// Question 3
const centered = document.getElementsByClassName(`center`);

// Question 4
const ginosEast = document.querySelector(`div`);

// Question 5
const pTags = document.querySelectorAll(`p`);

// Question 6A
const h1 = document.querySelector(`h1`);

// Question 6B
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;

// Question 7A
const others = document.getElementById(`others`);

// Question 7B
others.innerHTML = `<h1>Other favorites</h1>`;

// Question 8A
const aTag = document.querySelector(`a`);

// Question 8B
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// Question 9
h1.classList.add(`background`, `text-color`);

// Question 10
h1.classList.remove(`background`);

// Question 11A
const h4 = document.createElement(`h4`);

// question 11B
h4.innerText = "CHICAGO: A great place to eat!";

// Question 11C
document.body.prepend(h4);

// Question 12A
const h5 = document.createElement(`h5`);

// Question 12B
h5.innerText = "See you in the Windy City Sometime!";

// Question 12C
aTag.insertAdjacentElement('afterend', h5);

// Question 13
document.querySelector(`li`).remove();

// BONUS 

// Question 14A
const divs = querySelectorAll(`div`);

// Question 14B
for (div of divs) {
    div.classList.toggle(`background`);
}

// Question 15A
const hungry = ["Thanks", "A", "Lot", "Now", "I", "Am", "Hungry"]

// Question 15B
for (word of hungry) {
    let span = document.createElement(`span`);
    span.innerText = `${word} `;
    document.body.append(span);
}
