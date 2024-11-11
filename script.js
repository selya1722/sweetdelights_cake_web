const cakeList = document.getElementById("cake-list");

// Fetch JSON data from the GitHub repository via My JSON Server
fetch("https://my-json-server.typicode.com/selya1722/cake-shop-data/cakes") 
  .then(response => {
    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json(); // Parse JSON data if response is ok
  })
  .then(cakes => {
    // Iterate through each cake and create HTML elements
    cakes.forEach(cake => {
      // Create a new div for each cake item
      const cakeItem = document.createElement("div");
      cakeItem.classList.add("cake-item");

      // Populate the div with cake data
      cakeItem.innerHTML = `
        <img src="${cake.image}" alt="${cake.name}" />
        <h3>${cake.name}</h3>
        <p>${cake.description}</p>
      `;

      // Append each cake item to the cake list container
      cakeList.appendChild(cakeItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));


  let lastScrollTop = 0;
  /*review*/

// Sample fake reviews data with images (replace URLs with real or placeholder images)
const reviewsData = [
  { name: "Alice", review: "Absolutely loved the cakes! Will order again.", rating: 5, img: "https://picsum.photos/80" },
  { name: "Bob", review: "Great flavors and presentation!", rating: 4, img: "https://picsum.photos/80?random=1" },
  { name: "Cathy", review: "Very fresh and tasty, highly recommend!", rating: 5, img: "https://picsum.photos/80?random=2" },
  { name: "Daniel", review: "Good, but could improve on the sweetness.", rating: 3, img: "https://picsum.photos/80?random=3" }
];

// Function to generate star rating HTML
function getStarRating(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Function to display reviews with images
function displayReviews(reviews) {
  const reviewsContainer = document.getElementById('reviews');
  reviews.forEach(review => {
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('review-card');
      reviewCard.innerHTML = `
          <img src="${review.img}" alt="${review.name}'s photo" class="reviewer-img">
          <p class="review-text">"${review.review}"</p>
          <p class="reviewer-name">- ${review.name}</p>
          <p class="star-rating">${getStarRating(review.rating)}</p>
      `;
      reviewsContainer.appendChild(reviewCard);
  }); 
}

// Load reviews when the page loads
document.addEventListener('DOMContentLoaded', () => {
  displayReviews(reviewsData);
});

  
/*scrol;*/
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
};

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const feedback = document.getElementById("form-feedback");

  feedback.textContent = "";

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Thank you for your message!";
  this.reset();
});


/*new*/
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const header = document.querySelector(".header");

  if (currentScroll > lastScroll) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});
