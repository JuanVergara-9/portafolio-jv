// Reusable CSS-art mockup components

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-44 shrink-0">
      <div className="relative w-44 h-[340px] bg-[#212121] rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#212121] rounded-full z-20" />
        <div className="absolute inset-0 bg-white overflow-hidden">
          <div className="bg-[#007bff] pt-6 pb-2 px-4 flex justify-between items-center">
            <span className="text-white text-[8px] font-bold">9:41</span>
            <span className="text-white text-[8px]">miservicio.ar</span>
            <span className="text-white text-[8px]">●●●</span>
          </div>
          <div className="px-3 py-2">
            <div className="bg-gray-100 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-[8px] text-gray-400">Buscar servicio…</span>
            </div>
          </div>
          <div className="px-3 mb-2">
            <p className="text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Categorías</p>
            <div className="flex gap-1.5 overflow-hidden">
              {["🔧 Plomería", "⚡ Eléctrico", "🧹 Limpieza"].map((c) => (
                <div key={c} className="bg-blue-50 border border-blue-100 rounded-lg px-1.5 py-1 shrink-0">
                  <span className="text-[7px] text-blue-600 font-bold">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-3 space-y-2">
            {[
              { name: "Juan Pérez", svc: "Plomero",      rating: "4.9", jobs: "127", badge: "Pro" },
              { name: "Carlos M.",  svc: "Electricista", rating: "4.8", jobs: "89",  badge: null  },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-gray-100 rounded-2xl p-2 shadow-sm flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-[12px] font-bold shrink-0">
                  {p.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <p className="text-[8px] font-bold text-[#212121] truncate">{p.name}</p>
                    {p.badge && (
                      <span className="bg-[#ff751f] text-white text-[6px] font-bold px-1 rounded-full">{p.badge}</span>
                    )}
                  </div>
                  <p className="text-[7px] text-gray-400">{p.svc}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-yellow-400 text-[7px]">★</span>
                    <span className="text-[7px] font-bold text-gray-600">{p.rating}</span>
                    <span className="text-[6px] text-gray-400">({p.jobs} trabajos)</span>
                  </div>
                </div>
                <div className="bg-[#007bff] rounded-lg px-1.5 py-1">
                  <span className="text-white text-[7px] font-bold">Contratar</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2">
            {["🏠", "🔍", "📅", "👤"].map((icon) => (
              <span key={icon} className="text-[14px]">{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WhatsAppMockup() {
  const messages = [
    { from: "user", text: "Hola, necesito un plomero para mañana a las 10am" },
    { from: "bot",  text: "¡Hola! 👋 Soy el asistente de miservicio.\nEncontré 3 plomeros disponibles mañana. ¿Confirmás las 10:00 AM con Juan Pérez (⭐ 4.9)?" },
    { from: "user", text: "Sí, confirmá" },
    { from: "bot",  text: "✅ ¡Reserva confirmada!\nJuan Pérez llegará mañana a las 10:00 AM.\nTe enviaré un recordatorio 1h antes." },
  ]
  return (
    <div className="relative mx-auto w-44 shrink-0">
      <div className="relative w-44 h-[340px] bg-[#212121] rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#212121] rounded-full z-20" />
        <div className="absolute inset-0 bg-[#ECE5DD] flex flex-col overflow-hidden">
          <div className="bg-[#128C7E] pt-6 pb-2 px-3 flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">🤖</div>
            <div>
              <p className="text-white text-[8px] font-bold">miservicio Bot</p>
              <p className="text-green-200 text-[6px]">en línea · powered by Gemini</p>
            </div>
          </div>
          <div className="flex-1 px-2 py-2 space-y-2 overflow-hidden">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-xl px-2.5 py-1.5 max-w-[85%] shadow-sm ${
                  m.from === "user" ? "bg-[#DCF8C6] rounded-tr-none" : "bg-white rounded-tl-none"
                }`}>
                  {m.text.split("\n").map((line, j) => (
                    <p key={j} className="text-[7px] text-gray-800 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F0F0F0] px-2 py-1.5 flex items-center gap-1">
            <div className="flex-1 bg-white rounded-full px-2 py-1">
              <p className="text-[6px] text-gray-400">Escribe un mensaje…</p>
            </div>
            <div className="w-5 h-5 bg-[#128C7E] rounded-full flex items-center justify-center">
              <span className="text-white text-[8px]">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
