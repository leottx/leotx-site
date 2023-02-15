import React from "react";

export default function ContactMe() {
  return (
    <section>
      <h2 className="text-sm text-center">
        <span className="font-mono">04. Próximo passo?</span>
      </h2>
      <h2 className="text-center font-bold">Entre em Contato</h2>
      <p className="text-center">
        Será um prazer receber uma mensagem sua. Envie sua proposta,
        questionamentos ou ideias. Farei o meu melhor para respondê-lo(a) o
        quanto antes!
      </p>
      <a
        href="mailto:contact.leotx@gmail.com"
        rel="noopener noreferrer"
        targe="_blank"
        className="px-4 py-2 rounded-md border-2 border-zinc-200 mx-auto block max-w-max"
      >
        Diga Olá!
      </a>
    </section>
  );
}
