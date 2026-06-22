"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

interface WhatsAppIconProps {
  phoneNumber?: string;
  message?: string;
  size?: 'small' | 'medium' | 'large';
  showTooltip?: boolean;
  className?: string;
  position?: 'fixed' | 'absolute';
  offsetX?: string; // e.g., "24px" or "1.5rem"
  offsetY?: string; // e.g., "24px" or "1.5rem"
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  phoneNumber = '+923233381938',
  message = 'Hello, I would like to connect with you!',
  size = 'medium',
  showTooltip = true,
  className = '',
  position = 'fixed',
  offsetX = '24px', // Default browser spacing from right
  offsetY = '24px', // Default browser spacing from bottom
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Format phone number (remove any non-numeric characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  // Size mappings
  const sizeMap = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20',
  };

  const iconSizeMap = {
    small: 24,
    medium: 32,
    large: 40,
  };

  return (
    <div 
      className={`${position} z-50 ${className}`}
      style={{ bottom: offsetY, right: offsetX }} // Inline styles handle dynamic offsets perfectly
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${sizeMap[size]}
          bg-gradient-to-br from-green-400 to-green-600
          rounded-full 
          flex 
          items-center 
          justify-center
          text-white
          hover:from-green-500
          hover:to-green-700
          transition-all
          duration-300
          transform
          hover:scale-110
          hover:rotate-6
          shadow-2xl
          hover:shadow-green-500/50
          group
          relative
          cursor-pointer
        `}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp 
          size={iconSizeMap[size]} 
          className="transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />

      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div className={`
          absolute 
          bottom-full 
          right-0
          mb-3
          px-4
          py-2
          bg-gray-900/95
          backdrop-blur-sm
          text-white
          text-sm
          rounded-xl
          whitespace-nowrap
          transition-all
          duration-300
          pointer-events-none
          shadow-2xl
          border border-white/10
          transform
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          <div className="flex items-center gap-2">
            <span className="text-green-400">💬</span>
            Chat with us on WhatsApp
          </div>
          <span className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900/95" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppIcon;