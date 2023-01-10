const rings = [
  {
    "itemname": "Awesome ring",
    "filepath": "img/rings/ring 1.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 2.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 3.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 5.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 6.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome ring",
    "filepath": "img/rings/ring 7.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 8.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 9.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 10.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 11.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 12.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome ring",
    "filepath": "img/rings/ring 13.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 14.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 15.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 16.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Awesome Earing",
    "filepath": "img/rings/ring 17.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  }
]


function initializeRingWindow() {

  const ring_container = document.querySelector("#ring-container")

  ring_container.innerHTML = ""

  let total = 4

  if (window.location.pathname === '/rings.html') {
    total = rings.length
  }


  for (let i = 0; i < total; i++) {

    const ring = rings[i]


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

initializeRingWindow()


