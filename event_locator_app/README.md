# Event Locator Web Application

A responsive Event Locator website inspired by Meetup, built with HTML, CSS, Bootstrap, and JavaScript.

## 📁 Project Structure

```
event-locator/
├── index.html              # Home page
├── events.html             # Events listing page
├── event-details.html      # Individual event 
├── css/
│   └── styles.css          # Custom CSS styles
├── js/
│   ├── data.js            # Event data and 
│   ├── main.js            # JavaScript for home
│   ├── events.js          # JavaScript for events page
│   └── event-details.js   # JavaScript for event details page
└── README.md              # This file
```

## 🚀 Features

### Home Page (index.html)
- Hero section with search functionality
- City/location search input
- Category filters (Technology, Business, Health, Arts, Sports, Food, Music, Education)
- Featured events showcase
- Interactive category cards
- Responsive design for all devices

### Events Page (events.html)
- Dynamic event listing with filtering
- Search by keyword, category, and date
- Grid and list view options
- Load more functionality (pagination)
- Real-time search with debouncing
- Results counter

### Event Details Page (event-details.html)
- Comprehensive event information
- Event image, description, and venue details
- Attendee information and pricing
- Organizer profile
- Related events suggestions
- Interactive buttons (Attend, Save, Share)

## 🎨 Design Features

- **Meetup-inspired color scheme** with custom CSS variables
- **Fully responsive** design using Bootstrap 5
- **Modern card-based layout** for events
- **Interactive hover effects** and smooth animations
- **Icon integration** with Font Awesome
- **Custom styling** that enhances Bootstrap components

## 🔧 Technical Implementation

### CSS Features
- CSS custom properties for consistent theming
- Responsive breakpoints for mobile-first design
- Smooth animations and transitions
- Custom scrollbar styling
- Loading states and visual feedback

### JavaScript Functionality
- **Event data management** with mock data structure
- **Search and filtering** with multiple criteria
- **URL parameter handling** for deep linking
- **Local storage** for search persistence
- **Dynamic content rendering** with template literals
- **Debounced search** for performance
- **Pagination** with load more functionality

### Data Structure
- **Categories**: 8 predefined event categories with icons
- **Events**: Comprehensive event objects with all necessary details
- **Search functionality**: Multi-criteria filtering system
- **Related events**: Category-based recommendations

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🌟 Key Highlights

1. **Modern UI/UX**: Clean, professional design inspired by Meetup
2. **Performance Optimized**: Efficient search with debouncing and pagination
3. **User-Friendly**: Intuitive navigation and clear information hierarchy
4. **Accessible**: Semantic HTML structure and proper ARIA labels
5. **Maintainable**: Well-organized code structure with separation of concerns

## 🚀 Getting Started

1. **Download** all the files maintaining the folder structure
2. **Open** `index.html` in your web browser
3. **Navigate** through the application using the menu or search functionality

## 📋 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements

- User authentication and profiles
- Event creation and management
- Real-time notifications
- Map integration for event locations
- Calendar integration
- Social sharing improvements
- Advanced filtering options
- User reviews and ratings

## 📄 Dependencies

- **Bootstrap 5.3.0** (via CDN)
- **Font Awesome 6.0.0** (via CDN)
- **Vanilla JavaScript** (ES6+)

No build process required - ready to run in any modern web browser!