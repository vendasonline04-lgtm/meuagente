import { useEffect, useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const FEMALE_NAMES = [
  "Ana Carolina Silva", "Mariana Oliveira", "Beatriz Souza", "Juliana Costa", "Fernanda Almeida",
  "Camila Pereira", "Larissa Ribeiro", "Patrícia Gomes", "Aline Martins", "Bruna Carvalho",
  "Tatiane Rodrigues", "Vanessa Lima", "Priscila Fernandes", "Renata Barbosa", "Débora Cardoso",
  "Cristiane Melo", "Sabrina Rocha", "Amanda Nunes", "Jéssica Araújo", "Letícia Cavalcanti",
  "Gabriela Ferreira", "Isabela Nascimento", "Rafaela Moreira", "Natália Correia", "Luana Teixeira",
  "Michele Vieira", "Karina Ramos", "Simone Batista", "Adriana Farias", "Elaine Andrade",
  "Roberta Freitas", "Cláudia Monteiro", "Vera Machado", "Sandra Guimarães", "Luciana Duarte",
  "Márcia Pinto", "Silvia Moura", "Regina Peixoto", "Tereza Campos", "Rosana Xavier",
  "Alessandra Dias", "Denise Cunha", "Kelly Antunes", "Viviane Assis", "Daniela Prado",
  "Carolina Miranda", "Paula Bittencourt", "Eliane Siqueira", "Sônia Tavares", "Rita Franco",
  "Helena Bezerra", "Luísa Coelho", "Manuela Neves", "Sofia Aguiar", "Valentina Sales",
  "Laís Braga", "Milena Mendes", "Tainá Padilha", "Bianca Sant'Anna", "Yasmin Reis",
  "Emily Cordeiro", "Nicole Amaral", "Sarah Pacheco", "Isadora Vargas", "Melissa Camargo",
  "Bárbara Queiroz", "Cintia Vasconcelos", "Michele Salgado", "Karla Diniz", "Andressa Godoy",
  "Fabiana Cordeiro", "Josiane Brito", "Solange Neves", "Ivone Coutinho", "Mônica Sampaio",
  "Rosangela Barros", "Elisangela Paiva", "Neide Fonseca", "Zilda Espíndola", "Marta Chaves",
  "Cássia Bueno", "Nádia Camilo", "Ivete Furtado", "Lúcia Mattos", "Estela Bandeira",
  "Vitória Feitosa", "Alícia Serrano", "Heloísa Bastos", "Clara Baptista", "Antônia Passos",
  "Elizabete Guerra", "Sueli Meireles", "Odete Zimmermann", "Carmen Delgado", "Íris Bezerra",
  "Wanda Novaes", "Célia Vilar", "Angélica Toledo", "Tânia Barcelos", "Edna Sarmento",
];

const MALE_NAMES = [
  "Rafael Oliveira", "Bruno Almeida", "Lucas Ferreira", "Pedro Santos", "Gabriel Costa",
  "Thiago Souza", "Felipe Rodrigues", "Marcos Silva", "André Pereira", "Rodrigo Lima",
  "Diego Carvalho", "Guilherme Ribeiro", "Vinícius Gomes", "Leonardo Martins", "Matheus Barbosa",
  "Eduardo Cardoso", "Ricardo Nascimento", "Fernando Araújo", "Gustavo Melo", "Daniel Rocha",
  "Alexandre Nunes", "Renato Cavalcanti", "Fábio Correia", "Marcelo Teixeira", "Paulo Vieira",
  "Antônio Ramos", "Sérgio Batista", "Roberto Farias", "Carlos Andrade", "José Freitas",
  "João Monteiro", "Henrique Machado", "César Guimarães", "Vitor Duarte", "Igor Pinto",
  "Otávio Moura", "Caio Peixoto", "Murilo Campos", "Arthur Xavier", "Enzo Dias",
  "Davi Cunha", "Miguel Antunes", "Bernardo Assis", "Heitor Prado", "Theo Miranda",
  "Nicolas Bittencourt", "Samuel Siqueira", "Erick Tavares", "Yuri Franco", "Kaique Bezerra",
  "Wesley Coelho", "Anderson Neves", "Alan Aguiar", "Douglas Sales", "Everton Braga",
  "Jonas Mendes", "Rafael Padilha", "Iago Sant'Anna", "Elias Reis", "Ismael Cordeiro",
  "Cauã Amaral", "Benjamin Pacheco", "Levi Vargas", "Noah Camargo", "Ravi Queiroz",
  "Lorenzo Vasconcelos", "Pietro Salgado", "Emanuel Diniz", "Tomás Godoy", "Vicente Brito",
  "Joaquim Fonseca", "Benício Espíndola", "Antonio Chaves", "Hugo Bueno", "Cláudio Camilo",
  "Hélio Furtado", "Osvaldo Mattos", "Edson Bandeira", "Adilson Feitosa", "Reinaldo Serrano",
  "Alcides Bastos", "Nelson Baptista", "Walter Passos", "Milton Guerra", "Waldir Meireles",
  "Ademir Zimmermann", "Geraldo Delgado", "Sebastião Novaes", "Valter Vilar", "Norberto Toledo",
  "Ismael Barcelos", "Aluísio Sarmento", "Cássio Salomão", "Élcio Rezende", "Fabrício Peçanha",
  "Gilberto Loureiro", "Jorge Rangel", "Túlio Bicalho", "Ubiratan Espósito", "Zeca Marinho",
];

const ALL_NAMES = [...FEMALE_NAMES, ...MALE_NAMES];

const INTERVALS = [3000, 8000, 5000, 15000, 6000, 16000, 8000, 12000, 4000, 20000, 7000, 10000];
const VISIBLE_MS = 4000;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function PurchasePopup() {
  const [name, setName] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const queueRef = useRef<string[]>(shuffle(ALL_NAMES));
  const indexRef = useRef(0);
  const intervalIndexRef = useRef(0);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const nextName = () => {
      if (indexRef.current >= queueRef.current.length) {
        queueRef.current = shuffle(ALL_NAMES);
        indexRef.current = 0;
      }
      const n = queueRef.current[indexRef.current];
      indexRef.current += 1;
      return n;
    };

    const scheduleNext = () => {
      const delay = INTERVALS[intervalIndexRef.current % INTERVALS.length];
      intervalIndexRef.current += 1;
      showTimer = setTimeout(() => {
        setName(nextName());
        setVisible(true);
        hideTimer = setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, VISIBLE_MS);
      }, delay);
    };

    scheduleNext();

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!name) return null;

  return (
    <div
      aria-live="polite"
      className={`fixed z-[9999] pointer-events-none transition-all duration-500 ease-out
        top-4 right-4 md:top-auto md:right-auto md:bottom-6 md:left-6
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 md:translate-x-[-2rem]"}
      `}
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-white/20 bg-green-600 px-4 py-3 shadow-2xl max-w-[92vw] md:max-w-sm">
        <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-white" strokeWidth={2.5} />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-white">{name}</span>
          <span className="text-xs font-medium text-white/90">compra aprovada!</span>
        </div>
      </div>
    </div>
  );
}
