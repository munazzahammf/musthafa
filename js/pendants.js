const items = [
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/pendants/pendant 1.jpeg",
    "weight": "25.6 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/pendants/pendant 2.jpeg",
    "weight": "18.5 g",
    "type": "22 Kt ･ Yellow Gold",
    "liked": false

  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/pendants/pendant 3.jpeg",
    "weight": "44.5 g",
    "type": "22 Kt ･ White Gold",
    "liked": false

  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/pendants/pendant 4.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/pendants/pendant 5.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  },
  {
    "itemname": "Bangle (Stones)",
    "filepath": "img/pendants/pendant 6.jpeg",
    "weight": "18.5 g",
    "type": "18 Kt ･ Yellow Gold",
    "liked": false
  }
]

function initializePendantsWindow() {

  const container = document.querySelector("#pendants-container")

  container.innerHTML = ""

  let limit = 4

  if (window.location.pathname === '/pendents.html') {
    limit = items.length
  }

  for (let i = 0; i < limit; i++) {

    const item = items[i]


    container.innerHTML +=
      `<div class="col-lg-3 col-md-4 col-sm-6 pb-3">
            <div class="tile-jewellery py-3 px-2">
              <div class="container-img position-relative mb-3" style="min-height: 250px">
                <img src="${item.filepath}" alt="jewellery image" style="object-fit: cover"
                  class="h-100 w-100 position-absolute rounded" />
              </div>
              <div class="container-text px-1">
                <div class="text-row d-flex pb-1 justify-content-between">
                  <div class="item-name">${item.itemname}</div>
                  <div class="price">${item.weight}</div>
                </div>
                <div class="text-secondary">
                  <small>${item.type}</small>
                </div>
              </div>
            </div>
          </div>`
  }
}

initializePendantsWindow()