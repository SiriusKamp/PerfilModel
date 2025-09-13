import sunMoonBg from '@/assets/sun-moon-background.jpg';
import StacyImg from '@/assets/Stacy.png';

export const PhotoPlaceholder = () => {
  return (
    <div className="relative">
      {/* Background sun/moon image */}
      <div
        className="absolute inset-0 w-64 h-64 mx-auto rounded-full opacity-25 z-0"
        style={{
          backgroundImage: `url(${sunMoonBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) scale(1.2)',
        }}
      />

      {/* Profile photo container */}
      <div className="photo-container w-48 h-48 mx-auto flex items-center justify-center animate-pulse-glow relative z-10">
        <div className="text-center">
          <img
            src={StacyImg}
            alt="Sua Foto"
            className="mx-auto mb-2 w-32 h-32 object-cover rounded-full border-2 border-white/50 shadow-lg"
          />
          <p className="text-white/70 text-sm font-medium">Sua Foto Aqui</p>
          <p className="text-white/50 text-xs mt-1">Clique para adicionar</p>
        </div>
      </div>
    </div>
  );
};
