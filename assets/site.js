/* Site settings: edit these, nothing else needs to change.
 *
 * productName   the app's name everywhere on the page (the company stays "Ideologic")
 * prices        shown on the buy buttons and pricing cards
 * checkout      payment links from Stripe Payment Links or a Merchant of Record
 *               (Paddle / Lemon Squeezy / FastSpring). Leave "" until sales open:
 *               the buttons then scroll to a "Sales open soon" note.
 * contactEmail  used by "Get in touch" and the footer Contact link
 */
const SITE = {
  productName: "Ideolab",
  prices: { personal: "£29", professional: "£79" },
  checkout: { personal: "", professional: "" },
  contactEmail: "",
};

document.addEventListener("DOMContentLoaded", () => {
  // product name
  document.querySelectorAll(".pn").forEach((el) => { el.textContent = SITE.productName; });
  document.title = `Ideologic · ${SITE.productName}, the scientific Python IDE`;

  // prices
  document.querySelectorAll("[data-price]").forEach((el) => {
    const p = SITE.prices[el.dataset.price];
    if (p) el.textContent = p;
  });

  // checkout links
  let pending = false;
  document.querySelectorAll("[data-checkout]").forEach((el) => {
    const url = SITE.checkout[el.dataset.checkout];
    if (url) {
      el.href = url;
      el.rel = "noopener";
    } else {
      el.href = "#pricing";
      pending = true;
    }
  });
  document.getElementById("pricing").classList.toggle("is-pending", pending);

  // contact links
  document.querySelectorAll("[data-contact]").forEach((el) => {
    if (SITE.contactEmail) {
      el.href = `mailto:${SITE.contactEmail}`;
    } else if (el.closest(".site-footer")) {
      el.hidden = true;
    }
  });

  // footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // hairline under the header once the page scrolls
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
