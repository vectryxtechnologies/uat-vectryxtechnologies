import Button from "@/components/ui/button";
export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-screen max-w-[1200px] place-content-center justify-items-start gap-5 px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-400">404</p>
      <h1 className="text-5xl font-extrabold tracking-tight text-white">Page not found.</h1>
      <Button href="/" variant="dark">Back home</Button>
    </section>
  );
}
