const navigationItems = [
    { href:"#live", label: "A LIVE" },
    { href:"#aprendizado", label: "CONTEÚDO" },
    { href:"#nexora", label: "SOBRE" },
];

const cta = {
    href: "#inscricao",
    label: "QUERO PARTICIPAR",
}

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
                    className="hidden items-center gap-8 lg:flex"
                >
                    {navigationItems.map((item) => (
                        <a 
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium tracking-[0.04em] text-muted transition-colors duration-300 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a 
                        href={cta.href}
                        className="inline-flex min-h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                        {cta.label}
                    </a>
                </nav>

                <details className="relative lg:hidden">
                    <summary className="flex min-h-10 cursor-pointer list-none items-center justify-center rounded-md border border-border px-4 text-sm font-medium tracking-[0.04em] transition-colors duration-300 hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
                        MENU
                    </summary>

                    <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-3rem))] rounded-md border border-border bg-bg p-3 shadow-lg">
                        <nav aria-label="Navegação mobile">
                            <ul className="flex flex-col">
                                {navigationItems.map((item) => (
                                    <li key={item.href}>
                                        <a 
                                            href={item.href}
                                            className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium tracking-[0.04em] text-muted transition-colors duration-300 hover:bg-ink hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}

                                <li className="mt-2 border-t border-border pt-2">
                                    <a 
                                        href={cta.href}
                                        className="flex min-h-11 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium tracking-[0.04em] text-bg transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                                    >
                                        {cta.label}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </details>
            </div>
        </header>
    );
}