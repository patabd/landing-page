export type Locale = "bn" | "en";

export interface SiteContent {
  meta: { title: string };
  nav: { why: string; pricing: string };
  language: { switchLabel: string };
  hero: {
    eyebrow: string;
    title: string;
    /** Copy before / after the inline you.pata.page chip. */
    bodyBefore: string;
    bodyAfter: string;
  };
  form: {
    emailLabel: string;
    submit: string;
    submitting: string;
    successTitle: string;
    duplicateTitle: string;
    successBody: string;
    microcopy: string;
  };
  errors: {
    invalid_email: string;
    rate_limited: string;
    network: string;
    generic: string;
  };
  mock: { captionBefore: string; captionAfter: string };
  why: {
    heading: string;
    intro: string;
    items: { number: string; title: string; description: string }[];
  };
  pricing: {
    heading: string;
    intro: string;
    plans: {
      name: string;
      price: string;
      period: string;
      note: string;
      features: string[];
    }[];
    selfHost: { title: string; description: string };
    footnote: string;
  };
  footer: { madeIn: string };
}

export const content: Record<Locale, SiteContent> = {
  bn: {
    meta: { title: "Pata — নিজের পাতা, কয়েক মিনিটে" },
    nav: { why: "কেন পাতা", pricing: "প্রাইসিং" },
    language: { switchLabel: "ভাষা বদলান" },
    hero: {
      eyebrow: "শীঘ্রই আসছে বাংলাদেশে",
      title: "নিজের পাতা, কয়েক মিনিটে",
      bodyBefore:
        "পাতা বাংলাদেশি ক্রিয়েটরদের নিজের প্রকাশনার ঠিকানা। কয়েক মিনিটেই চালু করুন ব্লগ, পোর্টফোলিও কিংবা মিনি নিউজ সাইট — ",
      bodyAfter:
        "ঠিকানায়। হোস্টিং, ডোমেইন কিংবা টেকনিক্যাল সেটআপ কিছুই লাগে না। বাংলা-প্রথম, মূল্য টাকায়, পেমেন্ট বিকাশ বা নগদে।",
    },
    form: {
      emailLabel: "ইমেইল ঠিকানা",
      submit: "তালিকায় যোগ দিন",
      submitting: "যোগ হচ্ছে…",
      successTitle: "আপনি তালিকায় আছেন।",
      duplicateTitle: "আপনি এমনিতেই তালিকায় আছেন।",
      successBody: "পাতা চালু হলেই একটি মাত্র ইমেইল — ততদিন আর কিছু নয়।",
      microcopy: "চালু হওয়ার দিন একটি ইমেইল। স্প্যাম কখনোই নয়।",
    },
    errors: {
      invalid_email: "সঠিক ইমেইল ঠিকানা লিখুন।",
      rate_limited: "একই ঠিকানা থেকে অনেকবার চেষ্টা হয়েছে — আবার চেষ্টা করুন কাল।",
      network: "নেটওয়ার্ক সমস্যা — সংযোগ দেখে আবার চেষ্টা করুন।",
      generic: "আমাদের দিকে একটু সমস্যা হচ্ছে। একটু পরে আবার চেষ্টা করুন।",
    },
    mock: {
      captionBefore:
        "সাইনআপের সময়েই প্রতিটি প্রকাশনা পেয়ে যায় এমন একটি পাতা — আপনারটাও হবে ",
      captionAfter: " ঠিকানায়।",
    },
    why: {
      heading: "কেন পাতা",
      intro:
        "প্রতিযোগীরা মূল্য রাখে ডলারে, বাংলাকে ভাবে পরে। পাতা তৈরি হয়েছে ঠিক উল্টোটা মাথায় রেখে।",
      items: [
        {
          number: "01",
          title: "সত্যিকারের বাংলা-প্রথম",
          description:
            "বাংলা স্লাগ, দুই ভাষার ড্যাশবোর্ড, প্রতিটি সাইটে বাংলা ওয়েব ফন্ট — সব শুরু থেকেই সাথে। যে ভাষায় ভাবেন, সেই ভাষাতেই লিখুন।",
        },
        {
          number: "02",
          title: "বাংলাদেশের মাপে মূল্য",
          description:
            "ফ্রি দিয়ে শুরু — বড় হলে মাসে ৳99 কিংবা ৳249। বিলিং বিকাশ বা নগদে; আন্তর্জাতিক কার্ডের প্রয়োজন নেই।",
        },
        {
          number: "03",
          title: "ছবি থাকবে আপনারই",
          description:
            "প্রতিটি প্ল্যানে অরিজিনাল ছবি চিরকাল জমা থাকে। আপগ্রেড করলেই পুরোনো সব ছবি মুহূর্তে ফুল কোয়ালিটিতে ফিরে আসে — নতুন করে আপলোডের ঝামেলা নেই।",
        },
        {
          number: "04",
          title: "কোনো লক-ইন নেই",
          description:
            "কোর সোর্স-অ্যাভেইলেবল: দেখুন, ফর্ক করুন, মাসে ৳10 থেকে সেলফ-হোস্ট করুন। আপনার প্রকাশনা সবসময় আপনার হাতে।",
        },
      ],
    },
    pricing: {
      heading: "লঞ্চ প্রাইসিং",
      intro: "মূল্য টাকায়, বিলিং বিকাশ কিংবা নগদে। বার্ষিক বিলিংয়ে সেভ 20%।",
      plans: [
        {
          name: "Free",
          price: "৳0",
          period: "চিরকাল",
          note: "",
          features: [
            "দুটি প্রকাশনা",
            "আনলিমিটেড পোস্ট",
            "200 MB ছবি স্টোরেজ — ওয়েব-অপ্টিমাইজড ডেলিভারি",
            "পোস্ট ফিড + About + Contact + Projects",
            "“Made with Pata” ব্যাজ",
          ],
        },
        {
          name: "Basic",
          price: "৳99",
          period: "/মাস",
          note: "বার্ষিক বিলিংয়ে ৳950/বছর (≈ ৳79/মাস)",
          features: [
            "দশটি প্রকাশনা",
            "কাস্টম ডোমেইন",
            "অরিজিনাল কোয়ালিটিতে ছবি ডেলিভারি",
            "1 GB ছবি স্টোরেজ",
          ],
        },
        {
          name: "Pro",
          price: "৳249",
          period: "/মাস",
          note: "বার্ষিক বিলিংয়ে ৳2,390/বছর (≈ ৳199/মাস)",
          features: [
            "আনলিমিটেড প্রকাশনা",
            "ব্যাজ সরানোর সুবিধা",
            "5 GB ছবি স্টোরেজ + ৳50/5 GB প্যাক",
            "সব থিম",
          ],
        },
      ],
      selfHost: {
        title: "সেলফ-হোস্টিং?",
        description:
          "সোর্স-অ্যাভেইলেবল কোর চালান নিজের সার্ভারে — ডেভেলপমেন্ট ও টেস্টিং ফ্রি, প্রোডাকশনে লাগবে ৳10/মাস বা ৳100/বছরের লাইসেন্স। ওপেন-সোর্সের ঘর pata.foundation-এ।",
      },
      footnote: "লঞ্চ প্রাইসিং — রিলিজের আগে সামান্য বদলাতে পারে।",
    },
    footer: { madeIn: "বাংলাদেশে তৈরি" },
  },
  en: {
    meta: { title: "Pata — your publication, live in minutes" },
    nav: { why: "Why Pata", pricing: "Pricing" },
    language: { switchLabel: "Change language" },
    hero: {
      eyebrow: "Launching soon in Bangladesh",
      title: "Your publication, live in minutes",
      bodyBefore:
        "Pata (পাতা — “page”) is a publishing home for Bangladeshi creators. Launch a blog, portfolio, or mini news site at ",
      bodyAfter:
        " — no hosting, no domain, no setup. Bangla-first, priced in taka, paid with bKash or Nagad.",
    },
    form: {
      emailLabel: "Email address",
      submit: "Join the waitlist",
      submitting: "Joining…",
      successTitle: "You're on the list.",
      duplicateTitle: "You're already on the list.",
      successBody:
        "One email when Pata opens its doors — nothing else until then.",
      microcopy: "One email at launch. No spam — ever.",
    },
    errors: {
      invalid_email: "Please enter a valid email address.",
      rate_limited: "Too many attempts — try again tomorrow.",
      network: "Network error — check your connection and try again.",
      generic: "Something went wrong on our side. Please try again.",
    },
    mock: {
      captionBefore:
        "Every publication gets a page like this automatically at signup — yours at ",
      captionAfter: ".",
    },
    why: {
      heading: "Why Pata",
      intro:
        "Competitors price in dollars and treat Bangla as an afterthought. Pata is built the other way around.",
      items: [
        {
          number: "01",
          title: "Bangla-first, genuinely",
          description:
            "Bangla slugs, a bn/en dashboard, and Bangla web fonts ship in the box. Write for the internet in the language you think in.",
        },
        {
          number: "02",
          title: "Priced for Bangladesh",
          description:
            "Free to start — ৳99 or ৳249 a month when you grow. Pay with bKash or Nagad, no international card required.",
        },
        {
          number: "03",
          title: "Your photos stay yours",
          description:
            "Originals are kept on every plan, forever. Upgrade and every past photo returns to full quality instantly — nothing to re-upload.",
        },
        {
          number: "04",
          title: "No lock-in",
          description:
            "The core is source-available: inspect it, fork it, self-host it from ৳10/month. Your publication stays portable.",
        },
      ],
    },
    pricing: {
      heading: "Launch pricing",
      intro:
        "Prices in taka, billed through bKash or Nagad. Yearly billing saves 20%.",
      plans: [
        {
          name: "Free",
          price: "৳0",
          period: "forever",
          note: "",
          features: [
            "2 publications",
            "Unlimited posts",
            "200 MB photo storage — web-optimized delivery",
            "Posts feed + About + Contact + Projects",
            "“Made with Pata” badge",
          ],
        },
        {
          name: "Basic",
          price: "৳99",
          period: "/mo",
          note: "৳950/yr on yearly (≈ ৳79/mo)",
          features: [
            "10 publications",
            "Custom domain",
            "Original-quality photo delivery",
            "1 GB photo storage",
          ],
        },
        {
          name: "Pro",
          price: "৳249",
          period: "/mo",
          note: "৳2,390/yr on yearly (≈ ৳199/mo)",
          features: [
            "Unlimited publications",
            "Badge removal",
            "5 GB photo storage + ৳50/5 GB packs",
            "All themes",
          ],
        },
      ],
      selfHost: {
        title: "Self-hosting?",
        description:
          "Run the source-available core on your own server — development and testing are free, production needs a license at ৳10/mo or ৳100/yr. The open-source home lives at pata.foundation.",
      },
      footnote: "Launch pricing — may shift slightly before release.",
    },
    footer: { madeIn: "Made in Bangladesh" },
  },
};
