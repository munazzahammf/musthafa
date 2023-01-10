const bangles = [
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/bangles/bangle 1.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle",
    "filepath": "img/bangles/bangle 2.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/bangles/bangle 3.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false

  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/bangles/bangle 4.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle",
    "filepath": "img/bangles/bangle 5.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle",
    "filepath": "img/bangles/bangle 6.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle",
    "filepath": "img/bangles/bangle 7.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle",
    "filepath": "img/bangles/bangle 8.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/bangles/bangle 9.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false

  },
  {
    "itemname": "Bangle",
    "filepath": "img/bangles/bangle 10.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/bangles/bangle 11.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/bangles/bangle 12.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  }
]

function initializeBanglesWindow() {

  const bangle_container = document.querySelector("#bangle-container")

  bangle_container.innerHTML = ""

  let limit = 4

  if (window.location.pathname === '/bangles.html') {
    limit = bangles.length
  }

  for (let i = 0; i < limit; i++) {

    const bangle = bangles[i]


    bangle_container.innerHTML +=
      `<div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="tile-jewellery py-3 px-2">
              <div class="container-img position-relative mb-3" style="min-height: 250px">
                <img src="${bangle.filepath}" alt="jewellery image" style="object-fit: cover"
                  class="h-100 w-100 position-absolute rounded" />
              </div>
              <div class="container-text px-1">
                <div class="text-row d-flex pb-1 justify-content-between">
                  <div class="item-name">${bangle.itemname}</div>
                  <div class="price">${bangle.weight}</div>
                </div>
                <div class="text-secondary">
                  <small>${bangle.type}</small>
                </div>
              </div>
            </div>
          </div>`
  }
}

initializeBanglesWindow()