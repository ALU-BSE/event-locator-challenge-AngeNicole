// Main JavaScript for index.html
document.addEventListener('DOMContentLoaded', function() {
    initializeHomePage();
});

function initializeHomePage() {
    populateCategories();
    populateFeaturedEvents();
    setupSearchForm();
}

// Populate categories section
function populateCategories() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    container.innerHTML = categories.map(category => `
        <div class="col-md-4 col-lg-3">
            <div class="category-card" onclick="searchByCategory('${category.id}')">
                <i class="${category.icon}"></i>
                <h5>${category.name}</h5>
                <p>${category.description}</p>
            </div>
        </div>
    `).join('');
}

// Populate featured events section
function populateFeaturedEvents() {
    const container = document.getElementById('featuredEventsContainer');
    if (!container) return;

    const featuredEvents = getFeaturedEvents();
    
    container.innerHTML = featuredEvents.map(event => `
        <div class="col-md-6 col-lg-4">
            <div class="card event-card h-100" onclick="goToEventDetails(${event.id})">
                <img src="${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge bg-meetup me-2">${categories.find(c => c.id === event.category)?.name || event.category}</span>
                        <small class="text-muted">${formatDate(event.date)}</small>
                    </div>
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text text-truncate-3 flex-grow-1">${event.description}</p>
                    <div class="mt-auto">
                        <div class="d-flex align-items-center text-muted mb-2">
                            <i class="fas fa-map-marker-alt me-2"></i>
                            <span>${event.location}</span>
                        </div>
                        <div class="d-flex align-items-center text-muted">
                            <i class="fas fa-users me-2"></i>
                            <span>${event.attendees} attending</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup search form
function setupSearchForm() {
    const searchForm = document.getElementById('searchForm');
    if (!searchForm) return;

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const city = document.getElementById('cityInput').value.trim();
        const category = document.getElementById('categorySelect').value;
        
        // Store search parameters in localStorage
        localStorage.setItem('searchCity', city);
        localStorage.setItem('searchCategory', category);
        
        // Redirect to events page
        window.location.href = 'events.html';
    });
}

// Search by category function
function searchByCategory(categoryId) {
    localStorage.setItem('searchCategory', categoryId);
    localStorage.setItem('searchCity', '');
    window.location.href = 'events.html';
}

// Go to event details
function goToEventDetails(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}