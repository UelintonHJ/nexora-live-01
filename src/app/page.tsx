import { SiteFooter } from "@/src/components/layout/SiteFooter";
import { SiteHeader } from "@/src/components/layout/SiteHeader";

const sections = [
  {
    id: "problema",
    eyebrow: "03",
    title: "O problema",
    description:
      "Um espaço reservado para contextualizar o desafio que a Nexora Live #01 pretende colocar em discussão.",
  },
  {
    id: "opportunity-map",
    eyebrow: "04",
    title: "Opportunity Map",
    description:
      "Um espaço reservado para apresentar visualmente a conexão entre problemas, oportunidades e caminhos possíveis.",
  },
  {
    id: "aprendizado",
    eyebrow: "05",
    title: "O que você vai aprender",
    description:
      "Um espaço reservado para organizar os principais aprendizados da live.",
  },
  {
    id: "publico",
    eyebrow: "06",
    title: "Para quem é",
    description:
      "Um espaço reservado para qualificar o público da experiência.",
  },
  {
    id: "especialistas",
    eyebrow: "07",
    title: "Especialistas",
    description: "Um espaço reservado para apresentar os especialistas participantes da live.",
  },
  {
    id: "live",
    eyebrow: "08",
    title: "Live / YouTube",
    description:
      "Um espaço reservado para apresentar a transmissão e o acesso ao conteúdo.",
  },
  {
    id: "inscricao",
    eyebrow: "09",
    title: "Inscrição",
    description:
      "Um espaço reservado para a etapa principal de conversão.",
  },
  {
    id: "nexora",
    eyebrow: "10",
    title: "Nexora",
    description:
      "Um espaço reservado para contextualizar a Nexora e sua relação com a experiência.",
  },
  {
    id: "faq",
    eyebrow: "11",
    title: "FAQ",
    description:
      "Um espaço reservado para responder às principais objeções e dúvidas."
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-clip">
      <SiteHeader />

      <main>
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="border-b border-border"
        >
          <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
            <div className="max-w-5xl min-w-0">
              <p className="mb-6 text-label font-medium uppercase tracking-[0.2em] text-muted">
                Nexora Live #01
              </p>

              <h1
                id="hero-title"
                className="text-4xl font-semibold leading-[0.95] tracking-[0.04em] sm:text-5xl lg:text-h1"
              >
                Um novo jeito de enxergar oportunidades.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                A estrutura principal da experiência começa aqui. O conteúdo
                definitivo da proposta visual será desenvolvido sobre este
                sistema.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#inscricao"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  Quero participar
                </a>

                <a
                  href="#opportunity-map"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  Explorar a experiência
                </a>
              </div>
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="border-b border-border"
          >
            <div className="mx-auto w-full max-w-7xl min-w-0 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                  <p className="text-label font-medium uppercase tracking-[0.2em] text-muted">
                    {section.eyebrow}
                  </p>
                </div>

                <div className="max-w-3xl">
                  <h2
                    id={`${section.id}-title`}
                    className="text-h2 font-semibold leading-none tracking-[-0.035em]"
                  >
                    {section.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section
          id="cta-final"
          aria-labelledby="cta-final-title"
          className="border-b border-border"
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-16">
              <div>
                <p className="text-label font-medium uppercase tracking-[0.2em] text-muted">
                  12
                </p>
              </div>

              <div className="max-w-3xl">
                <h2
                  id="cta-final-title"
                  className="mt-5 text-h2 font-semibold leading-none tracking-[-0.035em]"
                >
                  Pronto para participar?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                  O CTA final reforçará a decisão depois que todas as principais
                  informações e objeções tiverem sido apresentadas.
                </p>

                <a
                  href="#inscricao"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  Fazer inscrição
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
