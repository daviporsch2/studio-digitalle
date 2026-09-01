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

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div
        className="pointer-events-none absolute inset-0 animate-hero-bg"
        style={{
          background:
            "radial-gradient(130% 90% at 50% -10%, #14a37a 0%, #0a6a51 45%, #04352a 100%)",
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
          className="animate-fade-up mt-8 max-w-[46ch] text-base text-cream/85 sm:text-lg"
          style={{ animationDelay: "660ms" }}
        >
          Landing pages, websites, vídeos e imagens desenhados para transformar
          atenção em receita.{" "}
          <span className="text-gold-light">
            Direção de arte cinematográfica, execução de conversão.
          </span>
        </p>
        <p
          className="animate-fade-up mt-4 max-w-[52ch] text-sm text-cream/65 sm:text-base"
          style={{ animationDelay: "760ms" }}
        >
          Na DP, cada projeto nasce de uma estratégia: entendo seu público,
          desenho a experiência e entrego uma presença digital que trabalha
          pela sua empresa 24 horas por dia — do primeiro clique ao fechamento
          da venda.
        </p>

          Na DP, cada projeto nasce de uma estratégia: entendo seu público,
          desenho a experiência e entrego uma presença digital que trabalha
          pela sua empresa 24 horas por dia — do primeiro clique ao fechamento
          da venda.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "600ms" }}
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
    <section className="bg-cream text-forest">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
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
    <section id="portfolio" className="bg-moss text-cream">
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
    <section className="bg-cream text-forest">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <AnimatedSection className="max-w-[40ch]">
          <p className="text-[11px] uppercase tracking-[0.35em] text-moss">
            Ato III — Resultados
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl mt-4 max-w-[22ch]">
            Números, não promessas.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[16px] bg-forest/15 ring-1 ring-black/5 sm:grid-cols-3">
            <div className="bg-cream p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-moss">
                +140%
              </p>
              <p className="mt-3 text-sm text-forest/70">
                de conversão média em landing pages de clientes ativos.
              </p>
            </div>
            <div className="bg-cream p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-moss">
                4.2x
              </p>
              <p className="mt-3 text-sm text-forest/70">
                de retorno sobre mídia em campanhas de vídeo.
              </p>
            </div>
            <div className="bg-cream p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-moss">
                120+
              </p>
              <p className="mt-3 text-sm text-forest/70">
                marcas que viraram história no mercado.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
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
    <section className="bg-cream text-forest">
      <div className="mx-auto max-w-[1400px] px-6 pb-24">
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 120%, #0d7a5f 0%, #04352a 70%)",
        }}
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
              className="group relative mt-9 inline-flex items-center overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-semibold text-forest ring-1 ring-gold transition-transform hover:-translate-y-0.5"
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
  {
    value: "Landing page",
    detail:
      "uma landing page de alta conversão, com direção de arte cinematográfica e estrutura pensada para transformar visitante em cliente",
  },
  {
    value: "Website institucional",
    detail:
      "um site institucional com design de sistema, performance e conteúdo que sustenta a marca por anos",
  },
  {
    value: "Vídeo & imagens",
    detail:
      "produção de vídeos e imagens para redes sociais e anúncios, com estética premium que segura a atenção",
  },
  {
    value: "Projeto completo",
    detail:
      "um projeto completo: estratégia, arte, produção de vídeo/imagem e lançamento da presença digital",
  },
];

function WhatsAppForm() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servico, setServico] = useState(SERVICE_OPTIONS[0]!.value);

  const selected =
    SERVICE_OPTIONS.find((o) => o.value === servico) ?? SERVICE_OPTIONS[0]!;

  const mensagem = [
    `Olá, Davi! Aqui é ${nome.trim() || "[seu nome]"}${
      empresa.trim() ? `, da ${empresa.trim()}` : ""
    }.`,
    "",
    `Vim pelo site da DP — Sua Presença Digital e tenho interesse em ${selected.value}.`,
    `O que eu procuro: ${selected.detail}.`,
    "",
    "Pode me enviar um plano claro de como elevar minha presença digital e vender mais?",
  ].join("\n");

  const href = `https://wa.me/5567996304930?text=${encodeURIComponent(mensagem)}`;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
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
            O que precisa
          </label>
          <select
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className="mt-1 w-full rounded-[10px] bg-forest/40 px-4 py-3 text-sm text-cream outline-none ring-1 ring-cream/15 focus:ring-gold"
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="text-forest">
                {o.value}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-[10px] bg-forest/40 p-4 ring-1 ring-cream/10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
            Prévia da mensagem
          </p>
          <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-cream/60">
            {mensagem}
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-[10px] bg-gold px-4 py-3 text-sm font-semibold text-forest ring-1 ring-gold transition-transform hover:-translate-y-0.5"
        >
          Enviar pelo WhatsApp
        </a>
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
