export const EXPERIENCES = [
  {
    id: 'exp-1',
    title: 'Hidden Kolkata Food & Stories',
    price: 800,
    duration: '3 hours',
    rating: 4.9,
    reviews: 127,
    hostId: 'host-1',
    tags: ['Food', 'Culture', 'History'],
    location: 'College Street, Kolkata',
    image: 'https://images.unsplash.com/photo-1587316694883-9b9a67440938?auto=format&fit=crop&q=80',
    description: 'Explore the hidden alleys of College Street, tasting authentic Bengali street food and listening to stories of the city\'s past.',
    crowdLevel: '🟢 Recommended',
    included: ['Street food tasting', 'Local history', 'Photography stops', 'Neighborhood exploration']
  },
  {
    id: 'exp-2',
    title: 'Old Kolkata Photography Walk',
    price: 700,
    duration: '2 hours',
    rating: 4.8,
    reviews: 84,
    hostId: 'host-2',
    tags: ['Photography', 'Architecture'],
    location: 'North Kolkata',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80',
    description: 'Capture the essence of old Kolkata, its colonial architecture, and bustling street life through your lens.',
    crowdLevel: '🟢 Local Experience',
    included: ['Photography tips', 'Hidden spots', 'Tea break']
  },
  {
    id: 'exp-3',
    title: 'Kumartuli Art & Culture Tour',
    price: 900,
    duration: '3 hours',
    rating: 4.9,
    reviews: 156,
    hostId: 'host-3',
    tags: ['Art', 'Culture'],
    location: 'Kumartuli',
    image: 'https://images.unsplash.com/photo-1605335952601-094ee7329737?auto=format&fit=crop&q=80',
    description: 'Visit the potters\' quarter and witness the making of magnificent clay idols.',
    crowdLevel: '🟠 Moderate',
    included: ['Studio visits', 'Artisan interactions', 'Local transport']
  },
  {
    id: 'exp-4',
    title: 'College Street Book & Café Trail',
    price: 600,
    duration: '2 hours',
    rating: 4.7,
    reviews: 92,
    hostId: 'host-1',
    tags: ['Books', 'Food', 'Culture'],
    location: 'College Street',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80',
    description: 'Browse the largest second-hand book market in the world and sip coffee at the legendary Coffee House.',
    crowdLevel: '🟢 Recommended',
    included: ['Book shopping guide', 'Coffee & snacks']
  },
  {
    id: 'exp-5',
    title: 'Night Market Explorer',
    price: 750,
    duration: '2.5 hours',
    rating: 4.8,
    reviews: 110,
    hostId: 'host-4',
    tags: ['Food', 'Shopping', 'Nightlife'],
    location: 'New Market',
    image: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?auto=format&fit=crop&q=80',
    description: 'Experience the vibrant nightlife of Kolkata\'s markets.',
    crowdLevel: '🟠 Moderate',
    included: ['Street food', 'Bargaining tips']
  }
];

export const HOSTS = [
  {
    id: 'host-1',
    name: 'Ananya Sharma',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    verified: true,
    university: 'Jadavpur University',
    rating: 4.9,
    experiencesCount: 128,
    bio: 'Architecture student & photography enthusiast. I love showing visitors the side of Kolkata that doesn\'t appear in typical guidebooks.',
    languages: ['English', 'Hindi', 'Bengali'],
    interests: ['Photography', 'Street Food', 'History', 'Architecture'],
  },
  {
    id: 'host-2',
    name: 'Rohan Das',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    verified: true,
    university: 'Presidency University',
    rating: 4.8,
    experiencesCount: 75,
    bio: 'History buff and foodie.',
    languages: ['English', 'Bengali'],
    interests: ['History', 'Food'],
  },
  {
    id: 'host-3',
    name: 'Priya Mehta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    verified: true,
    university: 'Calcutta University',
    rating: 4.9,
    experiencesCount: 201,
    bio: 'Art student passionate about local crafts.',
    languages: ['English', 'Hindi', 'Bengali'],
    interests: ['Art', 'Culture'],
  },
  {
    id: 'host-4',
    name: 'Arjun Sen',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80',
    verified: true,
    university: 'St. Xavier\'s College',
    rating: 4.7,
    experiencesCount: 45,
    bio: 'Night owl and street food expert.',
    languages: ['English', 'Bengali'],
    interests: ['Nightlife', 'Food', 'Shopping'],
  }
];

export const MAP_LOCATIONS = [
  { id: 'loc-1', name: 'Victoria Memorial', crowd: 'High', coordinates: { x: 50, y: 70 }, status: 'red' },
  { id: 'loc-2', name: 'College Street', crowd: 'Low', coordinates: { x: 40, y: 30 }, status: 'green', recommendation: 'exp-1' },
  { id: 'loc-3', name: 'Kumartuli', crowd: 'Low', coordinates: { x: 20, y: 15 }, status: 'green', recommendation: 'exp-3' },
  { id: 'loc-4', name: 'New Market', crowd: 'Moderate', coordinates: { x: 45, y: 50 }, status: 'orange', recommendation: 'exp-5' },
];

export const GUESTS = [
  {
    id: 'guest-1',
    name: 'Rahul Sharma',
    room: '305',
    stay: '3 nights',
    interests: ['Food', 'Photography', 'History'],
    availableTime: 'Today, 4–8 PM',
  },
  {
    id: 'guest-2',
    name: 'Samantha Smith',
    room: '112',
    stay: '5 nights',
    interests: ['Architecture', 'Art', 'Culture'],
    availableTime: 'Tomorrow, 10 AM–2 PM',
  }
];
