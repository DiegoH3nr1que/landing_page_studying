import React from "react";
import Container from "./Container";

export default function SectionServices() {
  return (
    <section>
      <Container>
        <div className="flex-1 max-w-[594px]">
          <span className=" text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
          <h1 className=" text-primary-gray text-[56px] font-bold leading-tight mb-6">gerencie suas finanças sem sair de casa</h1>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo App Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
        </div>
      </Container>
    </section>
  );
}
