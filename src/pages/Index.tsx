import { ProfileSection } from "@/components/ProfileSection";
import { SocialButton } from "@/components/SocialButton";
import { MessageCircle, Instagram, Linkedin, Send, Youtube, Music } from "lucide-react";

const Index = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp Business",
      href: "https://wa.me/5511999999999",
      variant: "whatsapp" as const
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/seuusuario",
      variant: "instagram" as const
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/seuusuario",
      variant: "linkedin" as const
    },
    {
      icon: Send,
      name: "Telegram",
      href: "https://t.me/seuusuario",
      variant: "telegram" as const
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "https://youtube.com/@seucanal",
      variant: "youtube" as const
    },
    {
      icon: Music,
      name: "TikTok",
      href: "https://tiktok.com/@seuusuario",
      variant: "tiktok" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <ProfileSection />
        
        <div className="grid grid-cols-2 gap-4 animate-float">
          {socialLinks.map((link, index) => (
            <SocialButton
              key={index}
              icon={link.icon}
              name={link.name}
              href={link.href}
              variant={link.variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;