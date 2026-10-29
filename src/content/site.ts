/**
 * All page copy lives here so it can be edited without touching layout code.
 * Text marked "DRAFT" was not in the Figma file and needs client sign-off.
 */

export const nav = [
  { label: "Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Faq", href: "#faq" },
];

/** TODO: replace "#" with real profile URLs */
export const socials = [
  { name: "LinkedIn", href: "#", icon: "/icons/linkedin.svg" },
  { name: "X", href: "#", icon: "/icons/x.svg" },
  { name: "Instagram", href: "#", icon: "/icons/instagram.svg" },
] as const;

export const hero = {
  title: "Websites Designed to Grow Your Business.",
  body: "Stop losing sales to a slow or confusing website. We design fast, search-optimized digital platforms that turn visitors into paying clients.",
  cta: { label: "Book a Free Strategy Call", href: "#contact" },
};

export const intro = {
  lead: "We help businesses define their purpose, ",
  rest: "fix friction points, and reach their biggest goals online. Through bespoke design and modern development, we build digital platforms that don't just look exceptional they convert visitors into long-term clients.",
};

export type WorkImageLayer = {
  src: string;
  /** Optional crop box (percentages from Figma) — otherwise object-cover.
   *  Figma stacks several opaque images per card; only the top (visible) one is shipped. */
  crop?: { width: string; height: string; left: string; top: string };
};

export type WorkItem = {
  name: string;
  tag: string;
  alt: string;
  layers: WorkImageLayer[];
};

export const work = {
  label: "Our work",
  title: { lead: "See How We Build ", muted: "Revenue Engines" },
  body: "Step inside our exact design methodology. These digital environments showcase our strict standards for pairing high-end, minimalist UI/UX design with seamless, fast-loading performance.",
  items: [
    {
      name: "Elite Chuffer",
      tag: "Web Design",
      alt: "Elite Chuffer luxury chauffeur website on a laptop",
      layers: [{ src: "/images/work-1.webp" }],
    },
    {
      name: "Aurelune cafe",
      tag: "Web Design",
      alt: "Aurelune cafe website on a laptop",
      layers: [
        {
          src: "/images/work-2.webp",
          crop: { width: "174.94%", height: "174.41%", left: "-59.91%", top: "-66.22%" },
        },
      ],
    },
    {
      name: "VEYLO",
      tag: "Web Design",
      alt: "VEYLO mobile website on a phone",
      layers: [{ src: "/images/work-3b.webp" }],
    },
    {
      name: "LXA GROUP",
      tag: "Web Design",
      alt: "LXA Group website on a laptop",
      layers: [{ src: "/images/work-4.webp" }],
    },
    {
      name: "Urbanexa",
      tag: "Web Design",
      alt: "Urbanexa building management website on a laptop",
      layers: [{ src: "/images/work-5d.webp" }],
    },
    {
      name: "Urbanexa",
      tag: "Web Design",
      alt: "Restaurant website displayed on a tablet",
      layers: [{ src: "/images/work-6e.webp" }],
    },
  ] satisfies WorkItem[],
};

export type ServiceItem = {
  title: string;
  /** Only items with a description + image expand */
  description?: string;
  image?: string;
};

export const services = {
  label: "Our Service",
  title: { lead: "Everything You Need to ", muted: "Succeed Online" },
  body: "We don't just make things look good. We offer exactly what your business needs to build trust, stand out, and turn casual visitors into paying customers.",
  cta: { label: "Contact Us", href: "#contact" },
  items: [
    {
      title: "Strategic Website Design",
      description:
        "Strategic Website Design Your main website serves as your 24/7 digital salesperson. We do not just make it look good; we build lightning-fast, mobile-optimized platforms engineered from the ground up to rank high on Google. By blending clean, trust-building aesthetics with foundational SEO and smooth navigation, we ensure your ideal customers find you easily and are naturally guided toward contacting you.",
      image: "/images/service-1.webp",
    },
    {
      title: "Conversion-Focused Landing Pages",
      description:
        "Sending paid ad traffic to a standard homepage is the fastest way to waste marketing budget. We design highly targeted, distraction-free web pages built around one single goal: capturing a lead or selling a specific product. We use proven psychological layouts, persuasive text, and strategically placed buttons to eliminate hesitation and maximize your return on ad spend.",
      image: "/images/service-2.png",
    },
    {
      title: "Brand Identity & Positioning",
      description:
        "Customers judge the credibility of your business within milliseconds. We craft professional logos, color psychology palettes, and cohesive visual branding that make you look established, premium, and trustworthy. A strong visual identity bypasses consumer skepticism, separates you from local competitors, and allows you to confidently charge what your services are truly worth.",
      image: "/images/service-3.png",
    },
    {
      title: "Website Showcase Videos",
      description:
        "You have less than three seconds to hook a visitor's attention. We create dynamic, high-quality motion videos and animations that explain your most complex services simply and visually. This keeps users on your website significantly longer, reduces their confusion, and makes your brand feel incredibly modern and sophisticated.",
      image: "/images/service-4.png",
    },
    {
      title: "UX Strategy & Audits",
      description:
        "If your current website gets traffic but generates zero sales, there is a hidden leak in your digital funnel. We conduct a rigorous, step-by-step analysis of your existing site to find exactly where visitors are getting frustrated, confused, or distracted. We then provide you with a clear, actionable roadmap to fix those specific bottlenecks and immediately recover that lost revenue.",
      image: "/images/service-5.png",
    },
  ] satisfies ServiceItem[],
};

export const whyUs = {
  label: "Why Us ?",
  title: { lead: "A Team Built Entirely for ", muted: "Your Growth" },
  body: "We blend deep consumer psychology with premium design to ensure every layout, button, and headline is strategically positioned to turn casual traffic into paying clients.",
  cards: {
    partners: {
      title: "Not Just Designers. Business Partners.",
      body: "We are digital strategists, not just designers. We partner directly with founders to eliminate bottlenecks and build platforms that drive growth.",
    },
    roi: {
      big: "ROI",
      small: "Is Our Only Metric.",
      body: "We measure success entirely by your financial growth. We ignore vanity metrics to focus strictly on increasing your inquiries and revenue.",
    },
    collective: {
      title: "Collective Intelligence.",
      body: "No junior account managers. You work directly with a lean, senior collective of digital architects for expert execution from day one.",
    },
  },
};

export type ProcessStep = {
  title: string;
  icon: string;
  /** colour of the strokes in the SVG file, used to flip it for the active state */
  iconTone: "light" | "dark";
  description?: string;
};

export const process = {
  label: "How We Work",
  title: { lead: "A Simple Process ", muted: "Designed around collaboration." },
  body: "Four focused phases that take a project from raw idea to a polished launch without losing momentum along the way.",
  steps: [
    {
      title: "Discovery & Strategy",
      icon: "/icons/process-1.svg",
      iconTone: "dark",
      description:
        "Discovery & Strategy: We map your exact business goals, target audience, and current revenue bottlenecks.",
    },
    {
      title: "Architecture & Design",
      icon: "/icons/process-2.svg",
      iconTone: "light",
      description:
        "We engineer the visual layout and user journey, positioning every element to drive maximum sales.",
    },
    {
      title: "Development & SEO",
      icon: "/icons/process-3.svg",
      iconTone: "light",
      description:
        "We code the custom site for instant load times and integrate foundational search optimization.",
    },
    {
      title: "Launch & Handover",
      icon: "/icons/process-4.svg",
      iconTone: "light",
      description:
        "We thoroughly test the site, push it live, and provide clear training so you can manage it effortlessly.",
    },
  ] satisfies ProcessStep[],
};

export const impact = {
  label: "Our Impact",
  title: "Built on Experience. Driven by Results.",
  body: "We let our work speak for itself. With a foundation of international projects and long-term partnerships, we engineer digital experiences that consistently perform on a global scale.",
  stats: [
    {
      value: 3,
      suffix: "+",
      label: "Years",
      body: "Specializing exclusively in high-fidelity UI/UX architecture and conversion-focused web development.",
      highlight: true,
    },
    {
      value: 15,
      suffix: "+",
      label: "Global Projects",
      body: "Engineering premium digital assets and custom interfaces for a diverse international client base.",
      highlight: false,
    },
    {
      value: 85,
      suffix: "%",
      label: "Client Retention Rate",
      body: "Building long-term partnerships through consistent communication, flawless execution, and proven ROI.",
      highlight: false,
    },
  ],
};

export const faq = {
  label: "Common Questions",
  title: "Eliminating the Guesswork",
  body: "No surprises, no hidden clauses, and no wasted time. Here is everything you need to know before we begin engineering your project.",
  cta: { label: "Ask a Question", href: "#contact" },
  items: [
    {
      q: "Who will actually be working on my website?",
      a: "No junior staff or outsourced freelancers. You will work directly with our senior team from start to finish, ensuring expert strategy and execution every step of the way.",
    },
    {
      q: "How do you make sure the website actually grows my business?",
      // DRAFT — not in Figma, written from copy elsewhere on the page
      a: "We measure success by your inquiries and revenue, not vanity metrics. Every layout, button and headline is positioned to turn traffic into paying clients, and every build ships fast, mobile-optimized and SEO-ready so customers can find you.",
    },
    {
      q: "Are there any hidden fees or surprise costs?",
      // DRAFT — not in Figma
      a: "No. Scope and pricing are agreed in writing before we start, so there are no hidden clauses or surprise invoices along the way.",
    },
    {
      q: "What happens after launch? Do I own the website?",
      // DRAFT — not in Figma
      a: "Yes. At Launch & Handover you receive full ownership of your website and its assets, along with everything your team needs to manage it.",
    },
    {
      q: "How long will it take to launch my new website?",
      // DRAFT — not in Figma
      a: "It depends on scope. We agree a realistic launch date during Discovery & Strategy and keep you updated at every phase so momentum never stalls.",
    },
    {
      q: "What happens when I book a strategy call?",
      // DRAFT — not in Figma
      a: "We talk through your business goals, audience and current bottlenecks, then recommend the right next step for your project — with no obligation to proceed.",
    },
  ],
};

export const contact = {
  label: "Contact",
  title: ["Let's make your", "vision come true"],
  body: "Whether you need a website, landing page, or showcase video, I'd love to hear about your idea.",
  followLabel: "Follow our Work",
  serviceOptions: [
    "Landing page",
    "Strategic Website Design",
    "Brand Identity & Positioning",
    "Website Showcase Videos",
    "UX Strategy & Audits",
  ],
  // DRAFT — only "$2,500 - $3,500" is in Figma
  budgetOptions: ["Under $2,500", "$2,500 - $3,500", "$3,500 - $5,000", "$5,000+"],
  submitLabel: "Contact  us",
};

export const footer = {
  tagline: ["Designing thoughtful digital experiences through strategy,", "design, and motion."],
  socialTitle: "Connect on social ",
  quickLinks: [
    { label: "Problem", href: "#problem" },
    { label: "Service", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Faq’s", href: "#faq" },
  ],
  services: [
    "Strategic Website Design",
    "Conversion-Focused Landing Pages",
    "Brand Identity & Positioning",
    "Website Showcase Videos",
    "UX Strategy & Audits",
  ],
  copyright: "2026 DesignbyDev. All rights reserved",
  // TODO: point to real legal pages
  legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Membership Agreement", href: "#" },
  ],
};
