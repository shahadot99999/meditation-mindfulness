document.getElementById('addPostBtn').addEventListener('click', function () {
    // Get values from the input fields
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (title && content) {
        // Create a new blog post
        const post = document.createElement('div');
        post.classList.add('card', 'bg-base-200', 'shadow-lg', 'p-4');

        const id = Date.now(); // Unique ID for the post
        post.setAttribute('data-id', id);

        post.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${title}</h3>
            <p>${content}</p>
            <button class="btn btn-error btn-sm mt-4" onclick="removePost(${id})">Remove</button>
        `;

        // Append the post to the blogPosts container
        document.getElementById('blogPosts').appendChild(post);

        // Clear the input fields
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Please fill out both fields!');
    }
});

function removePost(id) {
    const post = document.querySelector(`[data-id='${id}']`);
    if (post) {
        post.remove();
    }
}