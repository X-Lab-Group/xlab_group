import xlabsLogo from "@/assets/xlabs-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={xlabsLogo} alt="Xlab Group" className="h-6 w-auto" />
            <span className="text-lg font-bold">Xlab Group</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Xlab Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
