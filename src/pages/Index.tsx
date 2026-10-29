import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Asterisk, Layers3, Workflow, PenTool, Code2, Bot, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import allstarLogo from "@/assets/client-allstar.png";
import lifecareLogo from "@/assets/client-lifecare.png";
import niceLogo from "@/assets/client-nice.webp";

const clientWork = [
  { name: "All Star Sparkling Clean", category: "Professional cleaning", description: "Cleaning services for homes, offices and commercial spaces in Birmingham.", url: "https://www.allstarsparkling.co.uk/", displayUrl: "allstarsparkling.co.uk", logo: allstarLogo },
  { name: "Lifecare4u", category: "Home care", description: "Personalised home care focused on dignity, independence and wellbeing.", url: "https://www.lifecare4u.org/", displayUrl: "lifecare4u.org", logo: lifecareLogo },
  { name: "It’s Nice to Be Here", category: "Community charity", description: "Practical support and community initiatives grounded in kindness and connection.", url: "https://www.itsnicetobehere.org/", displayUrl: "itsnicetobehere.org", logo: niceLogo },
];

const services = [
  { icon: Bot, name: "Agentic AI development & business process automation", description: "Design and develop AI agents and automated workflows that help teams streamline business processes and get more done." },
  { icon: Layers3, name: "Data & analytics", description: "Turn complex data into a clearer picture, with pipelines, warehouses and dashboards built for better decisions." },
  { icon: Workflow, name: "DevOps & cloud", description: "Build a more reliable path from idea to launch with cloud infrastructure, automation and CI/CD." },
  { icon: Code2, name: "Software & web", description: "From the first prototype to a growing platform, we build digital experiences made to work beautifully." },
  { icon: PenTool, name: "Brand & design", description: "Give good ideas a distinctive identity through thoughtful branding, interfaces and visual design." },
];

const Index = () => (
  <div className="site-shell">
    <Navbar />
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="status-dot" /> An independent technology group</p>
          <h1>Good ideas.<br /><span>Built to go</span><br />further<span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <p>We bring ambitious ideas to life through thoughtful products, intelligent technology and design that makes a difference.</p>
            <a className="round-link" href="#products" aria-label="Explore KaratuAI"><ArrowDown size={24} /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-label">The space between<br />idea & impact</div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-star">✳</div>
          <div className="art-caption"><span>XL / GROUP</span><span>Ideas in motion</span></div>
        </div>
      </section>

      <section className="intro-band" id="about">
        <p className="section-label">A little about us</p>
        <div><h2>Curiosity is where<br />everything starts<span>.</span></h2><p>Xlab Group is a home for ideas that solve real problems. We bring together technology, creativity and a practical mindset to make useful things for developers, businesses, teachers and learners.</p></div>
        <Asterisk className="intro-icon" strokeWidth={1} />
      </section>

      <section className="products-section section-wrap" id="products">
        <div className="section-heading"><div><p className="section-label">Our product</p><h2>Meet<br />KaratuAI<span>.</span></h2></div><p>KaratuAI is our learning platform, built by Xlab for organisations, educators and learners.</p></div>
        <div className="product-grid">
          {products.map((product) => <Link className={`product-card product-${product.slug}`} key={product.slug} to={`/products/${product.slug}`}>
            <div className="product-art"><div className="product-logo"><img src={product.logo} alt="" /></div><span className="product-arrow"><ArrowUpRight size={22} /></span><span className="product-art-name">{product.slug === "karatuai-teachers" ? "Teachers" : product.name}</span></div>
            <div className="product-meta"><div><p>{product.tagline}</p><h3>{product.name}</h3></div><ArrowUpRight size={21} /></div>
            <p className="product-description">{product.description}</p>
          </Link>)}
        </div>
      </section>

      <section className="client-section section-wrap" id="work">
        <div className="section-heading"><div><p className="section-label">Client projects</p><h2>Made together<span>.</span></h2></div><p>A few of the organisations we’ve worked with, each doing meaningful work in its own way.</p></div>
        <div className="client-grid">{clientWork.map((client, index) => <a className={`client-card client-${index}`} key={client.name} href={client.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${client.name} website (opens in a new tab)`}>
          <div className="client-art"><img src={client.logo} alt="" /><span><ArrowUpRight size={21}/></span></div>
          <div className="client-category">{client.category}</div><h3>{client.name}</h3><p>{client.description}</p><div className="client-url">{client.displayUrl}<ArrowUpRight size={16}/></div>
        </a>)}</div>
      </section>

      <section className="services-section" id="services"><div className="section-wrap services-inner">
        <div className="section-heading light"><div><p className="section-label">What we do</p><h2>Big picture thinking.<br />Hands-on making<span>.</span></h2></div><p>From the first spark to the finishing touches, we help bring the right pieces together.</p></div>
        <div className="service-list">{services.map(({icon: Icon, name, description}) => <div className="service-row" key={name}><Icon size={26} strokeWidth={1.4}/><h3>{name}</h3><p>{description}</p></div>)}</div>
      </div></section>

      <section className="contact-section" id="contact"><div className="contact-copy"><p className="section-label">Get in touch</p><h2>Have an idea<span>?</span><br />Let's talk<span>.</span></h2><p>Tell us what you’re working on. Start a conversation with the Xlab team on WhatsApp.</p><a className="pill-button" href="https://wa.me/2348186202101" target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Chat on WhatsApp <ArrowUpRight size={18}/></a><p className="contact-number">+234 818 620 2101</p></div><div className="contact-art" aria-hidden="true">✳</div></section>
    </main>
    <Footer />
  </div>
);
export default Index;
