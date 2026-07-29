/* ==========================================
   NIT Raipur PG Finder - JavaScript Logic
   ========================================== */

// --- Sample PG Data (12 Accommodations) ---
const pgData = [
    {
        id: 1,
        name: "Vrindavan Boys PG",
        gender: "boys",
        price: 5500,
        distance: 0.4,
        rating: 4.8,
        facilities: ["WiFi", "Food", "Laundry"],
        images: ["room_single.jpg", "room_double.jpg", "common_lounge.jpg"],
        ownerName: "Shri Ramakant Sharma",
        ownerPhone: "+91 94252 12345",
        address: "Street No. 2, Kota Road, Near NIT Raipur Back Gate, Raipur, CG",
        description: "Vrindavan Boys PG offers a peaceful and academic atmosphere for students. Located just steps from the NIT Raipur back gate, it includes home-style nutritious food three times a day, high-speed fiber internet, daily room cleaning, and cooperative management.",
        roomTypes: [
            { type: "Single Occupancy", price: "₹7,500/mo" },
            { type: "Double Sharing", price: "₹5,500/mo" }
        ],
        availability: "Available"
    },
    {
        id: 2,
        name: "Aashraya Girls Hostel",
        gender: "girls",
        price: 6000,
        distance: 0.3,
        rating: 4.7,
        facilities: ["WiFi", "Food", "AC", "Laundry"],
        images: ["room_double.jpg", "room_single.jpg", "common_lounge.jpg"],
        ownerName: "Mrs. Sunita Deshmukh",
        ownerPhone: "+91 88899 45612",
        address: "Gali No. 4, Amanaka, Opposite NIT Raipur Main Gate, Raipur, CG",
        description: "A secure and highly-rated accommodation exclusively for girls. Offering 24/7 security guard, CCTV cameras, biometric entry, power backup, air-conditioned rooms, healthy meals, and washing machines. Highly recommended for first-year students.",
        roomTypes: [
            { type: "Double Sharing (AC)", price: "₹8,000/mo" },
            { type: "Double Sharing (Non-AC)", price: "₹6,000/mo" },
            { type: "Triple Sharing (Non-AC)", price: "₹4,800/mo" }
        ],
        availability: "Filling Fast"
    },
    {
        id: 3,
        name: "Raipur Residency PG",
        gender: "co-ed",
        price: 8500,
        distance: 0.8,
        rating: 4.6,
        facilities: ["WiFi", "AC", "Laundry"],
        images: ["building_exterior.jpg", "room_single.jpg", "common_lounge.jpg"],
        ownerName: "Mr. Vikrant Singhania",
        ownerPhone: "+91 90099 88877",
        address: "Sector 1, Choubey Colony, Near Amanaka Police Station, Raipur, CG",
        description: "A premium residential PG setting with modern studio-style apartments. It features luxurious double and single occupancy rooms, customized workspace furniture, smart TVs, geysers, washing machines, and weekly deep cleaning. Food is optional via third-party mess tie-up.",
        roomTypes: [
            { type: "Single Studio (AC)", price: "₹12,000/mo" },
            { type: "Double Suite (AC)", price: "₹8,500/mo" }
        ],
        availability: "Available"
    },
    {
        id: 4,
        name: "Ganga Girls PG",
        gender: "girls",
        price: 4500,
        distance: 1.2,
        rating: 4.3,
        facilities: ["WiFi", "Food", "Laundry"],
        images: ["room_single.jpg", "common_lounge.jpg", "room_double.jpg"],
        ownerName: "Mrs. Shakuntala Verma",
        ownerPhone: "+91 79740 65432",
        address: "Saraswati Nagar, Behind Raipur Railway Station (Kota Side), Raipur, CG",
        description: "Ganga Girls PG provides budget-friendly rooms with good connectivity. Includes three delicious vegetarian meals daily, safe drinking water (RO), 24 hours running water, study tables, and a spacious terrace. 5 minutes walk from Saraswati Nagar Railway Station.",
        roomTypes: [
            { type: "Double Sharing", price: "₹5,200/mo" },
            { type: "Triple Sharing", price: "₹4,500/mo" }
        ],
        availability: "Available"
    },
    {
        id: 5,
        name: "Aman Boys Hostel",
        gender: "boys",
        price: 4000,
        distance: 1.5,
        rating: 4.2,
        facilities: ["WiFi", "Food"],
        images: ["room_double.jpg", "building_exterior.jpg", "common_lounge.jpg"],
        ownerName: "Mr. Aman Tuteja",
        ownerPhone: "+91 98271 98765",
        address: "Kota Stadium Road, Near NIT Sports Ground, Raipur, CG",
        description: "Affordable housing for male students. Close to the local sports club and Kota playground. Offers basic single/double sharing rooms, common washrooms with hot water geysers, Wi-Fi, and a clean spacious dining area supplying breakfast and dinner.",
        roomTypes: [
            { type: "Double Sharing", price: "₹4,500/mo" },
            { type: "Triple Sharing", price: "₹4,000/mo" }
        ],
        availability: "Available"
    },
    {
        id: 6,
        name: "Balaji Executive PG",
        gender: "boys",
        price: 7500,
        distance: 0.6,
        rating: 4.5,
        facilities: ["WiFi", "Food", "AC", "Laundry"],
        images: ["room_single.jpg", "common_lounge.jpg", "building_exterior.jpg"],
        ownerName: "Mr. Balram Dewangan",
        ownerPhone: "+91 70001 22334",
        address: "Geeta Nagar Road, Opp. Kabir Nagar Gate, Raipur, CG",
        description: "High-quality executive PG accommodation for boys. It has spacious, well-ventilated rooms with modern tiles, attachment bathroom in all rooms, wardrobe, individual study lamp, and high-speed Wi-Fi. Features excellent meals (North & South Indian cuisines).",
        roomTypes: [
            { type: "Single Room (AC)", price: "₹10,500/mo" },
            { type: "Double Sharing (AC)", price: "₹7,500/mo" }
        ],
        availability: "Filling Fast"
    },
    {
        id: 7,
        name: "Elite Student Living",
        gender: "co-ed",
        price: 11000,
        distance: 0.5,
        rating: 4.9,
        facilities: ["WiFi", "Food", "AC", "Laundry"],
        images: ["common_lounge.jpg", "room_single.jpg", "room_double.jpg"],
        ownerName: "Elite Coliving Corp (Mgr: Sameer Sen)",
        ownerPhone: "+91 91112 34567",
        address: "VIP Estate Road, Near Amanaka Overbridge, Raipur, CG",
        description: "Elite Student Living is Raipur's finest co-living facility. Specially optimized for scholars and tech-savvy students. Amenities include central air conditioning, electronic keyless cards, smart gym access, gaming area, gaming PCs, indoor games, cafeteria, and housekeeping.",
        roomTypes: [
            { type: "Premium Single (AC)", price: "₹15,000/mo" },
            { type: "Premium Double (AC)", price: "₹11,000/mo" }
        ],
        availability: "Filling Fast"
    },
    {
        id: 8,
        name: "Aditya Home PG",
        gender: "boys",
        price: 5000,
        distance: 1.0,
        rating: 4.1,
        facilities: ["WiFi", "Food", "Laundry"],
        images: ["room_double.jpg", "common_lounge.jpg", "building_exterior.jpg"],
        ownerName: "Mr. Aditya Sahu",
        ownerPhone: "+91 81090 99887",
        address: "Gali No. 7, Kota Colony, Raipur, CG",
        description: "A comfortable, budget-friendly boys' hostel environment. Features standard wooden cupboards, study tables, common TV lounge, cooler facilities in summer, regular laundry services, and freshly cooked healthy breakfast, lunch, and dinner.",
        roomTypes: [
            { type: "Double Sharing", price: "₹5,800/mo" },
            { type: "Triple Sharing", price: "₹5,000/mo" }
        ],
        availability: "Available"
    },
    {
        id: 9,
        name: "Shree Ram PG",
        gender: "co-ed",
        price: 6500,
        distance: 1.8,
        rating: 4.4,
        facilities: ["WiFi", "Food", "AC"],
        images: ["room_single.jpg", "building_exterior.jpg", "common_lounge.jpg"],
        ownerName: "Mr. Ram Gopal Sahu",
        ownerPhone: "+91 93005 55443",
        address: "Near Pt. Ravishankar Shukla University Campus Gate, Raipur, CG",
        description: "Located mid-way between NIT Raipur and PRSU, this co-living PG features separate wings for boys and girls. Includes air conditioning options, regular RO water, Wi-Fi, dining tables, security guard, and power backup for computers during exam days.",
        roomTypes: [
            { type: "Double Sharing (AC)", price: "₹8,000/mo" },
            { type: "Double Sharing (Non-AC)", price: "₹6,500/mo" }
        ],
        availability: "Available"
    },
    {
        id: 10,
        name: "Shanti Girls PG",
        gender: "girls",
        price: 5000,
        distance: 0.9,
        rating: 4.0,
        facilities: ["WiFi", "Food"],
        images: ["room_double.jpg", "room_single.jpg", "common_lounge.jpg"],
        ownerName: "Mrs. Shanti Mishra",
        ownerPhone: "+91 74152 33669",
        address: "Shivanand Nagar, G.E. Road, Raipur, CG",
        description: "A peaceful residential property offering double and triple sharing accommodation for female students. Known for safety, strictly enforced curfew timings, home-like security, home-cooked light meals, clean drinking water, and excellent garden areas.",
        roomTypes: [
            { type: "Double Sharing", price: "₹6,000/mo" },
            { type: "Triple Sharing", price: "₹5,000/mo" }
        ],
        availability: "Fully Booked"
    },
    {
        id: 11,
        name: "Skyline Boys PG",
        gender: "boys",
        price: 9000,
        distance: 2.2,
        rating: 4.5,
        facilities: ["WiFi", "AC", "Laundry", "Food"],
        images: ["building_exterior.jpg", "common_lounge.jpg", "room_single.jpg"],
        ownerName: "Mr. Manish Agarwal",
        ownerPhone: "+91 99811 22334",
        address: "Skyline Tower, Tatibandh Square, Raipur, CG",
        description: "Stunning penthouse-level boys accommodation. Features highly hygienic rooms, modern dining mess, common lounge with Xbox console, high speed 150 Mbps Wi-Fi, individual modern wardrobes, lift, security cards, and a rooftop view of Raipur city.",
        roomTypes: [
            { type: "Single Room (AC)", price: "₹13,500/mo" },
            { type: "Double Sharing (AC)", price: "₹9,000/mo" }
        ],
        availability: "Available"
    },
    {
        id: 12,
        name: "Sunshine PG",
        gender: "co-ed",
        price: 7000,
        distance: 1.1,
        rating: 4.3,
        facilities: ["WiFi", "Food", "Laundry", "AC"],
        images: ["common_lounge.jpg", "room_double.jpg", "room_single.jpg"],
        ownerName: "Mr. Dinesh Rathore",
        ownerPhone: "+91 95844 77889",
        address: "Kabir Nagar Main Road, Near AIIMS Residential Quarters, Raipur, CG",
        description: "Sunshine PG provides a bright, positive co-living workspace environment. Located near AIIMS Raipur and very accessible to NIT Raipur. Offers air conditioning, fresh daily organic food, automatic washing machines, private desks, and security cameras.",
        roomTypes: [
            { type: "Double Sharing (AC)", price: "₹8,500/mo" },
            { type: "Double Sharing (Non-AC)", price: "₹7,000/mo" }
        ],
        availability: "Available"
    }
];

// --- Global States ---
let isSubscribed = localStorage.getItem('nitr_pg_subscribed') === 'true';
let activeSliderIndex = 0;
let activeSliderImages = [];
let currentOpenPG = null;

// --- DOM Elements ---
const navSubBtn = document.getElementById('nav-sub-btn');
const subIndicator = document.getElementById('sub-indicator');
const pgGrid = document.getElementById('pg-grid');
const emptyState = document.getElementById('empty-state');
const loader = document.getElementById('loader');
const resultsCount = document.getElementById('results-count');

// Search and Filter Elements
const heroSearchInput = document.getElementById('hero-search-input');
const heroSearchBtn = document.getElementById('hero-search-btn');
const filterSearch = document.getElementById('filter-search');
const filterPrice = document.getElementById('filter-price');
const priceVal = document.getElementById('price-val');
const filterDistance = document.getElementById('filter-distance');
const distanceVal = document.getElementById('distance-val');
const filterRating = document.getElementById('filter-rating');
const filterSort = document.getElementById('filter-sort');
const btnResetFilters = document.getElementById('btn-reset-filters');
const btnClearFiltersEmpty = document.getElementById('btn-clear-filters-empty');

// Facilities Checkboxes
const checkWiFi = document.getElementById('facility-wifi');
const checkFood = document.getElementById('facility-food');
const checkAC = document.getElementById('facility-ac');
const checkLaundry = document.getElementById('facility-laundry');

// Modals
const subModal = document.getElementById('sub-modal');
const infoModal = document.getElementById('info-modal');
const bookingModal = document.getElementById('booking-modal');
const successModal = document.getElementById('success-modal');

// Payment simulator stages
const paymentStage1 = document.getElementById('payment-stage-1');
const paymentStage2 = document.getElementById('payment-stage-2');

// Dev Toggle button
const btnToggleSubDev = document.getElementById('btn-toggle-sub-dev');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    updateSubscriptionUI();
    renderPGs(pgData);
    setupEventListeners();
    setupIntersectionObserver();
});

// --- Subscription UI Sync ---
function updateSubscriptionUI() {
    const indicatorDot = subIndicator.querySelector('.indicator-dot');
    const indicatorText = subIndicator.querySelector('.indicator-text');
    
    if (isSubscribed) {
        navSubBtn.innerHTML = 'Premium Unlocked ✨';
        navSubBtn.classList.remove('btn-primary');
        navSubBtn.classList.add('btn-outline-dark');
        
        indicatorDot.className = 'indicator-dot unlocked';
        indicatorText.textContent = 'All Premium details unlocked';
    } else {
        navSubBtn.innerHTML = 'Unlock All Details 🔒';
        navSubBtn.classList.add('btn-primary');
        navSubBtn.classList.remove('btn-outline-dark');
        
        indicatorDot.className = 'indicator-dot locked';
        indicatorText.textContent = 'Premium details locked';
    }
}

// --- Render PG Cards ---
function renderPGs(data) {
    pgGrid.innerHTML = '';
    
    if (data.length === 0) {
        pgGrid.classList.add('hide');
        emptyState.classList.remove('hide');
        resultsCount.textContent = `Showing 0 PGs`;
        return;
    }
    
    emptyState.classList.add('hide');
    pgGrid.classList.remove('hide');
    resultsCount.textContent = `Showing ${data.length} PG${data.length > 1 ? 's' : ''}`;
    
    data.forEach(pg => {
        const card = document.createElement('div');
        card.className = 'pg-card glass-card';
        card.id = `pg-card-${pg.id}`;
        
        // Premium blur overlay logic
        const blurOverlayHTML = !isSubscribed ? `
            <div class="premium-blur-overlay">
                <svg class="lock-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p>Unlock facilities, address & booking</p>
                <button class="btn btn-secondary btn-sm" onclick="triggerSubscriptionModal(event)">Unlock Details</button>
            </div>
        ` : '';

        // Facilities rendering helper
        const facilitiesHTML = pg.facilities.map(fac => `<span class="facility-badge">${fac}</span>`).join('');
        
        // Buttons rendering helper
        const buttonHTML = isSubscribed ? `
            <button class="btn btn-outline-dark btn-sm" onclick="openMoreInfoModal(${pg.id})">More Info</button>
            <button class="btn btn-primary btn-sm" onclick="openBookingModal(${pg.id})">Book Now</button>
        ` : `
            <button class="btn btn-outline-dark btn-sm" onclick="triggerSubscriptionModal(event)">More Info 🔒</button>
            <button class="btn btn-primary btn-sm" onclick="triggerSubscriptionModal(event)">Book Now 🔒</button>
        `;

        const displayDist = isSubscribed ? pg.distance : "Premium PG Accommodation";
        const imageAlt = isSubscribed ? pg.distance : "Premium PG Room";

        card.innerHTML = `
            <div class="pg-image-container">
                <img src="images/${pg.images[0]}" alt="${imageAlt}">
                <span class="rent-tag-badge">₹${pg.price.toLocaleString()}/mo</span>
                <span class="rating-badge-card">${pg.rating} ★</span>
            </div>
            <div class="pg-details">
                <h3 class="pg-name">${displayDist}</h3>
                <span class="pg-distance">
                    <svg style="width: 14px; height: 14px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    ${pg.distance} km from NIT Raipur
                </span>
                <div class="pg-facilities">
                    ${facilitiesHTML}
                </div>
                <div class="pg-card-actions">
                    ${buttonHTML}
                </div>
                ${blurOverlayHTML}
            </div>
        `;
        pgGrid.appendChild(card);
    });
}

// --- Filter & Sorting Engine ---
function applyFilters() {
    // Show Loader Spinner
    pgGrid.classList.add('hide');
    emptyState.classList.add('hide');
    loader.classList.remove('hide');
    
    // Simulate slight loading delay for excellent UX feedback
    setTimeout(() => {
        const keyword = (filterSearch.value || heroSearchInput.value).toLowerCase().trim();
        const maxPrice = parseInt(filterPrice.value);
        const maxDistance = parseFloat(filterDistance.value);
        const minRating = parseFloat(filterRating.value);
        const sortOption = filterSort.value;
        
        // Facilities filters
        const reqFacilities = [];
        if (checkWiFi.checked) reqFacilities.push("WiFi");
        if (checkFood.checked) reqFacilities.push("Food");
        if (checkAC.checked) reqFacilities.push("AC");
        if (checkLaundry.checked) reqFacilities.push("Laundry");
        
        // Filter logic
        let filtered = pgData.filter(pg => {
            // Keyword match (name, address, or description)
            const matchesKeyword = !keyword || 
                pg.name.toLowerCase().includes(keyword) || 
                pg.address.toLowerCase().includes(keyword) || 
                pg.description.toLowerCase().includes(keyword);
                
            // Price range match
            const matchesPrice = pg.price <= maxPrice;
            
            // Distance match
            const matchesDistance = pg.distance <= maxDistance;
            
            // Rating match
            const matchesRating = pg.rating >= minRating;
            
            // Facilities match (must contain ALL checked facilities)
            const matchesFacilities = reqFacilities.every(facility => pg.facilities.includes(facility));
            
            return matchesKeyword && matchesPrice && matchesDistance && matchesRating && matchesFacilities;
        });
        
        // Sort logic
        if (sortOption === "rent-asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "rent-desc") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === "distance-asc") {
            filtered.sort((a, b) => a.distance - b.distance);
        } else if (sortOption === "rating-desc") {
            filtered.sort((a, b) => b.rating - a.rating);
        }
        
        loader.classList.add('hide');
        renderPGs(filtered);
    }, 450);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    // Nav bar toggle menu (Mobile)
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when links clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll effect for header
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Subscription buttons click
    navSubBtn.addEventListener('click', () => {
        if (!isSubscribed) {
            openModal(subModal);
        } else {
            showSuccessModal("Premium Status Active", "You already have full access to all PG details! Thank you.");
        }
    });

    document.getElementById('btn-hero-subscribe').addEventListener('click', (e) => {
        if (isSubscribed) {
            e.preventDefault();
            showSuccessModal("Access Unlocked", "You have already unlocked premium access. Explore cards below.");
        }
    });

    document.getElementById('btn-pay-subscription').addEventListener('click', () => {
        if (!isSubscribed) {
            openModal(subModal);
        } else {
            showSuccessModal("Access Unlocked", "Premium features are already unlocked!");
        }
    });

    // Confirm Payment flow simulation
    document.getElementById('btn-confirm-payment').addEventListener('click', simulatePaymentFlow);

    // Search bar buttons
    heroSearchBtn.addEventListener('click', () => {
        filterSearch.value = heroSearchInput.value;
        applyFilters();
        // Scroll to listings section
        document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
    });

    heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterSearch.value = heroSearchInput.value;
            applyFilters();
            document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Sidebar filter triggers
    filterSearch.addEventListener('input', applyFilters);
    
    filterPrice.addEventListener('input', (e) => {
        priceVal.textContent = `₹${parseInt(e.target.value).toLocaleString()}`;
        applyFilters();
    });
    
    filterDistance.addEventListener('input', (e) => {
        distanceVal.textContent = `${parseFloat(e.target.value).toFixed(1)} km`;
        applyFilters();
    });
    
    filterRating.addEventListener('change', applyFilters);
    filterSort.addEventListener('change', applyFilters);

    // Checklist triggers
    checkWiFi.addEventListener('change', applyFilters);
    checkFood.addEventListener('change', applyFilters);
    checkAC.addEventListener('change', applyFilters);
    checkLaundry.addEventListener('change', applyFilters);

    // Reset filters
    const resetFunc = () => {
        heroSearchInput.value = '';
        filterSearch.value = '';
        filterPrice.value = 15000;
        priceVal.textContent = '₹15,000';
        filterDistance.value = 5.0;
        distanceVal.textContent = '5.0 km';
        filterRating.value = '0';
        filterSort.value = 'recommended';
        checkWiFi.checked = false;
        checkFood.checked = false;
        checkAC.checked = false;
        checkLaundry.checked = false;
        applyFilters();
    };
    btnResetFilters.addEventListener('click', resetFunc);
    btnClearFiltersEmpty.addEventListener('click', resetFunc);

    // Close buttons for modals
    document.getElementById('sub-modal-close').addEventListener('click', () => closeModal(subModal));
    document.getElementById('info-modal-close').addEventListener('click', () => closeModal(infoModal));
    document.getElementById('booking-modal-close').addEventListener('click', () => closeModal(bookingModal));
    document.getElementById('success-modal-close').addEventListener('click', () => closeModal(successModal));
    document.getElementById('btn-success-close').addEventListener('click', () => closeModal(successModal));

    // Closing modal by clicking overlay
    [subModal, infoModal, bookingModal, successModal].forEach(modal => {
        modal.querySelector('.modal-overlay').addEventListener('click', () => closeModal(modal));
    });

    // Image Slider Navigation
    document.getElementById('slider-prev').addEventListener('click', prevSlide);
    document.getElementById('slider-next').addEventListener('click', nextSlide);

    // Form Submission: Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactSubmit);

    // Form Submission: Booking Form Validation
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', handleBookingSubmit);

    // Dev button logic
    btnToggleSubDev.addEventListener('click', () => {
        isSubscribed = !isSubscribed;
        localStorage.setItem('nitr_pg_subscribed', isSubscribed);
        updateSubscriptionUI();
        applyFilters();
        showSuccessModal(
            isSubscribed ? "Premium Mode On" : "Premium Mode Off", 
            isSubscribed ? "All PG details unlocked for review." : "PG details locked. Subscribe to view."
        );
    });
}

// --- Active Nav Link Observer ---
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// --- Modal Helper Functions ---
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeModal(modal) {
    modal.classList.remove('active');
    
    // If it's the subscription modal, reset stages
    if (modal === subModal) {
        setTimeout(() => {
            paymentStage1.classList.remove('hide');
            paymentStage2.classList.add('hide');
        }, 300);
    }
    
    // Check if other modals are open before turning scrolling back on
    const activeModals = document.querySelectorAll('.modal.active');
    if (activeModals.length === 0) {
        document.body.style.overflow = '';
    }
}

// Trigger subscription lock screen
function triggerSubscriptionModal(event) {
    event.stopPropagation();
    openModal(subModal);
}

// --- simulated UPI Payment Flow ---
function simulatePaymentFlow() {
    paymentStage1.classList.add('hide');
    paymentStage2.classList.remove('hide');
    
    // Simulate transaction
    setTimeout(() => {
        isSubscribed = true;
        localStorage.setItem('nitr_pg_subscribed', 'true');
        
        closeModal(subModal);
        updateSubscriptionUI();
        applyFilters();
        
        // Show Success feedback
        showSuccessModal("Payment Successful!", "You have unlocked complete details, addresses, galleries, and instant booking access for all PGs.");
    }, 2000);
}

// --- Unified Success Modal Helper ---
function showSuccessModal(title, message) {
    document.getElementById('success-title').textContent = title;
    document.getElementById('success-message').textContent = message;
    openModal(successModal);
}

// --- More Info Modal (Unlocked) ---
function openMoreInfoModal(id) {
    const pg = pgData.find(p => p.id === id);
    if (!pg) return;
    
    currentOpenPG = pg;
    
    // Populate simple fields
    document.getElementById('info-pg-name').textContent = pg.name;
    document.getElementById('info-rating').textContent = `${pg.rating} ★`;
    document.getElementById('info-distance').textContent = `${pg.distance} km from NIT Raipur`;
    document.getElementById('info-rent').textContent = `Starting ₹${pg.price.toLocaleString()}/mo`;
    document.getElementById('info-description').textContent = pg.description;
    
    // Availability Badge
    const availBadge = document.getElementById('info-availability');
    availBadge.textContent = pg.availability;
    availBadge.className = 'availability-badge';
    if (pg.availability === "Fully Booked") {
        availBadge.classList.add('unavailable');
    }
    
    // Unlocked Owner and Address Details
    document.getElementById('info-owner-name').textContent = pg.ownerName;
    document.getElementById('info-owner-phone').textContent = pg.ownerPhone;
    document.getElementById('info-address').textContent = pg.address;
    
    // Custom Maps Button trigger
    const encodedAddress = encodeURIComponent(`${pg.name}, ${pg.address}`);
    document.getElementById('info-maps-btn').href = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    
    // Facilities list
    const facilitiesContainer = document.getElementById('info-facilities');
    facilitiesContainer.innerHTML = '';
    
    const allCommonFacilities = ["WiFi", "Food", "AC", "Laundry"];
    allCommonFacilities.forEach(facility => {
        const hasFacility = pg.facilities.includes(facility);
        const item = document.createElement('div');
        item.className = 'facility-item-modal';
        item.innerHTML = `
            <span class="facility-bullet-modal" style="color: ${hasFacility ? 'var(--success)' : 'var(--error)'}">
                ${hasFacility ? '✓' : '×'}
            </span>
            <span style="opacity: ${hasFacility ? '1' : '0.5'}">${facility} ${facility === 'Food' ? '/ Mess' : ''}</span>
        `;
        facilitiesContainer.appendChild(item);
    });
    
    // Room Types
    const roomContainer = document.getElementById('info-room-types');
    roomContainer.innerHTML = '';
    pg.roomTypes.forEach(room => {
        const item = document.createElement('div');
        item.className = 'room-type-item';
        item.innerHTML = `
            <span class="room-type-name">${room.type}</span>
            <span class="room-type-price">${room.price}</span>
        `;
        roomContainer.appendChild(item);
    });
    
    // Gallery Slider Images
    activeSliderImages = pg.images;
    activeSliderIndex = 0;
    
    const sliderWrapper = document.getElementById('slider-wrapper');
    sliderWrapper.innerHTML = '';
    
    activeSliderImages.forEach(imgName => {
        const img = document.createElement('img');
        img.src = `images/${imgName}`;
        img.alt = pg.name;
        sliderWrapper.appendChild(img);
    });
    
    // Gallery dots
    updateSliderDots();
    updateSliderPosition();
    
    // Attach event listner to Booking button inside details modal
    const bookBtn = document.getElementById('info-book-btn');
    // Clear old event listeners
    const newBookBtn = bookBtn.cloneNode(true);
    bookBtn.parentNode.replaceChild(newBookBtn, bookBtn);
    
    if (pg.availability === "Fully Booked") {
        newBookBtn.textContent = "Fully Booked";
        newBookBtn.disabled = true;
        newBookBtn.style.opacity = '0.5';
        newBookBtn.style.cursor = 'not-allowed';
    } else {
        newBookBtn.textContent = "Book Accommodation Now";
        newBookBtn.disabled = false;
        newBookBtn.style.opacity = '1';
        newBookBtn.style.cursor = 'pointer';
        newBookBtn.addEventListener('click', () => {
            closeModal(infoModal);
            openBookingModal(pg.id);
        });
    }

    openModal(infoModal);
}

// --- Image Slider Controls ---
function updateSliderPosition() {
    const sliderWrapper = document.getElementById('slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${activeSliderIndex * 100}%)`;
    
    // Update dots active class
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeSliderIndex);
    });
}

function updateSliderDots() {
    const dotsContainer = document.getElementById('slider-dots');
    dotsContainer.innerHTML = '';
    
    activeSliderImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            activeSliderIndex = index;
            updateSliderPosition();
        });
        dotsContainer.appendChild(dot);
    });
}

function nextSlide() {
    activeSliderIndex = (activeSliderIndex + 1) % activeSliderImages.length;
    updateSliderPosition();
}

function prevSlide() {
    activeSliderIndex = (activeSliderIndex - 1 + activeSliderImages.length) % activeSliderImages.length;
    updateSliderPosition();
}

// --- Booking Modal (Unlocked) ---
function openBookingModal(id) {
    const pg = pgData.find(p => p.id === id);
    if (!pg) return;
    
    currentOpenPG = pg;
    
    document.getElementById('booking-pg-id').value = pg.id;
    document.getElementById('booking-pg-name-sub').textContent = `Reserve your spot at ${pg.name}`;
    
    // Populate room type dropdown options
    const roomSelect = document.getElementById('book-room-type');
    roomSelect.innerHTML = '<option value="">-- Select Room Type --</option>';
    
    pg.roomTypes.forEach(room => {
        const opt = document.createElement('option');
        opt.value = room.type;
        opt.textContent = `${room.type} (${room.price})`;
        roomSelect.appendChild(opt);
    });
    
    // Clear previous form validation errors
    document.getElementById('booking-form').reset();
    document.querySelectorAll('#booking-form .invalid').forEach(el => el.classList.remove('invalid'));
    
    // Pre-fill move-in date to today or tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('book-date').value = tomorrow.toISOString().split('T')[0];
    
    openModal(bookingModal);
}

// --- Contact Form Submission Validation ---
function handleContactSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    
    let isValid = true;
    
    // Name validation
    if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('invalid');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('invalid');
    }
    
    // Message validation
    if (!msgInput.value.trim()) {
        msgInput.classList.add('invalid');
        isValid = false;
    } else {
        msgInput.classList.remove('invalid');
    }
    
    if (isValid) {
        // Clear inputs
        nameInput.value = '';
        emailInput.value = '';
        msgInput.value = '';
        
        // Show Success toast/modal
        showSuccessModal("Message Sent!", "Thank you for getting in touch. Our student housing support helpdesk will contact you via email shortly.");
    }
}

// --- Booking Form Submission Validation ---
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('book-name');
    const phoneInput = document.getElementById('book-phone');
    const emailInput = document.getElementById('book-email');
    const collegeInput = document.getElementById('book-college');
    const dateInput = document.getElementById('book-date');
    const roomInput = document.getElementById('book-room-type');
    
    let isValid = true;
    
    // Name validation
    if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('invalid');
    }
    
    // Mobile phone (10-digit) validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.replace(/\s+/g, ''))) {
        phoneInput.classList.add('invalid');
        isValid = false;
    } else {
        phoneInput.classList.remove('invalid');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('invalid');
    }
    
    // College validation
    if (!collegeInput.value.trim()) {
        collegeInput.classList.add('invalid');
        isValid = false;
    } else {
        collegeInput.classList.remove('invalid');
    }
    
    // Move-in date validation
    if (!dateInput.value) {
        dateInput.classList.add('invalid');
        isValid = false;
    } else {
        dateInput.classList.remove('invalid');
    }
    
    // Room type validation
    if (!roomInput.value) {
        roomInput.classList.add('invalid');
        isValid = false;
    } else {
        roomInput.classList.remove('invalid');
    }
    
    if (isValid) {
        closeModal(bookingModal);
        
        // Show success simulation modal
        const message = `Your request to book a "${roomInput.value}" room at "${currentOpenPG.name}" has been submitted successfully.\n\nOwner (${currentOpenPG.ownerName}) has been notified and will call you at ${phoneInput.value} soon.`;
        showSuccessModal("Booking Requested!", message);
    }
}
