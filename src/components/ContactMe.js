export default function ContactMe() {
  return (
    <section className="flex justify-center my-16 md:my-20 lg:my-24">
      <div className="max-w-[600px]">
        <h2 className="text-sm font-mono text-center mb-1">
          <span className="text-zinc-500">04.</span>
          <span className="text-zinc-900">Próximo passo?</span>
        </h2>
        <h2 className="text-center font-bold text-2xl text-zinc-900">
          Entre em Contato
        </h2>
        <p className="text-center text-zinc-700 mt-5 mb-9">
          Será um prazer receber uma mensagem sua. Envie sua proposta,
          questionamentos ou ideias. Farei o meu melhor para respondê-lo(a) o
          quanto antes!
        </p>
        <a
          href="mailto:contact.leotx@gmail.com"
          rel="noopener noreferrer"
          targe="_blank"
          className="px-5 py-3 rounded-md border border-teal-100/50 bg-teal-100/50 text-teal-700/50 transition-colors hover:bg-teal-100 hover:text-teal-700 hover:border-teal-200 font-bold mx-auto block max-w-max"
        >
          Diga Olá!
        </a>
      </div>
    </section>
  );
}
