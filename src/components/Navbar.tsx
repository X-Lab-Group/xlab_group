import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import xlabsLogo from "@/assets/xlabs-logo.png";

const links = [{ name: "Products", href: "/#products" }, { name: "Client work", href: "/#work" }, { name: "Services", href: "/#services" }, { name: "About", href: "/#about" }];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <header className="site-header"><div className="nav-inner"><Link className="brand" to="/" onClick={() => setIsOpen(false)}><img src={xlabsLogo} alt="" /><span>Xlab Group<span className="brand-dot">.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.name} to={link.href}>{link.name}</Link>)}</nav><Link className="nav-cta" to="/#products">Explore products <ArrowUpRight size={16}/></Link><button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>{isOpen ? <X/> : <Menu/>}</button></div>{isOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[...links, {name:"Contact", href:"/#contact"}].map(link => <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>{link.name}<ArrowUpRight size={18}/></Link>)}</nav>}</header>;
};
export default Navbar;
