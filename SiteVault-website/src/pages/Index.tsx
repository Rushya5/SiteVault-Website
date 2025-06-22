import { Shield, Lock, Zap, BarChart3, Download, Globe, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const extensionUrl = "https://microsoftedge.microsoft.com/addons/detail/sitevault-website-passw/nadcbpoikmhandalibjdgkpcadpploek";

  const handleInstallClick = () => {
    window.open(extensionUrl, '_blank');
  };

  const handleDemoClick = () => {
    // For demo, we'll scroll to the screenshots section to show the extension in action
    const screenshotsSection = document.querySelector('[data-section="screenshots"]');
    if (screenshotsSection) {
      screenshotsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Lock,
      title: "Lock Any Website",
      description: "Secure any website with a password instantly. Perfect for shared computers or added privacy."
    },
    {
      icon: Zap,
      title: "Quick-Lock Button",
      description: "One-click locking directly from your browser toolbar. Fast and convenient security at your fingertips."
    },
    {
      icon: Shield,
      title: "Biometric Unlock",
      description: "Use fingerprint or face recognition to unlock your protected sites when supported by your device."
    },
    {
      icon: BarChart3,
      title: "Dashboard View",
      description: "See all your locked websites in one organized dashboard. Manage your protected sites easily."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a07e43d9-cc39-4c3c-afee-b5449dbcdb75.png" 
              alt="SiteVault Logo" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">SiteVault</span>
          </div>
          <Button 
            onClick={handleInstallClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Globe className="w-4 h-4 mr-2" />
            Add to Browser
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Personal
                <span className="text-emerald-400 block">Website Locker</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                SiteVault allows you to password-protect any website on your browser. 
                Secure your online activity with instant locking, password protection, 
                and optional biometric unlock.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleInstallClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4"
              >
                <Download className="w-5 h-5 mr-2" />
                Install Extension
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDemoClick}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4"
              >
                View Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                Privacy First
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-2 text-emerald-400" />
                Local Storage Only
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-8"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src="/lovable-uploads/e6b495a3-3d1c-481c-bd8d-227cb7f446c3.png" 
                alt="SiteVault Dashboard" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div 
          className="text-center mb-16"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Powerful Security Features</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to keep your browsing secure and private
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              style={{
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Screenshots Section */}
      <section data-section="screenshots" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">See SiteVault in Action</h2>
          <p className="text-xl text-slate-300">Simple, intuitive interface for maximum security</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="space-y-4"
            style={{
              transform: `translateX(${scrollY * -0.03}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              src="/lovable-uploads/e6b495a3-3d1c-481c-bd8d-227cb7f446c3.png" 
              alt="SiteVault Main Dashboard" 
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">Main Dashboard</h3>
              <p className="text-slate-400">Manage all your locked websites</p>
            </div>
          </div>
          
          <div 
            className="space-y-4"
            style={{
              transform: `translateX(${scrollY * 0.03}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img 
              src="/lovable-uploads/5a1394ba-e3b9-443b-919b-87a580903bd8.png" 
              alt="SiteVault Settings" 
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">Security Settings</h3>
              <p className="text-slate-400">Configure your protection preferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="container mx-auto px-4 py-16">
        <div 
          className="bg-slate-800/30 rounded-3xl p-12 text-center"
          style={{
            transform: `scale(${1 + scrollY * 0.00005})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Privacy Guaranteed</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We do not collect, track, or share any personal information. All data is stored 
            locally on your device. Your browsing history, locked websites, and passwords 
            stay entirely private.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">100%</div>
              <div className="text-slate-300">Local Storage</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">0</div>
              <div className="text-slate-300">Data Collection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">∞</div>
              <div className="text-slate-300">Privacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <img 
            src="/lovable-uploads/56ecc827-14ba-4d5a-bbd6-fa0124eca830.png" 
            alt="SiteVault Extension Preview" 
            className="w-full max-w-md mx-auto mb-8 rounded-xl shadow-2xl"
          />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Browsing?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust SiteVault to keep their online activity private and secure.
          </p>
          <Button 
            size="lg" 
            onClick={handleInstallClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-12 py-6"
          >
            <Globe className="w-6 h-6 mr-3" />
            Install SiteVault Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a07e43d9-cc39-4c3c-afee-b5449dbcdb75.png" 
              alt="SiteVault Logo" 
              className="w-8 h-8"
            />
            <span className="text-slate-300">SiteVault</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://github.com/Rushya5/sitevault-privacy-policy/issues', '_blank')}
              className="text-slate-400 hover:text-slate-200"
            >
              <Bug className="w-4 h-4 mr-2" />
              Report Bug
            </Button>
            <div className="text-slate-400 text-sm">
              © 2025 SiteVault. Privacy First.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
