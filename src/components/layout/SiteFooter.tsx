export function SiteFooter() {
    return (
        <footer className="bg-ink text-bg">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[-0.02em]">
                            NEXORA
                        </p>

                        <p className="mt-2 max-w-md text-sm leading-6 text-bg/60">
                            Nexora Live #01 - uma experiência construída para conectar
                            problemas, conhecimento e oportunidades.
                        </p>
                    </div>

                    <a 
                        href="#hero"
                        className="text-sm text-bg/60 transition-colors duration-300 hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bg"
                    >
                        Voltar ao início
                    </a>
                </div>

                <div className="border-t border-bg/15 pt-6 text-xs text-bg/50">
                    © {new Date().getFullYear()} Nexora. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}