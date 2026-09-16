# Semaglutide Specialist Survey

Static Cloudflare Pages build for the semaglutide specialist survey cockpit.

## Run locally

```bash
npm run dev
```

Open `http://127.0.0.1:4173`.

## Build for Cloudflare Pages

```bash
npm run build
```

Publish the `dist` directory. The project is ready for Cloudflare Pages with:

- Build command: `npm run build`
- Build output directory: `dist`
- Optional access control: Cloudflare Access in front of the Pages project

Responses are stored in the browser's local storage and can be exported as CSV from the Data tab. For distributed fieldwork, collect behind an authenticated route and export/import CSVs, or connect a server-side endpoint later.
# silver-giggle
