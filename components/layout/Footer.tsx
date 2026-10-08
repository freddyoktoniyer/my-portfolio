import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import { BUILT_WITH } from "@/lib/constants";
import { getCurrentYear } from "@/lib/date";

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer id="site-footer" className="border-t border-line">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-fg">
            © {year} {profile.name}
          </p>
          <p className="text-sm text-fg-muted">{profile.tagline}</p>
        </div>
        <div className="label-mono leading-relaxed text-fg-muted md:text-right">
          <p>Designed & engineered with</p>
          <ul className="flex flex-wrap gap-x-2 md:justify-end">
            {BUILT_WITH.map((item, index) => (
              <li key={item} className="whitespace-nowrap">
                {item}
                {index < BUILT_WITH.length - 1 ? (
                  <span aria-hidden="true" className="ml-2">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
