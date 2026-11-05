import Button from "@/components/ui/button";
export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-content-center justify-items-start gap-5 px-6 py-20 sm:px-10">
      <p className="font-mono text-6xl text-faint">404</p>
      <h1 className="text-5xl font-semibold tracking-[-0.05em]">Page not found.</h1>
      <Button href="/" variant="primary">Back home</Button>
    </section>
  );
}
