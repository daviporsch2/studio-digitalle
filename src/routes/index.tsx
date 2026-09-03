import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import dpLogo from "../assets/dp-logo.png";
import landingPageImg from "../assets/landing-page.jpg";
import websiteImg from "../assets/website.jpg";
import videoShootImg from "../assets/video-shoot.jpg";
import portfolioWatchImg from "../assets/portfolio-watch.jpg";
import portfolioRealestateImg from "../assets/portfolio-realestate.jpg";
import portfolioFintechImg from "../assets/portfolio-fintech.jpg";
import portfolioRestauranteImg from "../assets/portfolio-restaurante.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DP — Sua Presença Digital" },
      {
        name: "description",
        content:
          "DP — Sua Presença Digital: landing pages, websites, vídeos e imagens para empresas que querem vender mais.",
      },
      { property: "og:title", content: "DP — Sua Presença Digital" },
      {
        property: "og:description",
        content:
          "Landing pages, websites, vídeos e imagens para empresas que querem vender mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <PortfolioSection />
      <ResultsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

// Gera muitas partículas douradas espalhadas por toda a seção
function Particles({
  count = 60,
  className = "",
  variant = "light",
}: {
  count?: number;
  className?: string;
  variant?: "light" | "dark";
}) {
  const particles = Array.from({ length: count }, (_, i) => {
    const seed = (i * 137.508) % 100; // ângulo dourado: distribuição uniforme
    const seed2 = (i * 61.803) % 100;
    return {
      left: `${seed}%`,
      size: 2 + ((i * 7) % 5),
      dur: 5 + ((i * 13) % 8),
      delay: (seed2 / 100) * 10,
      opacity: 0.35 + ((i * 29) % 60) / 100,
    };
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-particle absolute bottom-[-4%] rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background:
              variant === "dark"
                ? i % 3 === 0
                  ? "#0d7a5f"
                  : "#c9a84c"
                : i % 3 === 0
                  ? "#9fe8cd"
                  : "#ffe9a8",
            boxShadow:
              variant === "dark"
                ? "0 0 8px 1px rgba(201,168,76,.45)"
                : i % 3 === 0
                  ? "0 0 10px 2px rgba(159,232,205,.6)"
                  : "0 0 12px 2px rgba(255,220,140,.75)",
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#010f0c" }}>
      <div
        className="pointer-events-none absolute inset-0 animate-hero-bg animate-hue-flow"
        style={{
          background:
            "radial-gradient(140% 100% at 50% -20%, #0a5c46 0%, #04382e 35%, #011a14 70%, #010f0c 100%)",
        }}
      />
      <Particles count={90} />
      {/* anel de luz girando atrás do título */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[720px] w-[720px] animate-spin-slower rounded-full opacity-25 blur-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(255,220,140,.55) 12%, transparent 26%, transparent 55%, rgba(23,180,137,.6) 70%, transparent 85%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* aurora dourada em movimento */}
      <div
        className="pointer-events-none absolute -inset-[20%] animate-aurora opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(38% 32% at 22% 30%, rgba(201,168,76,.35) 0%, transparent 70%), radial-gradient(34% 30% at 78% 20%, rgba(20,163,122,.45) 0%, transparent 70%)",
        }}
      />
      {/* halo pulsante atrás do título */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full blur-[110px]"
        style={{ background: "rgba(232,213,163,.22)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 79px, rgba(201,168,76,.4) 79px 80px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent"
        style={{ transform: "translateX(-50%)" }}
      />
      {/* feixe de luz descendo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 overflow-hidden">
        <div className="animate-line-sweep h-1/3 w-full bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-forest/95 animate-curtain-left" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-forest/95 animate-curtain-right" />


      <div className="relative mx-auto max-w-[1400px] px-6 py-5">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 animate-logo-in">
            <img
              src={dpLogo}
              alt="Logo DP — Sua Presença Digital"
              width={1024}
              height={1024}
              className="h-10 w-10 object-contain"
            />
            <span className="leading-tight">
              <span className="font-display block text-lg font-semibold tracking-tight text-cream">
                DP
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-gold">
                Sua presença digital
              </span>
            </span>
          </a>
          <span className="hidden text-[11px] uppercase tracking-[0.28em] text-cream/50 sm:block">
            Marketing Digital · 2025
          </span>
          <a
            href="https://wa.me/5567996304930"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-gold/40 px-5 py-2 text-sm font-medium text-cream transition-colors hover:border-gold hover:bg-gold hover:text-forest"
          >
            Falar agora
          </a>
        </nav>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-20 sm:pt-28">
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-gold-light">
          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-gold" />
          Portfólio · Direção digital
        </p>

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl mt-6 max-w-[18ch]">
          <span className="block overflow-hidden">
            <span
              className="block animate-word-in text-cream"
              style={{ animationDelay: "120ms" }}
            >
              Marketing
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="animate-word-in animate-text-shine block"
              style={{ animationDelay: "300ms" }}
            >
              que vende
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block animate-word-in text-cream/85"
              style={{ animationDelay: "480ms" }}
            >
              sem gritar.
            </span>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-8 max-w-[46ch] text-base text-cream sm:text-lg"
          style={{ animationDelay: "660ms" }}
        >
          Landing pages, websites, vídeos e imagens desenhados para transformar
          atenção em receita.{" "}
          <span className="text-gold-light">
            Direção de arte cinematográfica, execução de conversão.
          </span>
        </p>
        <p
          className="animate-fade-up mt-4 max-w-[52ch] text-sm text-cream/85 sm:text-base"
          style={{ animationDelay: "760ms" }}
        >
          Na DP, cada projeto nasce de uma estratégia: entendo seu público,
          desenho a experiência e entrego uma presença digital que trabalha
          pela sua empresa 24 horas por dia — do primeiro clique ao fechamento
          da venda.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "880ms" }}
        >

          <a
            href="https://wa.me/5567996304930"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gold px-7 py-3 text-sm font-semibold text-forest ring-1 ring-gold transition-transform hover:-translate-y-0.5"
          >
            <span
              className="absolute inset-0 -z-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent)",
                animation: "sheen 3.5s ease infinite",
              }}
            />
            <span className="relative">Iniciar projeto</span>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
          >
            Ver o trabalho
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div className="relative border-y border-gold/20 bg-forest/40 py-4">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex shrink-0">
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              Conversão em média +140% <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              48h para primeira entrega <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              Retorno médio 4.2x <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              +120 marcas atendidas <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              Conversão em média +140% <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              48h para primeira entrega <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              Retorno médio 4.2x <span className="mx-6 text-gold">◆</span>
            </span>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-cream/60">
              +120 marcas atendidas <span className="mx-6 text-gold">◆</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  return null;
}

const services = [
  {
    number: "01",
    title: "Landing Pages",
    description:
      "Páginas únicas de foco total, com narrativa que conduz o olho até o botão. Copy de conversão, ritmo visual e um só objetivo por tela.",
    tags: ["Funil de captação", "A/B testing", "Carregamento < 1s"],
    image: landingPageImg,
    imageAlt: "Mockup de landing page premium em ambiente elegante",
  },
  {
    number: "02",
    title: "Websites",
    description:
      "Sites institucionais com portaria impecável. Design de sistema, performance e conteúdo que sustenta a marca por anos, não por semanas.",
    tags: ["Identidade aplicada", "SEO técnico", "Escalável"],
    image: websiteImg,
    imageAlt: "Interface de website premium sobre veludo verde",
  },
  {
    number: "03",
    title: "Vídeos & Imagens",
    description:
      "Fotografia e direção de vídeo com intenção comercial. Color grading, ritmo de corte e enquadramento que seguram o scroll e abrem o clique.",
    tags: ["Reels & ads", "Fotoproduto", "Motion"],
    image: videoShootImg,
    imageAlt: "Bastidores de produção cinematográfica com iluminação dourada",
  },
];

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-cream text-forest">
      <Particles count={50} variant="dark" className="opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-24">
        <AnimatedSection className="max-w-[40ch]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-moss">
            Ato I — O que eu construo
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl mt-4 max-w-[24ch]">
            Cada peça cumpre um papel na sua história de venda.
          </h2>
        </AnimatedSection>

        <div className="mt-20 space-y-24">
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              reversed={index % 2 === 1}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  reversed,
  delay,
}: {
  service: (typeof services)[0];
  reversed: boolean;
  delay: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 lg:grid-cols-2"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <span className="font-display text-5xl text-gold/60">{service.number}</span>
        <h3 className="font-display text-3xl font-semibold tracking-tight mt-2">
          {service.title}
        </h3>
        <p className="mt-4 max-w-[48ch] text-base text-forest/70">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-moss/30 px-3 py-1 text-xs font-medium text-moss"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-forest/10 ring-1 ring-black/5">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

const portfolioItems = [
  {
    category: "E-commerce · Relojoaria",
    title: "Maison Lumen",
    result: "Ticket médio +62% após rebrand",
    image: portfolioWatchImg,
    imageAlt: "E-commerce premium de relógios em tons verde e dourado",
  },
  {
    category: "Imobiliário · Alto padrão",
    title: "Torre Verde",
    result: "3x mais agendamentos qualificados",
    image: portfolioRealestateImg,
    imageAlt: "Fachada de edifício residencial de luxo ao entardecer",
  },
  {
    category: "Fintech · App",
    title: "Cofre Orbe",
    result: "CAC reduzido em 38% em 90 dias",
    image: portfolioFintechImg,
    imageAlt: "Interface de aplicativo fintech em smartphone com visual premium",
  },
  {
    category: "Gastronomia · Alta cozinha",
    title: "Casa Saffron",
    result: "Reservas de fim de semana esgotadas em 3 semanas",
    image: portfolioRestauranteImg,
    imageAlt: "Chef finalizando prato gourmet em restaurante sofisticado",
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-moss text-cream">
      <Particles count={45} className="opacity-70" />
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <AnimatedSection className="flex items-end justify-between gap-6">
          <div className="max-w-[40ch]">
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
              Ato II — O trabalho
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl mt-4 max-w-[24ch]">
              Projetos que abriram a cortina e venderam.
            </h2>
          </div>
          <span className="hidden text-sm text-cream/60 sm:block">
            Seleção 2023 — 2025
          </span>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  delay,
}: {
  item: (typeof portfolioItems)[0];
  delay: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-[16px] ring-1 ring-black/5"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-forest/20">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 p-5"
        style={{
          background: "linear-gradient(to top, rgba(4,53,42,.92), transparent)",
        }}
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
          {item.category}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-cream/60">{item.result}</p>
      </div>
    </article>
  );
}

function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-cream text-forest">
      {/* gradiente vivo por trás */}
      <div
        className="pointer-events-none absolute inset-0 animate-hue-flow opacity-60"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 0%, rgba(13,122,95,.18) 0%, rgba(245,240,224,.55) 45%, rgba(245,240,224,1) 100%)",
        }}
      />
      {/* partículas douradas e verdes subindo */}
      <Particles count={55} className="opacity-60" />
      {/* halo central sutil */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full blur-[120px]"
        style={{ background: "rgba(201,168,76,.14)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24">
        <AnimatedSection className="max-w-[44ch]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-moss">
            Ato III — Resultados
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl mt-4 max-w-[22ch]">
            Números, não promessas.
          </h2>
          <p className="mt-5 max-w-[52ch] text-base text-forest/70">
            Cada porcentagem aqui veio de um projeto real. Não são projeções —
            são resultados que apareceram nos relatórios de clientes que decidiram
            investir numa presença digital séria.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <ResultCard
              prefix="+"
              target={140}
              suffix="%"
              label="de conversão média em landing pages de clientes ativos."
              delay={0}
            />
            <ResultCard
              target={4.2}
              suffix="x"
              label="de retorno sobre mídia em campanhas de vídeo e imagem."
              delay={120}
              decimals={1}
            />
            <ResultCard
              target={120}
              suffix="+"
              label="marcas que viraram história no mercado com a DP."
              delay={240}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-[16px] border border-forest/10 bg-forest/[0.03] px-6 py-8 text-center sm:flex-row sm:gap-6">
            <span className="inline-flex h-10 w-10 animate-glow-pulse items-center justify-center rounded-full bg-gold/15 text-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4" />
                <path d="m5 5 2.8 2.8" />
                <path d="m19 5-2.8 2.8" />
                <path d="M12 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
              </svg>
            </span>
            <p className="max-w-[60ch] text-sm text-forest/80">
              <span className="font-semibold text-forest">
                Promessa da DP:
              </span>{" "}
              entregar uma presença digital que não apenas expõe sua empresa,
              mas a posiciona como a escolha óbvia do seu cliente ideal — com
              estética, velocidade e estratégia alinhadas.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ResultCard({
  prefix = "",
  target,
  suffix = "",
  label,
  delay = 0,
  decimals = 0,
}: {
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
  decimals?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Number((target * eased).toFixed(decimals)));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [isInView, target, delay, decimals]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-[16px] bg-cream p-8 ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,.18)]"
    >
      {/* brilho passando no hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shimmer-sweep"
        aria-hidden="true"
      />
      <p className="font-display text-5xl font-semibold tracking-tight text-moss animate-glow-text">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="relative mt-3 text-sm text-forest/70">{label}</p>
    </div>
  );
}

const processSteps = [
  {
    number: "I",
    title: "Escuta & estratégia",
    description:
      "Antes de qualquer pixel, entendo seu negócio, seu público e o que faz o cliente dizer sim. Aqui nasce o plano que guia todo o projeto.",
  },
  {
    number: "II",
    title: "Direção de arte",
    description:
      "Paleta, tipografia e narrativa visual criadas sob medida para a sua marca — nada de templates genéricos que parecem com todo mundo.",
  },
  {
    number: "III",
    title: "Construção & produção",
    description:
      "Landing pages, sites, vídeos e imagens produzidos com técnica cinematográfica e otimizados para carregar rápido e converter.",
  },
  {
    number: "IV",
    title: "Lançamento & evolução",
    description:
      "Entrega em 48h para a primeira versão, acompanhamento dos resultados e ajustes contínuos para sua presença digital vender cada dia mais.",
  },
];

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-cream text-forest">
      <Particles count={45} variant="dark" className="opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-24">
        <AnimatedSection className="max-w-[48ch]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-moss">
            Ato IV — O método
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl mt-4 max-w-[24ch]">
            Por trás de cada entrega, um processo que não deixa nada ao acaso.
          </h2>
          <p className="mt-6 max-w-[52ch] text-base text-forest/70">
            A DP não vende apenas design bonito. Cada projeto é construído como
            uma peça de vendas: texto que convence, imagem que segura a atenção
            e estrutura pensada para transformar visitante em cliente. É assim
            que sua empresa deixa de ser apenas mais uma no feed e passa a ser
            lembrada — e procurada.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 100}>
              <div className="h-full rounded-[16px] bg-forest/5 p-7 ring-1 ring-black/5 transition-colors hover:bg-forest/10">
                <span className="font-display text-3xl text-gold">
                  {step.number}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-forest/70">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-forest text-cream">
      <Particles count={70} className="opacity-80" />
      {/* base glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 120%, #0d7a5f 0%, #04352a 70%)",
        }}
      />
      {/* holofote 1 girando */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[90%] animate-spotlight-rotate opacity-30"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 30%, rgba(201,168,76,.22) 42%, transparent 54%, transparent 100%)",
          transformOrigin: "center center",
        }}
      />
      {/* holofote 2 girando sentido contrário */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[80%] animate-spotlight-rotate-reverse opacity-25"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 56%, rgba(159,232,205,.18) 68%, transparent 80%, transparent 100%)",
          transformOrigin: "center center",
        }}
      />
      {/* raios de energia saindo do centro */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full max-w-6xl">
          {[...Array(8)].map((_, i) => {
            const angle = i * 45;
            return (
              <span
                key={i}
                className="animate-energy-ray absolute left-1/2 top-1/2 h-[80%] w-[2px] origin-top"
                style={{
                  transform: `rotate(${angle}deg)`,
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(201,168,76,.55) 35%, rgba(159,232,205,.25) 70%, transparent 100%)",
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            );
          })}
        </div>
      </div>
      {/* anel pulsante atrás do formulário */}
      <div
        className="pointer-events-none absolute left-[75%] top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-gold/30 lg:block"
      />
      <div
        className="pointer-events-none absolute left-[75%] top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-gold/15 lg:block"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
              Último ato — Vamos criar
            </p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-tight tracking-tight sm:text-6xl max-w-[18ch]">
              Seu próximo cliente está a um clique.
            </h2>
            <p className="mt-6 max-w-[44ch] text-base text-cream/70 sm:text-lg">
              Me conte sobre o negócio. Respondo pelo WhatsApp em até 2h, com um
              plano claro de como elevar sua presença digital.
            </p>
            <a
              href="https://wa.me/5567996304930"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-9 inline-flex items-center overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-semibold text-forest ring-1 ring-gold transition-transform hover:-translate-y-0.5 animate-contact-float"
            >
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent)",
                  animation: "sheen 3s ease infinite",
                }}
              />
              <span className="relative">Começar no WhatsApp</span>
            </a>
            <p className="mt-4 text-sm text-cream/50">
              WhatsApp · (67) 99630-4930
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <WhatsAppForm />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

const SERVICE_OPTIONS = [
  "Landing page",
  "Website institucional",
  "Vídeo & imagens",
  "Projeto completo",
];

function WhatsAppForm() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [ramo, setRamo] = useState("");
  const [servico, setServico] = useState(SERVICE_OPTIONS[0]!);

  const mensagem = [
    `Olá! Aqui é ${nome.trim() || "[seu nome]"}${empresa.trim() ? `, da ${empresa.trim()}` : ""}${ramo.trim() ? ` (ramo: ${ramo.trim()})` : ""}.`,
    `Vim pelo site da DP e tenho interesse em: ${servico}.`,
  ].join("\n");

  const href = `https://wa.me/5567996304930?text=${encodeURIComponent(mensagem)}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(href, "_blank", "noopener,noreferrer");
      }}
      className="rounded-[18px] bg-cream/5 p-7 ring-1 ring-cream/15"
    >
      <div className="space-y-4">
        <div>
          <label className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Nome
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="mt-1 w-full rounded-[10px] bg-forest/40 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none ring-1 ring-cream/15 focus:ring-gold"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Empresa
          </label>
          <input
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            placeholder="Nome da empresa"
            className="mt-1 w-full rounded-[10px] bg-forest/40 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none ring-1 ring-cream/15 focus:ring-gold"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
            Ramo da empresa
          </label>
          <input
            type="text"
            value={ramo}
            onChange={(e) => setRamo(e.target.value)}
            placeholder="Ex.: restaurante, clínica, loja..."
            className="mt-1 w-full rounded-[10px] bg-forest/40 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none ring-1 ring-cream/15 focus:ring-gold"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
            O que você quer
          </label>
          <select
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className="mt-1 w-full rounded-[10px] bg-forest/40 px-4 py-3 text-sm text-cream outline-none ring-1 ring-cream/15 focus:ring-gold"
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o} className="text-forest">
                {o}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-[10px] bg-gold px-4 py-3 text-sm font-semibold text-forest ring-1 ring-gold transition-transform hover:-translate-y-0.5"
        >
          Enviar pelo WhatsApp
        </button>
        <p className="text-center text-xs text-cream/40">
          Sem spam. Resposta humanizada.
        </p>
      </div>
    </form>
  );
}


function Footer() {
  return (
    <footer className="bg-cream text-forest">
      <div className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={dpLogo}
                alt="Logo DP — Sua Presença Digital"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-12 w-12 object-contain"
              />
              <span className="leading-tight">
                <span className="font-display block text-2xl font-semibold tracking-tight">
                  DP
                </span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-moss">
                  Sua presença digital
                </span>
              </span>
            </div>
            <p className="mt-3 max-w-[38ch] text-sm text-forest/60">
              Marketing digital com direção cinematográfica. De Campo Grande para
              o mundo.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-[11px] uppercase tracking-[0.25em] text-moss">
              Contato
            </span>
            <a
              href="https://wa.me/5567996304930"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-moss"
            >
              WhatsApp · (67) 99630-4930
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-forest/15 pt-6 text-xs text-forest/45 sm:flex-row sm:justify-between">
          <span>© 2026 DP — Sua Presença Digital. Todos os direitos reservados.</span>
          <span>Feito à mão, cena por cena.</span>
        </div>
      </div>
    </footer>
  );
}
