const earings = [
    {
        "itemname": "Earing",
        "filepath": "img/earings/earing 1.jpeg",
        "weight": "14.5",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Earing",
        "filepath": "img/earings/earing 2.jpeg",
        "weight": "14.5 g",
        "type": "22 Kt ･ Yellow Gold",
        "liked": false

    },
    {
        "itemname": "Earing (Stones)",
        "filepath": "img/earings/earing 3.jpg",
        "weight": "10.4 g",
        "type": "22 Kt ･ White Gold",
        "liked": false
    },
    {
        "itemname": "Ring (Stones)",
        "filepath": "img/earings/earing 4.jpg",
        "weight": "10.4 g",
        "type": "22 Kt ･ White Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 5.jpg",
        "weight": "12.6 g",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 6.jpg",
        "weight": "16.8 g",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 7.jpg",
        "weight": "16.6 g",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 8.jpg",
        "weight": "10.3 g",
        "type": "22 Kt ･ Yellow Gold",
        "liked": false

    },
    {
        "itemname": "Ring (Stones)",
        "filepath": "img/earings/earing 9.jpg",
        "weight": "6.6 g",
        "type": "22 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 10.jpg",
        "weight": "14.4 g",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 11.jpg",
        "weight": "16.7 g",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    },
    {
        "itemname": "Awesome Ring",
        "filepath": "img/earings/earing 12.jpg",
        "weight": "12.3 g",
        "type": "18 Kt ･ Yellow Gold",
        "liked": false
    }
]


function initializeRingWindow() {

    const earing_container = document.querySelector("#earing-container")

    earing_container.innerHTML = ""

    let total = 4

    if (window.location.pathname === '/earings.html') {
        total = earings.length
    }


    for (let i = 0; i < total; i++) {

        const earing = earings[i]


        earing_container.innerHTML +=
            `<div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="tile-jewellery py-3 px-2">
              <div class="container-img position-relative mb-3" style="min-height: 250px">
                <img src="${earing.filepath}" alt="jewellery image" style="object-fit: cover"
                  class="h-100 w-100 position-absolute rounded" />
              </div>
              <div class="container-text px-1">
              <div class="text-row d-flex pb-1 justify-content-between">
                  <div class="item-name">${earing.itemname}</div>
                  <div class="price">${earing.weight}</div>
                </div>
                <div class="text-secondary">
                  <small>${earing.type}</small>
                </div>
              </div>
            </div>
          </div>`
    }
}

initializeRingWindow()


