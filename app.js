document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [{
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const content = document.querySelector('.content');
    const result = document.querySelector('#result');

    let choseItem = [];
    let choseItemId = [];
    let cardWon = [];

    function crateTable() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('id', i);
            card.addEventListener('click', flipCard)
            content.appendChild(card);
        }
    }

    function checkForMatch() {
        cards = document.querySelectorAll('img');

        if (choseItemId[0] == choseItemId[1]) {
            cards[choseItemId[0]].setAttribute('src', 'images/blank.png');
            cards[choseItemId[1]].setAttribute('src', 'images/blank.png');
            alert('You have clicked the same image!')
        } else if (choseItem[0] === choseItem[1]) {
            alert("Match!!!")
            cards[choseItemId[0]].setAttribute('src', 'images/white.png');
            cards[choseItemId[1]].setAttribute('src', 'images/white.png');
            cards[choseItemId[0]].removeEventListener("click", flipCard);
            cards[choseItemId[1]].removeEventListener("click", flipCard);
            cardWon.push(choseItem);
        } else {
            cards[choseItemId[0]].setAttribute('src', 'images/blank.png');
            cards[choseItemId[1]].setAttribute('src', 'images/blank.png');
            alert('Sorry!! Try again!!')
        }
        choseItemId = [];
        choseItem = [];
        result.textContent = cardWon.length;
        if (cardWon.length == cardArray.length / 2) {
            result.textContent = "Congratulation!!"
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('id')
        choseItem.push(cardArray[cardId].name)
        choseItemId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (choseItem.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }




    crateTable();

})