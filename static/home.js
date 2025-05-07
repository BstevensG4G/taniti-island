new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    breakpoints: {
      640: { perView: 1 },
      768: { perView: 2 },
      1024: { perView: 3 }
    }
  }).mount();