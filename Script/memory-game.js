const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 20;
const alertMessage = document.querySelector('.alert-message');
playerLivesCount.textContent = playerLives;

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e);
//   cardGenerator();
//   board();
// });

// const cardGenerator = () => {
//We generate the object 🧑🏻‍💻
const getData = () => [
    { imgSrc: "../Assets/Images/animal.jpg", id: 1, name: "animal" },
    { imgSrc: "../Assets/Images/bitcoin.jpg", id: 2, name: "bitcoin" },
    { imgSrc: "../Assets/Images/building.jpg", id: 3, name: "building" },
    { imgSrc: "../Assets/Images/coon.jpg", id: 4, name: "coon" },
    { imgSrc: "../Assets/Images/dumbell.jpg", id: 5, name: "dumbell" },
    { imgSrc: "../Assets/Images/flower.jpg", id: 6, name: "flower" },
    { imgSrc: "../Assets/Images/girl.jpg", id: 7, name: "girl" },
    { imgSrc: "../Assets/Images/statue.jpg", id: 8, name: "statue" },
    { imgSrc: "../Assets/Images/animal.jpg", id: 9, name: "animal" },
    { imgSrc: "../Assets/Images/bitcoin.jpg", id: 10, name: "bitcoin" },
    { imgSrc: "../Assets/Images/building.jpg", id: 11, name: "building" },
    { imgSrc: "../Assets/Images/coon.jpg", id: 12, name: "coon" },
    { imgSrc: "../Assets/Images/dumbell.jpg", id: 13, name: "dumbell" },
    { imgSrc: "../Assets/Images/flower.jpg", id: 14, name: "flower" },
    { imgSrc: "../Assets/Images/girl.jpg", id: 15, name: "girl" },
    { imgSrc: "../Assets/Images/statue.jpg", id: 16, name: "statue" },

];



const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//check card
const checkCard = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart('You Lost');
            }
        }
    }
}

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCard(e);

            const toogleCards = document.querySelectorAll(".toggleCard");
            if (toogleCards.length === 16 && playerLives > 0) {

                restart('You Win');
            };
        });
    });
};

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        cards[index].style.pointerEvents = "auto";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
    });

    alertMessage.textContent = text;

    setTimeout(() => {
        alertMessage.textContent = '';
        playerLives = 20;
        playerLivesCount.textContent = playerLives;

    }, 3000);


}



cardGenerator();