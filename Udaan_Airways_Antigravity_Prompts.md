# ✈️ UDAAN AIRWAYS — COMPLETE WEBSITE BUILD PROMPTS
## Antigravity AI se HTML/CSS/JS Website Banane ke Liye
### Company: Udaan Airways | Email: hr@udaanairways.com
### Color Theme: Deep Blue (#0A1F5C) + Sky Blue (#1E90FF) + Gold (#FFB400) + White (#FFFFFF)

---

> **📌 INSTRUCTIONS:**
> - Ye prompts **sequence mein** execute karo — ek ke baad ek
> - Har prompt ek file/section banayega
> - Antigravity AI images khud generate karega — image descriptions diye gaye hain
> - Sab files save karte raho: `index.html`, `about.html`, etc.
> - Har page ke 3 prompts hain: **Part A** (Header+Hero), **Part B** (Middle Sections), **Part C** (Bottom Sections+Footer)

---

---

# 📁 STEP 0 — GLOBAL FILES (Sabse Pehle Banao)

---

## PROMPT 0-A: styles.css — Global Stylesheet

```
Create a complete CSS stylesheet file named "styles.css" for "Udaan Airways" — a premium Indian aviation and travel company website. This will be shared across all pages.

COLOR THEME:
- Primary Dark Blue: #0A1F5C
- Primary Sky Blue: #1E90FF
- Accent Gold: #FFB400
- White: #FFFFFF
- Light Gray BG: #F5F7FA
- Dark Text: #1A1A2E
- Light Text: #6B7280

TYPOGRAPHY:
- Font: Import Google Font "Poppins" (weights: 300, 400, 500, 600, 700)
- Base font-size: 16px
- Headings: Poppins Bold
- Body: Poppins Regular

INCLUDE THESE GLOBAL STYLES:

1. CSS Reset & Base styles
2. :root variables for all colors and fonts
3. Body, html styles
4. .container class (max-width: 1200px, margin auto, padding 0 20px)
5. Utility classes: .text-center, .text-gold, .text-blue, .section-title (with gold underline), .section-subtitle
6. Buttons:
   - .btn-primary (gold background, dark text, rounded, hover effect with scale + shadow)
   - .btn-secondary (blue border, white text, hover fills blue)
   - .btn-outline (transparent, gold border, gold text)
7. PRE-HEADER BAR: fixed top strip — dark navy background — left side phone number in gold, right side 3 links (Apply Jobs, Join Membership, Member Login) in white — small font — social icons on right
8. NAVBAR styles: sticky, white background, shadow on scroll, logo left, nav links right, dropdown menu for "Packages", hamburger menu for mobile, active link gold color, hover underline animation
9. FOOTER styles: dark navy background, 5-column grid, white text, gold headings, links hover gold, bottom bar with copyright and partner logos
10. HERO SECTION base styles: full-width, min-height 90vh, overlay, centered content
11. SECTION base styles: padding 80px 0, alternating light/white backgrounds
12. CARD styles: white bg, border-radius 12px, box-shadow, hover lift animation (translateY -8px)
13. Responsive breakpoints:
    - Desktop: 1200px+
    - Tablet: 768px-1199px (2-col grids)
    - Mobile: below 768px (1-col, hamburger menu)
14. ANIMATIONS: fadeInUp keyframe, slideInLeft, slideInRight, pulse for CTA buttons
15. Scroll-reveal class styles
16. Partner logo slider styles (auto-scrolling marquee)
17. STATS counter section styles
18. Testimonial card styles with quote icon
19. Form input styles (modern floating label style)
20. Badge/tag styles

Make it modern, elegant, and professional. Use CSS custom properties extensively.
```

---

## PROMPT 0-B: script.js — Global JavaScript

```
Create a complete JavaScript file named "script.js" for "Udaan Airways" website. This will be shared across all pages (link at bottom of every HTML page).

INCLUDE THESE FEATURES:

1. NAVBAR:
   - Sticky navbar — add 'scrolled' class when page scrolls down 80px (changes background + shadow)
   - Hamburger menu toggle for mobile (open/close with animation)
   - Dropdown menu for "Packages" nav item on hover (desktop) and click (mobile)
   - Close mobile menu when a link is clicked

2. BOOKING WIDGET TABS (for Home page):
   - Tab switching for: Flights, Hotels, Cars, Bus, Cruise, Travel Insurance, Destinations
   - One Way / Round Trip sub-tab switching within Flights
   - Show/hide correct form on tab click
   - Active tab highlight with gold color and bottom border

3. SCROLL ANIMATIONS:
   - Intersection Observer for .reveal-up, .reveal-left, .reveal-right classes
   - Elements animate in when they enter viewport
   - Staggered animation delay for card grids

4. STATS COUNTER:
   - Animate numbers counting up when stats section enters viewport
   - 8000 (Happy Clients), 5000 (Destinations), 125 (Countries), 8000 (Vacation Options)
   - Use requestAnimationFrame for smooth counting

5. TESTIMONIAL SLIDER:
   - Auto-play carousel with 3-second intervals
   - Prev/next buttons
   - Dot indicators
   - Touch/swipe support for mobile
   - Pause on hover

6. PARTNER LOGO MARQUEE:
   - Auto-scrolling marquee for 3 sections (Travel Partners, Associate Brands, Airlines Partners)
   - Smooth infinite loop
   - Pause on hover

7. PACKAGES SLIDER:
   - Cards slider for package sections on mobile (swipe enabled)

8. HERO BANNER:
   - Fade-in animation on page load
   - Typing effect for hero subtitle text

9. FORM VALIDATION:
   - Contact form basic validation (name, email, phone, message required)
   - Show error/success messages
   - Floating label animation

10. BACK TO TOP BUTTON:
    - Show when scrolled 300px
    - Smooth scroll to top on click

11. MOBILE:
    - Prevent body scroll when mobile menu is open
    - Touch events for sliders

Write clean, modern vanilla JavaScript. No jQuery. Use ES6+ syntax.
```

---

---

# 📄 PAGE 1: HOME (index.html) — 3 PROMPTS

---

## PROMPT 1-A: Home Page — Part 1 (Pre-Header + Navbar + Hero + Booking Widget)

```
Create the FIRST PART of "index.html" for "Udaan Airways" — a premium Indian aviation and travel website. Use HTML5, link to "styles.css" and "script.js". Company email: hr@udaanairways.com

IMPORTANT DESIGN RULES:
- Color theme: Deep Blue #0A1F5C, Sky Blue #1E90FF, Gold #FFB400, White #FFFFFF
- Font: Poppins (Google Fonts)
- Fully responsive (mobile, tablet, desktop)
- Modern, premium, airline-style design

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: PRE-HEADER BAR
━━━━━━━━━━━━━━━━━━━━━━━━
- Full-width dark navy strip (#0A1F5C)
- LEFT: Phone icon + "+91-8796017652" in gold, clickable
- RIGHT: Links — "Apply Jobs" | "Join Membership" | "Member Login" — white text, pipe separator
- Far right: Small social icons (Facebook, Instagram, Twitter, LinkedIn) in white

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: NAVBAR
━━━━━━━━━━━━━━━━━━━━━━━━
- White background, sticky, subtle bottom shadow
- LEFT: Logo — airplane icon ✈ in gold + "Udaan Airways" text in deep blue (bold), tagline "Fly Beyond Dreams" in small gray
- RIGHT: Navigation links:
  • Home (active — gold underline)
  • About Us → about.html
  • Services → services.html
  • Packages (dropdown):
    - Domestic → domestic.html
    - International → international.html
    - Family → family.html
    - Honeymoon → honeymoon.html
  • Career → career.html
  • Contact Us → contact.html
  • Academy → academy.html
  • Franchise → franchise.html
- Hamburger icon for mobile (animated 3-line to X)
- Dropdown: white card, box shadow, links with arrow icons

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: HERO BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
- Full viewport height (min-height: 92vh)
- Background: AI-generated image — "A breathtaking aerial view of a modern airplane flying above clouds at golden hour, dramatic sky with orange and blue colors, cinematic quality, ultra HD" — with a dark blue gradient overlay (opacity 0.55) from bottom
- CONTENT (centered, white text):
  - Small badge above title: ✈ "India's Most Trusted Travel Partner" — gold background, dark text, rounded pill
  - H1: "Fly Beyond Your Dreams" — large, bold, white, with text shadow
  - Subtitle: "Premium domestic & international travel experiences with Udaan Airways. Affordable fares, world-class comfort." — light gray, max-width 600px
  - 2 Buttons side by side:
    • "Explore Packages" — gold button, dark text, hover scale effect
    • "View Services" — outline button, white border, white text
  - Below buttons: 3 small trust badges in a row:
    • ✓ Lowest Price Guarantee
    • ✓ 24x7 Customer Support
    • ✓ NCT & MCA Certified

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: BOOKING SEARCH WIDGET
━━━━━━━━━━━━━━━━━━━━━━━━
- White card with shadow, border-radius 20px, -60px margin-top (overlaps hero), z-index above hero
- 7 TAB BUTTONS in a row at top of card:
  ✈ Flights | 🏨 Hotels | 🚗 Cars | 🚌 Bus | 🚢 Cruise | 🛡 Insurance | 📍 Destinations
  (Active tab: gold background + dark text, inactive: light gray)

TAB 1 — FLIGHTS (Default Active):
  Sub-tabs: "One Way" | "Round Trip" (toggle pills)
  One Way Form Row:
    - FROM city (input with plane-takeoff icon)
    - TO city (input with plane-land icon)
    - DATE (date picker with calendar icon)
    - TRAVELLERS & CLASS (select: 1 Traveller Economy / 2 Travellers Economy / 1 Traveller Business)
    - FARE TYPE (radio pills: Regular | Student | Defence)
    - SEARCH button (gold, full-width or right-aligned)
  Round Trip adds: Return Date field

TAB 2 — HOTELS:
  Row: Destination | Check-in | Check-out | Guests (1 Adult/2 Adults/Family) | Search button

TAB 3 — CARS:
  Row: Pick-up Location | Pick-up Date | Drop-off Date | Search button

TAB 4 — BUS:
  Row: From | To | Journey Date | Search button

TAB 5 — CRUISE:
  Row: Destination | Departure Date | Search button

TAB 6 — INSURANCE:
  Row: Travel Start Date | Travel End Date | Destination | Get Quote button

TAB 7 — DESTINATIONS:
  Row: Destination search input | Search button

All inputs: rounded corners, icon inside input, focus: gold border glow
Search/CTA buttons: gold gradient background

Make this section look like a premium airline booking interface. Fully responsive — on mobile, form fields stack vertically.
```

---

## PROMPT 1-B: Home Page — Part 2 (About Preview + Services + Packages + Popular Packages)

```
Add the MIDDLE SECTIONS to "index.html" for "Udaan Airways". Paste this code AFTER the booking widget section. Same color theme: Deep Blue #0A1F5C, Sky Blue #1E90FF, Gold #FFB400. Fully responsive.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: ABOUT PREVIEW
━━━━━━━━━━━━━━━━━━━━━━━━
2-column layout (left: image grid, right: text)

LEFT COLUMN — 2x2 image grid + 1 wide image:
  - Image 1 (top-left): "Modern airplane on airport tarmac at sunrise, golden light, dramatic, wide angle"
  - Image 2 (top-right): "Happy passengers boarding airplane, smiling cabin crew in blue uniform welcoming"
  - Image 3 (bottom-left): "Aerial view of clouds from airplane window, beautiful sunset colors, travel concept"
  - Image 4 (bottom-right): "Professional pilot in cockpit looking confident, instruments panel, aviation"
  - Overlay badge: "5+ Years Experience" — gold pill badge on bottom-left corner

RIGHT COLUMN — Text Content:
  - Label: "OUR STORY" (small gold caps with line)
  - H2: "At Udaan Airways, we don't just fly — we elevate your journey."
  - Description: "Udaan Airways is committed to making your travel experience smooth, safe, and comfortable. As a modern travel company focused on quality service, we connect major cities across India and international destinations with efficiency and care."
  - 4 checkmark points (gold checkmarks):
    ✓ Affordable Fares for Every Budget
    ✓ Modern Fleet Safety Standards
    ✓ Comfortable Personalized Travel
    ✓ Easy Online Booking
  - Call block (blue card): Phone icon + "Call Us Anytime" + "+91-8796017652" (gold, large)
  - Button: "Know More About Us" → about.html (gold button)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: WHY CHOOSE US (3 Feature Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background. Section title: "Why Choose Udaan Airways"
3 horizontal cards with icon, title, description:

Card 1:
  - Icon image (AI): "Flat icon illustration of a currency rupee symbol with wings, gold color on blue circle background, minimalist"
  - Title: "Lowest Price Guarantee"
  - Text: "We're committed to offering you the lowest prices on flights and travel packages. If you find a lower price elsewhere, we'll match it or beat it."

Card 2:
  - Icon image (AI): "Flat icon illustration of a 24/7 customer support headphone symbol, blue and gold, minimalist modern"
  - Title: "24x7 Customer Support"
  - Text: "Your satisfaction is our priority. Our round-the-clock support team is always available to assist you with bookings, queries, and concerns."

Card 3:
  - Icon image (AI): "Flat icon illustration of a shield with checkmark, travel protection symbol, blue gold colors, minimalist"
  - Title: "Personalised Services"
  - Text: "From weekend getaways to month-long adventures — every journey is personalised to your preferences by our expert travel team."

Below 3 cards, 4 small icon feature tiles in a row:
  Tile 1: Bed icon — "Hotel Reservation" — "Worldwide hotel bookings at best prices"
  Tile 2: Clock icon — "Quality & Timing" — "Round-the-clock dedicated travel team"
  Tile 3: Star icon — "5-Star Reviews" — "Thousands of happy customer reviews"
  Tile 4: Plane icon — "Flight Tickets" — "Lowest price flight booking guaranteed"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: EXPLORE PACKAGES (3 Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background. 
Section label: "OUR PACKAGES"
H2: "Explore Our Top Destinations"
Subtitle: "World's leading tour and travel booking — amazing packages worldwide at best prices"

3 Package Cards (image top, details bottom, hover reveals overlay button):

Card 1: Thailand Tour
  - AI Image: "Stunning aerial view of Thailand tropical beach with crystal clear turquoise water, white sand, palm trees, island paradise photography"
  - Tag badge: "International" (blue pill)
  - Title: "Thailand Tour"
  - Location: 📍 Thailand
  - Description: "Discover vibrant beaches, bustling markets, ancient temples and rich culture of Thailand."
  - Duration: 🕐 3 Nights & 4 Days
  - Button: "Book Now" (gold)

Card 2: Rajasthan Tour
  - AI Image: "Magnificent Amer Fort Jaipur at golden hour, Rajasthani architecture, desert landscape, royal heritage India photography"
  - Tag: "Domestic"
  - Title: "Rajasthan Tour"
  - Location: 📍 Rajasthan, India
  - Description: "Immerse in royal heritage — majestic palaces, forts, and vibrant markets of Jaipur, Udaipur, and Jodhpur."
  - Duration: 🕐 3 Nights & 4 Days
  - Button: "Book Now"

Card 3: Leh Ladakh Tour
  - AI Image: "Breathtaking panoramic view of Leh Ladakh mountain valley, snow capped peaks, blue sky, winding river, ancient monastery, adventure travel"
  - Tag: "Domestic"
  - Title: "Leh Ladakh Tour"
  - Location: 📍 Leh Ladakh, India
  - Description: "Rugged beauty — breathtaking mountain vistas, ancient monasteries, and vibrant Ladakhi culture."
  - Duration: 🕐 3 Nights & 4 Days
  - Button: "Book Now"

Below cards: centered "View All Packages →" button (outline gold)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8: POPULAR PACKAGES (2 Cards + Side Image)
━━━━━━━━━━━━━━━━━━━━━━━━
Light blue-tinted background (#EEF4FF)
Left side: Decorative element — "EXPLORE HOLIDAYS BY THEME" vertical text + 
AI Image: "Happy Indian family traveling with luggage at airport, smiling, premium travel lifestyle, warm tones"

Right side: 2 vertical package cards:

Card 1: Vietnam Tour
  - AI Image: "Ha Long Bay Vietnam aerial view, emerald green water, limestone karsts, boats, misty morning, stunning travel photography"
  - Title: "Vietnam Tour" | Location: Vietnam
  - Description: "Discover the charm of Vietnam — bustling streets of Hanoi to serene beauty of Halong Bay, rich history."
  - Duration: 6 Nights & 7 Days | Button: "Book Now"

Card 2: Manali Tour
  - AI Image: "Manali Himachal Pradesh scenic mountain landscape, snow covered peaks, green valley, river, pine trees, adventure travel"
  - Title: "Manali Tour" | Location: Himachal Pradesh
  - Description: "Snow-capped mountains, adventure activities, and vibrant local culture — a perfect Himalayan escape."
  - Duration: 3 Nights & 4 Days | Button: "Book Now"

H2 title above this section: "Our Popular Packages"
Subtitle: "Discover our most loved travel experiences — crafted for comfort, adventure, and memories."
```

---

## PROMPT 1-C: Home Page — Part 3 (Destinations + Honeymoon + Testimonials + Stats + Partners + Footer)

```
Add the FINAL SECTIONS to "index.html" for "Udaan Airways". Paste AFTER the popular packages section. Color theme: Deep Blue #0A1F5C, Sky Blue #1E90FF, Gold #FFB400. Fully responsive.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9: MOST POPULAR DESTINATIONS (Hotel Cards Grid)
━━━━━━━━━━━━━━━━━━━━━━━━
White background. 
H2: "Most Popular Destinations"
Subtitle: "4-5 star holiday accommodations worldwide — travel around the globe with Udaan Airways"

3x3 grid of destination hotel cards (9 cards total):

Card 1: Hyatt Centric New Delhi
  - AI Image: "Luxurious 5-star hotel lobby interior, grand chandelier, marble floors, modern decor, New Delhi"
  - Name: "Hyatt Centric Janakpuri, New Delhi"
  - Address icon: District Centre, Janakpuri, New Delhi
  - Description: "Elite hotel with holistic spa, expansive swimming pool, state-of-the-art fitness centre, tastefully appointed rooms."

Card 2: Radisson Blu, Delhi
  - AI Image: "Radisson Blu hotel exterior night view, illuminated facade, luxury hotel architecture, Delhi India"
  - Name: "Radisson Blu Hotel, Paschim Vihar Delhi"
  - Address: Outer Ring Rd, Paschim Vihar, Delhi
  - Description: "Comfortable air-conditioned accommodations in the heart of West Delhi."

Card 3: Sandal Suites by Lemon Tree, Noida
  - AI Image: "Modern luxury hotel suite interior, plush bed, city view window, warm lighting, contemporary design"
  - Name: "Sandal Suites By Lemon Tree, Noida"
  - Address: Sector-135, Noida, UP 201301
  - Description: "Luxurious suites, diverse dining options and premium leisure amenities."

Card 4: The Leela, Gurugram
  - AI Image: "The Leela luxury hotel pool area, palm trees, infinity pool, evening lighting, premium resort"
  - Name: "The Leela Ambience, Gurugram"
  - Address: NH 8, Ambience Island, Gurugram
  - Description: "Luxury hotel with exceptional dining, beautiful rooms and exemplary services."

Card 5: Hilton Istanbul Bosphorus
  - AI Image: "Istanbul Bosphorus sea view from luxury hotel balcony at sunset, golden light, iconic skyline, Turkey"
  - Name: "Hilton Istanbul Bosphorus"
  - Address: Harbiye, Cumhuriyet Cd. No:50, İstanbul
  - Description: "Lavish stay with stylish rooms, restaurants, spa and swimming pools — iconic Istanbul location."

Card 6: Bellagio, Las Vegas
  - AI Image: "Bellagio Las Vegas hotel and casino at night, fountain show, neon lights, spectacular Nevada USA"
  - Name: "Bellagio Hotel & Casino, Las Vegas"
  - Address: 3600 S Las Vegas Blvd, NV 89109
  - Description: "Comfort and convenience with culinary delights, exciting recreation and easy connectivity."

Card 7: DoubleTree by Hilton, Dubai
  - AI Image: "Dubai luxury hotel rooftop pool, skyline view, modern skyscrapers, blue sky, UAE premium"
  - Name: "DoubleTree By Hilton, Dubai"
  - Address: Al Mankhool, Dubai, UAE
  - Description: "Lavish property near Dubai city centre and top tourist spots."

Card 8: Four Seasons, Madrid
  - AI Image: "Four Seasons hotel Madrid Spain elegant entrance, European architecture, Gran Via street, luxury"
  - Name: "Four Seasons Hotel Madrid, Spain"
  - Address: C. De Sevilla, 3, Centro, Madrid
  - Description: "Centrally located — steps from Puerta del Sol, 5 minutes from Gran Via."

Card 9: Courtyard by Marriott, Batumi
  - AI Image: "Courtyard Marriott hotel Georgia Batumi, Black Sea coast view, modern architecture, seaside"
  - Name: "Courtyard By Marriott, Batumi"
  - Address: 5 Sherif Khimshiashvili St, Batumi, Georgia
  - Description: "Full-service spa — massages, body treatments, facials and recreational facilities."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10: FOLLOW & ADVENTURE (3 Feature Blocks)
━━━━━━━━━━━━━━━━━━━━━━━━
Deep blue background (#0A1F5C), white text, gold accents.
H2: "Follow Your Adventure" | Subtitle: "Anything You Like"
3 cards with image icons and descriptions:

Block 1 — Private Hotels:
  AI Icon: "Luxury private hotel pool with extra amenities icon illustration, gold and white on dark blue background"
  Sub-title: "With Extra Pools"
  Text: "Stay at luxury hotels at the most convenient locations. Fully enjoy time with family. Discover true luxury with Udaan Airways."

Block 2 — Honeymoon Packs:
  AI Icon: "Romantic honeymoon couple travel icon illustration, heart, airplane, gold and white, elegant minimalist"
  Sub-title: "Made for Romance"
  Text: "Expert recommendations from India's best honeymoon planners with unbeatable offers. Book Udaan Airways honeymoon packages."

Block 3 — Flight Booking:
  AI Icon: "Flight booking icon illustration, airplane ticket, gold and white color, modern flat design"
  Sub-title: "Flights from Anywhere"
  Text: "India's leading flight booking service. With our cheapest fare guarantee, experience great value at the lowest price."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11: HONEYMOON PACKAGES (3 Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background with soft pink-gold tint.
Label: "HONEYMOON SPECIALS" (gold pill)
H2: "Honeymoon Packages" 
Subtitle: "Premium comforts, candlelight dinners, and couple-friendly stays — only with Udaan Airways"

Card 1: Munnar – Kumarakom – Cochin
  AI Image: "Romantic couple on houseboat in Kerala backwaters, sunset, misty hills, lush greenery, honeymoon travel India"
  Title: "Munnar – Kumarakom – Cochin"
  Sub: "Kerala Honeymoon Package"
  Description: "An enchanting journey through Kerala's lush landscapes — misty tea plantations of Munnar, serene backwaters of Kumarakom, and historic Cochin. Perfect blend of romance, culture, and relaxation."
  Button: "View Details" (gold)

Card 2: Paris — City of Love
  AI Image: "Paris Eiffel Tower night with couple silhouette, romantic cityscape, golden lights, honeymoon travel France"
  Title: "Paris City of Love"
  Sub: "Paris Honeymoon Package"
  Description: "Enchanting stays near iconic landmarks like the Eiffel Tower, gourmet dining at renowned French restaurants, and magical moments in the City of Love."
  Button: "View Details"

Card 3: Shimla & Manali
  AI Image: "Romantic cabin in snow Shimla Manali mountains, cozy honeymoon retreat, pine trees, Himalayan winter romance"
  Title: "Shimla & Manali"
  Sub: "Himalayan Honeymoon Package"
  Description: "A romantic Himalayan getaway — luxurious mountain accommodations, snow-covered landscapes, and unforgettable moments in India's most popular hill stations."
  Button: "View Details"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 12: FEATURED IN MEDIA
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background. H2: "Featured In" (centered)
5 media brand placeholders in a row (styled as gray-bordered rectangular boxes with text):
[Entrepreneur Stories] [Hindustan Times] [Daily Hunt] [Business Press] [The India Hunt]
Each is a clickable card with hover gold border effect.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 13: TESTIMONIALS SLIDER (9 Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background.
H2: "What Our Customers Say" | Subtitle: "Real stories from happy travelers"
Auto-playing slider showing 3 cards at a time (1 on mobile):

9 Testimonial Cards (each has circular photo, name, tour type, 5-star rating, review text):

Card 1: Ragini Verma | Goa Package | ⭐⭐⭐⭐⭐
  Photo AI: "Indian woman smiling professional headshot portrait, warm background, happy traveler"
  Review: "Thank you so much for organising our Goa trip. The overall experience was excellent — food was delicious, services were exceptional. Highly recommended!"

Card 2: Gajraj Singh Chauhan | Rajasthan Tour | ⭐⭐⭐⭐⭐
  Photo AI: "Indian middle aged man smiling portrait, professional, happy traveler headshot"
  Review: "The Rajasthan holiday package was nothing short of perfection. The curated itinerary let me explore incredible destinations and diverse cultures."

Card 3: Ranjit Sharma | Thailand Tour | ⭐⭐⭐⭐⭐
  Photo AI: "Young Indian man smiling casual portrait, cheerful, tourist traveler"
  Review: "We're finally back from Thailand and what an amazing trip! Big thanks to Udaan Airways for organizing this unforgettable journey. Wonderful experience!"

Card 4: Rahul Tiwari | Kerala Trip | ⭐⭐⭐⭐⭐
  Photo AI: "Indian man 30s professional smiling portrait headshot, travel lifestyle"
  Review: "Unforgettable Kerala trip! Palaces, forts, temples — all breathtaking. Loved every moment. Udaan Airways made it perfect!"

Card 5: Arpit Rajput | Shimla Package | ⭐⭐⭐⭐⭐
  Photo AI: "Young Indian man portrait smiling, casual outdoor, happy traveler photo"
  Review: "The hotel stay was fantastic — very cozy and scenic. Staff made us feel at home, drivers were wonderful. Perfect Shimla experience!"

Card 6: Vikram Singh | Membership | ⭐⭐⭐⭐⭐
  Photo AI: "Indian professional man business portrait, confident smile, airline loyalty member"
  Review: "Joined the loyalty membership and it's fantastic! Priority booking and exclusive discounts made my Thailand trip even better."

Card 7: Sonali Notiyal | Holiday Packages | ⭐⭐⭐⭐⭐
  Photo AI: "Indian woman young professional smiling portrait, travel enthusiast headshot"
  Review: "The holiday package was nothing short of perfection. The curated itinerary allowed me to explore incredible destinations across the world."

Card 8: Diksha Pandey | Flight Booking | ⭐⭐⭐⭐⭐
  Photo AI: "Indian young woman smiling professional portrait, happy customer headshot"
  Review: "The website provided a seamless and user-friendly booking process. Easily navigated and found the most suitable flight. Excellent service!"

Card 9: Sree Ranjith | Placement | ⭐⭐⭐⭐⭐
  Photo AI: "South Indian young professional man smiling confident portrait, aviation industry employee"
  Review: "From the interview room, it was evident that Udaan Airways values professional expertise and commitment to excellence. Great team!"

Slider controls: prev/next arrows + dot indicators. Centered "View All Reviews →" button below.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 14: MOBILE APP BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
2-column layout. Deep blue gradient background (#0A1F5C to #1E90FF diagonal).
LEFT: Text content:
  H2: "Stay Connected — Wherever You Go" (white)
  Subtitle: "Download Our All-New Android App" (gold)
  Description: "Experience lightning-fast booking, secure payments, and seamless travel management from the palm of your hand. Available 24x7 with advanced security."
  2 download buttons: "Get on Play Store" (white pill) | "Download on App Store" (white pill)

RIGHT: AI Image: "Smartphone mockup showing a travel booking app with airplane tickets and hotel booking interface, modern UI, floating on colorful background"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 15: STATS COUNTER
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background. 4-column grid.
H2: "Explore a World of Incredible Travel" (centered)

Stat 1: Icon: happy travelers icon | Number: 8,000+ | Label: Happy Clients
Stat 2: Icon: destination pin icon | Number: 5,000+ | Label: Destinations
Stat 3: Icon: globe icon | Number: 125 | Label: Countries Covered
Stat 4: Icon: vacation icon | Number: 8,000+ | Label: Vacation Options

Numbers animate counting up when section scrolls into view. Gold number color. Dark label text.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 16: PARTNER LOGO SLIDERS (3 Rows)
━━━━━━━━━━━━━━━━━━━━━━━━
White background.
Row 1 heading: "Travel Partners with Udaan Airways"
Row 2 heading: "Associate Hotel Brands"  
Row 3 heading: "Airline Partners"

Each row: auto-scrolling marquee of logo placeholder boxes (gray bordered rectangles with partner name text — e.g., "MakeMyTrip", "Yatra", "Booking.com", "Expedia", "TripAdvisor", "Airbnb", "IRCTC" for Travel; "Marriott", "Hilton", "ITC Hotels", "Taj Hotels", "OYO", "Hyatt", "Radisson" for Hotels; "IndiGo", "Air India", "SpiceJet", "Vistara", "GoFirst", "AkasaAir", "Emirates", "Qatar Airways" for Airlines)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 17: FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━
Dark navy background (#0A1F5C). 5-column grid.

Column 1 — Company:
  Logo: ✈ "Udaan Airways" (white, large)
  Tagline: "Travel Shine Airways Services India Pvt. Ltd. — NCT & MCA Certified"
  Address: G-69, G-Block Sector-63, Noida, UP – 201301
  Phone: +91-8796017652
  Email Info: hr@udaanairways.com
  Email Career: hr@udaanairways.com

Column 2 — Useful Links (gold heading):
  Home | About Us | Career | Services | Contact Us

Column 3 — Trust Badge:
  AI Image: "Trust badge with golden seal, certified company, aviation excellence award, white and gold on dark background"
  Text: "ISO Certified | Government Recognized | IATA Affiliated"

Column 4 — Quick Links (gold heading):
  Academy | Join Membership | Packages Policy | Privacy Policy | Refund Policy | Terms & Conditions

Column 5 — Follow Us (gold heading):
  Social icons: Facebook, Instagram, Twitter, LinkedIn, YouTube (white icons, hover gold)
  Newsletter: Email input + Subscribe button (gold)

BOTTOM BAR:
  Left: "© 2024 Udaan Airways. All Rights Reserved."
  Right: 4 small badges: IATA Logo placeholder | Certified Badge | Play Store | App Store

Add "Back to Top" floating button (gold, bottom-right corner, circle).
Link to script.js before closing body tag.
```

---

---

# 📄 PAGE 2: ABOUT US (about.html) — 3 PROMPTS

---

## PROMPT 2-A: About Page — Part 1 (Header + Banner + Company Story + Awards)

```
Create the FIRST PART of "about.html" for "Udaan Airways". Include same pre-header, navbar (paste from index.html). Color theme same. Fully responsive.

━━━━━━━━━━━━━━━━━━━━━━━━
HERO BANNER (Inner Page Style)
━━━━━━━━━━━━━━━━━━━━━━━━
- Not full-height — about 400px tall
- AI Image background: "Modern airplane flying above clouds, blue sky, aerial photography, cinematic wide angle, aviation concept"
- Dark overlay. White text centered.
- H1: "About Udaan Airways"
- Breadcrumb: Home > About Us

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: OUR JOURNEY (Split Layout)
━━━━━━━━━━━━━━━━━━━━━━━━
2-column layout (text left, image right):

TEXT (LEFT):
  Label: "OUR BEGINNING" (gold caps)
  H2: "A Journey Born from Passion and Determination"
  Paragraph: "Established in 2020, Udaan Airways began as one person's dream to redefine travel in India. From humble beginnings — putting up posters at night and attending calls through the day — we have grown into a trusted travel partner for thousands of customers. From the moment you step aboard, you are welcomed with warm smiles and exceptional service. Udaan Airways truly lives up to its name, making every trip a bright and memorable adventure."

IMAGE (RIGHT):
  AI Image: "Determined young Indian entrepreneur at desk, planning travel business, map and airplane models, motivated startup founder"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: THE STORY (Split Layout — reversed)
━━━━━━━━━━━━━━━━━━━━━━━━
Image left, text right:

IMAGE (LEFT):
  AI Image: "Travel company founder presenting to team, whiteboard with India map, aviation startup planning session, professional"

TEXT (RIGHT):
  H2: "The Story Behind Udaan Airways"
  Paragraph: "Our vision was simple — to create a travel company that provides a hassle-free, enjoyable experience for all. We believe everyone deserves to explore new places and create memories that last a lifetime. Founded with a mission to provide affordable and quality travel services, Udaan Airways quickly became a trusted name in Indian aviation, driven by passion for excellence and innovation."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: READY FOR THE JOURNEY (Full-width CTA-style section)
━━━━━━━━━━━━━━━━━━━━━━━━
Light blue bg. 2-column.

LEFT:
  AI Image: "Happy group of Indian travelers at airport with luggage, smiling, diverse ages, travel adventure beginning"

RIGHT:
  H2: "Ready for an Unforgettable Journey?"
  Text: "We are dedicated to making travel dreams a reality by offering affordable and personalized travel packages. Our experts meticulously curate each package to ensure every aspect of your trip exceeds expectations. With our nationwide network of certified agents, you'll receive exceptional assistance from start to finish."
  Button: "Explore Packages →" (gold)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: AWARDS & RECOGNITION (3 Award Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background.
H2: "Awards & Recognition" | Subtitle: "Honored for Excellence in Aviation and Travel"
3 award cards in a row:

Award Card 1: Bharat Gaurav Ratna Shri Sammaan Council Certificate
  AI Image: "Prestigious Indian national award certificate with golden seal, red border, official government recognition document"
  Title: "Bharat Gaurav Ratna Shri Sammaan Council Certificate"
  Text: "Honored for outstanding contribution to the aviation industry. Recognized by Union Ministers, IAS/IPS officers, Governors, and Chief Ministers. Awarded by a non-profit registered with Delhi Government's NCT, approved by NITI Aayog and ISO 9001:2015 certified."

Award Card 2: World Human Rights Protection Commission Certificate
  AI Image: "International award certificate with globe and human rights symbol, golden border, prestigious recognition document"
  Title: "World Human Rights Protection Commission Certificate"
  Text: "Awarded for our unwavering commitment to providing the highest standards of care, dignity, and respect to our passengers and staff."

Award Card 3: Bharat Gaurav Ratna Shri Sammaan Award
  AI Image: "Golden trophy award with wings and star, aviation excellence award, ornate gold design on blue background"
  Title: "Bharat Gaurav Ratna Shri Sammaan Award"
  Text: "This honor recognizes organizations making significant contributions to national pride and excellence — reflecting the collective dedication of Udaan Airways."
```

---

## PROMPT 2-B: About Page — Part 2 (About India Section + Why Choose Us + Vision Mission Values)

```
Add MIDDLE SECTIONS to "about.html" for "Udaan Airways". Paste AFTER awards section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: ABOUT UDAAN AIRWAYS INDIA PVT LTD
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background.
H2: "About Udaan Airways India Pvt. Ltd."
Sub: "Truly Dedicated to Making Your Travel Experience the Best"

2-column layout:
LEFT — Image gallery (2x3 grid of 5 images + 1 large):
  Image 1: "Luxury hotel lobby with grand decor, travel hospitality, 5 star ambiance"
  Image 2: "Business class airplane cabin, premium seats, modern interior, aviation luxury"
  Image 3: "Travel agent consultation at desk, couple planning vacation, professional service"
  Image 4: "Happy family at exotic beach resort, vacation, travel success"
  Image 5: "Award ceremony corporate event, company recognition, professional achievement"
  Large Image: "Udaan Airways team professional photo, uniformed staff at airport, smiling confident"

RIGHT — Text:
  Description: "Udaan Airways Vacations is a leader in the global hospitality industry, with a distinctive collection and worldwide reputation for excellence. Our diverse portfolio includes historic icons, elegant resorts and modern city-center properties. We guarantee consistency throughout our collection of hotels and resorts by adhering strictly to company-wide standards. Central purchasing ensures the same high-quality amenities are available to all guests wherever they visit."
  
  Stats row (4 numbers):
  250+ Travel Associates | 6,500+ Partner Properties | 64+ Hotel Brands | 125+ Countries

  4 icon tiles:
  📞 Advice & Support | ✈ Air Ticketing | 🏨 Hotel Services | 🗺 Tour Packages

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: WHY CHOOSE US
━━━━━━━━━━━━━━━━━━━━━━━━
Deep blue background, white text.
H2: "Why Choose Udaan Airways" (white + gold underline)
Description: "We understand that every journey is a personal story waiting to unfold. That's why we go the extra mile to provide personalized attention at every step. Whether you seek thrilling adventures, cultural encounters, or tranquil retreats — we're here to bring your travel dreams to life."

LEFT — 2-column checklist (gold checkmarks):
Row 1: ✓ Safety Travel System | ✓ Budget-Friendly Tours
Row 2: ✓ Expert Trip Planning | ✓ Fast Communication
Row 3: ✓ Right Solution & Guide | ✓ 24x7 Customer Support

RIGHT — 2 stacked images:
Image Top: "Travel safety certificate, professional airline standards, documentation, quality assurance"
Image Bottom: "Budget friendly travel packages, affordable tourism, happy budget travelers"

Below this, full-width text block:
"The prime objective of starting Udaan Airways was to provide mesmerizing travel options with customized economical benefits — right under one roof. Udaan Airways Worldwide Vacations is currently spread across the globe with 250 travel associates and 6,500+ tied-up collaborative properties, in 64+ hotel brands worldwide."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: VISION, MISSION, VALUES (3 Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background. Centered heading.
H2: "We Simplify the Travel Experience"
Sub: "With Udaan Airways, your vacation gets even more enjoyable and you take away millions of golden memories."

Description block: "At Udaan Airways, we believe travel should be exciting, not stressful. We simplify every part of the journey — from easy booking and smooth check-ins to comfortable flights and seamless customer service. Our goal: remove travel hassles so you can focus on what truly matters — enjoying the journey."

3 Cards side by side:

VISION Card (Blue bg):
  Icon AI: "Vision eye icon with airplane silhouette, blue and gold, modern flat design illustration"
  H3: "OUR VISION"
  Text: "To provide affordable travel options for every customer. Our team curates packages catering to all needs and expectations. With an aim to expand nationwide, we will have certified travel agents at every Udaan Airways location, offering comprehensive assistance. Our ultimate goal: make travel accessible and affordable for everyone."

MISSION Card (Gold accent border):
  Icon AI: "Mission target icon with arrow and airplane, gold and blue, modern flat design"
  H3: "OUR MISSION"
  Text: "We're not just another travel company — we're your travel partner committed to making every journey seamless and stress-free. Our certified travel agents are available at every location, ready with personalized recommendations for your dream vacation. Mission: make travel accessible and affordable for everyone."

VALUES Card (Blue bg):
  Icon AI: "Values integrity diamond with wings, gold and blue, professional flat design icon"
  H3: "OUR VALUES"
  Text: "Udaan Airways is built on the principle that ethics and morality are non-negotiable. We highly value the trust and time our customers give us. We pledge to preserve the true essence of travel — be it adventure or relaxation — with the utmost integrity. This dedication sets us apart as a symbol of responsible and exceptional travel."
```

---

## PROMPT 2-C: About Page — Part 3 (Signature Excellence + Featured In + Partners + Footer)

```
Add FINAL SECTIONS to "about.html" for "Udaan Airways". Paste AFTER vision/mission/values section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8: OUR SIGNATURE EXCELLENCE (8 Blocks)
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background.
H2: "Our Signature Excellence — What Makes Us Unique"
Sub: "Setting new standards in travel, service, and customer satisfaction"

2x4 grid of excellence cards (icon + title + text):

Block 1 — Award-Winning Excellence:
  Icon AI: "Gold trophy with star burst, award winning company icon, flat design"
  H4: "Award-Winning Excellence"
  Text: "Honored with multiple awards, Udaan Airways ranks among the top travel agencies in Delhi NCR, earning Certificates of Excellence, Incorporation, and Appreciation — recognized as one of the 'Best Places to Work'."

Block 2 — Passionate Team:
  Icon AI: "Enthusiastic team icon, people with star above, teamwork gold blue illustration"
  H4: "Passionate & Enthusiastic Staff"
  Text: "Our employees, driven by passion, continuously work to take the company to new heights. Udaan Airways has established a distinct identity within a short time frame — a testament to our dedication."

Block 3 — Strong Attitude:
  Icon AI: "Strong mountain peak icon with flag, determination, blue gold flat design"
  H4: "Upright & Sturdy Attitude"
  Text: "Strategically positioned to expand our offerings, catering to diverse vacation needs and creating exceptional experiences across all areas of operations."

Block 4 — Customer Familiarity:
  Icon AI: "Heart handshake customer relationship icon, people caring, blue gold warm illustration"
  H4: "Customer Familiarity"
  Text: "We treat our customers like family, not just clients. The love and care we have for each individual is felt deeply. This genuine connection reflects how closely we bond with our customers."

Block 5 — Innovation:
  Icon AI: "Lightbulb with gear and airplane innovation icon, technology gold blue flat illustration"
  H4: "Innovation at Its Core"
  Text: "Innovation is at the very core of everything we do. From cutting-edge technology to creative solutions, we constantly evolve to meet the changing needs of our customers."

Block 6 — Quality Commitment:
  Icon AI: "Quality badge star ribbon seal icon, gold and blue, premium certification flat design"
  H4: "Commitment to Quality"
  Text: "Our commitment to quality is the foundation of everything we do. We uphold the highest standards in safety, comfort, and satisfaction — every flight is seamless and enjoyable."

Block 7 — Customer-Centric:
  Icon AI: "Customer centric icon, person at center of service circle, care focus, blue gold"
  H4: "Customer-Centric Approach"
  Text: "Our customer-centric approach is the driving force behind our success. By listening to feedback, understanding preferences, and continually improving services, we've built a loyal, trusting customer base."

Block 8 — Unmatched Service:
  Icon AI: "5 star service excellence icon, stars and premium service symbol, gold and blue modern"
  H4: "Unmatched Service Standards"
  Text: "We deliver unmatched service that goes beyond expectations. Every interaction is rooted in a commitment to excellence, creating seamless and memorable experiences from start to finish."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9: FEATURED IN MEDIA
━━━━━━━━━━━━━━━━━━━━━━━━
White background. Centered.
H2: "Featured In"
5 media brand boxes: [Entrepreneur Stories] [Hindustan Times] [Daily Hunt] [Business Press] [The India Hunt]
Styled cards with gray border, hover gold. Clickable (link to # for now).

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10: NEWSLETTER SUBSCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━
Deep blue bg. Centered.
H3: "Subscribe to Our Newsletter"
Sub: "Get exclusive travel deals, package updates, and travel tips in your inbox."
Input (email) + "Subscribe" button side by side (inline form). Gold button.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11: PARTNER SLIDERS (3 rows — same as Home)
━━━━━━━━━━━━━━━━━━━━━━━━
(Same as Home page partner sliders — copy structure)

━━━━━━━━━━━━━━━━━━━━━━━━
FOOTER (Same as Home page footer — copy exact structure)
━━━━━━━━━━━━━━━━━━━━━━━━
Include all 5 columns, bottom bar, back-to-top button.
Link script.js.
```

---

---

# 📄 PAGE 3: CAREER (career.html) — 3 PROMPTS

---

## PROMPT 3-A: Career Page — Part 1 (Header + Banner + Intro + Job Category Cards)

```
Create FIRST PART of "career.html" for "Udaan Airways". Include same pre-header and navbar. Color theme same.

━━━━━━━━━━━━━━━━━━━━━━━━
HERO BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
Height: 450px
AI Image: "Airport terminal interior, ground staff and cabin crew walking professionally, modern glass architecture, aviation career"
Dark blue overlay. Centered white text.
H1: "Career at Udaan Airways"
Sub: "Take Your Career to New Heights — Join India's Growing Aviation Family"
Breadcrumb: Home > Career
CTA Button: "Apply Now" (gold, links to apply_now.html)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: CAREER INTRO
━━━━━━━━━━━━━━━━━━━━━━━━
2-column. White background.

TEXT (LEFT):
  H2: "Career Opportunities at Udaan Airways"
  Text: "If you wonder how the aviation industry works and want to explore it from the inside, making a career in airways is the perfect option. You get to travel the world while mastering vital skills. At Udaan Airways, we hire eligible candidates for various posts — aviation sector and travel & tourism — from 10th pass to graduate level."
  
  4 skill badges (gold pill tags):
  🎭 Personality Development | 💬 Communication Skills | ⏰ Time Management | 🛡 Safety Training

RIGHT:
  AI Image: "Diverse group of aviation professionals — pilot, cabin crew, ground staff — standing confidently at airport, professional uniforms, motivated team"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: JOBS IN UDAAN AIRWAYS (7 Job Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background.
H2: "Jobs at Udaan Airways"

7 Job Cards (each: image + title + description + responsibilities + salary table + Apply Now button):

CARD 1: Airport Ground Staff
  AI Image: "Airport ground staff in blue and gold uniform, guiding passengers on tarmac, professional, Indian aviation"
  H3: "Airport Ground Staff"
  Description: "Ground staff maintain the reputation of airports by looking after passengers from terminal to aircraft. Trained professionals who handle every duty on the ground."
  Responsibilities: Airport Station Attendant | Cabin Crew | Flight Attendant | Airline Ticket Agent | Ground Handling
  Salary Table:
    Salary: ₹28,800 - ₹31,900/month
    Qualification: Intermediate or Equivalent
    Total Posts: 840
  Button: "Apply Now →" (gold)

CARD 2: Cabin Crew
  AI Image: "Indian female cabin crew in elegant blue uniform, professional makeup, airline hospitality, aircraft cabin background"
  H3: "Cabin Crew"
  Description: "Cabin crew represent the airline's image through hospitality and professionalism. At Udaan Airways, we recruit skilled professionals who know how to make every flight experience comfortable."
  Responsibilities: Flight Attendant | Briefing | Monitoring | Passenger Boarding
  Salary: ₹32,900 - ₹42,000 | Qualification: Intermediate | Posts: 947
  Button: "Apply Now →"

CARD 3: Flight Attendant (Air Hostess / Air Host)
  AI Image: "Male and female air hostess smiling professional in airplane cabin, serving passengers, blue and gold uniform, Indian airline"
  H3: "Flight Attendant"
  Description: "Flight attendants are perfectly groomed professionals. At Udaan Airways, we ensure they are well-mannered, know how to greet guests, and uphold the highest hospitality standards."
  Responsibilities: Passenger Assistance | Security Screening | Emergency Evacuation | Catering Service
  Salary: ₹35,500 - ₹45,500 | Qualification: Intermediate | Posts: 340
  Button: "Apply Now →"

CARD 4: Airline Ticket Agent
  AI Image: "Airline ticket agent at check-in counter, computer screen, helping passenger with boarding pass, airport professional"
  H3: "Airline Ticket Agent"
  Description: "Responsible for passenger ticketing, reservations, and flight information."
  Responsibilities:
  • Upgrading passenger seats when possible
  • Providing flight information
  • Making reservations
  • Airline ticket sales
  • Guiding passengers to their flights
  Salary: ₹30,900 - ₹35,900 | Qualification: Intermediate | Posts: 250
  Button: "Apply Now →"

CARD 5: Airline Cargo Handling Supervisor
  AI Image: "Cargo handling supervisor at airport warehouse, directing staff with cargo loading, safety vest, logistics aviation"
  H3: "Airline Cargo Handling Supervisor"
  Description: "Supervise all ground staff activities related to baggage and cargo."
  Responsibilities: Cargo Loading | Securing | Staging | Unloading
  Salary: ₹33,900 - ₹45,000 | Qualification: Intermediate | Posts: 450
  Button: "Apply Now →"

CARD 6: Airport Station Attendant
  AI Image: "Airport station attendant helping elderly passenger with wheelchair, terminal, caring service, Indian airport"
  H3: "Airport Station Attendant"
  Description: "Works on the terminal side — guides passengers, clears doubts about flights, upgrades seats, and arranges special facilities."
  Responsibilities: Guide passengers through terminals | Clear flight doubts | Seat upgrades | Wheelchair facility for elders
  Salary: ₹28,000 - ₹36,000 | Qualification: Intermediate | Posts: 450
  Button: "Apply Now →"

CARD 7: Airline Supervisor
  AI Image: "Professional airline supervisor in uniform reviewing flight operations, clipboard, airport environment"
  H3: "Airline Supervisor"
  Description: "Supervise ground staff activities and direct team to complete assigned tasks."
  Responsibilities: Operations Loading | Securing | Staging | Unloading
  Salary: ₹31,800 - ₹38,800 | Qualification: Intermediate | Posts: 235
  Button: "Apply Now →"
```

---

## PROMPT 3-B: Career Page — Part 2 (Careers Section + Job Listings Table + Apply CTA)

```
Add MIDDLE SECTIONS to "career.html" for "Udaan Airways". Paste AFTER job cards section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: CAREERS AT UDAAN AIRWAYS — INTRO
━━━━━━━━━━━━━━━━━━━━━━━━
Deep blue background, white text.
H2: "A Career That Takes You Higher"
Text Part 1: "We believe in providing wings to those who want to fly. We remain ever-evolving and are looking for the best talent to grow with us. If enthusiasm and passion reflect in you, we would love to hear from you."
Text Part 2: "At Udaan Airways, we believe in giving wings to those who dream of flying higher. Our organization is built on passion, dedication, and a vision to redefine the future of aviation. As we grow across India and abroad, we are constantly looking for talented, motivated, and enthusiastic individuals."
2 CTA buttons: "Apply Now" (gold) | "View Academy Courses" (outline white) → academy.html

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: JOB LISTINGS TABLE (Current Openings)
━━━━━━━━━━━━━━━━━━━━━━━━
White background.
H2: "Current Job Openings"
Styled table (alternating rows, hover highlight, blue header row, gold "Apply" links):

Header: Sr. No. | Job ID | Job Title | Area of Interest | Location

24 Rows:
SA-J325 | AIRPORT SERVICES DEPARTMENT | AIRPORT SERVICES | BHUBANESWAR
SA-J389 | SECURITY SUPERVISOR | AIRLINE SECURITY | Across India
SA-J463 | AIRPORT MANAGER | AIRPORT SERVICES | BHUBANESWAR
SA-J497 | FLIGHT OPERATIONS MANAGER | OPERATIONS | BANGALORE HQ
SA-J503 | JUNIOR EXECUTIVE – PARAMEDICS | FLIGHT SAFETY | BENGALURU, AHMEDABAD
SA-J519 | SR MANAGER/AGM – ROSTERING | OPERATIONS | BANGALORE HQ
SA-J520 | SR MANAGER/AGM – OPERATIONS TRAINING | OPERATIONS | BANGALORE HQ
SA-J539 | JUNIOR STORES EXECUTIVE | STORES & LOGISTICS | BANGALORE, HYDERABAD, NASHIK
SA-J545 | SECURITY SUPERVISOR | AIRLINE SECURITY | Across India
SA-J546 | SENIOR SECURITY AGENT | AIRLINE SECURITY | Across India
SA-J547 | TRAINEE SECURITY AGENT | AIRLINE SECURITY | Across India
SA-J549 | SECURITY AGENT | AIRLINE SECURITY | Across India
SA-J560 | PILOTS – EMB 170/175/190/195 | OPERATIONS | HYDERABAD, BENGALURU
SA-J564 | DIRECTOR – CABIN SAFETY | OPERATIONS | Head Office
SA-J565 | TRAINEE – LEGAL | LEGAL | Head Office
SA-J566 | SR MANAGER IT – BUSINESS TECHNOLOGY | INFORMATION TECHNOLOGY | Across India
SA-J567 | GENERAL MANAGER – FINANCE | ACCOUNTS | Across India
SA-J568 | GENERAL MANAGER – FINANCE | ACCOUNTS | BANGALORE HQ
SA-J573 | ASSISTANT MANAGER – POWERPLANT | CAMO | BENGALURU, HYDERABAD
SA-J574 | ADMIN EXECUTIVE (TRAVEL DESK) | ADMINISTRATION | BANGALORE HQ
SA-J575 | AIRCRAFT MAINTENANCE ENGINEERS (B1/B2) | ENGINEERING | Across India
SA-J576 | LEGAL EXECUTIVE | LEGAL | BANGALORE HQ
SA-J577 | SR MANAGER – OPERATIONS TRAINING | OPERATIONS | BANGALORE HQ
SA-J578 | AREA MANAGER – SALES | SALES | BENGALURU, GOA, KALABURAGI

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: NORTH INDIA LOCATIONS TABLE
━━━━━━━━━━━━━━━━━━━━━━━━
H3: "Udaan Airways – North India Operations"
Description: "We're proudly expanding across North India, creating exciting career opportunities at major airports from Delhi to Leh."

Styled table, 5 columns: S.No | Airport Name | Code | State/UT | Type

Include 35 airports:
Indira Gandhi International Airport | DEL | Delhi | International
Hindon Airport | HDO | Delhi NCR | Domestic/UDAN
Chaudhary Charan Singh Intl Airport | LKO | Uttar Pradesh | International
Lal Bahadur Shastri Intl Airport | VNS | Uttar Pradesh | International
Gorakhpur Airport | GOP | Uttar Pradesh | Domestic
Kushinagar International Airport | KBK | Uttar Pradesh | International
Ayodhya Airport | AYJ | Uttar Pradesh | Domestic
Kanpur Airport | KNU | Uttar Pradesh | Domestic
Agra Airport | AGR | Uttar Pradesh | Domestic
Bareilly Airport | BEK | Uttar Pradesh | Domestic
Prayagraj Airport | IXD | Uttar Pradesh | Domestic
Jaipur International Airport | JAI | Rajasthan | International
Maharana Pratap Airport (Udaipur) | UDR | Rajasthan | Domestic
Jodhpur Airport | JDH | Rajasthan | Domestic
Kishangarh Airport | KQH | Rajasthan | Domestic
Nal Airport (Bikaner) | BKB | Rajasthan | Domestic
Jaisalmer Airport | JSA | Rajasthan | Domestic
Kota Airport | KTU | Rajasthan | Domestic
Sri Guru Ram Dass Jee Intl (Amritsar) | ATQ | Punjab | International
Shaheed Bhagat Singh Intl (Chandigarh) | IXC | Chandigarh | International
Bathinda Airport | BUP | Punjab | Domestic
Adampur Airport | AIP | Punjab | Domestic
Ludhiana Airport | LUH | Punjab | Domestic
Pathankot Airport | IXP | Punjab | Domestic
Hisar Airport | HSS | Haryana | Domestic
Kangra Airport (Dharamshala) | DHM | Himachal Pradesh | Domestic
Shimla Airport | SLV | Himachal Pradesh | Domestic
Kullu-Manali Airport | KUU | Himachal Pradesh | Domestic
Jolly Grant Airport (Dehradun) | DED | Uttarakhand | Domestic
Pantnagar Airport | PGH | Uttarakhand | Domestic
Pithoragarh Airport | NNS | Uttarakhand | Domestic
Sheikh ul-Alam Intl Airport (Srinagar) | SXR | J&K | International
Jammu Airport | IXJ | J&K | Domestic
Kushok Bakula Rimpochee Airport (Leh) | IXL | Ladakh | Domestic
Kargil Airport | KGI | Ladakh | Domestic
```

---

## PROMPT 3-C: Career Page — Part 3 (South India Locations + North India Jobs + South India Jobs + Footer)

```
Add FINAL SECTIONS to "career.html" for "Udaan Airways". Paste AFTER North India locations table.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: SOUTH INDIA JOB LOCATIONS TABLE
━━━━━━━━━━━━━━━━━━━━━━━━
H3: "Udaan Airways – South India Operations"
Description: "Expanding across Karnataka, Tamil Nadu, Kerala, Telangana, and Andhra Pradesh."

Table, 3 columns: S.No | Job Title | Location

20 rows:
1 | Airport Manager | Kempegowda International Airport, Bengaluru
2 | Security Supervisor | Mangalore International Airport
3 | Customer Service Executive | Hubballi Airport, Karnataka
4 | Flight Operations Officer | Belagavi Airport, Karnataka
5 | Stores Assistant | Mysuru Airport, Karnataka
6 | Airport Duty Officer | Tiruchirappalli International Airport, Tamil Nadu
7 | Security Agent | Chennai International Airport
8 | Customer Care Officer | Coimbatore International Airport
9 | Flight Dispatcher | Madurai Airport, Tamil Nadu
10 | Junior Executive – Paramedics | Salem Airport, Tamil Nadu
11 | Aircraft Maintenance Engineer | Calicut International Airport, Kerala
12 | Ground Handling Staff | Cochin International Airport, Kerala
13 | Flight Safety Executive | Trivandrum International Airport
14 | Operations Supervisor | Kannur International Airport, Kerala
15 | Regional Sales Manager | Rajiv Gandhi International Airport, Hyderabad
16 | Airport Manager | Vijayawada International Airport, AP
17 | Stores Executive | Visakhapatnam International Airport
18 | Assistant Manager – Powerplant | Tirupati Airport, AP
19 | Customer Service Executive | Rajahmundry Airport, AP
20 | Pilot – ATR 72 | Kadapa Airport, AP

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: APPLY FORM CTA
━━━━━━━━━━━━━━━━━━━━━━━━
Full-width banner section. Gold gradient background (#FFB400 to #FF8C00).
Centered dark text.
H2: "Ready to Take Off with Udaan Airways?"
Sub: "Fill the quick form below — we'll get back to you soon."
Button: "Apply For a Job Now" → apply_now.html (dark blue, large)
OR show a mini inline form:
  - Full Name | Email | Phone | Interested Role (dropdown) | City | Submit Button

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8: PARTNER LOGOS (Airlines Partners only)
━━━━━━━━━━━━━━━━━━━━━━━━
H3: "Airline Partners" — scrolling marquee logos

FOOTER + BACK TO TOP (same as home page)
```

---

---

# 📄 PAGE 4: ACADEMY (academy.html) — 3 PROMPTS

---

## PROMPT 4-A: Academy Page — Part 1 (Header + Banner + Intro + Tip Icons)

```
Create FIRST PART of "academy.html" for "Udaan Airways". Same pre-header and navbar.

━━━━━━━━━━━━━━━━━━━━━━━━
HERO BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
AI Image: "Aviation training academy classroom, students in uniform learning, instructor at whiteboard with airplane diagram, professional aviation school"
Dark overlay. White centered text.
H1: "Udaan Airways Academy"
Sub: "Launch Your Aviation Career — Professional Training for Future Sky Champions"
Breadcrumb: Home > Academy
2 Buttons: "Register Now" (gold) → register_now.html | "View Aviation Jobs" (outline white) → aviation_jobs.html
Small warning link: "⚠ Read Caution Before Enrolling" → caution.html

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: ACADEMY INTRO
━━━━━━━━━━━━━━━━━━━━━━━━
White background. 2-column.

TEXT (LEFT):
H2: "Academy Course Opportunities with Udaan Airways"
Text: "Looking to soar high in your aviation career? Udaan Airways Academy offers comprehensive training in a supportive, professional environment. We specialize in both airport and hotel employment — giving you opportunities to develop skills in both areas. Committed to helping students and semi-skilled professionals reach their full potential, we provide rigorous training covering every aspect of the aviation industry. Our experienced professionals help you choose the right career path and guide you every step of the way. With professional demeanor and discipline, our workplace culture fosters growth and development."

Button: "Enroll Today" (gold) → register_now.html

RIGHT:
AI Image: "Young Indian student in aviation academy, studying flight manuals, professional classroom setting, motivated learner"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: ACADEMY TIPS (9 Tip Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
Light blue-gray background.
H2: "Tips for Academy Success"
Sub: "Make the most of your aviation academy course with these expert tips"
3x3 grid of tip cards:

Tip 1 — Decent Dress:
  AI Icon: "Professional business dress code icon, suit and tie illustration, gold and blue, neat appearance"
  Title: "Dress Professionally"
  Text: "Make a great first impression. Dressing professionally shows you take the opportunity seriously and respect those around you. Dress to impress."

Tip 2 — Manage Workload:
  AI Icon: "Workload management checklist icon, tasks and priority list, organized professional, gold blue illustration"
  Title: "Manage Your Workload"
  Text: "Each task is an opportunity to showcase your abilities. Prioritize tasks and complete them thoroughly and promptly without compromising quality."

Tip 3 — Contact Information:
  AI Icon: "Contact information QR code business card icon, digital professional identity, modern flat design"
  Title: "Mention Your Contact Info"
  Text: "Add a QR code to your CV linking to your portfolio. Including innovative contact information makes it easier for employers to connect with you."

Tip 4 — Avoid Personal Relationships:
  AI Icon: "Professional boundaries icon, person with boundary shield, workplace ethics, clean flat illustration"
  Title: "Maintain Professional Boundaries"
  Text: "Avoid personal relationships in the workplace. They blur professional responsibilities and can lead to conflicts. Maintain professionalism always."

Tip 5 — Avoid Casual Behaviour:
  AI Icon: "Formal professional behavior icon, business person at work, structured environment, flat design"
  Title: "Avoid Casual Behaviour"
  Text: "Maintain a professional demeanor with colleagues and superiors. Prioritize professional responsibilities over casual friendships at work."

Tip 6 — Build Contact List:
  AI Icon: "Networking contact list icon, people connections, professional network building, gold blue illustration"
  Title: "Build Your Network"
  Text: "Explore various businesses offering academy courses. Visiting organizations gives valuable insights and builds a strong professional contact list."

Tip 7 — Bring Unique Ideas:
  AI Icon: "Creative lightbulb with unique star idea icon, innovation standout concept, gold blue flat design"
  Title: "Bring Unique Ideas"
  Text: "When communicating with potential employers, share unique and innovative ideas that set you apart. Be positive, friendly, and engaging."

Tip 8 — Interview Preparation:
  AI Icon: "Job interview preparation icon, person with speech bubble and briefcase, confident professional"
  Title: "Prepare for Interviews"
  Text: "Research the company thoroughly before interviews. Learn about the organization's history, mission, and team. Preparation shows commitment."

Tip 9 — Professional Email:
  AI Icon: "Professional email icon, formal email envelope with @ symbol, corporate communication, flat design"
  Title: "Use Professional Email"
  Text: "Avoid personal email addresses when applying. Use a dedicated professional email to prevent spam and maintain a professional image."
```

---

## PROMPT 4-B: Academy Page — Part 2 (8 Course Cards)

```
Add COURSE SECTION to "academy.html" for "Udaan Airways". Paste AFTER academy tips section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: ACADEMY COURSES (8 Course Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background.
H2: "Academy Courses"
Sub: "Choose your path to an aviation career with our industry-leading professional courses"

Layout: 2-column alternating (image left + text right, then text left + image right — alternate each card)

COURSE 1: Ticket Support Executive
  AI Image: "Airline ticket support executive at computer helping customer, aviation office, professional attire, blue uniform"
  H3: "Ticket Support Executive"
  Description: "As a ticket support executive, your primary responsibility is to provide timely and effective assistance to customers who have raised support tickets."
  4 Points:
  • Providing information on available flights and pricing
  • Assist passengers in booking tickets online
  • Assist users on ticket cancellation and refund process
  • Provide passengers all possible help when needed
  Button: "Apply Now" (gold) → apply_now.html

COURSE 2: Sales & Retail Management
  AI Image: "Sales and retail management training, team meeting around table, business discussion, professional aviation company"
  H3: "Sales & Retail Management"
  Description: "Travel and tourism management — planning, organizing, and managing all aspects of the travel experience from transportation and accommodation to activities and attractions."
  4 Points:
  • Sales Strategy Development
  • Sales Team Management
  • Customer Relationship Management
  • Retail Operations Management
  Button: "Apply Now"

COURSE 3: Travel & Tourism Management
  AI Image: "Travel and tourism management course, world map with travel destinations, students learning, professional tourism education"
  H3: "Travel & Tourism Management"
  Description: "Plan, organize and coordinate all aspects of the tourism industry. Create memorable experiences for travelers while promoting destinations and generating revenue."
  4 Points:
  • Destination Management
  • Tour Operations Management
  • Hospitality Management
  • Customer Service Excellence
  Button: "Apply Now"

COURSE 4: CSA — Customer Service Associate
  AI Image: "Customer service associate smiling at help desk, aviation terminal, professional service, blue uniform, Indian airport"
  H3: "CSA – Customer Service Associate"
  Description: "A comprehensive training program providing skills and knowledge required to excel in customer service. Covers communication skills, problem-solving, and conflict resolution."
  4 Points:
  • Customer Service Fundamentals
  • Communication Skills
  • Problem Solving Techniques
  • Time Management
  Button: "Apply Now"

COURSE 5: PSA — Passenger Service Associate
  AI Image: "Passenger service associate escorting travelers at airport gate, helping with boarding, professional airline service"
  H3: "PSA – Passenger Service Associate"
  Description: "Training program for the airline passenger service role. Covers customer service, airport operations, and safety & security within the airline industry."
  4 Points:
  • Passenger Service Fundamentals
  • Check-in & Boarding Procedures
  • Airport Operations
  • Safety and Security Protocols
  Button: "Apply Now"

COURSE 6: Human Resource Management
  AI Image: "HR management training session, group learning about recruitment, professional workshop, business environment"
  H3: "Human Resource Management"
  Description: "Practice of managing an organization's workforce to achieve strategic goals. Covers recruiting, training, managing, and developing employees for maximum productivity."
  4 Points:
  • Recruitment and Selection
  • Training and Development
  • Performance Management
  • Compensation and Benefits
  Button: "Apply Now"

COURSE 7: Tourism Management
  AI Image: "Tourism management class, students learning about world destinations, map and cultural presentations, hospitality education"
  H3: "Tourism Management"
  Description: "Organize, plan and coordinate all aspects of the tourism industry. Develop strategies meeting traveler needs while balancing economic, environmental and social impacts."
  4 Points:
  • Developing tourism policies and strategies
  • Managing tourism products and services
  • Market research and trend analysis
  • Sustainable tourism practices
  Button: "Apply Now"

COURSE 8: Project Management
  AI Image: "Project management training, Gantt chart on screen, team discussing aviation project plan, professional meeting room"
  H3: "Project Management"
  Description: "Planning, organizing and managing resources to achieve specific goals within a defined timeframe and budget. Coordinate tasks efficiently for successful outcomes."
  4 Points:
  • Project Initiation & Planning
  • Project Execution
  • Project Monitoring & Control
  • Closure and Evaluation
  Button: "Apply Now"
```

---

## PROMPT 4-C: Academy Page — Part 3 (Benefits + Register CTA + Footer)

```
Add FINAL SECTIONS to "academy.html" for "Udaan Airways". Paste AFTER course cards section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: BENEFITS OF ACADEMY COURSE (6 Benefit Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
Light blue background.
H2: "Benefits of Academy Courses"
Sub: "Why enroll in Udaan Airways Academy? Here's what you gain."
2x3 grid of benefit cards:

Benefit 1 — Real-Life Experience:
  AI Icon: "Real world experience icon, person at work with checkmark, practical learning illustration, gold blue"
  H4: "Real-Life Job Experience"
  Text: "Academy courses provide real-world scenarios and hands-on experience that simulate actual job situations — preparing you from day one."

Benefit 2 — Skill Development:
  AI Icon: "Skill development icon, person leveling up with skill bars, growth concept, gold and blue"
  H4: "Skill Development"
  Text: "Courses teach specific skills to enhance knowledge and expertise. Gain practical experience and develop a deeper understanding of industry concepts and techniques."

Benefit 3 — Career Advancement:
  AI Icon: "Career advancement icon, person climbing career ladder, upward arrow, professional growth illustration"
  H4: "Career Advancement"
  Text: "Advance in your career by acquiring new skills. Become more valuable to employers or qualify for new opportunities. Some courses lead to industry certifications."

Benefit 4 — Convenience & Flexibility:
  AI Icon: "Flexible learning icon, laptop and calendar, online education, schedule management, modern flat design"
  H4: "Convenience & Flexibility"
  Text: "Courses are offered in flexible formats — balancing education with work and personal obligations has never been easier."

Benefit 5 — Networking Opportunities:
  AI Icon: "Networking icon, connected people nodes, professional network, industry connections, blue gold illustration"
  H4: "Networking Opportunities"
  Text: "Connect with instructors and fellow students who share your interests. Build professional relationships and attend industry events for new opportunities."

Benefit 6 — Personal Growth:
  AI Icon: "Personal growth icon, person with growth plant and star, self improvement, achievement concept"
  H4: "Personal Growth"
  Text: "Expand your horizons, gain a greater appreciation for the world, and achieve a sense of accomplishment as you progress toward your educational goals."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: REGISTER NOW CTA BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
AI Image background: "Motivated aviation students in uniform, thumbs up, academy graduation ceremony, success concept"
Dark overlay. Centered white text.
H2: "Ready to Begin Your Aviation Career?"
Sub: "Register now for Udaan Airways Academy courses and take the first step to the skies."
2 Buttons: "Register Now" (gold, large) | "Talk to Advisor" (white outline, links to contact.html)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: AIRLINES PARTNER LOGOS (scrolling)
FOOTER (same as home page)
━━━━━━━━━━━━━━━━━━━━━━━━
```

---

---

# 📄 PAGE 5: CONTACT US (contact.html) — 3 PROMPTS

---

## PROMPT 5-A: Contact Page — Part 1 (Header + Banner + Contact Form + Info Blocks)

```
Create "contact.html" for "Udaan Airways". Same pre-header and navbar.

━━━━━━━━━━━━━━━━━━━━━━━━
HERO BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
AI Image: "Modern customer service center with flight operations background, support desk, professional agents, airline company"
H1: "Contact Us" | Sub: "We're here 24x7 — Let's help you plan your perfect journey"
Breadcrumb: Home > Contact Us

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: CONTACT FORM + INFO
━━━━━━━━━━━━━━━━━━━━━━━━
2-column layout (Form LEFT, Info RIGHT).

LEFT — Contact Form (glass-morphism card style):
  H3: "Leave Us a Message"
  Sub: "Reach our dedicated team through the form. We look forward to hearing from you!"
  
  Form Fields (modern floating label inputs):
  - Full Name (icon: person)
  - Email Address (icon: email)
  - Phone Number (icon: phone)
  - Subject (dropdown: General Inquiry / Flight Booking / Hotel Booking / Career / Complaint / Other)
  - Message (textarea, 5 rows)
  - SEND MESSAGE Button (gold, full-width, with arrow icon)

  Privacy note: "🔒 Your information is secure. We never share your data."

RIGHT — 3 Contact Info Cards:

Card 1 — Office Address:
  Icon: 🏢 (gold, large)
  Label: "HEAD OFFICE"
  Text: G-69, G-Block Sector-63, Noida, Uttar Pradesh – 201301

Card 2 — Email:
  Icon: 📧
  Label: "EMAIL US"
  For Info: hr@udaanairways.com
  For Career: hr@udaanairways.com
  For Jobs: hr@udaanairways.com

Card 3 — Phone:
  Icon: 📞
  Label: "CALL US"
  Phone: +91-8796017652
  Holiday Support: 0120-4439885

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: GOOGLE MAP PLACEHOLDER
━━━━━━━━━━━━━━━━━━━━━━━━
Full-width map embed OR a styled placeholder:
  Styled card showing:
  AI Image: "Aerial view of Noida Sector 63 business district, modern office buildings, Google Maps style satellite view"
  Overlay text: "📍 G-69, G-Block, Sector-63, Noida, UP – 201301"
  "Get Directions" button (gold)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: QUICK CONTACT CARDS (3 bottom cards)
━━━━━━━━━━━━━━━━━━━━━━━━
Light blue background. 3 centered cards:

Card 1: Customer Support
  AI Icon: "Customer support headphone icon, 24/7 call center, gold and blue, modern flat design"
  Title: "24x7 Customer Support"
  Text: "+91-8796017652"
  Sub: "Available round the clock"

Card 2: Email Support
  AI Icon: "Email support fast response icon, envelope with clock, quick reply, gold blue illustration"
  Title: "Email Response"
  Text: "hr@udaanairways.com"
  Sub: "We reply within 24 hours"

Card 3: Visit Us
  AI Icon: "Office location building icon, visit us map pin, corporate headquarters, gold blue flat design"
  Title: "Visit Our Office"
  Text: "Sector-63, Noida, UP"
  Sub: "Mon–Sat: 9AM – 7PM"

FOOTER (same as home page)
```

---

## PROMPT 5-B: Contact Page — Part 2 (FAQ Section)

```
Add FAQ SECTION to "contact.html" for "Udaan Airways". Paste BEFORE footer.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: FREQUENTLY ASKED QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━
White background. 2-column accordion layout.
H2: "Frequently Asked Questions"
Sub: "Got questions? We have answers. Can't find yours? Contact us directly."

LEFT COLUMN — 5 FAQs:

Q1: "How can I book a flight with Udaan Airways?"
A: "You can book a flight directly through our website using the flight search widget on the homepage. Select your origin, destination, date, and travellers, then choose your flight and complete payment. For assistance, call +91-8796017652."

Q2: "What is your refund/cancellation policy?"
A: "Refund and cancellation policies vary based on the package or ticket type. Generally, cancellations made 48+ hours before travel may be eligible for partial refunds. Please refer to our Refund Policy page or contact support for specific package policies."

Q3: "Do you offer group travel packages?"
A: "Yes! We offer customized group travel packages for families, corporate teams, educational tours, and pilgrimages. Contact our team at hr@udaanairways.com for group booking enquiries."

Q4: "How do I apply for a job at Udaan Airways?"
A: "Visit our Career page, browse available positions, and click 'Apply Now'. Fill in the application form with your details. Our HR team will review and contact you. Email: hr@udaanairways.com"

Q5: "Is my payment information secure?"
A: "Yes, absolutely. We use industry-standard SSL encryption and secure payment gateways. Your personal and payment information is never shared with third parties."

RIGHT COLUMN — 5 More FAQs:

Q6: "Do you provide travel insurance?"
A: "Yes, we offer comprehensive travel insurance for domestic and international travel. Use the 'Travel Insurance' tab in the booking widget on our homepage for a quick quote."

Q7: "How do I track my booking status?"
A: "You can check your booking status by logging into your Member Account via the 'Member Login' button at the top of the page, or contact our support team directly."

Q8: "Can I modify my travel dates after booking?"
A: "Date modifications are subject to availability and may incur change fees. Contact our support team at least 48 hours before departure for modification requests."

Q9: "What are your academy course fees?"
A: "Academy course fees vary by course type and duration. Contact us at hr@udaanairways.com or call +91-8796017652 for current fee structures and enrollment details."

Q10: "Do you offer franchise/partnership opportunities?"
A: "Yes! Udaan Airways offers franchise opportunities for travel agents and entrepreneurs. Visit our Franchise page or register on our website to learn about partnership benefits."

Use smooth CSS accordion animation (click to expand/collapse answers).
```

---

## PROMPT 5-C: Contact Page — Part 3 (Social + Newsletter + Partner Logos)

```
Add FINAL SECTIONS to "contact.html" for "Udaan Airways". Paste AFTER FAQ section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: CONNECT ON SOCIAL MEDIA
━━━━━━━━━━━━━━━━━━━━━━━━
Deep blue background.
H2: "Stay Connected with Udaan Airways" (white)
Sub: "Follow us for travel deals, updates, and inspiration"

5 social cards in a row:
Card 1: Facebook
  AI Icon: "Facebook social media icon, large blue F, rounded square, social network"
  Title: "Facebook"
  Text: "Like our page for daily travel deals"
  Button: "Follow Us" (white outline)

Card 2: Instagram
  AI Icon: "Instagram social media icon, gradient pink orange camera icon, rounded square"
  Title: "Instagram"
  Text: "Beautiful travel destinations daily"
  Button: "Follow Us"

Card 3: Twitter / X
  AI Icon: "Twitter X social media icon, black X symbol, modern social network icon"
  Title: "Twitter / X"
  Text: "Real-time flight and offer updates"
  Button: "Follow Us"

Card 4: LinkedIn
  AI Icon: "LinkedIn social media icon, blue IN logo, professional network, rounded square"
  Title: "LinkedIn"
  Text: "Career opportunities and company news"
  Button: "Follow Us"

Card 5: YouTube
  AI Icon: "YouTube social media icon, red play button, video streaming, rounded rectangle"
  Title: "YouTube"
  Text: "Travel guides and destination videos"
  Button: "Subscribe"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: NEWSLETTER (centered, gold bg)
━━━━━━━━━━━━━━━━━━━━━━━━
H3: "Get Exclusive Travel Deals in Your Inbox"
Email input + "Subscribe Now" button (dark blue)

SECTION 7: PARTNER LOGOS (marquee sliders — same as home page)
FOOTER (same as home page)
```

---

---

# 📄 PAGE 6: FRANCHISE (franchise.html) — 3 PROMPTS

---

## PROMPT 6-A: Franchise Page — Part 1 (Header + Banner + Intro + 4 Icons)

```
Create FIRST PART of "franchise.html" for "Udaan Airways". Same pre-header and navbar.

━━━━━━━━━━━━━━━━━━━━━━━━
HERO BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
AI Image: "Successful travel franchise store interior with branded Udaan Airways banners, professional agents at desks, modern office, business success"
Dark overlay. Centered text.
H1: "Become a Udaan Airways Franchise Partner"
Sub: "Join India's growing aviation family and build a successful travel business with our proven system"
Button: "Register Interest" (gold, large) → register_now.html

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: FRANCHISE INTRO
━━━━━━━━━━━━━━━━━━━━━━━━
2-column.
TEXT (LEFT):
H2: "Greetings from the Udaan Airways Franchise Team"
Text: "Step into a future of smarter and more personalized service with our advanced AI-powered travel systems. Instead of relying on time-consuming manual efforts, our platform helps you simplify every step of your operations. By automating repetitive and routine processes, our system saves valuable time and significantly reduces human error. Your team can focus on high-value tasks — driving growth and efficiency within your business. With seamless integration, you gain the perfect balance of accuracy, speed, and innovation — transforming how you work and ensuring smoother, smarter operations every single day."
Button: "Start Your Franchise Journey" (gold) → register_now.html

RIGHT:
AI Image: "Franchise partner success illustration, business owner with travel agency, handshake deal, professional partnership, Indian entrepreneurship"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: 4 SERVICE ICONS (What We Offer)
━━━━━━━━━━━━━━━━━━━━━━━━
Light blue background. Centered.
H2: "What You Get with Our Franchise"
4 large icon cards in a row:

Icon 1 — Flights:
  AI Icon: "Airplane flight icon, large gold airplane on white circle, modern flat design, premium look"
  Title: "Flight Bookings"
  Text: "Access to all domestic and international airline inventories"

Icon 2 — Hotels:
  AI Icon: "Hotel building icon, elegant gold hotel with stars, modern flat design on white circle"
  Title: "Hotel Bookings"
  Text: "6,500+ partner hotels across 125+ countries"

Icon 3 — Holidays:
  AI Icon: "Holiday vacation icon, palm tree beach sun suitcase gold color, modern flat design"
  Title: "Holiday Packages"
  Text: "Curated domestic and international holiday packages"

Icon 4 — Group Tours:
  AI Icon: "Group tour travel icon, people with travel bags and globe, gold blue illustration, flat design"
  Title: "Group Tours"
  Text: "Corporate, family, and educational group tour management"
```

---

## PROMPT 6-B: Franchise Page — Part 2 (Why Connect + Benefits + Stats)

```
Add MIDDLE SECTIONS to "franchise.html" for "Udaan Airways". Paste AFTER service icons section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: WHY CONNECT WITH US (3 Feature Blocks + 6 Benefit Cards)
━━━━━━━━━━━━━━━━━━━━━━━━
White background.
H2: "Why Connect with Udaan Airways?"
Sub: "Everything you need to run a successful travel franchise — under one roof."

3 Large Feature Cards:

Card 1 — Unified Global API:
  AI Image: "Technology API connection illustration, global network of airlines and hotels connected, digital travel technology concept"
  H3: "Unified Global API"
  Text: "Unified Global API offering for travel agents — access to all airlines & hotel inventories worldwide in one powerful platform."
  Badge: "🌐 All Airlines + Hotels"

Card 2 — Dedicated Account Manager:
  AI Image: "Dedicated account manager professional portrait, business consultant, support specialist, modern office"
  H3: "Dedicated Account Manager"
  Text: "Your personal Account Manager for Sales, Operations and Accounts — ensuring all your calls and questions are answered promptly."
  Badge: "👤 Personal Support"

Card 3 — 24x7 Customer Service:
  AI Image: "24/7 customer service call center, support agents at work, airline support desk, professional team"
  H3: "24x7 Customer Service"
  Text: "Round-the-clock call support for all your Flights, Hotels, Holidays, and Escalations. We're always available when you need us."
  Badge: "🕐 Always Available"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: 6 MORE FRANCHISE BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background. 2x3 grid.

Benefit 1 — Training & Support:
  AI Icon: "Training support icon, graduation cap with airplane, learning aviation, gold blue flat design"
  Title: "Complete Training"
  Text: "Comprehensive training for you and your staff including software, product knowledge, and customer service."

Benefit 2 — Marketing Material:
  AI Icon: "Marketing branding icon, banner flyers brand identity, gold blue professional illustration"
  Title: "Marketing Support"
  Text: "Ready-made marketing materials, branded collateral, and digital assets to promote your franchise."

Benefit 3 — Technology Platform:
  AI Icon: "Technology platform icon, laptop with travel booking dashboard, cloud based system, modern tech"
  Title: "Advanced Technology"
  Text: "Access to our cutting-edge B2B booking platform — flights, hotels, packages — all in one place."

Benefit 4 — High Commissions:
  AI Icon: "Commission earnings icon, money growth rupee coin with upward arrow, financial growth, gold blue"
  Title: "Attractive Commissions"
  Text: "Industry-leading commission structures on flights, hotels, and package bookings."

Benefit 5 — Brand Recognition:
  AI Icon: "Brand recognition icon, star brand logo with trophy, award winning company, flat design"
  Title: "Established Brand"
  Text: "Leverage the power of the Udaan Airways brand — trusted by 8,000+ customers across India."

Benefit 6 — Exclusive Deals:
  AI Icon: "Exclusive deal icon, special offer tag with star, premium discount badge, gold blue illustration"
  Title: "Exclusive Deals"
  Text: "Access to exclusive fares, group rates, and last-minute deals not available to the general public."

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: B2B STATS COUNTER
━━━━━━━━━━━━━━━━━━━━━━━━
Deep blue background (#0A1F5C). White text. Gold numbers.
H2: "B2B Travel Agency — A Name You Can Rely On"

4 stats (animate on scroll):
5M+ End Customers | 5M+ Total Bookings | 250+ Associate Travel Agents | 125+ Countries Covered
```

---

## PROMPT 6-C: Franchise Page — Part 3 (Registration Form + Newsletter + Footer)

```
Add FINAL SECTIONS to "franchise.html" for "Udaan Airways". Paste AFTER stats section.

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: FRANCHISE REGISTRATION FORM
━━━━━━━━━━━━━━━━━━━━━━━━
White background. Centered card.
H2: "Register Your Interest"
Sub: "Fill in the form below and our franchise team will get in touch within 24 hours."

Form (two-column grid inside card):
Left Column:
  - Full Name (input)
  - Email Address (input)
  - Phone Number (input)
  - City / Location (input)

Right Column:
  - Business Type (dropdown: Individual Agent / Travel Agency / Corporate / Other)
  - Investment Budget (dropdown: Under ₹1L / ₹1L–₹5L / ₹5L–₹10L / ₹10L+)
  - Current Business (dropdown: Yes, existing travel business / New startup / Exploring options)
  - Message / Query (textarea)

Full-width: Checkbox "I agree to the Terms & Conditions and Privacy Policy"
Submit Button: "Submit Franchise Interest" (gold, large, full-width)

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: NEWSLETTER
━━━━━━━━━━━━━━━━━━━━━━━━
Gold gradient bg. Centered.
H3: "Subscribe to Our Newsletter"
Email input + Submit button

SECTION 8: PARTNER LOGOS (sliders — same as home)
FOOTER (same as home page)
```

---

---

# 📄 PAGE 7: SERVICES (services.html) — 3 PROMPTS

---

## PROMPT 7-A: Services Page — Part 1 (Header + Banner + 7 Service Sections)

```
Create FIRST PART of "services.html" for "Udaan Airways". Same pre-header and navbar.

━━━━━━━━━━━━━━━━━━━━━━━━
HERO BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
AI Image: "Collage of travel services — airplane, hotel, car rental, cruise ship — professional travel agency services montage, premium"
H1: "Our Services" | Sub: "Everything you need for the perfect journey — all under one roof"
Breadcrumb: Home > Services

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: INTRO
━━━━━━━━━━━━━━━━━━━━━━━━
Centered. White bg.
H2: "Complete Travel Solutions by Udaan Airways"
Sub: "From flight booking to hotel reservations, car rentals to cruise packages — we handle it all."

━━━━━━━━━━━━━━━━━━━━━━━━
SERVICES 1–4 (Alternating Layout)
━━━━━━━━━━━━━━━━━━━━━━━━

SERVICE 1 — FLIGHT TICKETS (Image Right):
  AI Image: "Modern commercial airplane in flight, blue sky clouds, bright sunshine, dramatic aviation photography"
  H2: "Flight Ticket Booking"
  Description: "Book domestic and international flight tickets at the guaranteed lowest price. Access flights from all major Indian airlines — IndiGo, Air India, SpiceJet, Vistara, AkasaAir — plus 100+ international carriers."
  Features: ✓ Lowest Price Guarantee | ✓ One Way & Round Trip | ✓ Business & Economy | ✓ Student/Defence Fares
  Button: "Search Flights" → index.html

SERVICE 2 — HOTEL BOOKING (Image Left):
  AI Image: "Luxury hotel room interior, king bed with white linen, panoramic window view, 5 star accommodation, premium travel"
  H2: "Hotel Reservation"
  Description: "Online hotel bookings across India and worldwide — from budget stays to 5-star luxury resorts. Instant confirmation, competitive pricing, and a wide choice of properties."
  Features: ✓ Budget, Standard & Luxury | ✓ Worldwide Coverage | ✓ Instant Confirmation | ✓ 6,500+ Partner Hotels
  Button: "Search Hotels"

SERVICE 3 — CAR RENTAL (Image Right):
  AI Image: "Premium car rental service, luxury sedan on airport road, travel car hire, professional automotive transportation"
  H2: "Car Rental Service"
  Description: "Comfortable, clean, and punctual car rental services for airport transfers, city tours, and outstation travel across India. Choose from hatchbacks to premium SUVs."
  Features: ✓ Airport Pickup & Drop | ✓ City & Outstation | ✓ With/Without Driver | ✓ Transparent Pricing
  Button: "Rent a Car"

SERVICE 4 — BUS BOOKING (Image Left):
  AI Image: "Modern luxury air-conditioned bus on Indian highway, interstate travel, comfortable seating, budget travel"
  H2: "Bus Ticket Booking"
  Description: "Book bus tickets for intercity travel across India. Wide network of private and government operators with AC/Non-AC options, sleeper berths, and seater options."
  Features: ✓ AC & Non-AC Options | ✓ Sleeper & Seater | ✓ Pan-India Coverage | ✓ Easy Cancellation
  Button: "Book Bus"
```

---

## PROMPT 7-B: Services Page — Part 2 (More Services + Why Choose)

```
Add MORE SERVICE SECTIONS to "services.html" for "Udaan Airways". Paste AFTER bus booking section.

SERVICE 5 — CRUISE (Image Right):
  AI Image: "Luxury cruise ship on ocean, sunset light, tropical destination, premium sea travel, white cruise liner"
  H2: "Cruise Packages"
  Description: "Explore the world's finest cruise destinations — from the Andaman Islands to Mediterranean voyages. Premium cruise packages with onboard dining, entertainment, and shore excursions."
  Features: ✓ Indian Ocean & International | ✓ All-Inclusive Options | ✓ Family & Honeymoon Cruises | ✓ Expert Cruise Planning
  Button: "Explore Cruises"

SERVICE 6 — TRAVEL INSURANCE (Image Left):
  AI Image: "Travel insurance protection concept, umbrella shielding globe with airplane, financial security travel, professional illustration"
  H2: "Travel Insurance"
  Description: "Comprehensive travel insurance for domestic and international trips. Medical coverage, trip cancellation, baggage loss, and emergency evacuation — travel with complete peace of mind."
  Features: ✓ Medical Coverage | ✓ Trip Cancellation | ✓ Baggage Protection | ✓ Emergency Evacuation
  Button: "Get Insurance Quote"

SERVICE 7 — DESTINATION PACKAGES (Image Right):
  AI Image: "World map with travel destination pins, globe surrounded by vacation photos, travel destination discovery concept"
  H2: "Destination Exploration"
  Description: "Explore 5,000+ destinations across 125+ countries. Our travel experts help you discover hidden gems, plan perfect itineraries, and experience the world your way."
  Features: ✓ 5,000+ Destinations | ✓ Expert Curated Itineraries | ✓ Group & Solo Travel | ✓ Cultural Experiences
  Button: "Explore Destinations"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION — ADDITIONAL SPECIAL SERVICES (Icon Grid)
━━━━━━━━━━━━━━━━━━━━━━━━
Light gray background.
H2: "Additional Services"
4x2 icon grid (8 services):

1. Visa Assistance — AI Icon: "Passport visa stamp icon, official travel document, gold blue illustration"
   Text: "Visa assistance for 100+ countries"

2. Airport Transfer — AI Icon: "Airport transfer car icon, pickup drop service, professional chauffeur, flat design"
   Text: "Seamless airport pickup & drop services"

3. Tour Guides — AI Icon: "Tour guide person with flag icon, local expertise, travel guidance, gold blue flat"
   Text: "Certified local tour guides at destinations"

4. Forex Services — AI Icon: "Foreign currency exchange icon, dollar rupee conversion, forex gold blue illustration"
   Text: "Travel forex and currency exchange"

5. Honeymoon Planning — AI Icon: "Honeymoon romantic planning icon, couple heart travel, gold and pink design"
   Text: "Specialized honeymoon packages"

6. Corporate Travel — AI Icon: "Corporate business travel icon, briefcase airplane globe, professional B2B travel"
   Text: "Corporate and MICE travel management"

7. Pilgrimage Tours — AI Icon: "Pilgrimage religious tour icon, temple and traveler, spiritual journey, gold illustration"
   Text: "Sacred religious and pilgrimage tours"

8. Student Tours — AI Icon: "Student educational tour icon, backpack globe and books, young travelers, illustration"
   Text: "Educational tours and student groups"
```

---

## PROMPT 7-C: Services Page — Part 3 (Packages Preview + CTA + Footer)

```
Add FINAL SECTIONS to "services.html" for "Udaan Airways".

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION — POPULAR PACKAGES PREVIEW (Mini cards — 4)
━━━━━━━━━━━━━━━━━━━━━━━━
White bg. H2: "Our Best-Selling Packages"

4 horizontal cards:
1. Rajasthan Royal Tour — AI Image: "Jaipur pink city palace illuminated at night" — 3N/4D — ₹15,999 — "Book Now"
2. Kerala Backwaters — AI Image: "Kerala houseboat backwaters sunrise, misty morning reflection" — 4N/5D — ₹18,499 — "Book Now"
3. Manali Adventure — AI Image: "Manali snow adventure, snowfall, mountain scenery, pine forest" — 3N/4D — ₹12,999 — "Book Now"
4. Thailand Explorer — AI Image: "Bangkok Thailand Wat Arun temple at sunset, golden spires, river reflection" — 5N/6D — ₹42,999 — "Book Now"

━━━━━━━━━━━━━━━━━━━━━━━━
SECTION — CTA BANNER
━━━━━━━━━━━━━━━━━━━━━━━━
AI Image background: "Travel collage — airplane, beach, mountains, city, adventure — all-in-one travel lifestyle collage"
Dark overlay. White text.
H2: "Your Perfect Journey Starts Here"
Sub: "Talk to our travel experts and get a personalized travel plan."
2 Buttons: "Call Now: +91-8796017652" (gold) | "Send Enquiry" (outline) → contact.html

PARTNER LOGOS + FOOTER (same as home page)
```

---

---

# 📄 PAGE 8–11: PACKAGE PAGES (4 pages) — 3 PROMPTS EACH

---

## PROMPT 8-A: Domestic Packages — Part 1

```
Create FIRST PART of "domestic.html" for "Udaan Airways". Same pre-header and navbar.

HERO BANNER:
AI Image: "India map with travel destinations collage — Taj Mahal, Goa beach, Rajasthan fort, Kerala backwaters, Himachal mountains — premium domestic travel"
H1: "Domestic Travel Packages" | Sub: "Explore the incredible diversity of India with Udaan Airways"
Breadcrumb: Home > Packages > Domestic

SECTION 1 — INTRO:
H2: "Discover India with Udaan Airways"
Text: "India is a land of breathtaking diversity — from the snow-capped Himalayas to sun-kissed beaches, from royal Rajasthan to lush Kerala. Our domestic packages are curated to give you the perfect Indian experience at the best prices."

SECTION 2 — 8 DOMESTIC PACKAGE CARDS (2x4 grid):

Card 1: Rajasthan Royal Tour
  AI Image: "Jaipur Amer Fort golden hour, Rajasthan royal architecture, camel in foreground, royal heritage photography"
  Location: Rajasthan | Duration: 4N/5D | Price: ₹15,999/person
  Highlights: Jaipur Pink City, Udaipur Lake Palace, Jodhpur Blue City, Jaisalmer Desert

Card 2: Kerala God's Own Country
  AI Image: "Kerala Alleppey houseboat on backwaters, palm trees reflection, peaceful sunset, green nature"
  Location: Kerala | Duration: 5N/6D | Price: ₹18,499/person
  Highlights: Alleppey Backwaters, Munnar Tea Gardens, Kochi Heritage, Kovalam Beach

Card 3: Leh Ladakh Adventure
  AI Image: "Leh Ladakh Pangong Lake at sunrise, blue water, snow mountains, motorbike adventure, dramatic sky"
  Location: Ladakh | Duration: 6N/7D | Price: ₹24,999/person
  Highlights: Pangong Lake, Nubra Valley, Magnetic Hill, Hemis Monastery

Card 4: Manali – Shimla Hills
  AI Image: "Manali Solang Valley snow, happy tourists, cable car, winter sports, Himalayan adventure"
  Location: Himachal Pradesh | Duration: 4N/5D | Price: ₹13,999/person
  Highlights: Manali Snow Point, Rohtang Pass, Shimla Mall Road, Kufri

Card 5: Goa Beach Holiday
  AI Image: "Goa beach aerial view, turquoise ocean waves, white sand, beach shacks, palm trees, fun holiday"
  Location: Goa | Duration: 3N/4D | Price: ₹11,499/person
  Highlights: Baga Beach, Calangute, Dudhsagar Waterfall, Old Goa Churches

Card 6: Varanasi Pilgrimage
  AI Image: "Varanasi Ganga Aarti at night, holy river, lamps floating, priests performing ceremony, spiritual India"
  Location: Uttar Pradesh | Duration: 3N/4D | Price: ₹9,999/person
  Highlights: Ganga Aarti, Kashi Vishwanath Temple, Sarnath, Boat Ride

Card 7: Andaman Island Escape
  AI Image: "Andaman Havelock Island beach, radhanagar crystal clear water, pristine white sand, tropical paradise India"
  Location: Andaman | Duration: 5N/6D | Price: ₹28,999/person
  Highlights: Radhanagar Beach, Scuba Diving, Cellular Jail, Neil Island

Card 8: Darjeeling – Sikkim
  AI Image: "Darjeeling tea garden with Kanchenjunga peak visible, misty morning, toy train, Himalayan beauty"
  Location: West Bengal / Sikkim | Duration: 5N/6D | Price: ₹16,999/person
  Highlights: Tiger Hill Sunrise, Tea Garden Tour, Rumtek Monastery, MG Road Gangtok
```

---

## PROMPT 8-B: Domestic Packages — Part 2

```
Add MORE SECTIONS to "domestic.html". Paste AFTER package cards.

SECTION 3 — WHY CHOOSE OUR DOMESTIC PACKAGES:
3 horizontal feature cards:
Card 1 — "Best Price Guarantee" | Card 2 — "Expert Local Guides" | Card 3 — "Flexible Itineraries"
(Same style as home page Why Choose Us)

SECTION 4 — BOOKING PROCESS (4 steps):
Step 1 — Choose Package (icon: mouse click)
Step 2 — Customize Your Trip (icon: edit pencil)
Step 3 — Confirm & Pay (icon: credit card)
Step 4 — Travel & Enjoy! (icon: airplane)

SECTION 5 — PACKAGE ENQUIRY FORM (small card):
H3: "Get a Custom Quote"
Name | Email | Phone | Destination (dropdown) | Travel Date | No. of Travellers | Message
Submit button (gold)

FOOTER (same as home page)
```

---

## PROMPT 8-C: International + Family + Honeymoon Package Pages

```
Create THREE separate pages: "international.html", "family.html", and "honeymoon.html" for "Udaan Airways". Each should follow the same structure as domestic.html but with different content.

━━━━━━━━━━━━━━━━━━━━━━━━
INTERNATIONAL.HTML
━━━━━━━━━━━━━━━━━━━━━━━━
Hero AI Image: "World map airplane routes, international travel destinations collage — Eiffel Tower, Dubai Burj Khalifa, Bali temple, Thailand beach, Switzerland Alps, Europe premium"
H1: "International Travel Packages"
Sub: "Explore 125+ countries with Udaan Airways — premium international travel experiences"

8 International Package Cards:
1. Dubai Experience — AI Image: "Dubai Burj Khalifa at night, golden skyline, desert city luxury, UAE travel photography" — 4N/5D — ₹54,999
2. Thailand Adventure — AI Image: "Thailand Phuket beach aerial, emerald water limestone cliffs, speedboat, tropical paradise" — 5N/6D — ₹42,999
3. Singapore & Malaysia — AI Image: "Singapore Marina Bay Sands at night with laser show reflection, modern skyline" — 6N/7D — ₹65,999
4. Bali Romantic Escape — AI Image: "Bali Ubud rice terraces with traditional Balinese temple, lush green, spiritual atmosphere" — 5N/6D — ₹48,999
5. Europe Highlights — AI Image: "European cities collage — Eiffel Tower Paris, Colosseum Rome, Big Ben London, Alps Switzerland" — 9N/10D — ₹1,49,999
6. Vietnam Explorer — AI Image: "Ha Long Bay Vietnam sunrise, limestone karsts, traditional junk boat, misty emerald bay" — 6N/7D — ₹55,999
7. Switzerland Dream — AI Image: "Swiss Alps panorama, Interlaken green valley, snow peaks, clear blue lake, luxury travel" — 7N/8D — ₹1,79,999
8. Turkey Discovery — AI Image: "Cappadocia hot air balloons at sunrise, golden landscape, fairy chimney rock formations, Turkey" — 6N/7D — ₹89,999

━━━━━━━━━━━━━━━━━━━━━━━━
FAMILY.HTML
━━━━━━━━━━━━━━━━━━━━━━━━
Hero AI Image: "Happy Indian family at vacation destination — parents and children smiling, travel bags, airport, premium family travel lifestyle"
H1: "Family Travel Packages"
Sub: "Create unforgettable memories with your family — specially crafted family packages"

6 Family Package Cards:
1. Rajasthan Family Tour — AI Image: "Indian family at Rajasthan fort, parents and children in colorful clothes, heritage tourism, joy"
2. Goa Family Beach — AI Image: "Family at Goa beach, building sand castles, children playing, happy family vacation"
3. Singapore + Universal Studios — AI Image: "Universal Studios Singapore with families, fun rides, children excited, theme park holiday"
4. Kerala Family Houseboat — AI Image: "Indian family on Kerala houseboat, children watching birds, parents relaxed, backwaters holiday"
5. Shimla Family Snow — AI Image: "Indian family in Shimla snow, children playing snowball, parents happy, winter family vacation"
6. Andaman Family Paradise — AI Image: "Family snorkeling at Andaman clear water, colorful fish, children with goggles, tropical holiday"

━━━━━━━━━━━━━━━━━━━━━━━━
HONEYMOON.HTML
━━━━━━━━━━━━━━━━━━━━━━━━
Hero AI Image: "Romantic couple on beach at sunset, silhouette, tropical destination, honeymoon travel, rose petals, candle light"
H1: "Honeymoon Packages"
Sub: "Premium comforts, candlelight dinners, and couple-friendly stays — only with Udaan Airways"

6 Honeymoon Package Cards (romantic style with heart badge):
1. Kerala Honeymoon — AI Image: "Romantic couple on Kerala houseboat with rose petals, candlelight dinner, backwater sunset, luxury"
2. Paris Honeymoon — AI Image: "Couple at Eiffel Tower Paris, romantic city view, evening lights, honeymoon photography"
3. Maldives Honeymoon — AI Image: "Maldives overwater bungalow, crystal clear lagoon, couple on deck at sunset, paradise honeymoon"
4. Bali Honeymoon — AI Image: "Bali honeymoon villa with private pool, romantic sunset, couple relaxing, tropical luxury resort"
5. Shimla Manali Honeymoon — AI Image: "Romantic couple in Himalayan snow, cozy mountain cabin, winter honeymoon, scenic peaks"
6. Switzerland Honeymoon — AI Image: "Couple in Swiss Alps meadow, snow peaks background, romantic European honeymoon, love story"

For each package page, add at the bottom:
- Why Choose Our Packages (3 cards)
- Package Enquiry Form
- Partner Logos + Footer
```

---

---

# 📄 PAGE 12: REVIEWS (reviews.html) — 3 PROMPTS

---

## PROMPT 9-A: Reviews Page

```
Create "reviews.html" for "Udaan Airways". Same pre-header and navbar.

HERO: AI Image: "Happy satisfied airline passengers giving thumbs up, customer satisfaction, positive review concept, happy travelers"
H1: "Customer Reviews" | Sub: "What our 8,000+ happy travelers say about us"

SECTION 1 — RATING OVERVIEW (centered card):
Overall Rating: ⭐⭐⭐⭐⭐ 4.8 out of 5
Rating bars: 5 stars 85% | 4 stars 10% | 3 stars 3% | 2 stars 1% | 1 star 1%
Total reviews: 2,400+

SECTION 2 — 9 REVIEW CARDS (3x3 grid):
(Use all 9 testimonials from home page — expanded with full review text, date, tour type tag, star rating, reviewer photo)
Each card: photo + name + date + tour type tag + star rating + full review text + "Helpful?" thumbs up button

SECTION 3 — WRITE A REVIEW CTA:
H3: "Share Your Experience" | Short form: Name, Email, Tour Type, Rating (stars), Review text | Submit button (gold)

FOOTER (same as home page)
```

---

# 📄 POLICY PAGES (4 pages) — 1 PROMPT EACH

---

## PROMPT 10: All Policy Pages

```
Create FOUR separate HTML pages for "Udaan Airways": "privacy_policy.html", "refund_policy.html", "terms_conditions.html", "packages_policy.html"

Each page:
- Same pre-header and navbar
- Inner page hero banner (400px height, dark blue bg, white text heading + breadcrumb)
- Content in a clean white card layout with proper headings, subheadings, numbered lists
- Professional legal document styling
- Footer same as home page

PRIVACY POLICY content:
- Information We Collect (name, email, phone, payment)
- How We Use Information (booking, support, marketing)
- Data Security (SSL encryption, secure storage)
- Cookies Policy
- Third Party Links
- Your Rights
- Contact: hr@udaanairways.com

REFUND POLICY content:
- Flight Cancellations (48+ hours: partial refund; less than 48 hours: no refund)
- Hotel Cancellations (72+ hours: full refund; 24–72 hours: 50% refund)
- Package Cancellations (sliding scale based on days before travel)
- How to Request a Refund (email hr@udaanairways.com or call)
- Processing Time (7–10 business days)

TERMS & CONDITIONS content:
- Acceptance of Terms
- Booking & Payment Terms
- Travel Documents Responsibility
- Changes and Cancellations
- Liability Limitations
- Governing Law (Indian law, Noida jurisdiction)

PACKAGES POLICY content:
- Package Inclusions (what is included)
- Package Exclusions (what is not included — personal expenses, visa fees, etc.)
- Changes to Package
- Force Majeure
- Insurance Recommendation
```

---

---

# 📋 FINAL CHECKLIST

## Files to Create (in order):
| # | File | Prompts Used |
|---|---|---|
| 1 | styles.css | Prompt 0-A |
| 2 | script.js | Prompt 0-B |
| 3 | index.html | Prompts 1-A, 1-B, 1-C |
| 4 | about.html | Prompts 2-A, 2-B, 2-C |
| 5 | career.html | Prompts 3-A, 3-B, 3-C |
| 6 | academy.html | Prompts 4-A, 4-B, 4-C |
| 7 | contact.html | Prompts 5-A, 5-B, 5-C |
| 8 | franchise.html | Prompts 6-A, 6-B, 6-C |
| 9 | services.html | Prompts 7-A, 7-B, 7-C |
| 10 | domestic.html | Prompts 8-A, 8-B |
| 11 | international.html | Prompt 8-C |
| 12 | family.html | Prompt 8-C |
| 13 | honeymoon.html | Prompt 8-C |
| 14 | reviews.html | Prompt 9-A |
| 15 | privacy_policy.html | Prompt 10 |
| 16 | refund_policy.html | Prompt 10 |
| 17 | terms_conditions.html | Prompt 10 |
| 18 | packages_policy.html | Prompt 10 |

## TOTAL PROMPTS: 35 Prompts
## TOTAL PAGES: 18 HTML files + 1 CSS + 1 JS = 20 files

---

*Prepared for: Udaan Airways | hr@udaanairways.com | Static Website Build via Antigravity AI*
