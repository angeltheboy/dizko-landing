export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Early Access", href: "#early-access" },
] as const;

export const hero = {
  headline: "Your music, organized. Your team, in sync.",
  subheadline:
    "Dizko is the creative hub for musicians — AI-powered file management and collaboration built for how artists actually work.",
  primaryCta: "Get Early Access",
  secondaryCta: "See How It Works",
};

export const problem = {
  headline: "Music is messy. Your tools shouldn't be.",
  paragraph:
    "A producer finishes an album with 8 songs and 700+ files. Different takes, revisions, exports — scattered across folders, hard drives, and DMs. Dizko fixes that.",
  painPoints: [
    {
      title: "Hundreds of unnamed files per project",
      icon: "folder" as const,
    },
    {
      title: "Version confusion between collaborators",
      icon: "refresh" as const,
    },
    {
      title: "Hours lost on file management, not music",
      icon: "clock" as const,
    },
  ],
};

export const features = {
  headline: "AI that does the boring stuff so you can do the art.",
  subheadline:
    "Dizko handles organization, versioning, and collaboration — automatically.",
  items: [
    {
      title: "Smart File Organization",
      description:
        "AI auto-names and sorts your files, tracks, and revisions",
      icon: "music" as const,
    },
    {
      title: "Cloud Storage Built for DAWs",
      description:
        "Drop a Dizko folder into your project. Uploads happen automatically.",
      icon: "cloud" as const,
    },
    {
      title: "Collaborative Listening",
      description:
        "Mix and match takes in real time. Hear the song with any combination of stems.",
      icon: "headphones" as const,
    },
    {
      title: "Collaborator Notifications",
      description:
        '"Christian 🎸 just uploaded a new guitar take for Track 2." Instant push notification.',
      icon: "bell" as const,
    },
    {
      title: "Song Analysis",
      description:
        "Auto-detects tempo and key signature on every upload.",
      icon: "audio" as const,
    },
    {
      title: "Mobile App",
      description:
        "Manage your projects, review new takes, and share updates from anywhere.",
      icon: "smartphone" as const,
    },
  ],
};

export const howItWorks = {
  headline: "From session to sync in seconds.",
  steps: [
    {
      title: "Upload",
      description:
        "Add your DIZKO folder to your DAW or desktop. Files sync automatically.",
      icon: "upload" as const,
    },
    {
      title: "Organize",
      description:
        "AI names your files, builds your folder structure, and tracks every revision.",
      icon: "sparkles" as const,
    },
    {
      title: "Collaborate",
      description:
        "Invite your team. They get notified on updates and can listen to any version instantly.",
      icon: "users" as const,
    },
  ],
};

export const quote = {
  text: "We wanted AI to do our laundry so we could make music — not for AI to make music so we could do laundry.",
  attribution: "— The Dizko Team",
};

export const testimonials = {
  headline: "Built by musicians, for musicians.",
  subheadline:
    "20 years of combined experience in production, songwriting, and engineering. We're Dizko's first super-users.",
  items: [
    {
      name: "Marcus Chen",
      role: "Producer",
      quote:
        "Finally, a tool that understands how messy a real session gets. Dizko turned our chaos into something we could actually hand off to mix engineers.",
      initials: "MC",
    },
    {
      name: "Sofia Reyes",
      role: "Vocalist",
      quote:
        "I used to lose takes in group chats. Now I get a ping when someone drops a new vocal — and I can A/B it against the last version in seconds.",
      initials: "SR",
    },
    {
      name: "Jake Morrison",
      role: "Guitarist",
      quote:
        "The stem listening alone is worth it. My band hears every combination without me exporting twenty versions from Logic.",
      initials: "JM",
    },
  ],
};

export const earlyAccess = {
  headline: "Be the first to use Dizko.",
  subheadline:
    "We're onboarding a founding group of artists. Get early access and help shape the platform.",
  button: "Request Access",
  note: "No credit card. No spam. Just music.",
};

export const footer = {
  tagline: "dizko.ai — the creative hub for musicians",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  copyright: "© 2025 Dizko. All rights reserved.",
};
