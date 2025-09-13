import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  name: string;
  href: string;
  variant: "whatsapp" | "instagram" | "linkedin" | "telegram" | "youtube" | "tiktok";
}

const variantStyles = {
  whatsapp: "bg-social-whatsapp hover:bg-social-whatsapp/90 text-white hover:shadow-2xl hover:shadow-social-whatsapp/30",
  instagram: "bg-gradient-instagram hover:opacity-90 text-white hover:shadow-2xl hover:shadow-pink-500/30",
  linkedin: "bg-social-linkedin hover:bg-social-linkedin/90 text-white hover:shadow-2xl hover:shadow-social-linkedin/30",
  telegram: "bg-social-telegram hover:bg-social-telegram/90 text-white hover:shadow-2xl hover:shadow-social-telegram/30",
  youtube: "bg-social-youtube hover:bg-social-youtube/90 text-white hover:shadow-2xl hover:shadow-red-500/30",
  tiktok: "bg-gradient-tiktok hover:opacity-90 text-white hover:shadow-2xl hover:shadow-purple-500/30"
};

export function SocialButton({ icon: Icon, name, href, variant }: SocialButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-16 w-full rounded-2xl font-medium text-lg shadow-lg transition-all duration-500 hover:scale-110 border-0 hover:animate-pulse-glow transform-gpu",
        variantStyles[variant]
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
        <Icon size={24} />
        <span>{name}</span>
      </a>
    </Button>
  );
}