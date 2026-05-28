import heroProduto from "@/assets/antesedepoismenina.png";
import robotMascot from "@/assets/robot-mascot.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 text-white sm:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(109,28,195,0.6), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,122,0,0.25), transparent 50%)"
      }} />
      <div className="relative mx-auto max-w-6xl flex flex-col items-center text-center">

        {/* Logo no topo: robô + texto */}
        <div className="mb-8 flex items-center justify-center gap-2 sm:gap-3">
          <img
            src={robotMascot}
            alt="Mascote Agente de IA"
            className="h-14 w-auto object-contain sm:h-18 drop-shadow-[0_0_25px_rgba(109,28,195,0.6)]"
          />
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-base font-bold text-white sm:text-xl tracking-tight">
              Agente de IA
            </span>
            <span className="mt-1 flex items-center gap-1.5 text-[8px] font-medium uppercase tracking-[0.3em] text-white/70 sm:text-[10px]">
              <span className="h-px w-3 bg-white/40 sm:w-5" />
              do Zero
              <span className="h-px w-3 bg-white/40 sm:w-5" />
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.6rem] text-white max-w-4xl">
          Pare de perder horas tentando entender IA sozinho, e descubra como criar seu primeiro <span className="text-alert">Agente de IA do Zero</span> de forma simples, prática e sem programação: <span className="text-alert">em apenas 37 minutos!</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Mesmo que hoje você esteja perdido com tanta informação, essa aula prática vai te mostrar exatamente o que fazer para finalmente colocar seu agente no ar.
        </p>

        {/* Imagem */}
        <div className="mt-10 w-full flex items-center justify-center">
          <img
            src={heroProduto}
            alt="Antes e depois — agente de IA transformando a rotina"
            className="w-full max-w-2xl rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
