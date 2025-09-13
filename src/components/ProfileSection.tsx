import { User } from "lucide-react";
import sunBackground from "@/assets/sun-background.png";

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center mb-12 animate-float">
      {/* Decorative Ring with Sun Background */}
      <div className="relative mb-8">
        {/* Sun Background Image */}
        <div className="absolute inset-0 -m-12 flex items-center justify-center">
          <img 
            src={sunBackground} 
            alt="Sun rays" 
            className="w-80 h-80 object-contain"
          />
        </div>
        
        <div className="w-48 h-48 rounded-full bg-gradient-profile-ring p-1 relative z-10">
          <div className="w-full h-full rounded-full bg-profile-background flex items-center justify-center relative overflow-hidden">
            {/* Decorative elements around the circle */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-profile-secondary rounded-full opacity-60"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 30}deg) translateY(-90px) translateX(-50%)`,
                    transformOrigin: "50% 90px"
                  }}
                />
              ))}
            </div>
            
            {/* Profile Content */}
            <div className="flex flex-col items-center justify-center text-center z-10">
              <User size={48} className="text-profile-text mb-2" />
              <p className="text-profile-text text-sm font-medium">Sua Foto Aqui</p>
              <p className="text-profile-secondary text-xs mt-1">Clique para adicionar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Name and Subtitle */}
      <h1 className="text-4xl font-bold mb-4 animate-float drop-shadow-lg text-gradient">Seu Nome Aqui</h1>
      <p className="text-lg font-medium animate-float drop-shadow-md text-gradient-subtitle">Conecte-se comigo nas redes sociais</p>
    </div>
  );
}