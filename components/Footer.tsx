import { Disc3 } from "lucide-react";
import Link from "next/link";
import { footer } from "@/lib/content";
import { InstagramIcon, TikTokIcon, TwitterIcon } from "./icons/SocialIcons";

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: TikTokIcon, label: "TikTok", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="#" className="flex items-center gap-2 text-xl font-bold text-white">
              <Disc3 className="h-6 w-6 text-violet-500" />
              dizko
            </Link>
            <p className="mt-3 text-sm text-white/50">{footer.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-lg p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-violet-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-white/5 pt-8 text-center text-sm text-white/30 md:text-left">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
