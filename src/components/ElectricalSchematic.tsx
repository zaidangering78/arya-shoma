import { useState } from 'react';
import { Power, RotateCcw } from 'lucide-react';

export function ElectricalSchematic() {
  const [breakerClosed, setBreakerClosed] = useState(true);
  const [contactorActive, setContactorActive] = useState(true);

  const isMotorRunning = breakerClosed && contactorActive;

  return (
    <div className="rounded-2xl bg-[#0B1222] border border-slate-800/90 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div>
          <p className="text-xs font-mono text-yellow-400">SKEMA INTERAKTIF · KONTROL 3 FASA</p>
          <h3 className="text-base sm:text-lg font-semibold text-white mt-0.5">
            Diagram Single-Line Panel Daya & Motor Induksi
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setBreakerClosed((prev) => !prev)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
              breakerClosed
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Power className="w-3.5 h-3.5" />
            {breakerClosed ? 'MCB: ON' : 'MCB: OFF'}
          </button>
          <button
            type="button"
            onClick={() => setContactorActive((prev) => !prev)}
            disabled={!breakerClosed}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isMotorRunning
                ? 'bg-yellow-400 text-slate-950 hover:bg-yellow-300'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {isMotorRunning ? 'Kontaktor: Aktif' : 'Kontaktor: Siaga'}
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox="0 0 680 280"
          className="w-full min-w-[520px] h-auto"
          role="img"
          aria-label="Diagram skematik panel distribusi 3 fasa dan kontrol motor"
        >
          {/* Busbar 3 Fasa R-S-T */}
          <text x="18" y="34" fill="#EF4444" fontSize="11" fontFamily="JetBrains Mono, monospace">
            L1 (R)
          </text>
          <text x="18" y="54" fill="#FACC15" fontSize="11" fontFamily="JetBrains Mono, monospace">
            L2 (S)
          </text>
          <text x="18" y="74" fill="#3B82F6" fontSize="11" fontFamily="JetBrains Mono, monospace">
            L3 (T)
          </text>
          <text x="18" y="94" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono, monospace">
            PE
          </text>

          <line x1="72" y1="30" x2="640" y2="30" stroke="#EF4444" strokeWidth="2.5" />
          <line x1="72" y1="50" x2="640" y2="50" stroke="#FACC15" strokeWidth="2.5" />
          <line x1="72" y1="70" x2="640" y2="70" stroke="#3B82F6" strokeWidth="2.5" />
          <line
            x1="72"
            y1="90"
            x2="640"
            y2="90"
            stroke="#22C55E"
            strokeWidth="1.75"
            strokeDasharray="6 4"
          />

          {/* Tap vertical lines to MCB 3P */}
          <line x1="175" y1="30" x2="175" y2="128" stroke="#EF4444" strokeWidth="2" />
          <line x1="195" y1="50" x2="195" y2="128" stroke="#FACC15" strokeWidth="2" />
          <line x1="215" y1="70" x2="215" y2="128" stroke="#3B82F6" strokeWidth="2" />

          {/* MCB 3 Fasa Box */}
          <rect
            x="155"
            y="128"
            width="80"
            height="48"
            rx="6"
            fill="#111C33"
            stroke={breakerClosed ? '#3B82F6' : '#475569'}
            strokeWidth="1.75"
          />
          <text
            x="195"
            y="148"
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="11"
            fontWeight="600"
            fontFamily="JetBrains Mono, monospace"
          >
            MCCB 3P
          </text>
          <text
            x="195"
            y="165"
            textAnchor="middle"
            fill={breakerClosed ? '#60A5FA' : '#94A3B8'}
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            {breakerClosed ? '380V · CLOSED' : 'OPEN / TRIP'}
          </text>

          {/* Line MCB -> Kontaktor */}
          <line
            x1="235"
            y1="152"
            x2="310"
            y2="152"
            stroke={breakerClosed ? '#3B82F6' : '#334155'}
            strokeWidth="2.5"
            className={breakerClosed ? 'animate-current-flow' : ''}
          />

          {/* Kontaktor Magnetik + TOR */}
          <rect
            x="310"
            y="124"
            width="102"
            height="56"
            rx="6"
            fill="#111C33"
            stroke={isMotorRunning ? '#FACC15' : '#475569'}
            strokeWidth="1.75"
          />
          <text
            x="361"
            y="146"
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="11"
            fontWeight="600"
            fontFamily="JetBrains Mono, monospace"
          >
            K1 + TOR
          </text>
          <text
            x="361"
            y="163"
            textAnchor="middle"
            fill={isMotorRunning ? '#FACC15' : '#94A3B8'}
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            {isMotorRunning ? 'ENERGIZED' : 'STANDBY'}
          </text>

          {/* Line Kontaktor -> Motor */}
          <line
            x1="412"
            y1="152"
            x2="495"
            y2="152"
            stroke={isMotorRunning ? '#FACC15' : '#334155'}
            strokeWidth="2.5"
            className={isMotorRunning ? 'animate-current-flow' : ''}
          />

          {/* Motor 3 Fasa Symbol */}
          <circle
            cx="540"
            cy="152"
            r="38"
            fill="#111C33"
            stroke={isMotorRunning ? '#FACC15' : '#475569'}
            strokeWidth="2.2"
          />
          <text
            x="540"
            y="148"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="16"
            fontWeight="700"
            fontFamily="Outfit, sans-serif"
          >
            M 3~
          </text>
          <text
            x="540"
            y="166"
            textAnchor="middle"
            fill={isMotorRunning ? '#FACC15' : '#94A3B8'}
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
          >
            {isMotorRunning ? '1450 RPM' : '0 RPM'}
          </text>

          {/* Grounding Earthing Line & Symbol */}
          <line x1="540" y1="190" x2="540" y2="232" stroke="#22C55E" strokeWidth="2" />
          <line x1="522" y1="232" x2="558" y2="232" stroke="#22C55E" strokeWidth="2.2" />
          <line x1="528" y1="239" x2="552" y2="239" stroke="#22C55E" strokeWidth="2.2" />
          <line x1="534" y1="246" x2="546" y2="246" stroke="#22C55E" strokeWidth="2.2" />
          <text
            x="568"
            y="241"
            fill="#4ADE80"
            fontSize="10.5"
            fontFamily="JetBrains Mono, monospace"
          >
            PE Grounding &lt; 2 Ω
          </text>

          {/* Lighting Feeder Branch */}
          <line x1="115" y1="30" x2="115" y2="220" stroke="#EF4444" strokeWidth="1.75" />
          <rect
            x="70"
            y="220"
            width="165"
            height="36"
            rx="6"
            fill="#111C33"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <text
            x="152"
            y="242"
            textAnchor="middle"
            fill="#CBD5E1"
            fontSize="10.5"
            fontFamily="JetBrains Mono, monospace"
          >
            MCB 1P 10A · Penerangan 220V
          </text>
        </svg>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <span className="font-mono tabular-nums">
          Tegangan Jalur: {breakerClosed ? '398.4 V (L-L) / 229.8 V (L-N)' : '0.0 V (Terisolasi)'}
        </span>
        <span className="font-mono tabular-nums">
          Status Proteksi: {isMotorRunning ? 'Normal · Beban 8.4 A' : 'Aman · Rangkaian Terbuka'}
        </span>
      </div>
    </div>
  );
}
