# WorkPing

Keep your loved ones informed about your work status. WorkPing pairs a simple React + Vite web app with a Chrome extension to send seamless Telegram updates when you start and stop “Work Mode”.

## Features
- **Chrome extension**: One-click Work Mode toggle from your browser.
- **Telegram notifications**: Notify selected chat IDs when Work Mode starts or ends.
- **Custom messages**: Configure Work Mode ON/OFF messages.
- **Multiple recipients**: Add multiple Telegram chat IDs.
- **Daily summary (optional)**: End-of-day summary toggle.
- **Persistent settings**: User settings keyed by a unique `userId` stored in localStorage.

## Tech Stack
- **Frontend**: React 19, Vite 7, Tailwind CSS
- **Animations/UX**: `tailwindcss-animate`, custom marquee/sparkle components
- **HTTP**: Axios
- **Utilities**: `uuid` for client `userId`
- **Linting**: ESLint 9

## Live Extension
- **Chrome Web Store**: https://chromewebstore.google.com/detail/workping/fknebhdaeggbjkkiallkdcaggfnbiddn

## Getting Started (Local Development)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the app at the URL printed in the terminal (typically `http://localhost:5173`).

## Build & Preview
- Build for production:
  ```bash
  npm run build
  ```
- Preview the production build locally:
  ```bash
  npm run preview
  ```

## Project Structure
```
root/
  src/
    components/
      main/            # Landing, form, layout
      ui/              # Reusable UI/animation wrappers
    assets/            # Images and static assets
    main.jsx           # App entry
  index.html           # Vite HTML entry
  tailwind.config.js   # Tailwind setup
  vite.config.js       # Vite + React plugin config
```

## How It Works
- On first load, a client `userId` is generated via `uuid` and stored in `localStorage`.
- The settings form (`src/components/main/Form.jsx`) lets you:
  - Add one or more Telegram `chatId`s
  - Customize Work Mode ON/OFF messages
  - Enable/disable daily summary
- On save, the app POSTs your settings to the backend at `https://workping-backend.onrender.com/api/settings` with shape:
  ```json
  {
    "userId": "<uuid>",
    "chatIds": [ { "chatId": "-123456789", "label": "General" } ],
    "workOnMessage": "Starting work mode! 🚀",
    "workOffMessage": "Work mode ended. Time to relax! 😊",
    "sendSummary": true
  }
  ```
- On load, it attempts to GET existing settings from `.../api/settings/<userId>` and prefill the form.
- The Chrome extension uses these saved settings to send Telegram notifications when you toggle Work Mode.

## Environment & Configuration
- No local `.env` is required for the frontend as of now.
- The backend URL is currently hardcoded in the form component:
  - `https://workping-backend.onrender.com`
- If you self-host or change the API base, update the endpoints in `src/components/main/Form.jsx` accordingly.

## Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Build production assets
- `npm run preview`: Preview the built app
- `npm run lint`: Run ESLint

## Styling
- Tailwind is configured in `tailwind.config.js` with additional animations and CSS variables.
- Global styles live in `src/index.css` and component-level classes are applied via Tailwind utility classes.

## Assets
- Favicon and Open Graph image are configured in `index.html` and `public/working.png` (also referenced under `src/assets/working.png`).

## Troubleshooting
- If settings don’t persist across reloads:
  - Ensure `localStorage` is available and not blocked by the browser.
  - Verify the backend is reachable and returns 200 for GET/POST.
  - Open DevTools Network tab to inspect `.../api/settings` requests.
- If Telegram messages don’t arrive:
  - Confirm the `chatId`s are valid (numeric IDs; negative for groups).
  - Re-open the extension and ensure it’s linked to the same `userId`.
  - Try sending simplified ON/OFF messages (no emojis) to rule out formatting issues.

## License
Proprietary. All rights reserved.

## Acknowledgements
- Built with React + Vite and Tailwind CSS.
- Uses `tailwindcss-animate` and custom UI components for subtle animations.
