import { Phone } from 'lucide-react';

function App() {
  const handleContact = () => {
    window.location.href = 'tel:+5599992075219';
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-black blur-xl"></div>

        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 shadow-2xl backdrop-blur-sm">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white">
                Eduardo
                <span className="block mt-2 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Vieira
                </span>
              </h1>

              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

              <p className="text-gray-400 text-lg tracking-wide font-light">
                Designer Gráfico & Estrategista Digital
              </p>
            </div>

            <button
              onClick={handleContact}
              className="group relative w-full bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span className="text-lg tracking-wide">
                  FAÇA UM ORÇAMENTO
                </span>
              </span>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <div className="pt-4">
              <div className="flex justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
