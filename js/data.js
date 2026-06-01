// ===== ADVENTURES IN KARAOKE — DATA =====
// Mac can update this file to add/remove songs and update the schedule

const SONGS = [
  // Pop
  { title: "Anti-Hero", artist: "Taylor Swift", genre: "pop", added: "2025-01" },
  { title: "Shake It Off", artist: "Taylor Swift", genre: "pop", added: "2024-06" },
  { title: "Levitating", artist: "Dua Lipa", genre: "pop", added: "2024-03" },
  { title: "As It Was", artist: "Harry Styles", genre: "pop", added: "2024-08" },
  { title: "Flowers", artist: "Miley Cyrus", genre: "pop", added: "2024-09" },
  { title: "Blinding Lights", artist: "The Weeknd", genre: "pop", added: "2024-01" },
  { title: "Stay", artist: "The Kid LAROI & Justin Bieber", genre: "pop", added: "2024-02" },
  { title: "Watermelon Sugar", artist: "Harry Styles", genre: "pop", added: "2023-11" },
  { title: "drivers license", artist: "Olivia Rodrigo", genre: "pop", added: "2024-04" },
  { title: "good 4 u", artist: "Olivia Rodrigo", genre: "pop", added: "2024-05" },

  // Rock
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "rock", added: "2023-06" },
  { title: "Don't Stop Believin'", artist: "Journey", genre: "rock", added: "2023-06" },
  { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "rock", added: "2023-07" },
  { title: "Livin' on a Prayer", artist: "Bon Jovi", genre: "rock", added: "2023-07" },
  { title: "Mr. Brightside", artist: "The Killers", genre: "rock", added: "2024-01" },
  { title: "Seven Nation Army", artist: "The White Stripes", genre: "rock", added: "2023-09" },
  { title: "Eye of the Tiger", artist: "Survivor", genre: "rock", added: "2023-08" },
  { title: "Thunder", artist: "Imagine Dragons", genre: "rock", added: "2024-02" },
  { title: "Radioactive", artist: "Imagine Dragons", genre: "rock", added: "2024-02" },
  { title: "Somebody That I Used to Know", artist: "Gotye", genre: "rock", added: "2024-03" },

  // Country
  { title: "Take Me Home, Country Roads", artist: "John Denver", genre: "country", added: "2023-06" },
  { title: "Friends in Low Places", artist: "Garth Brooks", genre: "country", added: "2023-06" },
  { title: "Jolene", artist: "Dolly Parton", genre: "country", added: "2023-07" },
  { title: "Before He Cheats", artist: "Carrie Underwood", genre: "country", added: "2024-01" },
  { title: "Body Like a Back Road", artist: "Sam Hunt", genre: "country", added: "2024-03" },
  { title: "Meant to Be", artist: "Bebe Rexha & Florida Georgia Line", genre: "country", added: "2024-04" },
  { title: "Die a Happy Man", artist: "Thomas Rhett", genre: "country", added: "2024-02" },
  { title: "Fast Car", artist: "Luke Combs", genre: "country", added: "2024-06" },
  { title: "Wagon Wheel", artist: "Darius Rucker", genre: "country", added: "2023-11" },
  { title: "I Will Always Love You", artist: "Dolly Parton / Whitney Houston", genre: "country", added: "2023-10" },

  // R&B / Soul
  { title: "Halo", artist: "Beyoncé", genre: "rnb", added: "2023-06" },
  { title: "Crazy in Love", artist: "Beyoncé", genre: "rnb", added: "2023-06" },
  { title: "No Scrubs", artist: "TLC", genre: "rnb", added: "2024-01" },
  { title: "Waterfalls", artist: "TLC", genre: "rnb", added: "2024-01" },
  { title: "I Want It That Way", artist: "Backstreet Boys", genre: "rnb", added: "2023-09" },
  { title: "Killing Me Softly", artist: "Fugees", genre: "rnb", added: "2024-03" },
  { title: "No One", artist: "Alicia Keys", genre: "rnb", added: "2024-04" },
  { title: "Irreplaceable", artist: "Beyoncé", genre: "rnb", added: "2024-05" },
  { title: "Adorn", artist: "Miguel", genre: "rnb", added: "2024-06" },
  { title: "All of Me", artist: "John Legend", genre: "rnb", added: "2023-12" },

  // Hip-Hop
  { title: "Rap God", artist: "Eminem", genre: "hiphop", added: "2024-01" },
  { title: "Lose Yourself", artist: "Eminem", genre: "hiphop", added: "2023-07" },
  { title: "Gold Digger", artist: "Kanye West", genre: "hiphop", added: "2024-02" },
  { title: "Old Town Road", artist: "Lil Nas X", genre: "hiphop", added: "2024-03" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", genre: "hiphop", added: "2024-04" },
  { title: "Bodak Yellow", artist: "Cardi B", genre: "hiphop", added: "2024-05" },
  { title: "God's Plan", artist: "Drake", genre: "hiphop", added: "2024-06" },
  { title: "WAP", artist: "Cardi B ft. Megan Thee Stallion", genre: "hiphop", added: "2024-07" },

  // 80s
  { title: "Total Eclipse of the Heart", artist: "Bonnie Tyler", genre: "80s", added: "2023-06" },
  { title: "Take On Me", artist: "a-ha", genre: "80s", added: "2023-06" },
  { title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper", genre: "80s", added: "2023-06" },
  { title: "Come On Eileen", artist: "Dexys Midnight Runners", genre: "80s", added: "2023-07" },
  { title: "Tainted Love", artist: "Soft Cell", genre: "80s", added: "2023-08" },
  { title: "99 Luftballons", artist: "Nena", genre: "80s", added: "2023-09" },
  { title: "Africa", artist: "Toto", genre: "80s", added: "2023-10" },
  { title: "Don't You (Forget About Me)", artist: "Simple Minds", genre: "80s", added: "2023-11" },
  { title: "Walk Like an Egyptian", artist: "The Bangles", genre: "80s", added: "2024-01" },
  { title: "Jump", artist: "Van Halen", genre: "80s", added: "2024-02" },

  // 90s
  { title: "Wannabe", artist: "Spice Girls", genre: "90s", added: "2023-06" },
  { title: "Baby One More Time", artist: "Britney Spears", genre: "90s", added: "2023-06" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "90s", added: "2023-07" },
  { title: "Gangsta's Paradise", artist: "Coolio", genre: "90s", added: "2023-08" },
  { title: "I Will Always Love You", artist: "Whitney Houston", genre: "90s", added: "2023-09" },
  { title: "Losing My Religion", artist: "R.E.M.", genre: "90s", added: "2023-10" },
  { title: "No Doubt - Don't Speak", artist: "No Doubt", genre: "90s", added: "2023-11" },
  { title: "Baby Got Back", artist: "Sir Mix-a-Lot", genre: "90s", added: "2024-01" },

  // Latin
  { title: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee", genre: "latin", added: "2024-01" },
  { title: "Hips Don't Lie", artist: "Shakira", genre: "latin", added: "2024-02" },
  { title: "Bailando", artist: "Enrique Iglesias", genre: "latin", added: "2024-03" },
  { title: "La Bamba", artist: "Los Lobos", genre: "latin", added: "2024-04" },
  { title: "Livin' la Vida Loca", artist: "Ricky Martin", genre: "latin", added: "2024-05" },
  { title: "Con Calma", artist: "Daddy Yankee", genre: "latin", added: "2024-06" },

  // Disney
  { title: "Let It Go", artist: "Frozen", genre: "disney", added: "2023-06" },
  { title: "A Whole New World", artist: "Aladdin", genre: "disney", added: "2023-06" },
  { title: "Circle of Life", artist: "The Lion King", genre: "disney", added: "2023-07" },
  { title: "Be Our Guest", artist: "Beauty and the Beast", genre: "disney", added: "2023-08" },
  { title: "Under the Sea", artist: "The Little Mermaid", genre: "disney", added: "2023-09" },
  { title: "Hakuna Matata", artist: "The Lion King", genre: "disney", added: "2023-10" },
  { title: "How Far I'll Go", artist: "Moana", genre: "disney", added: "2024-01" },
  { title: "Colors of the Wind", artist: "Pocahontas", genre: "disney", added: "2024-02" },

  // Classic Rock
  { title: "Hotel California", artist: "Eagles", genre: "classic", added: "2023-06" },
  { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "classic", added: "2023-06" },
  { title: "Piano Man", artist: "Billy Joel", genre: "classic", added: "2023-06" },
  { title: "Born to Run", artist: "Bruce Springsteen", genre: "classic", added: "2023-07" },
  { title: "More Than a Feeling", artist: "Boston", genre: "classic", added: "2023-08" },
  { title: "Dream On", artist: "Aerosmith", genre: "classic", added: "2023-09" },
  { title: "Black Dog", artist: "Led Zeppelin", genre: "classic", added: "2023-10" },
  { title: "Free Bird", artist: "Lynyrd Skynyrd", genre: "classic", added: "2023-11" },
  { title: "Carry On My Wayward Son", artist: "Kansas", genre: "classic", added: "2024-01" },
  { title: "Roxanne", artist: "The Police", genre: "classic", added: "2024-02" },
];

// ===== SCHEDULE =====
// Update this weekly! Set 'today' to the day Mac is performing
// Days: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

const SCHEDULE = [
  {
    day: "Tuesday",
    venue: "Slider's Bar & Grill",
    address: "4618 California Ave, Bakersfield, CA",
    time: "8:00 PM – 11:00 PM",
    active: true
  },
  {
    day: "Thursday",
    venue: "The Station",
    address: "3301 Oswell St, Bakersfield, CA",
    time: "8:00 PM – Midnight",
    active: true
  },
  {
    day: "Friday",
    venue: "Mexicali Bar",
    address: "1405 19th St, Bakersfield, CA",
    time: "9:00 PM – 1:00 AM",
    active: true
  },
  {
    day: "Saturday",
    venue: "Black Bear Diner (Private Event)",
    address: "Call for location",
    time: "7:00 PM – 10:00 PM",
    active: false
  }
];

// ===== PAYMENT INFO =====
const PAYMENT_INFO = {
  cashapp: { handle: "$MacKJKaraoke", note: "Open Cash App and send to $MacKJKaraoke" },
  venmo: { handle: "@Mac-McClanahan", note: "Open Venmo and send to @Mac-McClanahan" },
  zelle: { handle: "Text Mac for Zelle number", note: "Ask Mac directly or reach out via Facebook" },
  card: { handle: "Square payment link", note: "Tap the button below to pay with card securely via Square" }
};
