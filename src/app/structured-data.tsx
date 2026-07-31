import { SITE_URL, SITE_NAME } from "./site-config";

// Pricing pulled from the live Pricing section (src/components/kamai/Pricing.tsx)
// as it exists today: ₹149/mo "Early Adopter" plan, 30-day free trial (no card
// required), then billed automatically with a lifetime price lock — this is
// the confirmed framing as of the founder's trial-length/lock-in copy update;
// the earlier "3 months free" mechanic has been retired in favor of the
// simpler 30-day-trial-then-lock-in story. Lock-in is stated first below
// since it's now the primary sign-up driver, not a passing mention.
export function StructuredData() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "The all-in-one operating system for independent home bakers in India — order management, profit ledger, customer CRM, WhatsApp payment links, and wholesale sourcing in one Baker Cockpit.",
    offers: {
      "@type": "Offer",
      name: "Early Adopter",
      price: "149",
      priceCurrency: "INR",
      description: "Lifetime price lock for early sign-ups — 30 days free, no card required upfront, then ₹149/month for life.",
      url: SITE_URL,
    },
    url: SITE_URL,
  };

  // NOTE: no `sameAs` social profile URLs included — none were available in
  // the codebase or provided, and inventing them would create broken/wrong
  // links. Add real social profile URLs here once they exist.
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/kamai-rounded-logo.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
