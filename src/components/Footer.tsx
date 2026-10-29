import { Link } from "react-router-dom";
import xlabsLogo from "@/assets/xlabs-logo.png";
const Footer = () => <footer className="site-footer"><div className="footer-top"><Link className="brand" to="/"><img src={xlabsLogo} alt="" /><span>Xlab Group<span className="brand-dot">.</span></span></Link><p>Making good ideas go further.</p><div className="footer-links"><Link to="/#products">Our product</Link><Link to="/#work">Client projects</Link><Link to="/#services">Services</Link><Link to="/#about">About</Link><Link to="/#contact">Contact</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Xlab Group</span><span>Built with curiosity.</span></div></footer>;
export default Footer;
