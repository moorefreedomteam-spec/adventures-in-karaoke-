# 🎤 Adventures in Karaoke

**Hosted by Mac McClanahan — Bakersfield, CA**

A full-featured KJ (Karaoke Jockey) web app for managing shows, song libraries, bookings, and fan engagement.

---

## 🌐 Live Site
[adventures-in-karaoke.netlify.app](https://adventures-in-karaoke.netlify.app)

---

## ✨ Features

- **🎵 Song Library** — Searchable catalog of 80+ songs with genre filter. Easily expandable.
- **📍 Weekly Schedule** — Shows the current week's venue lineup. Today's show is highlighted automatically.
- **🙋 Song Requests** — Fans can request songs to be added. Requests saved locally and visible on a request board.
- **🎉 Private Event Booking** — Full booking intake form with event type, date, venue, and guest count.
- **💸 Tip / Donate** — Cash App, Venmo, Zelle, and debit card payment options with modal popups.
- **📲 Social Media Links** — Facebook (live), Instagram, TikTok, YouTube (ready for handles).
- **📬 CRM Newsletter Signup** — Collects name, email, phone, and interest categories for marketing.
- **⚙️ Admin Panel** — Hidden admin button lets Mac add songs to the library and export CRM data as CSV.

---

## 🛠️ How to Update

### Add Songs
1. Open `js/data.js`
2. Add a new entry to the `SONGS` array:
```js
{ title: "Song Name", artist: "Artist Name", genre: "pop", added: "2026-06" },
```
Available genres: `pop`, `rock`, `country`, `rnb`, `hiphop`, `80s`, `90s`, `latin`, `disney`, `classic`

### Update the Schedule
1. Open `js/data.js`
2. Find the `SCHEDULE` array and update venues, days, times, and addresses.
3. Set `active: false` for private events.

### Update Social Links
1. Open `index.html`
2. Find the social media section and update the `href` values for Instagram, TikTok, and YouTube.

### Update Payment Handles
1. Open `js/app.js`
2. Find the `tipData` object near the bottom and update the `handle` values for each payment method.

---

## 📁 Project Structure

```
adventures-in-karaoke/
├── index.html          # Main single-page app
├── css/
│   └── style.css       # All styles
├── js/
│   ├── data.js         # Songs, schedule, payment info (EDIT THIS)
│   └── app.js          # All app logic
└── README.md
```

---

## 🚀 Deployment

This site is deployed on **Netlify** from this GitHub repo. Every push to `main` automatically updates the live site.

To deploy your own copy:
1. Fork this repo
2. Connect to Netlify
3. Set build directory to `/` (root)
4. Deploy!

---

## 📬 Contact

For bookings or questions, reach Mac on [Facebook](https://www.facebook.com/The2nsmith).

---

*Built with ❤️ for Mac McClanahan and Adventures in Karaoke.*
