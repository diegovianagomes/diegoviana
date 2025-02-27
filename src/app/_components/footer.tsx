import Container from "@/app/_components/container";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50  dark:bg-slate-800">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-center">
          Diego Viana © {currentYear} | Todos direitos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
