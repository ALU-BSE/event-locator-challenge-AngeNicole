// Event data and categories
const categories = [
    {
        id: 'technology',
        name: 'Technology',
        icon: 'fas fa-laptop-code',
        description: 'Tech meetups, coding bootcamps, and innovation talks'
    },
    {
        id: 'business',
        name: 'Business',
        icon: 'fas fa-briefcase',
        description: 'Networking events, startup meetups, and business seminars'
    },
    {
        id: 'health',
        name: 'Health & Wellness',
        icon: 'fas fa-heart',
        description: 'Fitness classes, wellness workshops, and health seminars'
    },
    {
        id: 'arts',
        name: 'Arts & Culture',
        icon: 'fas fa-palette',
        description: 'Art exhibitions, cultural events, and creative workshops'
    },
    {
        id: 'sports',
        name: 'Sports & Fitness',
        icon: 'fas fa-dumbbell',
        description: 'Sports events, fitness classes, and outdoor activities'
    },
    {
        id: 'food',
        name: 'Food & Drink',
        icon: 'fas fa-utensils',
        description: 'Cooking classes, wine tastings, and food festivals'
    },
    {
        id: 'music',
        name: 'Music',
        icon: 'fas fa-music',
        description: 'Concerts, music festivals, and open mic nights'
    },
    {
        id: 'education',
        name: 'Education',
        icon: 'fas fa-graduation-cap',
        description: 'Workshops, lectures, and learning groups'
    }
];

const events = [
    {
        id: 1,
        title: "React & Next.js Developer Meetup",
        description: "Join us for an evening of React and Next.js discussions, networking, and hands-on coding. Perfect for developers of all levels who want to learn about modern web development.",
        fullDescription: "Join us for an exciting evening dedicated to React and Next.js! This meetup is perfect for developers of all skill levels who are passionate about modern web development. We'll have expert speakers sharing the latest best practices, live coding sessions, and plenty of networking opportunities. Whether you're just starting with React or you're a seasoned developer looking to dive deeper into Next.js features, this event has something for everyone. Bring your laptop for hands-on workshops and prepare to connect with like-minded developers in our community.",
        category: "technology",
        date: "2024-07-15",
        time: "18:00",
        location: "Tech Hub, Downtown",
        venue: "Tech Hub Conference Room A\n123 Innovation Street\nDowntown, NY 10001",
        city: "New York",
        attendees: 45,
        maxAttendees: 60,
        price: "Free",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500",
        organizer: {
            name: "Sarah Chen",
            eventsOrganized: 12,
            avatar: "https://via.placeholder.com/50"
        },
        featured: true
    },
    {
        id: 2,
        title: "Startup Networking Night",
        description: "Connect with entrepreneurs, investors, and startup enthusiasts. Share ideas, find co-founders, and build meaningful business relationships.",
        fullDescription: "An exclusive networking event designed for entrepreneurs, startup founders, investors, and anyone passionate about innovation. This evening offers a unique opportunity to connect with like-minded individuals, share your startup ideas, seek potential co-founders, and build valuable business relationships. We'll have structured networking sessions, pitch opportunities for early-stage startups, and panel discussions with successful entrepreneurs and investors. Whether you're in the ideation phase or scaling your startup, this event will provide insights and connections that could be pivotal for your entrepreneurial journey.",
        category: "business",
        date: "2024-07-18",
        time: "19:00",
        location: "Innovation Center",
        venue: "Innovation Center Main Hall\n456 Entrepreneur Avenue\nBusiness District, NY 10002",
        city: "New York",
        attendees: 78,
        maxAttendees: 100,
        price: "$25",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500",
        organizer: {
            name: "Michael Rodriguez",
            eventsOrganized: 8,
            avatar: "https://via.placeholder.com/50"
        },
        featured: true
    },
    {
        id: 3,
        title: "Morning Yoga in Central Park",
        description: "Start your day with peace and mindfulness. All levels welcome for this outdoor yoga session in beautiful Central Park.",
        fullDescription: "Begin your day with tranquility and mindfulness in the heart of New York City. Our morning yoga session in Central Park offers a perfect escape from the urban hustle, allowing you to connect with nature while nurturing your body and mind. This all-levels class combines gentle stretching, breathing exercises, and meditation techniques suitable for beginners and experienced practitioners alike. We provide yoga mats, but feel free to bring your own. The session focuses on energizing poses to help you start your day feeling refreshed and centered. Join our welcoming community of yoga enthusiasts for this rejuvenating outdoor experience.",
        category: "health",
        date: "2024-07-16",
        time: "07:30",
        location: "Central Park - Sheep Meadow",
        venue: "Central Park, Sheep Meadow\nNear West 67th Street entrance\nUpper West Side, NY 10023",
        city: "New York",
        attendees: 23,
        maxAttendees: 40,
        price: "$15",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=500",
        organizer: {
            name: "Lisa Park",
            eventsOrganized: 25,
            avatar: "https://via.placeholder.com/50"
        },
        featured: false
    },
    {
        id: 4,
        title: "Contemporary Art Gallery Opening",
        description: "Discover emerging artists and their latest works at this exclusive gallery opening featuring contemporary art from local and international artists.",
        fullDescription: "Experience the vibrant world of contemporary art at our exclusive gallery opening, showcasing groundbreaking works from both emerging local talents and established international artists. This curated exhibition explores themes of modern society, technology, and human connection through various mediums including painting, sculpture, digital art, and mixed media installations. The evening will feature artist talks, guided tours, and the opportunity to meet the creators behind these thought-provoking pieces. Complimentary wine and light refreshments will be served as you immerse yourself in this celebration of creativity and artistic expression. Perfect for art enthusiasts, collectors, and anyone curious about contemporary culture.",
        category: "arts",
        date: "2024-07-20",
        time: "18:30",
        location: "Modern Art Gallery",
        venue: "Modern Art Gallery\n789 Arts District Boulevard\nChelsea, NY 10011",
        city: "New York",
        attendees: 92,
        maxAttendees: 120,
        price: "$20",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500",
        organizer: {
            name: "Alexandra Dubois",
            eventsOrganized: 15,
            avatar: "https://via.placeholder.com/50"
        },
        featured: true
    },
    {
        id: 5,
        title: "CrossFit Beginner Workshop",
        description: "Learn the basics of CrossFit in a supportive environment. Perfect for those new to functional fitness and high-intensity workouts.",
        fullDescription: "Take your first step into the world of functional fitness with our comprehensive CrossFit beginner workshop. Designed specifically for newcomers to high-intensity training, this session covers fundamental movements, proper form, and safety techniques essential for CrossFit success. Our certified trainers will guide you through basic exercises including squats, deadlifts, pull-ups, and olympic lifting variations, ensuring you build a solid foundation before advancing to more complex workouts. The workshop includes personalized coaching, equipment orientation, and nutritional guidance to support your fitness journey. No prior experience necessary – just bring your enthusiasm and willingness to challenge yourself in a supportive, non-intimidating environment.",
        category: "sports",
        date: "2024-07-17",
        time: "10:00",
        location: "FitLife Gym",
        venue: "FitLife CrossFit Gym\n321 Fitness Street\nBrooklyn, NY 11201",
        city: "New York",
        attendees: 18,
        maxAttendees: 25,
        price: "$30",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
        organizer: {
            name: "Jake Thompson",
            eventsOrganized: 31,
            avatar: "https://via.placeholder.com/50"
        },
        featured: false
    },
    {
        id: 6,
        title: "Wine Tasting & Food Pairing",
        description: "Explore fine wines from around the world paired with artisanal cheeses and gourmet appetizers. A perfect evening for wine enthusiasts.",
        fullDescription: "Embark on a sophisticated culinary journey with our wine tasting and food pairing experience, featuring carefully selected wines from renowned vineyards around the world. Our sommelier will guide you through tastings of five distinct wines, each expertly paired with artisanal cheeses, gourmet appetizers, and small plates that enhance and complement the wines' unique characteristics. Learn about wine regions, tasting techniques, and the art of food pairing while enjoying an elegant evening with fellow wine enthusiasts. The event includes detailed tasting notes, information about each wine's origin and production methods, and tips for creating your own pairings at home. Whether you're a wine novice or connoisseur, this experience promises to expand your palate and knowledge.",
        category: "food",
        date: "2024-07-19",
        time: "19:30",
        location: "The Wine Cellar",
        venue: "The Wine Cellar\n567 Vineyard Lane\nSoHo, NY 10012",
        city: "New York",
        attendees: 34,
        maxAttendees: 40,
        price: "$65",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500",
        organizer: {
            name: "Robert Martinelli",
            eventsOrganized: 22,
            avatar: "https://via.placeholder.com/50"
        },
        featured: false
    },
    {
        id: 7,
        title: "Jazz Night at Blue Note",
        description: "Experience live jazz performances by talented local musicians in an intimate setting. A night of smooth melodies and great atmosphere.",
        fullDescription: "Immerse yourself in the soulful world of jazz at our intimate evening featuring talented local musicians performing in the legendary style of the great jazz masters. Set in a cozy, dimly-lit venue reminiscent of classic jazz clubs, this event showcases both established and emerging artists performing original compositions and beloved jazz standards. The evening features a variety of styles from smooth contemporary jazz to bebop and blues, creating a rich musical tapestry that appeals to both jazz aficionados and newcomers to the genre. Enjoy craft cocktails and light bites while being transported by the improvisational magic and artistic expression that makes jazz so captivating. This is more than a concert – it's a cultural experience celebrating America's greatest musical art form.",
        category: "music",
        date: "2024-07-21",
        time: "20:00",
        location: "Blue Note Club",
        venue: "Blue Note Jazz Club\n131 West 3rd Street\nGreenwich Village, NY 10012",
        city: "New York",
        attendees: 67,
        maxAttendees: 80,
        price: "$35",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
        organizer: {
            name: "Carmen Williams",
            eventsOrganized: 18,
            avatar: "https://via.placeholder.com/50"
        },
        featured: false
    },
    {
        id: 8,
        title: "Digital Marketing Workshop",
        description: "Learn the latest digital marketing strategies, including social media marketing, SEO, and content creation from industry experts.",
        fullDescription: "Master the ever-evolving landscape of digital marketing with our comprehensive workshop led by industry experts with years of hands-on experience. This intensive session covers the most effective current strategies including social media marketing across all major platforms, search engine optimization (SEO) techniques, content creation and marketing, email marketing automation, and paid advertising campaigns. You'll learn practical skills through real case studies, interactive exercises, and actionable frameworks you can implement immediately. Whether you're a business owner looking to grow your online presence, a marketing professional wanting to update your skills, or someone considering a career in digital marketing, this workshop provides valuable insights and tools for success in today's digital-first business environment.",
        category: "education",
        date: "2024-07-22",
        time: "14:00",
        location: "Learning Hub",
        venue: "Digital Learning Hub\n890 Education Avenue\nMidtown, NY 10018",
        city: "New York",
        attendees: 28,
        maxAttendees: 35,
        price: "$85",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        organizer: {
            name: "David Kim",
            eventsOrganized: 14,
            avatar: "https://via.placeholder.com/50"
        },
        featured: false
    }
];

// Function to get events by category
function getEventsByCategory(category) {
    if (!category) return events;
    return events.filter(event => event.category === category);
}

// Function to get featured events
function getFeaturedEvents() {
    return events.filter(event => event.featured);
}

// Function to get event by ID
function getEventById(id) {
    return events.find(event => event.id === parseInt(id));
}

// Function to search events
function searchEvents(query, category = '', dateFilter = '') {
    let filteredEvents = events;

    // Filter by search query
    if (query) {
        const searchTerm = query.toLowerCase();
        filteredEvents = filteredEvents.filter(event =>
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm) ||
            event.city.toLowerCase().includes(searchTerm)
        );
    }

    // Filter by category
    if (category) {
        filteredEvents = filteredEvents.filter(event => event.category === category);
    }

    // Filter by date
    if (dateFilter) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        filteredEvents = filteredEvents.filter(event => {
            const eventDate = new Date(event.date);
            
            switch (dateFilter) {
                case 'today':
                    return eventDate.toDateString() === today.toDateString();
                case 'tomorrow':
                    return eventDate.toDateString() === tomorrow.toDateString();
                case 'this-week':
                    const weekEnd = new Date(today);
                    weekEnd.setDate(weekEnd.getDate() + 7);
                    return eventDate >= today && eventDate <= weekEnd;
                case 'next-week':
                    const nextWeekStart = new Date(today);
                    nextWeekStart.setDate(nextWeekStart.getDate() + 7);
                    const nextWeekEnd = new Date(nextWeekStart);
                    nextWeekEnd.setDate(nextWeekEnd.getDate() + 7);
                    return eventDate >= nextWeekStart && eventDate <= nextWeekEnd;
                case 'this-month':
                    return eventDate.getMonth() === today.getMonth() && 
                           eventDate.getFullYear() === today.getFullYear();
                default:
                    return true;
            }
        });
    }

    return filteredEvents;
}

// Function to get related events (same category, excluding current event)
function getRelatedEvents(eventId, category, limit = 3) {
    return events
        .filter(event => event.id !== eventId && event.category === category)
        .slice(0, limit);
}

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to format time
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}