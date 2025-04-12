const blogContainer = document.getElementById('blog-posts');
const blogURL = 'https://raw.githubusercontent.com/yourusername/blog-data/main/posts.json';

fetch(blogURL)
  .then(response => response.json())
  .then(posts => {
    blogContainer.innerHTML = '';
    posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${post.title}</h2>
        <p><em>${post.date}</em></p>
        <p>${post.content}</p>
      `;
      blogContainer.appendChild(article);
    });
  })
  .catch(error => {
    blogContainer.innerHTML = '<p>Failed to load blog posts.</p>';
    console.error(error);
  });