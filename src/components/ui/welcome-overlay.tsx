"use client";

interface WelcomeOverlayProps {
  onEnter: () => void;
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        onClick={onEnter}
        className="px-8 py-4 rounded-lg bg-primary text-primary-foreground text-2xl font-bold"
      >
        Click to Enter
      </button>
    </div>
  );
};

export default WelcomeOverlay;