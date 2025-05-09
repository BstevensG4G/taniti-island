const options = {
    Transportation: ['Bus', 'Taxi', 'Car Rental', 'Cruise'],
    Accommodation: ['Hotel', 'Resort', 'B&B', 'Condo', 'Private Home'],
    Activity: ['Volcano Tour', 'Snorkeling', 'Scuba', 'Zipline', 'Bikes']
  };

  const categorySelect = document.getElementById('category');
  const typeSelect = document.getElementById('type');

  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;

    // Clear existing options
    typeSelect.innerHTML = '<option value="">-- Select Type --</option>';

    if (options[selectedCategory]) {
      options[selectedCategory].forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
      });
      typeSelect.disabled = false;
    } else {
      typeSelect.disabled = true;
    }
  });