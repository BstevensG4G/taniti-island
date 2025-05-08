function toggleAnswer(button) {
    const answerId = button.getAttribute('data-answer-id');
    const answerDiv = document.getElementById(answerId);
    const url = button.getAttribute('data-url');
    const loaded = button.getAttribute('data-loaded') === 'true';

    if (!loaded) {
      // Load the answer via HTMX
      answerDiv.setAttribute('hx-get', url);
      answerDiv.setAttribute('hx-trigger', 'load');
      htmx.process(answerDiv);
      button.setAttribute('data-loaded', 'true');
    }

    // Toggle visibility
    if (answerDiv.classList.contains('hidden')) {
      answerDiv.classList.remove('hidden');
      button.textContent = '−';
    } else {
      answerDiv.classList.add('hidden');
      button.textContent = '+';
    }
  }