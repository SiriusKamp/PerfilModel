import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  className: string;
}

export const SocialButton = ({ icon: Icon, label, href, className }: SocialButtonProps) => {
  const delay = Math.random() * 4; // Random delay between 0-4 seconds
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-btn ${className} group flex flex-col items-center justify-center gap-2 min-h-[100px] floating-element`}
      aria-label={label}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon size={28} className="transition-transform group-hover:scale-110" />
      <span className="text-sm font-medium text-center leading-tight">{label}</span>
    </a>
  );
};