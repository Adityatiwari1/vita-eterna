import Navbar from "@/components/layout/Navbar";
import Footer, { LAST_UPDATED } from "@/components/layout/Footer";

export default function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-beige px-4 py-16 sm:px-6 sm:py-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-dark-blue sm:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-sm leading-relaxed text-dark-blue/80">{intro}</p>
          )}
          <p className="mt-3 text-xs text-dark-blue/60">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.label}</time>
          </p>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-dark-blue/80 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-dark-blue [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
