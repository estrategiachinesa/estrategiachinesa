'use client';

import { useEffect, useState, useId } from 'react';
import { cn } from '@/lib/utils';
import { Cpu, Zap, Activity, ShieldCheck, Search, Database } from 'lucide-react';

const analysisSteps = [
  'INICIALIZANDO ANÁLISE...',
  'FILTRANDO RUÍDO DO MERCADO...',
  'MAPEANDO FLUXO INSTITUCIONAL...',
  'IDENTIFICANDO CONFLUÊNCIAS...',
  'CALCULANDO ASSERTIVIDADE...',
  'SINCRONIZANDO SINAL...',
];

export function AnalysisAnimation({ showProgressBar = true }: { showProgressBar?: boolean }) {
  const [currentText, setCurrentText] = useState(analysisSteps[0]);
  const [progress, setProgress] = useState(0);
  const uniqueId = useId().replace(/:/g, '');
  const geggaId = `gegga-${uniqueId}`;
  const linearId = `linear-${uniqueId}`;
  const gradientId = `gradient-${uniqueId}`;

  useEffect(() => {
    let textIndex = 0;
    const interval = setInterval(() => {
      textIndex++;
      if (textIndex < analysisSteps.length) {
        setCurrentText(analysisSteps[textIndex]);
        setProgress((textIndex / (analysisSteps.length - 1)) * 100);
      } else {
        clearInterval(interval);
      }
    }, 850);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full max-w-2xl overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-primary/20 flex flex-col items-center justify-center p-8 gap-8 transition-all duration-500 shadow-2xl shadow-primary/5 min-h-[350px]">
      
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10 animate-pulse" />
      
      {/* Visual Core Analysis */}
      <div className="relative flex items-center justify-center scale-110 md:scale-125 mb-4 w-48 h-48 rounded-full overflow-hidden bg-black/60 shadow-[0_0_50px_rgba(247,0,168,0.15)]">
        <style>{`
          .gegga {
            width: 0;
            height: 0;
            position: absolute;
          }

          .snurra-${uniqueId} {
            filter: url(#${geggaId});
          }

          .stopp1-${uniqueId} {
            stop-color: #f700a8;
          }

          .stopp2-${uniqueId} {
            stop-color: #ff8000;
          }

          .halvan-${uniqueId} {
            animation: Snurra1-${uniqueId} 10s infinite linear;
            stroke-dasharray: 180 800;
            fill: none;
            stroke: url(#${gradientId});
            stroke-width: 23;
            stroke-linecap: round;
          }

          .strecken-${uniqueId} {
            animation: Snurra1-${uniqueId} 3s infinite linear;
            stroke-dasharray: 26 54;
            fill: none;
            stroke: url(#${gradientId});
            stroke-width: 23;
            stroke-linecap: round;
          }

          .skugga-${uniqueId} {
            filter: blur(5px);
            opacity: 0.3;
            position: absolute;
            transform: translate(3px, 3px);
          }

          @keyframes Snurra1-${uniqueId} {
            0% {
              stroke-dashoffset: 0;
            }

            100% {
              stroke-dashoffset: -403px;
            }
          }
        `}</style>

        <div className="relative flex items-center justify-center w-full h-full">
          <svg className="gegga">
            <defs>
              <filter id={geggaId}>
                <feGaussianBlur in="SourceGraphic" stdDeviation={7} result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="inreGegga" />
                <feComposite in="SourceGraphic" in2="inreGegga" operator="atop" />
              </filter>
            </defs>
          </svg>
          
          {/* Shadow layer */}
          <svg className={`skugga-${uniqueId}`} width={160} height={160} viewBox="0 0 200 200">
            <path className={`halvan-${uniqueId}`} d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64" />
            <circle className={`strecken-${uniqueId}`} cx={100} cy={100} r={64} />
          </svg>

          {/* Active spinner layer */}
          <svg className={`snurra-${uniqueId}`} width={160} height={160} viewBox="0 0 200 200">
            <defs>
              <linearGradient id={linearId}>
                <stop className={`stopp1-${uniqueId}`} offset={0} />
                <stop className={`stopp2-${uniqueId}`} offset={1} />
              </linearGradient>
              <linearGradient y2={160} x2={160} y1={40} x1={40} gradientUnits="userSpaceOnUse" id={gradientId} href={`#${linearId}`} xlinkHref={`#${linearId}`} />
            </defs>
            <path className={`halvan-${uniqueId}`} d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64" />
            <circle className={`strecken-${uniqueId}`} cx={100} cy={100} r={64} />
          </svg>
        </div>
      </div>

      {/* Dynamic Analysis Text */}
      <div className="w-full space-y-6 z-10 text-center">
        <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 bg-black/40 px-4 py-1.5 rounded-full border border-white/5">
                <Search className="h-3.5 w-3.5 text-primary/60 animate-bounce" />
                <span className="text-[0.65rem] md:text-[0.7rem] font-black text-primary uppercase tracking-[0.3em] font-mono">
                    {currentText}
                </span>
            </div>
            
            <div className="flex items-center gap-6 opacity-40">
                <div className="flex items-center gap-1.5">
                    <Activity className="h-3 w-3 text-primary" />
                    <span className="text-[0.55rem] font-bold uppercase tracking-tighter">Fluxo: Ativo</span>
                </div>
                <div className="h-3 w-px bg-white/10" />
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3 text-primary" />
                    <span className="text-[0.55rem] font-bold uppercase tracking-tighter">Sync: Seguro</span>
                </div>
            </div>
        </div>

        {showProgressBar && (
          <div className="w-full max-w-sm mx-auto space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="flex justify-between items-end px-1">
                <div className="flex flex-col items-start">
                  <span className="text-[0.5rem] font-black text-muted-foreground uppercase tracking-widest opacity-40 leading-none">Processamento Deep-Scan</span>
                  <span className="text-[0.6rem] font-bold text-white/60 uppercase">Motor V.2026</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-mono font-black text-primary leading-none">{Math.round(progress)}%</span>
                </div>
            </div>
            
            <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <div 
                    className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(255,0,0,0.4)] relative"
                    style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-[-20deg]" />
                </div>
            </div>
          </div>
        )}
      </div>

      {/* Interface Corner Ornaments (HUD Style) */}
      <div className="absolute top-5 left-5 h-6 w-6 border-t-[3px] border-l-[3px] border-primary/40 rounded-tl-lg" />
      <div className="absolute top-5 right-5 h-6 w-6 border-t-[3px] border-r-[3px] border-primary/40 rounded-tr-lg" />
      <div className="absolute bottom-5 left-5 h-6 w-6 border-b-[3px] border-l-[3px] border-primary/40 rounded-bl-lg" />
      <div className="absolute bottom-5 right-5 h-6 w-6 border-b-[3px] border-r-[3px] border-primary/40 rounded-br-lg" />
      
      {/* Decorative vertical lines */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 right-4 -translate-y-1/2 w-0.5 h-12 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      
    </div>
  );
}