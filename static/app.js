function renderTransportCard({ id, title, description, image, detailsId, detailsFile, attribImgLink, attribName, attribTitle }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="text-xs">
          <p>Photo 
          <a class="italic" rel="nofollow" href="${attribImgLink}">"${attribTitle}"</a></p>
          by "${attribName}" 
          <a rel="nofollow" href="http://creativecommons.org/licenses/by/3.0/">CC BY-ND 3.0</a>
        </div>
        <div id="${id}" class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="details-toggle bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              data-details-id="${detailsId}"
              data-details-url="${detailsFile}">
              Details
            </button>

            <a href="/booking" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
              Book Now!
            </a>

          </div>
          <div id="${detailsId}" class="text-left mt-4 text-sm text-gray-700 hidden"></div>
        </div>
      </div>
    `;
  };

  const transportCardsData = [
    {
      id:"taxi",
      title: "Taxi Services",
      description: "Available 24/7 throughout the island for quick and convenient travel.",
      image: "../static/images/taxi.jpg",
      detailsId: "taxi-details",
      detailsFile: "../static/details/taxi.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/e/e7/PhuketStreet.jpg",
      attribName: "Martin Pot",
      attribTitle: "Row of Tuk-Tuks"
    },
    {
      id:"car",
      title: "Car Rentals",
      description: "Explore Taniti on your own schedule with car rental options at the airport and downtown.",
      image: "../static/images/rental.jpg",
      detailsId: "rental-details",
      detailsFile: "../static/details/rental.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Hertz_car_rental_office_Vinyard_Haven.jpg",
      attribName: "Whoisjohngalt",
      attribTitle: "Hertz office, Martha's Vineyard"
    },
    {
      id:"bike",
      title: "Bike Rentals",
      description: "Eco-friendly and perfect for exploring the island’s trails and beachfronts.",
      image: "../static/images/bike.jpg",
      detailsId: "bike-details",
      detailsFile: "../static/details/bike.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Biki_in_Waikiki_%2828159018639%29.jpg",
      attribName: "Daniel Ramirez",
      attribTitle: "Biki in Waikiki"
    },
    {
      id:"cruise",
      title: "Cruise Ship",
      description: "Scenic and reliable cruise ship service between the mainland on a weekly basis.",
      image: "../static/images/cruise.jpg",
      detailsId: "cruise-details",
      detailsFile: "../static/details/cruise.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Helsingborg_Tropical_Beach.jpg",
      attribName: "Jsdo1980",
      attribTitle: "M/S Constellation"
    },
    {
      id:"bus",
      title: "Bus",
      description: "Affordable public transport with regular schedules around major locations.",
      image: "../static/images/bus.jpg",
      detailsId: "bus-details",
      detailsFile: "../static/details/bus.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Constanta_pink_bus.JPG",
      attribName: "Acaro",
      attribTitle: "Pink bus in Constanţa"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('transport-cards');
    if (grid) {
      transportCardsData.forEach(card => {
        grid.insertAdjacentHTML('beforeend', renderTransportCard(card));
      });
  
      htmx.process(grid);
  
      grid.addEventListener('click', async (e) => {
        const btn = e.target.closest('.details-toggle');
        if (!btn) return;
  
        const detailsId = btn.dataset.detailsId;
        const detailsUrl = btn.dataset.detailsUrl;
        const detailsEl = document.getElementById(detailsId);
  
        if (!detailsEl) return;
  
        if (detailsEl.classList.contains('hidden')) {
          await htmx.ajax('GET', detailsUrl, {
            target: `#${detailsId}`,
            swap: 'innerHTML',
          });
          detailsEl.classList.remove('hidden');
        } else {
          detailsEl.classList.add('hidden');
        }
      });
    }
  });
 
  function renderAccommodationCard({ id, title, description, image, detailsId, detailsFile, attribImgLink, attribName, attribTitle }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="text-xs">
          <p>Photo 
          <a class="italic" rel="nofollow" href="${attribImgLink}">"${attribTitle}"</a></p>
          by "${attribName}" 
          <a rel="nofollow" href="http://creativecommons.org/licenses/by/3.0/">CC BY-ND 3.0</a>
        </div>
        <div id="${id}" class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="details-toggle bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              data-details-id="${detailsId}"
              data-details-url="${detailsFile}">
              Details
            </button>

            <a href="/booking" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
              Book Now!
            </a>
          </div>

          <div id="${detailsId}" class="text-left mt-4 text-sm text-gray-700 hidden"></div>
        </div>
      </div>
    `;
  };

  const accommodationCardsData = [
    {
      id: "hotel",
      title: "Hotel",
      description: "Great location choice and daily cleaning on a budget.",
      image: "../static/images/hotel.jpg",
      detailsId: "hotel-details",
      detailsFile: "../static/details/hotel.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/8/83/Shutters_on_the_Beach_Hotel_2015.jpg",
      attribName: "Tim Street-Porter",
      attribTitle: "Shutters on the Beach"
    },
    {
      id: "resort",
      title: "Resort",
      description: "Enjoy the resort amenities and clean rooms.",
      image: "../static/images/resort.jpg",
      detailsId: "resort-details",
      detailsFile: "../static/details/resort.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/en/f/f3/Hotel_Atlantis_at_Sunset%2C_The_Palm_-_Dubai_%2849510861268%29.jpg",
      attribName: "Sergio Boscaino",
      attribTitle: "Hotel Atlantis at Sunset"
    },
    {
      id: "bnb",
      title: "Bed & Breakfast",
      description: "Comfort and welcoming hosts breakfast included in pricing.",
      image: "../static/images/bnb.jpg",
      detailsId: "bnb-details",
      detailsFile: "../static/details/bnb.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/9/9a/The_BEACH_HOUSE_Hotel_%2834990194495%29.jpg",
      attribName: "Prayitno",
      attribTitle: "Roatan Island"
    },
    {
      id: "condo",
      title: "Condo",
      description: "Privacy and Convienance located close to beaches.",
      image: "../static/images/condo.jpg",
      detailsId: "condo-details",
      detailsFile: "../static/details/condo.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Condado_Beach_-_San_Juan.jpg",
      attribName: "P. Hughes",
      attribTitle: "La Concha Hotel"
    },
    {
    id: "home",
    title: "Private Home",
    description: "Privacy beyond compare, nearest neighbor is 100yds plus.",
    image: "../static/images/house.jpg",
    detailsId: "house-details",
    detailsFile: "../static/details/house.html",
    attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/0/05/Our_fale_Taufua_Beach_Fales_Samoa.jpg",
    attribName: "amanderson2",
    attribTitle: "Samoa"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('accommodation-cards');
    if (grid) {
      accommodationCardsData.forEach(card => {
        grid.insertAdjacentHTML('beforeend', renderAccommodationCard(card));
      });
  
      htmx.process(grid);
  
      grid.addEventListener('click', async (e) => {
        const btn = e.target.closest('.details-toggle');
        if (!btn) return;
  
        const detailsId = btn.dataset.detailsId;
        const detailsUrl = btn.dataset.detailsUrl;
        const detailsEl = document.getElementById(detailsId);
  
        if (!detailsEl) return;
  
        if (detailsEl.classList.contains('hidden')) {
          await htmx.ajax('GET', detailsUrl, {
            target: `#${detailsId}`,
            swap: 'innerHTML',
          });
          detailsEl.classList.remove('hidden');
        } else {
          detailsEl.classList.add('hidden');
        }
      });
    }
  });

  function renderActivityCard({ id, title, description, image, detailsId, detailsFile, attribImgLink, attribName, attribTitle }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="text-xs">
          <p>Photo 
          <a class="italic" rel="nofollow" href="${attribImgLink}">"${attribTitle}"</a></p>
          by "${attribName}" 
          <a rel="nofollow" href="http://creativecommons.org/licenses/by/3.0/">CC BY-ND 3.0</a>
        </div>
        <div id="${id}" class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="details-toggle bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              data-details-id="${detailsId}"
              data-details-url="${detailsFile}">
              Details
            </button>

            <a href="/booking" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
              Book Now!
            </a>
          </div>

          <div id="${detailsId}" class="mt-4 text-sm text-gray-700 hidden"></div>
        </div>
      </div>
    `;
  };

  const activityCardsData = [
    {
      id: "volcano",
      title: "Volcano Tours",
      description: "Shuttle to close-up views of the Island's Volcano",
      image: "../static/images/volcano.jpg",
      detailsId: "volcano-details",
      detailsFile: "../static/details/volcano.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Volcan_%28173628433%29.jpeg",
      attribName: "Alexandre DIJOUX",
      attribTitle: "Volcan"
    },
    {
      id: "beach",
      title: "Beach Gear",
      description: "Sun soaked beaches and beach gear rentals. Nearby scuba shops and snorkeling gear.",
      image: "../static/images/beach.jpg",
      detailsId: "beach-details",
      detailsFile: "../static/details/beach.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/3/31/Tropical_beach_sunset.jpg",
      attribName: "Aaron Escobar",
      attribTitle: "Tropical Beach Sunset"
    },
    {
      id: "zipline",
      title: "Zipline Adventures",
      description: "Soar over the jungles in this daring adventure.",
      image: "../static/images/zipline.jpg",
      detailsId: "zipline-details",
      detailsFile: "../static/details/zipline.html",
      attribImgLink: "https://unsplash.com/photos/a-woman-on-a-zip-line-in-the-jungle-akR-1957oQA",
      attribName: "Lisa Marie Theck",
      attribTitle: "a woman on a zip line in the jungle"
    },
    {
      id: "dive",
      title: "Dive and Snorkeling Boat charters",
      description: "Get up-close with the islands sea-life, or just enjoy a sunset on the water.",
      image: "../static/images/boat.jpg",
      detailsId: "boat-details",
      detailsFile: "../static/details/boat.html",
      attribImgLink: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dive_BVI%2C_Scrub_Island_Resort%2C_Spa_%26_Marina.jpg",
      attribName: "Lheld1023",
      attribTitle: "Dive BVI"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('activity-cards');
    if (grid) {
      activityCardsData.forEach(card => {
        grid.insertAdjacentHTML('beforeend', renderActivityCard(card));
      });
  
      htmx.process(grid);
  
      grid.addEventListener('click', async (e) => {
        const btn = e.target.closest('.details-toggle');
        if (!btn) return;
  
        const detailsId = btn.dataset.detailsId;
        const detailsUrl = btn.dataset.detailsUrl;
        const detailsEl = document.getElementById(detailsId);
  
        if (!detailsEl) return;
  
        if (detailsEl.classList.contains('hidden')) {
          await htmx.ajax('GET', detailsUrl, {
            target: `#${detailsId}`,
            swap: 'innerHTML',
          });
          detailsEl.classList.remove('hidden');
        } else {
          detailsEl.classList.add('hidden');
        }
      });
    }
  });

  function bookingForm() {
    return {
      category: '',
      options: {
        Transportation: ["Taxi Services", "Car Rentals", "Bike Rentals", "Cruise Ship", "Bus"],
        Accommodation: ["Hotel", "Resort", "Bed & Breakfast", "Condo", "Private Home"],
        Activity: ["Volcano Tours", "Beach Gear", "Zipline Adventure", "Dive & Snorkeling"]
      }
    };
  };

  function navMenu() {
    let hideTimer
    return {
      openMenu: null,
      mobileOpen: false,
      showMenu(menu) {
        clearTimeout(hideTimer)
        this.openMenu = menu
      },
      delayedHide() {
        hideTimer = setTimeout(() => {
          this.openMenu = null
        }, 200)  // Adjust delay here
      },
      cancelHide() {
        clearTimeout(hideTimer)
      }
    }
  };

  document.querySelectorAll('.group').forEach((group) => {
    let timeout;
    const dropdown = group.querySelector('div');

    group.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.classList.remove('hidden');
    });

    group.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.add('hidden');
      }, 200); // delay to prevent quick hide
    });

    dropdown.addEventListener('mouseenter', () => clearTimeout(timeout));
    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.add('hidden');
      }, 200);
    });
  });

  document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });