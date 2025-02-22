document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Welcome to EduBlog!");

  // Toggle the visibility of the navigation menu on smaller screens
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
  });

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Form submitted:", { name, email, message });
      alert("Thank you for your message!");
      contactForm.reset();
    });
  }

  // Search functionality
  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = document.getElementById("search-query").value;
      console.log("Search query:", query);
      // Implement search logic here
    });
  }

  // Comment form submission
  const commentForm = document.getElementById("comment-form");
  if (commentForm) {
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("comment-name").value;
      const text = document.getElementById("comment-text").value;

      const commentList = document.getElementById("comment-list");
      const newComment = document.createElement("li");
      newComment.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
      commentList.appendChild(newComment);

      commentForm.reset();
    });
  }
});
