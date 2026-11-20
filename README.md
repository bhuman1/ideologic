# Ideologic website

One-page site for Ideologic and its scientific Python IDE. Plain HTML, CSS and a
few lines of JavaScript: no build step, no framework.

```
index.html            the page
assets/styles.css     design tokens (top of file) and layout, light + dark
assets/site.js        settings: product name, prices, checkout links, contact email
assets/app-light.png  real app screenshots (shown according to the visitor's theme)
assets/app-dark.png
assets/favicon.ico    the >I mark
```

## Preview

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000 --directory Ideologic
```

then visit http://localhost:8000.

## Settings (assets/site.js)

| Setting | What it does |
|---|---|
| `productName` | The app's name everywhere on the page. The company name stays "Ideologic". |
| `prices` | Prices on the buy buttons and pricing cards. |
| `checkout` | Payment link per plan. Empty means "Sales open soon" is shown and the buttons stay on the page. |
| `contactEmail` | Used by "Get in touch" and the footer Contact link (hidden while empty). |

The page also contains the name as plain text, so search engines and visitors
without JavaScript still see it. After renaming the product, search `index.html`
for the old name too, and retake the screenshots (the app's title bar shows its name).

## Taking payments and delivering downloads

Recommended (see `../business_plan.md`, section 3): a **Merchant of Record**
such as Paddle, Lemon Squeezy or FastSpring. Each gives you:

- a hosted checkout link per product (paste it into `checkout`): cards, Apple
  Pay and Google Pay work without extra setup;
- VAT and sales tax handled for you;
- an automatic email with the download link and a licence key.

If you use **Stripe Payment Links** instead, Stripe takes the payment and sends
a receipt, but sending the download link needs one extra piece: a small webhook
(e.g. a Cloudflare Worker or Netlify Function) that, on `checkout.session.completed`,
emails a time-limited download URL for the zip. You also become responsible
for registering and filing VAT/sales tax.

## Hosting

Any static host works, for free: Cloudflare Pages, Netlify or GitHub Pages.
Point the ideologic domain at it and enable HTTPS.

## To confirm before launch

These are written into the page as sensible defaults; change any you disagree with:

- [ ] Prices (£29 Personal, £79 Professional) and "volume pricing from five people"
- [ ] 14-day refund policy (pricing note)
- [ ] "Every 1.x update included; major versions are a new purchase with an owner discount"
- [ ] Disk space (~350 MB is measured from a clean install of the current build)
- [ ] Product name (see business plan, section 4.3)
- [ ] Footer links for licence terms (EULA), privacy policy and refund policy, once written
- [ ] Contact email
