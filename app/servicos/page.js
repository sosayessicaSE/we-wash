import { Factory, Home } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Servicos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Header />
      
      {/* Promoções Section */}
      <section className="pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-4 drop-shadow-lg">
          Serviços e Promoções
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-500 text-center mb-4">
          Promoções Semanais
        </h2>
        <div className="flex justify-center mb-10">
          <span className="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
        </div>

        <div className="flex justify-center items-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-6xl w-full">
            {/* Monday Promotion */}
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100">
              <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Segunda-feira
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Promoção de Cobertor</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$80</span>
                <span className="text-blue-500 font-extrabold text-4xl">R$70</span>
              </div>
              <p className="text-gray-600 text-sm">Por peça</p>
            </div>

            {/* Tuesday Promotion */}
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100">
              <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Terça-feira
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Promoção de Lençóis</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$30</span>
                <span className="text-blue-500 font-extrabold text-4xl">R$28</span>
              </div>
              <p className="text-gray-600 text-sm">6 lençóis (sem passar)</p>
            </div>

            {/* Friday Promotion */}
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100">
              <div className="bg-blue-50 text-blue-600 font-bold py-2 px-4 rounded-full mb-4 inline-block">
                Sexta-feira
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Promoção de Roupas</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$35</span>
                <span className="text-blue-500 font-extrabold text-4xl">R$30</span>
              </div>
              <p className="text-gray-600 text-sm">Lavagem de 3 kilos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-4 drop-shadow-lg">
          Nossos Serviços
        </h2>
        <div className="flex justify-center mb-10">
          <span className="block w-32 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-200"></span>
        </div>
       
        <div className="flex justify-center items-center px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full mx-auto items-start">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100 flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Home className="w-8 h-8 text-blue-500" />
              </div>

              <h4 className="text-lg font-bold text-blue-500 mb-2">Lavanderia Doméstica</h4>
              <div className="w-full mt-8 divide-y divide-gray-100">
                <PriceRow title="LAVAGEM E SECAGEM" detail="(3 KILOS)" price="R$35" />
                <PriceRow title="LAVAGEM E SECAGEM" detail="(1 PEÇA)" price="R$18" />
                <PriceRow title="SECAGEM" detail="(3 KILOS)" price="R$30" />
                <PriceRow title="SECAGEM" detail="(1 PEÇA)" price="R$15" />
                <PriceRow title="CLAREAMENTO" detail="(1 PEÇA)" price="R$20" />
                <PriceRow title="TIRA-MANCHAS" detail="(1 PEÇA)" price="R$20" />
                <PriceRow title="COBERTOR" detail="(1 PEÇA)" price="R$80" />
                <PriceRow title="MANTA" detail="(1 PEÇA)" price="R$35" />
                <PriceRow title="TERNOS" detail="(COMPLETO)" price="R$70" />
                <PriceRow title="TÊNIS" detail="(1 PEÇA)" price="R$35" />
                <PriceRow title="VESTIDO" detail="(1 PEÇA)" price="R$70-100" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-blue-100 flex flex-col items-center text-left">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Factory className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-bold text-blue-500 mb-2 w-full text-center">Lavanderia Industrial</h4>
              <div className="text-blue-400 font-semibold text-sm mb-4 w-full text-center">Especializada para hotéis, empresas e grandes volumes.</div>
              {/* Hotel Room Package */}
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="font-bold text-blue-500 text-xs mb-3">PACOTE PARA HOTÉIS</div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start sm:gap-4">
                    <p className="text-gray-700 text-sm flex-1 min-w-0 leading-snug">
                      Todos os elementos de um quarto de hotel (passadas: com passagem a ferro){" "}
                      <span className="text-gray-400">(ex: 2 lençóis, 2-4 fronhas de almofada, 2-4 toalhas)</span>
                    </p>
                    <span className="text-blue-500 font-extrabold text-xl tabular-nums shrink-0 sm:pt-0.5 self-end sm:self-start">R$40</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-baseline sm:gap-4 pt-3 border-t border-blue-100/80">
                    <span className="text-gray-700 text-sm flex-1 min-w-0">Cliente recorrente (por pacote):</span>
                    <span className="text-blue-500 font-extrabold text-xl tabular-nums shrink-0 self-end sm:self-auto">R$35</span>
                  </div>
                </div>
              </div>
              {/* Sabanas Pricing */}
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="font-bold text-blue-500 text-xs mb-3">LAVAGEM DE LENÇOIS</div>
                <div className="flex flex-col divide-y divide-blue-100/80">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-baseline sm:gap-4 pb-3">
                    <span className="text-gray-700 text-sm flex-1 min-w-0 pr-2">6 lençóis (sem passar):</span>
                    <span className="text-blue-500 font-extrabold text-xl tabular-nums shrink-0 self-end sm:self-auto">R$30</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-baseline sm:gap-4 pt-3">
                    <span className="text-gray-700 text-sm flex-1 min-w-0 pr-2">6 lençóis (com passagem a ferro):</span>
                    <span className="text-blue-500 font-extrabold text-xl tabular-nums shrink-0 self-end sm:self-auto">R$45</span>
                  </div>
                </div>
              </div>
              {/* Uniforme de Trabalho */}
              <div className="w-full bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="font-bold text-blue-500 text-xs mb-2">LAVAGEM DE UNIFORME DE TRABALHO</div>
                <div className="text-gray-700 text-sm mb-2">Serviço especializado para empresas, indústrias e estabelecimentos comerciais.</div>
                <div className="text-sm text-blue-400">Entre em contato para um orçamento personalizado.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PriceRow({ title, detail, price }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3.5 first:pt-0 last:pb-0">
      <div className="text-left min-w-0 flex-1">
        <span className="font-bold text-gray-700">{title}</span>
        <span className="block text-xs text-gray-400">{detail}</span>
      </div>
      <span className="text-blue-500 font-extrabold text-2xl tabular-nums shrink-0 text-right">{price}</span>
    </div>
  );
}
