const container = document.querySelector('.container')

const foods = [
    {
        id: 1,
        name: "Buttermilk Pancakes",
        price: 15.99,
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        classify: "breakfast",
        img: `./assets/img/item-1.jpeg`
    },
    {
        id: 2,
        name: "Diner Double",
        price: 13.99,
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        classify: "lunch",
        img: `./assets/img/item-2.jpeg`
    },
    {
        id: 3,
        name: "Godzilla Milkshake",
        price: 6.99,
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        classify: "shakes",
        img: `./assets/img/item-3.jpeg`
    },
    {
        id: 4,
        name: "Country Delight",
        price: 20.99,
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        classify: "breakfast",
        img: `./assets/img/item-4.jpeg`
    },
    {
        id: 5,
        name: "Egg Attack",
        price: 22.99,
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        classify: "lunch",
        img: `./assets/img/item-5.jpeg`
    },
    {
        id: 6,
        name: "Oreo Dream",
        price: 18.99,
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        classify: "shakes",
        img: `./assets/img/item-6.jpeg`
    },
    {
        id: 7,
        name: "Bacon Overflow",
        price: 8.99,
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        classify: "breakfast",
        img: `./assets/img/item-7.jpeg`
    },
    {
        id: 8,
        name: "American Classic",
        price: 12.99,
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        classify: "lunch",
        img: `./assets/img/item-8.jpeg`
    },
    {
        id: 9,
        name: "Quarantine Buddy",
        price: 16.99,
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        classify: "shakes",
        img: `./assets/img/item-9.jpeg`
    },
    {
        id: 10,
        name: "Steak Dinner",
        price: 39.99,
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        classify: "dinner",
        img: `./assets/img/item-10.jpeg`
    }
]

const allBtn = document.querySelectorAll('.item')
function getHtmlContent(items){
    let html = items.map((value) => {
        return `<div class="grid-item">
                    <img class="item-image" src=${value.img} />
                    <div class="item-info">
                        <div class="item-header">
                            <h4 class="item-name">${value.name}</h4>
                            <span class="item-price">$${value.price}</span>
                        </div>
                        <p class="item-description">${value.description}</p>
                    </div>
                </div>`
    })

    return html.join('')
}
allBtn.forEach(b => {
    b.addEventListener('click', function(e) {
        let classify = e.target.textContent.toLowerCase()
        allBtn.forEach(b => {b.classList.remove('active')})
        e.target.classList.add('active')
        let arr = []
        if(classify == 'all'){
            arr = foods
        }else{
            arr = foods.filter(function(value) {
                return value.classify == classify
            })
        }
        container.innerHTML = getHtmlContent(arr)
    })
})

allBtn[0].classList.add('active')
container.innerHTML = getHtmlContent(foods)