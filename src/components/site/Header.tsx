const links = [
  { href: "#why", label: "Why Pata" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  return (
    <header className="px-6 py-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 rounded-md">
          <img
            src="/pata-logo.svg"
            alt=""
            className="size-7 rounded-lg"
            aria-hidden="true"
          />
          <span className="text-base font-semibold tracking-tight">Pata</span>
        </a>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 ease-out hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
