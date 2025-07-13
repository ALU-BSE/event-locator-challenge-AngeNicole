// JavaScript for events.html
let currentEvents = [];
let displayedEvents = [];
let eventsPerPage = 9;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    initializeEventsPage();
});

function initializeEventsPage() {
    setupFilters();
    loadSearchParameters();
    performSearch();
    setupViewToggle();
}

// Setup filter event listeners
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const dateFilter = document.getElementById('dateFilter');
    const clearFilters = document.getElementById('clearFilters');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', performSearch);
    }

    if (dateFilter) {
        dateFilter.addEventListener('change', performSearch);
    }

    if (clearFilters) {
        clearFilters.addEventListener('click', clearAllFilters);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreEvents);
    }
}

// Load search parameters from localStorage
function loadSearchParameters() {
    const savedCity = localStorage.getItem('searchCity');
    const savedCategory = localStorage.getItem('searchCategory');

    if (savedCity) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = savedCity;
        }
    }

    if (savedCategory) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = savedCategory;
        }
    }

    // Clear localStorage after loading
    localStorage.removeItem('searchCity');
    localStorage.removeItem('searchCategory');
}

// Perform search with current filters
function performSearch() {
    const searchQuery = document.getElementById('searchInput')?.value || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const dateFilter = document.getElementById('dateFilter')?.value || '';

    currentEvents = searchEvents(searchQuery, category, dateFilter);
    currentPage = 1;
    displayedEvents = [];
    
    updateResultsCount();
    loadMoreEvents();
}

// Update results count
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        const total = currentEvents.length;
        if (total === 0) {
            resultsCount.textContent = 'No events found';
        } else if (total === 1) {
            resultsCount.textContent = '1 event found';
        } else {
            resultsCount.textContent = `${total} events found`;
        }
    }
}

// Load more events (pagination)
function loadMoreEvents() {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const newEvents = currentEvents.slice(startIndex, endIndex);

    displayedEvents = [...displayedEvents, ...newEvents];
    renderEvents();

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (displayedEvents.length < currentEvents.length) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    currentPage++;
}

// Render events in the container
function renderEvents() {
    const container = document.getElementById('eventsContainer');
    if (!container) return;

    if (displayedEvents.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                <h4>No events found</h4>
                <p class="text-muted">Try adjusting your search criteria or browse all events.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = displayedEvents.map(event => `
        <div class="col-md-6 col-lg-4">
            <div class="card event-card h-100 fade-in" onclick="goToEventDetails(${event.id})">
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
                        <div class="d-flex justify-content-between align-items-center text-muted">
                            <div>
                                <i class="fas fa-users me-1"></i>
                                <span>${event.attendees} attending</span>
                            </div>
                            <div>
                                <i class="fas fa-clock me-1"></i>
                                <span>${formatTime(event.time)}</span>
                            </div>
                        </div>
                        ${event.price !== 'Free' ? `
                            <div class="mt-2">
                                <span class="fw-bold text-meetup">${event.price}</span>
                            </div>
                        ` : `
                            <div class="mt-2">
                                <span class="badge bg-success">Free</span>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup view toggle (grid/list)
function setupViewToggle() {
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');

    if (gridView) {
        gridView.addEventListener('click', function() {
            setActiveView('grid');
            renderEventsInGrid();
        });
    }

    if (listView) {
        listView.addEventListener('click', function() {
            setActiveView('list');
            renderEventsInList();
        });
    }
}

// Set active view button
function setActiveView(view) {
    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');

    if (gridBtn && listBtn) {
        gridBtn.classList.toggle('active', view === 'grid');
        listBtn.classList.toggle('active', view === 'list');
    }
}

// Render events in grid view (default)
function renderEventsInGrid() {
    renderEvents(); // Use the existing render function
}

// Render events in list view
function renderEventsInList() {
    const container = document.getElementById('eventsContainer');
    if (!container) return;

    if (displayedEvents.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                <h4>No events found</h4>
                <p class="text-muted">Try adjusting your search criteria or browse all events.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="col-12">
            ${displayedEvents.map(event => `
                <div class="event-list-item fade-in" onclick="goToEventDetails(${event.id})">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${event.image}" alt="${event.title}" class="event-image">
                        </div>
                        <div class="col-md-7">
                            <div class="d-flex align-items-center mb-2">
                                <span class="badge bg-meetup me-2">${categories.find(c => c.id === event.category)?.name || event.category}</span>
                                <small class="text-muted">${formatDate(event.date)} at ${formatTime(event.time)}</small>
                            </div>
                            <h5 class="mb-2">${event.title}</h5>
                            <p class="text-muted mb-2">${event.description}</p>
                            <div class="d-flex align-items-center text-muted">
                                <i class="fas fa-map-marker-alt me-2"></i>
                                <span>${event.location}</span>
                            </div>
                        </div>
                        <div class="col-md-3 text-md-end">
                            <div class="mb-2">
                                <i class="fas fa-users me-1"></i>
                                <span>${event.attendees} attending</span>
                            </div>
                            ${event.price !== 'Free' ? `
                                <div class="fw-bold text-meetup">${event.price}</div>
                            ` : `
                                <span class="badge bg-success">Free</span>
                            `}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Clear all filters
function clearAllFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('dateFilter').value = '';
    performSearch();
}

// Go to event details
function goToEventDetails(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}