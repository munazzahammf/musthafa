const necklaces = [
  {
    "itemname": "Awesome ring",
    "filepath": "img/necklaces/necklace 1.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 2.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 3.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 4.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 12.jpg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 5.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 6.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 11.jpg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome ring",
    "filepath": "img/necklaces/necklace 7.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 8.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 9.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/necklaces/necklace 10.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
]


function initializeNecklacesWindow() {

  const ring_container = document.querySelector("#necklaces-container")

  let total = 4

  if (window.location.pathname === '/necklaces.html') {
    total = necklaces.length
  }

  ring_container.innerHTML = ""

  for (let i = 0; i < total; i++) {

    const ring = necklaces[i]


    ring_container.innerHTML +=
      `<div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="tile-jewellery py-3 px-2">
              <div class="container-img position-relative mb-3" style="min-height: 250px">
                <img src="${ring.filepath}" alt="jewellery image" style="object-fit: cover"
                  class="h-100 w-100 position-absolute rounded" />
              </div>
              <div class="container-text px-1">
                <div class="text-row d-flex pb-1 justify-content-between">
                  <div class="item-name">${ring.itemname}</div>
                  <div class="price">${ring.weight}</div>
                </div>
                <div class="text-secondary">
                  <small>${ring.type}</small>
                </div>
              </div>
            </div>
          </div>`
  }
}

initializeNecklacesWindow()