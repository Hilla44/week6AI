import { Sprout } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Smart AgriTech System
            </h1>
            <p className="text-sm text-muted-foreground">AI-Powered Agriculture Monitoring</p>
          </div>
        </div>
      </div>
    </header>
  );
};
