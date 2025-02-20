//  polyfill 
if (!window.fetch) {
    window.fetch = function(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve({
          json: () => Promise.resolve(JSON.parse(xhr.responseText)),
          text: () => Promise.resolve(xhr.responseText)
        });
        xhr.onerror = reject;
        xhr.send();
      });
    };
  }
  document.addEventListener("DOMContentLoaded", () => {
    console.log("TechBytes script loaded successfully!");
  
    // Highlight active navigation link
    const currentPage = window.location.pathname;
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
  });
    // Corrected LoremFlickr image URL
    document.addEventListener("DOMContentLoaded", () => {
        const imageElement = document.getElementById("dynamic-image");
        imageElement.src == `https://source.unsplash.com/1200x400/?technology,electronics`;
        imageElement.alt ="Technology Image";
    });
    const imageContainer = document.querySelector(".image-fit img");
    if (imageContainer) {
        imageContainer.src = `https://source.unsplash.com/1200x400/?technology,electronics`;
        imageContainer.alt = "Tech Image";
    }
  
    // Simulating dynamic post fetching (Replace with API if needed)
    const postsContainer = document.getElementById("posts-container");
    if (postsContainer) {
        const samplePosts = [
            { title: "AI and Machine Learning", content: "How AI is changing the world..." },
            { title: "Cybersecurity in 2024", content: "Latest security trends to watch out for..." }
        ];
  
        samplePosts.forEach(post => {
            const article = document.createElement("article");
            article.classList.add("post-card");
            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button class="read-more-btn">Read More</button>
            `;
            postsContainer.appendChild(article);
        });
    }
  
    // Read More Button Interaction
    document.querySelectorAll(".read-more-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to full article... (Functionality Pending)");
        });
    });
  
    // Fetch Latest Tech News (Using Placeholder API)
    const API_URL = "http://localhost:5000/api/news";

    document.addEventListener("DOMContentLoaded", () => {
      const API_KEY = "fa2ebb9067ed4a3f8c7b236b611f2a4f";
      const NEWS_URL = `https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${API_KEY}`;
      const newsContainer = document.getElementById("news-container");
      
      fetch(API_URL)
          .then(response => response.json())
          .then(data => {
              newsContainer.innerHTML = ""; // Clear loading text
              
              data.articles.forEach(article => {
                  const articleElement = document.createElement("div");
                  articleElement.classList.add("news-item");
                  articleElement.style.display = "flex";
                  articleElement.style.alignItems = "center";
                  articleElement.style.marginBottom = "20px";
                  articleElement.innerHTML = `
                      <h4>${article.title}</h4>
                      <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="News Image" class="news-image">
                      <p>${article.description || "No description available."}</p>
                      <a href="${article.url}" target="_blank" class="read-more">Read More</a>
                  `;
                  newsContainer.appendChild(articleElement);
              });
          })
          .catch(error => {
              newsContainer.innerHTML = "Failed to load news.";
              console.error("Error fetching news:", error);
          });
      
      // Handling "Read More" buttons on static articles
      document.querySelectorAll(".read-more-btn").forEach(button => {
          button.addEventListener("click", () => {
              alert("This feature will be connected soon!");
          });
      });
    // Newsletter Form Handling
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector("input[type='email']");
            if (emailInput.value.trim() === "") {
                alert("Please enter a valid email.");
            } else {
                alert(`Thank you for subscribing, ${emailInput.value}!`);
                emailInput.value = ""; // Clear input field
            }
        });
    }
      // Newsletter form submission
      document.getElementById("newsletterForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = event.target.querySelector("input").value;
        localStorage.setItem("subscribedEmail", email);
        alert("Thank you for subscribing!");
    });
  });
  
    // Fix Social Media Links
    document.querySelectorAll(".social-links a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Redirecting to social media... (Update with real links)");
        });
    });
  
  