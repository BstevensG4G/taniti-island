function renderTransportCard({ title, description, image, detailsId, detailsFile }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              hx-get="${detailsFile}"
              hx-target="#${detailsId}"
              hx-swap="outerHTML">
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
  }

  const transportCardsData = [
    {
      title: "Taxi Services",
      description: "Available 24/7 throughout the island for quick and convenient travel.",
      image: "../static/images/taxi.jpg",
      detailsId: "taxi-details",
      detailsFile: "details/taxi.html"
    },
    {
      title: "Rental Cars",
      description: "Explore Taniti on your own schedule with car rental options at the airport and downtown.",
      image: "../static/images/rental.jpg",
      detailsId: "rental-details",
      detailsFile: "/details/car-rental.tmpl"
    },
    {
      title: "Bicycle Rentals",
      description: "Eco-friendly and perfect for exploring the island’s trails and beachfronts.",
      image: "../static/images/bike.jpg",
      detailsId: "bike-details",
      detailsFile: "/details/bike.html"
    },
    {
      title: "Island Cruise",
      description: "Scenic and reliable cruise ship service between the mainland on a weekly basis.",
      image: "../static/images/cruise.jpg",
      detailsId: "cruise-details",
      detailsFile: "/details/cruise.html"
    },
    {
      title: "Bus",
      description: "Affordable public transport with regular schedules around major locations.",
      image: "../static/images/bus.jpg",
      detailsId: "bus-details",
      detailsFile: "/details/bus.html"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('transport-cards') != null) {
      const grid = document.getElementById('transport-cards');

      transportCardsData.forEach(card => {
        grid.innerHTML += renderTransportCard(card);
      });
    }
  });

  function renderAccommodationCard({ title, description, image, detailsId, detailsFile }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              hx-get="${detailsFile}"
              hx-target="#${detailsId}"
              hx-swap="outerHTML">
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
  }

  const accommodationCardsData = [
    {
      title: "Hotel",
      description: "Great location choice and daily cleaning on a budget.",
      image: "../static/images/hotel.jpg",
      detailsId: "hotel-details",
      detailsFile: "details/hotel.html"
    },
    {
      title: "Resort",
      description: "Enjoy the resort amenities and clean rooms.",
      image: "../static/images/resort.jpg",
      detailsId: "resort-details",
      detailsFile: "/details/resort.tmpl"
    },
    {
      title: "Bed and Breakfast",
      description: "Comfort and welcoming hosts breakfast included in pricing.",
      image: "../static/images/house.jpg",
      detailsId: "house-details",
      detailsFile: "/details/house.html"
    },
    {
      title: "Condo",
      description: "Privacy and Convienance located close to beaches.",
      image: "../static/images/condo.jpg",
      detailsId: "condo-details",
      detailsFile: "/details/condo.html"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('accommodation-cards') != null) {
      const grid = document.getElementById('accommodation-cards');

      accommodationCardsData.forEach(card => {
        grid.innerHTML += renderAccommodationCard(card);
      });
    }
  });

  function renderActivityCard({ title, description, image, detailsId, detailsFile }) {
    return `
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${title}</h3>
          <p class="text-sm text-gray-600">${description}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <button 
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 text-sm"
              hx-get="${detailsFile}"
              hx-target="#${detailsId}"
              hx-swap="outerHTML">
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
  }

  const activityCardsData = [
    {
      title: "Volcano Tours",
      description: "Shuttle to close-up views of the Island's Volcano",
      image: "../static/images/volcano.jpg",
      detailsId: "volcano-details",
      detailsFile: "details/volcano.html"
    },
    {
      title: "Beach Gear",
      description: "Sun soaked beaches and beach gear rentals.",
      image: "../static/images/beach.jpg",
      detailsId: "beach-details",
      detailsFile: "/details/beach.tmpl"
    },
    {
      title: "Zipline Adventures",
      description: "Soar over the jungles in this daring adventure.",
      image: "../static/images/zipline.jpg",
      detailsId: "zipline-details",
      detailsFile: "/details/zipline.html"
    },
    {
      title: "Dive and Snorkeling Boat charters",
      description: "Get up-close with the islands sea-life, or just enjoy a sunset on the water.",
      image: "../static/images/boat.jpg",
      detailsId: "boat-details",
      detailsFile: "/details/boat.html"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('activity-cards') != null) {
      const grid = document.getElementById('activity-cards');

      activityCardsData.forEach(card => {
        grid.innerHTML += renderActivityCard(card);
      });
    }
  });

  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    breakpoints: {
      640: { perView: 1 },
      768: { perView: 2 },
      1024: { perView: 3 }
    }
  }).mount();

  function bookingForm() {
    return {
      category: '',
      options: {
        Transportation: ["Taxi", "Rental Car", "Scooter", "Ferry", "Bus", "Bicycle"],
        Accommodation: ["Resort", "Hotel", "Hostel", "Vacation Rental", "Eco Lodge"],
        Activity: ["Hiking", "Snorkeling", "Cultural Tour", "Surfing", "Boat Cruise"]
      }
    };
  }

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
  }

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
