import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({ className, showText = true, textClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className="relative">
        <img
          src="https://cdn.poehali.dev/files/70826b06-4cfd-44a8-b724-b6a86bbb20b4.jpeg"
          alt="Souqly Logo"
          className="w-10 h-12 object-contain"
        />
      </div>
      {showText && (
        <div className={cn("flex flex-col", textClassName)}>
          <span className="text-xl font-playfair font-bold text-foreground leading-none">
            Souqly
          </span>
          <span className="text-sm text-muted-foreground font-arabic leading-none">
            سوقلي
          </span>
        </div>
      )}
    </div>
  );
}