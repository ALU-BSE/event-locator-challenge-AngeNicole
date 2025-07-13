// JavaScript for event-details.html
let currentEvent = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeEventDetailsPage();
});

function initializeEventDetailsPage() {
    const eventId = getEventIdFromUrl();
    if (eventId) {
        loadEventDetails(eventId);
        loadRelatedEvents(eventId);
    } else {
        showEventNotFound();
    }
}

// Get event ID from URL parameters
function getEventIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load and display event details
function loadEventDetails(eventId) {
    currentEvent = getEventById(parseInt(eventId));
    
    if (!currentEvent) {
        showEventNotFound();
        return;
    }

    populateEventDetails(currentEvent);
}

// Populate all event details on the page
function populateEventDetails(event) {
    // Basic event information
    updateElement('eventCategory', categories.find(c => c.id === event.category)?.name || event.category);
    updateElement('eventDate', formatDate(event.date));
    updateElement('eventTitle', event.title);
    updateElement('eventLocation', event.location);
    updateElement('eventTime', formatTime(event.time));
    updateElement('eventDescription', event.fullDescription);

    // Event image
    const eventImage = document.getElementById('eventImage');
    if (eventImage) {
        eventImage.src = event.image;
        eventImage.alt = event.title;
    }

    // Detailed information cards
    updateElement('eventDateTime', `${formatDate(event.date)} at ${formatTime(event.time)}`);
    updateElement('eventVenue', event.venue);
    updateElement('eventAttendees', `${event.attendees} of ${event.maxAttendees} spots filled`);
    updateElement('eventPrice', event.price);

    // Sidebar information
    updateElement('sidebarAttendees', `${event.attendees} attending`);
    updateElement('sidebarPrice', event.price);

    // Organizer information
    updateElement('organizerName', event.organizer.name);
    updateElement('organizerEvents', `${event.organizer.eventsOrganized} events organized`);

    // Update page title
    document.title = `${event.title} - Event Locator`;
}

// Load and display related events
function loadRelatedEvents(eventId) {
    if (!currentEvent) return;

    const relatedEvents = getRelatedEvents(parseInt(eventId), currentEvent.category, 3);
    const container = document.getElementById('relatedEventsContainer');
    
    if (!container) return;

    if (relatedEvents.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">No related events found.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = relatedEvents.map(event => `
        <div class="col-md-4">
            <div class="card event-card h-100" onclick="goToEventDetails(${event.id})">
                <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 150px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-2">
                        <span class="badge bg-meetup me-2">${categories.find(c => c.id === event.category)?.name || event.category}</span>
                        <small class="text-muted">${formatDate(event.date)}</small>
                    </div>
                    <h6 class="card-title">${event.title}</h6>
                    <p class="card-text text-truncate-2">${event.description}</p>
                    <div class="d-flex align-items-center text-muted">
                        <i class="fas fa-map-marker-alt me-2"></i>
                        <small>${event.location}</small>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Show event not found message
function showEventNotFound() {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-exclamation-triangle fa-3x text-muted mb-3"></i>
                <h2>Event Not Found</h2>
                <p class="text-muted mb-4">The event you're looking for doesn't exist or has been removed.</p>
                <a href="events.html" class="btn btn-meetup">Browse All Events</a>
            </div>
        `;
    }
}

// Helper function to update element content safely
function updateElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    }
}

// Go to event details (for related events)
function goToEventDetails(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}

// Placeholder functions for interactive buttons
function attendEvent() {
    if (!currentEvent) return;
    
    // Simulate attending the event
    currentEvent.attendees += 1;
    updateElement('eventAttendees', `${currentEvent.attendees} of ${currentEvent.maxAttendees} spots filled`);
    updateElement('sidebarAttendees', `${currentEvent.attendees} attending`);
    
    // Show success message (you could replace this with a proper toast notification)
    alert('You have successfully registered for this event!');
}

function saveEvent() {
    alert('Event saved to your favorites!');
}

function shareEvent() {
    if (navigator.share) {
        navigator.share({
            title: currentEvent?.title || 'Event',
            text: currentEvent?.description || 'Check out this event!',
            url: window.location.href
        });
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Event URL copied to clipboard!');
        }).catch(() => {
            alert('Unable to share. Please copy the URL manually.');
        });
    }
}

function contactOrganizer() {
    alert('Contact organizer feature would open here!');
}

// Add event listeners for interactive buttons when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Find buttons and add event listeners
    const attendBtn = document.querySelector('.btn-meetup');
    const saveBtn = document.querySelector('.btn-outline-meetup');
    const shareBtn = document.querySelector('.btn-outline-secondary');
    const contactBtn = document.querySelector('.card:last-child .btn-outline-meetup');

    if (attendBtn) {
        attendBtn.addEventListener('click', attendEvent);
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveEvent);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareEvent);
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', contactOrganizer);
    }
});