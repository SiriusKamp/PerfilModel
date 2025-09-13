import { SocialButton } from '@/components/SocialButton';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { MessageCircle, Instagram, Linkedin, Send, Youtube, Music } from 'lucide-react';

const Index = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp Business",
      href: "https://wa.me/",
      className: "whatsapp-btn"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/",
      className: "instagram-btn"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/",
      className: "linkedin-btn"
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/",
      className: "telegram-btn"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@",
      className: "youtube-btn"
    },
    {
      icon: Music,
      label: "TikTok",
      href: "https://tiktok.com/@",
      className: "tiktok-btn"
    }
  ];

  return (
    <div className="min-h-screen sun-moon-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">      
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Área da foto */}
        <div className="text-center floating-element">
          <PhotoPlaceholder />
          <h1 className="mt-6 text-3xl font-bold text-gradient drop-shadow-lg">
            STACY FELIX TERRA
          </h1>
          <p className="mt-2 text-white/90 text-lg floating-delayed">
            Conecte-se comigo nas redes sociais abaixo!
          </p>
        </div>

        {/* Grid de redes sociais */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {socialLinks.map((social, index) => (
            <SocialButton
              key={social.label}
              icon={social.icon}
              label={social.label}
              href={social.href}
              className={social.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
