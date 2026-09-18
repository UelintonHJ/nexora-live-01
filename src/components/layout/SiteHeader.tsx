const navigationItems = [
    { href:"#hero", label: "Início" },
    { href:"#opportunity-map", label: "Opportunity Map" },
    { href:"#aprendizado", label: "Aprendizado" },
    { href:"#especialistas", label: "Especialistas" },
    { href:"#faq", label: "FAQ" },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/95 backdrop-blur-sm">
            <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
                <a 
                    href="#hero"
                    className="shrink-0 text-sm font-semibold tracking-[-0.02em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    aria-label="Nexora Live #01 - início"
                >
                    NEXORA
                </a>

                <nav
                    aria-label="Navegação principal"
                    className="hidden items-center gap-6 lg:flex"
                >
                    {navigationItems.map((item) => (
                        <a 
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted transition-colors duration-300 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a 
                    href="#inscricao"
                    className="inline-flex min-h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                    Inscreva-se
                </a>
            </div>
        </header>
    );
}