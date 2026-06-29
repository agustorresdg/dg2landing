import { useEffect, useState } from "react";

const asset = (file: string) => `/assets/img/${file}`;

const productImages = {
  logo: asset("canon-logo-red.png"),
  hero: asset("product-print-new.png"),
  angle: asset("product-angle-new.png"),
  front: asset("product-print-alt-new.png"),
  black: asset("product-colors-new.png"),
  scene: asset("product-scene-new.png"),
  detail: asset("product-angle-new.png"),
};

const stats = [
  { value: "41s", label: "por impresión postal" },
  { value: "300", label: "dpi de precisión" },
  { value: "100", label: "años de durabilidad" },
];

const benefits = [
  {
    icon: "wifi",
    title: "Conexión directa",
    text: "Imprimí desde el celular, cámara o tarjeta SD con una experiencia rápida y sin fricción.",
  },
  {
    icon: "water_drop",
    title: "Fotos protegidas",
    text: "El acabado final resiste salpicaduras, huellas y desgaste para conservar el color.",
  },
  {
    icon: "auto_awesome",
    title: "Listas para regalar",
    text: "Postales, collages, stickers y mini formatos con un acabado compacto y premium.",
  },
];

const steps = [
  ["01", "Elegí", "Seleccioná fotos desde la app SELPHY Photo Layout."],
  ["02", "Editá", "Sumá bordes, QR, filtros o collages en segundos."],
  ["03", "Imprimí", "Obtené una copia seca, brillante y lista para compartir."],
];

export function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-void text-ice">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <SignalBar />
        <ProblemSolution />
        <ProductStage />
        <Workflow />
        <Gallery />
        <Specs />
        <FinalCta />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header className={`site-header ${scrolled ? "site-header--solid" : ""}`}>
      <a className="brand" href="#top" aria-label="SELPHY CP1500">
        <img src={productImages.logo} alt="Canon" />
        <strong>SELPHY CP1500</strong>
      </a>
      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#calidad">Calidad</a>
        <a href="#flujo">Flujo</a>
        <a href="#formatos">Formatos</a>
        <a href="#specs">Specs</a>
      </nav>
      <a className="button button--small" href="#comprar">
        Comprar
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Impresión fotográfica portátil</p>
        <h1>Recuerdos físicos con estética de laboratorio.</h1>
        <p className="lead">
          Canon SELPHY CP1500 convierte tus fotos del celular en impresiones
          resistentes, nítidas y listas para regalar en menos de un minuto.
        </p>
        <div className="hero-actions">
          <a className="button" href="#comprar">
            Comprar ahora
          </a>
          <a className="button button--ghost" href="#calidad">
            Ver beneficios
          </a>
        </div>
        <div className="stat-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-label="Canon SELPHY CP1500 imprimiendo una foto">
        <div className="tech-orbit tech-orbit--one" />
        <div className="tech-orbit tech-orbit--two" />
        <img className="hero-printer" src={productImages.hero} alt="Impresora Canon SELPHY CP1500" />
        <div className="hud hud--top">
          <span className="material-symbols-outlined">speed</span>
          <div>
            <small>Salida</small>
            <strong>41 segundos</strong>
          </div>
        </div>
        <div className="hud hud--bottom">
          <span className="pulse" />
          WiFi Direct activo
        </div>
      </div>
    </section>
  );
}

function SignalBar() {
  return (
    <section className="signal-bar" aria-label="Tecnologías destacadas">
      {["Sublimación térmica", "App SELPHY Photo Layout", "Acabado resistente", "Formato postal", "Diseño compacto"].map(
        (item) => (
          <span key={item}>{item}</span>
        ),
      )}
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="section-shell split" id="calidad">
      <div>
        <p className="eyebrow">Del archivo al objeto</p>
        <h2>Miles de fotos viven en una nube. Las mejores merecen estar en tus manos.</h2>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="glass-card" key={benefit.title}>
            <span className="material-symbols-outlined">{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductStage() {
  return (
    <section className="product-stage section-shell">
      <div className="stage-copy">
        <p className="eyebrow">Diseño compacto, presencia premium</p>
        <h2>Una impresora chica con un sistema de color serio.</h2>
        <p>
          La CP1500 usa un proceso de sublimación que deposita color por capas y
          aplica una protección final. El resultado: tonos suaves, pieles más
          naturales y copias que sobreviven al uso real.
        </p>
        <ul className="check-list">
          <li>Secado instantáneo al salir de la impresora.</li>
          <li>Impresión sin bordes en tamaño postal 10 x 15 cm.</li>
          <li>Compatibilidad con papeles y stickers SELPHY.</li>
        </ul>
      </div>
      <div className="floating-product">
        <img src={productImages.angle} alt="Vista angular de la Canon SELPHY CP1500" />
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="workflow" id="flujo">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Tres pasos</p>
          <h2>Del carrete a la mesa, sin rituales complicados.</h2>
        </div>
        <div className="step-grid">
          {steps.map(([number, title, text]) => (
            <article className="step-card" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-shell gallery" id="formatos">
      <div className="gallery-main">
        <img src={productImages.scene} alt="SELPHY CP1500 imprimiendo fotos y stickers" />
        <div>
          <p className="eyebrow">Formatos creativos</p>
          <h2>Fotos, stickers, collages y recuerdos listos para entregar.</h2>
        </div>
      </div>
      <div className="gallery-side">
        <article>
          <img src={productImages.black} alt="Canon SELPHY CP1500 en tres colores" />
          <h3>Tres acabados</h3>
          <p>Negro, blanco y rosa con una presencia sobria para escritorio, eventos y setups creativos.</p>
        </article>
        <article>
          <img src={productImages.front} alt="Vista frontal de Canon SELPHY CP1500" />
          <h3>Interfaz simple</h3>
          <p>Pantalla inclinable y controles directos para imprimir rápido.</p>
        </article>
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section className="specs section-shell" id="specs">
      <div>
        <p className="eyebrow">Ficha rápida</p>
        <h2>Todo lo importante, a golpe de vista.</h2>
      </div>
      <div className="spec-grid">
        <Spec label="Tecnología" value="Sublimación de tinta" />
        <Spec label="Resolución" value="300 x 300 dpi" />
        <Spec label="Conectividad" value="WiFi, USB-C, SD" />
        <Spec label="Tiempo" value="Aprox. 41 s" />
        <Spec label="Pantalla" value="LCD 3.5 pulgadas" />
        <Spec label="Formatos" value="Postal, tarjeta, stickers" />
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="spec-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="comprar">
      <div className="section-shell final-cta__inner">
        <div>
          <p className="eyebrow">Canon SELPHY CP1500</p>
          <h2>Imprimí hoy lo que mañana vas a querer volver a tocar.</h2>
          <p>
            Una landing reconstruida para vender una experiencia: rápida,
            elegante, portable y profundamente tangible.
          </p>
        </div>
        <a className="button" href="https://www.canon.com/" target="_blank" rel="noreferrer">
          Ir a Canon
        </a>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="section-shell support-section" id="faq">
      <div className="faq-panel">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2>Lo que importa antes de imprimir.</h2>
        <details open>
          <summary>¿Necesito una computadora para usarla?</summary>
          <p>No. Podés imprimir desde el celular con la app SELPHY Photo Layout, además de usar USB-C o tarjeta SD.</p>
        </details>
        <details>
          <summary>¿Las fotos salen secas?</summary>
          <p>Sí. La copia sale lista para tocar, compartir o guardar gracias al proceso de sublimación y capa protectora.</p>
        </details>
        <details>
          <summary>¿Sirve para eventos?</summary>
          <p>Sí. Es compacta, rápida y perfecta para recuerdos físicos en cumpleaños, bodas, viajes o reuniones.</p>
        </details>
        <details>
          <summary>¿Qué formatos puedo imprimir?</summary>
          <p>Fotos tamaño postal, tarjetas, mini stickers y composiciones creativas según el papel compatible.</p>
        </details>
      </div>
      <form className="newsletter-card">
        <p className="eyebrow">Newsletter</p>
        <h2>Ideas de impresión, lanzamientos y ofertas.</h2>
        <label>
          Nombre
          <input type="text" name="name" placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="tu@email.com" />
        </label>
        <button className="button" type="submit">
          Suscribirme
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-inner">
        <strong>SELPHY CP1500</strong>
        <span>Landing premium reconstruida con assets locales.</span>
      </div>
    </footer>
  );
}
