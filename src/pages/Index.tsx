import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Asterisk, Layers3, Workflow, PenTool, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const services = [
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
            <a className="round-link" href="#products" aria-label="Explore our products"><ArrowDown size={24} /></a>
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
        <div className="section-heading"><div><p className="section-label">Made by Xlab</p><h2>Ideas out<br />in the world<span>.</span></h2></div><p>Meet the products we're building to make everyday work and learning a little better.</p></div>
        <div className="product-grid">
          {products.map((product, index) => <Link className={`product-card product-${index}`} key={product.slug} to={`/products/${product.slug}`}>
            <div className="product-art"><div className="product-logo"><img src={product.logo} alt="" /></div><span className="product-arrow"><ArrowUpRight size={22} /></span><span className="product-art-name">{index === 3 ? "Teachers" : product.name}</span></div>
            <div className="product-meta"><div><p>{product.tagline}</p><h3>{product.name}</h3></div><ArrowUpRight size={21} /></div>
            <p className="product-description">{product.description}</p>
          </Link>)}
        </div>
      </section>

      <section className="services-section" id="services"><div className="section-wrap services-inner">
        <div className="section-heading light"><div><p className="section-label">What we do</p><h2>Big picture thinking.<br />Hands-on making<span>.</span></h2></div><p>From the first spark to the finishing touches, we help bring the right pieces together.</p></div>
        <div className="service-list">{services.map(({icon: Icon, name, description}) => <div className="service-row" key={name}><Icon size={26} strokeWidth={1.4}/><h3>{name}</h3><p>{description}</p></div>)}</div>
      </div></section>

      <section className="contact-section" id="contact"><div className="contact-copy"><p className="section-label">Keep exploring</p><h2>Curious what's<br />next<span>?</span></h2><p>Explore our products and see what we're building for developers, businesses, teachers and learners.</p><a className="pill-button" href="#products">Explore our products <ArrowUpRight size={18}/></a></div><div className="contact-art" aria-hidden="true">✳</div></section>
    </main>
    <Footer />
  </div>
);
export default Index;
