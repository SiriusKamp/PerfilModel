import sunBackground from "@/assets/sun-background.png";
import stacyPhoto from "@/assets/stacy.png";
import Image from "next/image";

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center mb-12 animate-float">
      {/* Decorative Ring with Sun Background */}
      <div className="relative mb-8">
        {/* Sun Background Image */}
        <div className="absolute inset-0 -m-36 flex items-center justify-center">
          <img 
            src={sunBackground} 
            alt="Sun rays" 
            className="w-140 h-140 object-contain"
          />
        </div>
        
        <div className="w-60 h-60 rounded-full bg-gradient-profile-ring p-1 relative z-10">
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
            
            {/* Profile Content -> agora a foto preenche 100% */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
  <img
    src={stacyPhoto}
    alt="Foto de perfil"
    className="absolute inset-0 w-full h-full object-cover rounded-full"
    style={{ aspectRatio: "1 / 1" }} // força quadrado
  />
</div>
          </div>
        </div>
      </div>

      {/* Name and Subtitle */}
      <h1 className="text-4xl font-bold mb-4 animate-float drop-shadow-lg text-gradient">STACY FELIX TERRA</h1>
      <p className="text-lg font-medium animate-float drop-shadow-md text-gradient-subtitle">
        Conecte-se comigo nas redes sociais {"<3"}
      </p>
    </div>
  );
}
