document.getElementById('addItem').addEventListener('click', function () {
    const name = document.getElementById('meditationName').value;
    const description = document.getElementById('description').value;
  

    if (name && description ) {
      const portfolio = document.getElementById('portfolio');

      const card = document.createElement('div');
      card.className = 'card bg-white shadow-md overflow-hidden';

      const id = Date.now(); // Unique ID for the post
        card.setAttribute('data-id', id);

      card.innerHTML = `
       
        <div class="p-4">
          <h3 class="text-lg font-bold">${name}</h3>
          <p>${description}</p>
            <button class="btn btn-error btn-sm mt-4" onclick="clearPost(${id})">Remove</button>
        </div>
      `;

      portfolio.appendChild(card);

      // Clear input fields
      document.getElementById('portfolioForm').reset();
    } else {
      alert('Please fill out all fields!');
    }
  });

  function clearPost(id) {
    const post = document.querySelector(`[data-id='${id}']`);
    if (post) {
        post.remove();
    }};