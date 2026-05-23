import { faClock, faLeaf, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Package, Shield, ShoppingBag, Sparkles, Store, Timer, WashingMachine } from "lucide-react";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 h-full">
        <div className="container mx-auto px-4 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left bg-white p-4 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 leading-tight tracking-wide mb-4">
              Cuidado e <span className="text-blue-600">Tradição</span>
              <br /> em Cada Detalhe
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Utilize nossos serviços com praticidade e conveniência.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5547991769357&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido%20de%20lavanderia.%20Como%20posso%20enviar%20minhas%20roupas%20para%20voc%C3%AAs%3F%20%F0%9F%98%8A "
              target="_blank"
              className="mt-6 inline-block bg-blue-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition duration-300 shadow-md"
            >
Fale conosco            </a>
            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-700 justify-center md:justify-start">
              <Feature icon={faLeaf} text="Eco Friendly" color="text-green-500" />
              <Feature icon={faPiggyBank} text="Economia de Dinheiro" color="text-blue-500" />
              <Feature icon={faClock} text="Economia de Tempo" color="text-yellow-500" />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image src="/images/laundry-image.png" alt="Lavanderia" width={500} height={500} className="rounded-xl shadow-lg border border-gray-100 w-full max-w-[300px] md:max-w-none" unoptimized={true} priority />
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 md:mt-24">
          <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Image src="/images/mainvideo.gif" alt="Lavanderia" width={800} height={800} className="rounded-xl shadow-md w-full" priority />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-blue-500 mb-6">Por que escolher nossa lavanderia?</h2>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Sparkles className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Qualidade Premium</h3>
                    <p className="text-gray-600">Utilizamos produtos de alta qualidade e técnicas avançadas para garantir o melhor cuidado com suas roupas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Segurança Garantida</h3>
                    <p className="text-gray-600">Seus pertences são tratados com o máximo de cuidado e segurança em todas as etapas do processo.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Timer className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Entrega Rápida</h3>
                    <p className="text-gray-600">Compromisso com prazos e agilidade na entrega, respeitando seu tempo e necessidades.</p>
                  </div>
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=5547991769357&text=Ol%C3%A1!%20Eu%20gostaria%20de%20fazer%20um%20pedido%20de%20lavanderia.%20Como%20posso%20enviar%20minhas%20roupas%20para%20voc%C3%AAs%3F%20%F0%9F%98%8A "
                  target="_blank"
                  className="inline-block bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition duration-300 shadow-md mt-4"
                >
                  Contate-nos
                </a>
              </div>
            </div>
          </div>
        </div>

        <Section title="Como Funciona Nosso Serviço" subtitle="Em 4 Passos Fáceis">
          <div className="flex flex-col md:flex-row justify-center mt-12 space-y-8 md:space-y-0 md:space-x-10">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

const Feature = ({ icon, text, color }) => (
  <div className="flex items-center">
    <FontAwesomeIcon icon={icon} className={`h-6 w-6 ${color}`} />
    <span className="ml-2">{text}</span>
  </div>
);

const Step = ({ icon, title, description }) => (
  <div className="text-center flex flex-col items-center">
    <div className="text-4xl text-blue-400">{icon}</div>
    <h3 className="font-semibold mt-2 text-blue-400">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const Section = ({ title, subtitle, children }) => (
  <section className="text-center py-12 bg-white rounded-xl my-8">
    <h2 className="text-3xl font-bold text-blue-400">{title}</h2>
    {subtitle && <p className="text-gray-600 uppercase mt-2 tracking-wider">{subtitle}</p>}
    {children}
  </section>
);

// Data
const steps = [
  { icon: <ShoppingBag size={100} />, title: "Passo 1", description: "Coloque suas roupas numa sacola" },
  { icon: <Store size={100} />, title: "Passo 2", description: "Leve até nossa loja e entregue no balcão" },
  { icon: <WashingMachine size={100} />, title: "Passo 3", description: "Lavamos suas roupas com cuidado" },
  { icon: <Package size={100} />, title: "Passo 4", description: "Retire na loja limpas e cheirosas" },
];