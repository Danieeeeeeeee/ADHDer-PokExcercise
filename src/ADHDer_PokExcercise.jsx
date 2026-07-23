import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#0f0f0f", card: "#1a1a1a", cardHover: "#222", border: "#2a2a2a",
  accent: "#e8ff4a", accentDim: "#b8cc2a", red: "#ff4a4a", blue: "#4a9eff",
  green: "#4aff8c", purple: "#c084fc", text: "#f0f0f0", muted: "#888",
  push: "#ff6b35", pull: "#4a9eff", legs: "#4aff8c", rope: "#c084fc",
};

// ─── Improved SVG Diagrams ───────────────────────────────────────────────────
function ExerciseDiagram({ type }) {
  const s = { background: "#111", borderRadius: 8, display: "block" };

  const Head = ({ cx, cy, r = 11 }) => (
    <>
      <circle cx={cx} cy={cy} r={r} fill="#f5c97a" stroke="#d4a843" strokeWidth="1"/>
      <circle cx={cx - 3} cy={cy - 2} r="1.5" fill="#555"/>
      <circle cx={cx + 3} cy={cy - 2} r="1.5" fill="#555"/>
      <path d={`M${cx-3} ${cy+3} Q${cx} ${cy+5} ${cx+3} ${cy+3}`} stroke="#888" strokeWidth="1" fill="none"/>
    </>
  );

  if (type === "pushup") return (
    <svg width="220" height="130" style={s} viewBox="0 0 220 130">
      <defs>
        <linearGradient id="bodyG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <marker id="arrowD" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C.accent}/>
        </marker>
      </defs>
      {/* Floor */}
      <rect x="0" y="105" width="220" height="25" fill="#1a1a1a" rx="2"/>
      <line x1="0" y1="105" x2="220" y2="105" stroke="#444" strokeWidth="1.5"/>
      {/* Body plank */}
      <rect x="25" y="78" width="140" height="16" rx="8" fill="url(#bodyG)" opacity="0.9"/>
      {/* Spine line */}
      <line x1="30" y1="86" x2="155" y2="86" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
      <Head cx={175} cy={72}/>
      {/* Neck */}
      <line x1="175" y1="83" x2="165" y2="87" stroke="#d4a843" strokeWidth="3" strokeLinecap="round"/>
      {/* Arms */}
      <line x1="60" y1="88" x2="60" y2="105" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="100" y1="88" x2="100" y2="105" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      {/* Hands */}
      <ellipse cx="60" cy="106" rx="6" ry="3" fill="#d4a843"/>
      <ellipse cx="100" cy="106" rx="6" ry="3" fill="#d4a843"/>
      {/* Legs */}
      <line x1="30" y1="90" x2="15" y2="105" stroke="#f5c97a" strokeWidth="6" strokeLinecap="round"/>
      <ellipse cx="14" cy="106" rx="6" ry="3" fill="#555"/>
      {/* Arrow */}
      <line x1="80" y1="48" x2="80" y2="72" stroke={C.accent} strokeWidth="2" markerEnd="url(#arrowD)"/>
      <text x="110" y="44" fill={C.accent} fontSize="9" fontWeight="700">BAJA EL PECHO</text>
      <text x="110" y="56" fill={C.muted} fontSize="9">lento · 2 seg</text>
      {/* Labels */}
      <text x="60" y="120" fill={C.muted} fontSize="8" textAnchor="middle">manos</text>
      <text x="110" y="120" fill="#60a5fa" fontSize="8" textAnchor="middle">cuerpo recto</text>
    </svg>
  );

  if (type === "press") return (
    <svg width="220" height="140" style={s} viewBox="0 0 220 140">
      <defs>
        <linearGradient id="benchG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#555"/>
          <stop offset="100%" stopColor="#333"/>
        </linearGradient>
        <marker id="arrowU" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,6 L3,0 L6,6 Z" fill={C.accent}/>
        </marker>
      </defs>
      {/* Bench */}
      <rect x="35" y="88" width="140" height="14" rx="4" fill="url(#benchG)"/>
      <rect x="45" y="102" width="10" height="20" rx="2" fill="#333"/>
      <rect x="155" y="102" width="10" height="20" rx="2" fill="#333"/>
      {/* Cushion texture */}
      <rect x="37" y="88" width="136" height="6" rx="3" fill="#666" opacity="0.4"/>
      {/* Body lying */}
      <rect x="40" y="70" width="120" height="18" rx="9" fill="#2563eb" opacity="0.85"/>
      <Head cx={170} cy={73}/>
      <line x1="170" y1="84" x2="160" y2="79" stroke="#d4a843" strokeWidth="3" strokeLinecap="round"/>
      {/* Arms with dumbbells raised */}
      <line x1="72" y1="71" x2="58" y2="42" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="118" y1="71" x2="130" y2="42" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      {/* Dumbbells */}
      <rect x="48" y="35" width="20" height="10" rx="3" fill="#666"/>
      <rect x="50" y="33" width="4" height="14" rx="2" fill="#888"/>
      <rect x="62" y="33" width="4" height="14" rx="2" fill="#888"/>
      <rect x="120" y="35" width="20" height="10" rx="3" fill="#666"/>
      <rect x="122" y="33" width="4" height="14" rx="2" fill="#888"/>
      <rect x="134" y="33" width="4" height="14" rx="2" fill="#888"/>
      {/* Arrow */}
      <line x1="100" y1="75" x2="100" y2="45" stroke={C.accent} strokeWidth="1.5" strokeDasharray="3,2"/>
      {/* Feet on floor */}
      <ellipse cx="42" cy="126" rx="8" ry="4" fill="#555"/>
      <ellipse cx="56" cy="126" rx="8" ry="4" fill="#555"/>
      <text x="110" y="128" fill={C.muted} fontSize="8" textAnchor="middle">pies planos • espalda apoyada</text>
      <text x="100" y="18" fill={C.accent} fontSize="9" textAnchor="middle" fontWeight="700">EMPUJA HACIA ARRIBA</text>
    </svg>
  );

  if (type === "trxrow") return (
    <svg width="220" height="140" style={s} viewBox="0 0 220 140">
      <defs>
        <marker id="arrowR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C.accent}/>
        </marker>
      </defs>
      {/* Ceiling */}
      <rect x="0" y="0" width="220" height="12" fill="#222"/>
      <rect x="85" y="8" width="50" height="10" rx="3" fill="#444"/>
      {/* TRX anchor */}
      <circle cx="110" cy="14" r="5" fill="#888"/>
      {/* Straps */}
      <line x1="110" y1="19" x2="82" y2="65" stroke={C.accent} strokeWidth="3"/>
      <line x1="110" y1="19" x2="138" y2="65" stroke={C.accent} strokeWidth="3"/>
      {/* Handles */}
      <rect x="75" y="62" width="14" height="8" rx="4" fill="#666"/>
      <rect x="131" y="62" width="14" height="8" rx="4" fill="#666"/>
      {/* Body leaning back at angle */}
      <g transform="rotate(-25, 110, 80)">
        <rect x="70" y="72" width="80" height="16" rx="8" fill="#2563eb" opacity="0.85"/>
      </g>
      <Head cx={148} cy={58}/>
      <line x1="148" y1="69" x2="140" y2="74" stroke="#d4a843" strokeWidth="3" strokeLinecap="round"/>
      {/* Arms bent pulling */}
      <line x1="89" y1="66" x2="96" y2="76" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="145" y1="66" x2="138" y2="76" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      {/* Feet anchor */}
      <ellipse cx="65" cy="118" rx="10" ry="5" fill="#444"/>
      <ellipse cx="80" cy="118" rx="10" ry="5" fill="#444"/>
      {/* Arrow showing pull direction */}
      <line x1="115" y1="95" x2="115" y2="72" stroke={C.accent} strokeWidth="1.5" markerEnd="url(#arrowR)" strokeDasharray="3,2"/>
      <text x="110" y="132" fill={C.muted} fontSize="8" textAnchor="middle">jala hacia el pecho • omóplatos juntos</text>
      <text x="110" y="145" fill="#60a5fa" fontSize="8" textAnchor="middle">más inclinado = más difícil</text>
    </svg>
  );

  if (type === "goblet") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      <defs>
        <linearGradient id="legG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5c97a"/>
          <stop offset="100%" stopColor="#d4a843"/>
        </linearGradient>
      </defs>
      {/* Floor */}
      <rect x="0" y="138" width="220" height="12" fill="#1a1a1a"/>
      <line x1="0" y1="138" x2="220" y2="138" stroke="#444" strokeWidth="1.5"/>
      <Head cx={110} cy={22}/>
      {/* Torso */}
      <rect x="93" y="33" width="34" height="42" rx="8" fill="#16a34a" opacity="0.85"/>
      {/* Kettlebell held at chest */}
      <circle cx="110" cy="52" r="12" fill="#555"/>
      <rect x="103" y="39" width="14" height="7" rx="4" fill="#666" stroke="#777" strokeWidth="1"/>
      <circle cx="110" cy="52" r="7" fill="#444"/>
      {/* Upper legs spread */}
      <line x1="100" y1="75" x2="72" y2="108" stroke="url(#legG)" strokeWidth="9" strokeLinecap="round"/>
      <line x1="120" y1="75" x2="148" y2="108" stroke="url(#legG)" strokeWidth="9" strokeLinecap="round"/>
      {/* Lower legs */}
      <line x1="72" y1="108" x2="64" y2="138" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      <line x1="148" y1="108" x2="156" y2="138" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      {/* Feet */}
      <ellipse cx="60" cy="140" rx="12" ry="5" fill="#555"/>
      <ellipse cx="160" cy="140" rx="12" ry="5" fill="#555"/>
      {/* Knee angle indicator */}
      <path d="M72 108 Q55 115 64 138" stroke={C.accent} strokeWidth="1" fill="none" strokeDasharray="2,2" opacity="0.6"/>
      {/* Annotations */}
      <text x="30" y="108" fill={C.accent} fontSize="8" textAnchor="middle">rodilla</text>
      <text x="30" y="118" fill={C.accent} fontSize="8" textAnchor="middle">→ pie</text>
      <text x="110" y="148" fill={C.muted} fontSize="8" textAnchor="middle">espalda recta • talones en el suelo</text>
    </svg>
  );

  if (type === "deadlift") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      <defs>
        <marker id="arrowH" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C.accent}/>
        </marker>
      </defs>
      {/* Floor */}
      <rect x="0" y="136" width="220" height="14" fill="#1a1a1a"/>
      <line x1="0" y1="136" x2="220" y2="136" stroke="#444" strokeWidth="1.5"/>
      <Head cx={110} cy={20}/>
      {/* Torso slight forward lean */}
      <rect x="96" y="31" width="28" height="45" rx="7" fill="#16a34a" opacity="0.85" transform="rotate(8,110,54)"/>
      {/* Arms straight down */}
      <line x1="97" y1="48" x2="82" y2="110" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="123" y1="48" x2="138" y2="110" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      {/* Dumbbells */}
      <rect x="68" y="108" width="24" height="12" rx="3" fill="#555"/>
      <rect x="70" y="106" width="5" height="16" rx="2" fill="#777"/>
      <rect x="85" y="106" width="5" height="16" rx="2" fill="#777"/>
      <rect x="124" y="108" width="24" height="12" rx="3" fill="#555"/>
      <rect x="126" y="106" width="5" height="16" rx="2" fill="#777"/>
      <rect x="141" y="106" width="5" height="16" rx="2" fill="#777"/>
      {/* Legs */}
      <line x1="104" y1="76" x2="95" y2="136" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      <line x1="116" y1="76" x2="125" y2="136" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      <ellipse cx="93" cy="138" rx="11" ry="4" fill="#555"/>
      <ellipse cx="127" cy="138" rx="11" ry="4" fill="#555"/>
      {/* Hip arrow */}
      <path d="M140 60 Q165 55 168 75" stroke={C.accent} strokeWidth="1.5" fill="none" markerEnd="url(#arrowH)"/>
      <text x="148" y="50" fill={C.accent} fontSize="8">caderas</text>
      <text x="148" y="60" fill={C.accent} fontSize="8">atrás →</text>
      <text x="110" y="148" fill={C.muted} fontSize="8" textAnchor="middle">espalda recta • empuja caderas atrás</text>
    </svg>
  );

  if (type === "lunge") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      {/* Floor */}
      <rect x="0" y="138" width="220" height="12" fill="#1a1a1a"/>
      <line x1="0" y1="138" x2="220" y2="138" stroke="#444" strokeWidth="1.5"/>
      <Head cx={120} cy={20}/>
      {/* Torso upright */}
      <rect x="107" y="31" width="26" height="40" rx="7" fill="#16a34a" opacity="0.85"/>
      {/* Arms with dumbbells at sides */}
      <line x1="108" y1="42" x2="88" y2="70" stroke="#f5c97a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="132" y1="42" x2="152" y2="70" stroke="#f5c97a" strokeWidth="4" strokeLinecap="round"/>
      <rect x="78" y="68" width="18" height="8" rx="3" fill="#555"/>
      <rect x="80" y="66" width="4" height="12" rx="2" fill="#777"/>
      <rect x="90" y="66" width="4" height="12" rx="2" fill="#777"/>
      <rect x="150" y="68" width="18" height="8" rx="3" fill="#555"/>
      <rect x="152" y="66" width="4" height="12" rx="2" fill="#777"/>
      <rect x="162" y="66" width="4" height="12" rx="2" fill="#777"/>
      {/* Front leg */}
      <line x1="114" y1="71" x2="85" y2="106" stroke="#f5c97a" strokeWidth="8" strokeLinecap="round"/>
      <line x1="85" y1="106" x2="78" y2="138" stroke="#d4a843" strokeWidth="7" strokeLinecap="round"/>
      <ellipse cx="75" cy="139" rx="12" ry="4" fill="#444"/>
      {/* Back leg */}
      <line x1="126" y1="71" x2="148" y2="100" stroke="#f5c97a" strokeWidth="8" strokeLinecap="round"/>
      <line x1="148" y1="100" x2="155" y2="138" stroke="#d4a843" strokeWidth="7" strokeLinecap="round"/>
      <ellipse cx="157" cy="139" rx="12" ry="4" fill="#444"/>
      {/* Back knee near floor indicator */}
      <circle cx="148" cy="100" r="5" fill="none" stroke={C.accent} strokeWidth="1.5" strokeDasharray="2,2"/>
      <text x="162" y="98" fill={C.accent} fontSize="8">rodilla</text>
      <text x="162" y="108" fill={C.accent} fontSize="8">↓ suelo</text>
      <text x="110" y="150" fill={C.muted} fontSize="8" textAnchor="middle">torso recto • rodilla delantera no pasa el pie</text>
    </svg>
  );

  if (type === "curl") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      <defs>
        <marker id="arrowC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={C.accent}/>
        </marker>
      </defs>
      {/* Floor */}
      <rect x="0" y="138" width="220" height="12" fill="#1a1a1a"/>
      <line x1="0" y1="138" x2="220" y2="138" stroke="#444" strokeWidth="1.5"/>
      <Head cx={110} cy={20}/>
      {/* Torso */}
      <rect x="96" y="31" width="28" height="50" rx="7" fill="#2563eb" opacity="0.85"/>
      {/* Left arm curled up */}
      <line x1="96" y1="45" x2="68" y2="58" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="68" y1="58" x2="72" y2="82" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <rect x="62" y="82" width="18" height="8" rx="3" fill="#555"/>
      <rect x="64" y="80" width="4" height="12" rx="2" fill="#777"/>
      <rect x="74" y="80" width="4" height="12" rx="2" fill="#777"/>
      {/* Right arm down (other position) */}
      <line x1="124" y1="45" x2="148" y2="60" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="148" y1="60" x2="148" y2="100" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <rect x="138" y="100" width="18" height="8" rx="3" fill="#555"/>
      <rect x="140" y="98" width="4" height="12" rx="2" fill="#777"/>
      <rect x="150" y="98" width="4" height="12" rx="2" fill="#777"/>
      {/* Elbow pin indicator */}
      <circle cx="68" cy="58" r="5" fill="none" stroke="#ff6b35" strokeWidth="1.5"/>
      <circle cx="148" cy="60" r="5" fill="none" stroke="#ff6b35" strokeWidth="1.5"/>
      {/* Curl arc arrow */}
      <path d="M72 95 Q50 75 68 50" stroke={C.accent} strokeWidth="1.5" fill="none" markerEnd="url(#arrowC)" strokeDasharray="3,2"/>
      {/* Labels */}
      <text x="42" y="58" fill="#ff6b35" fontSize="8" textAnchor="middle">codo</text>
      <text x="42" y="68" fill="#ff6b35" fontSize="8" textAnchor="middle">FIJO</text>
      <text x="110" y="125" fill={C.muted} fontSize="8" textAnchor="middle">izq: posición alta · der: posición baja</text>
      <text x="110" y="136" fill="#60a5fa" fontSize="8" textAnchor="middle">baja lento (3 seg) = más músculo</text>
    </svg>
  );

  if (type === "trxpush") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      {/* Ceiling */}
      <rect x="0" y="0" width="220" height="12" fill="#222"/>
      <rect x="85" y="8" width="50" height="10" rx="3" fill="#444"/>
      <circle cx="110" cy="14" r="5" fill="#888"/>
      {/* Straps */}
      <line x1="110" y1="19" x2="78" y2="65" stroke={C.accent} strokeWidth="3"/>
      <line x1="110" y1="19" x2="130" y2="65" stroke={C.accent} strokeWidth="3"/>
      {/* Handles */}
      <rect x="70" y="62" width="14" height="8" rx="4" fill="#666"/>
      <rect x="126" y="62" width="14" height="8" rx="4" fill="#666"/>
      {/* Body leaning forward - plank position */}
      <g transform="rotate(18, 95, 80)">
        <rect x="58" y="72" width="85" height="16" rx="8" fill="#2563eb" opacity="0.85"/>
      </g>
      <Head cx={55} cy={58}/>
      <line x1="55" y1="69" x2="65" y2="75" stroke="#d4a843" strokeWidth="3" strokeLinecap="round"/>
      {/* Arms bent */}
      <line x1="84" y1="66" x2="76" y2="77" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="140" y1="66" x2="130" y2="76" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      {/* Feet on floor */}
      <ellipse cx="148" cy="128" rx="10" ry="5" fill="#444"/>
      <ellipse cx="163" cy="128" rx="10" ry="5" fill="#444"/>
      {/* Difficulty indicator */}
      <text x="20" y="100" fill={C.accent} fontSize="8">más</text>
      <text x="16" y="110" fill={C.accent} fontSize="8">inclinado</text>
      <text x="16" y="120" fill={C.accent} fontSize="8">= difícil</text>
      <text x="110" y="143" fill={C.muted} fontSize="8" textAnchor="middle">cuerpo recto • core apretado todo el tiempo</text>
    </svg>
  );

  if (type === "legext") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      {/* Bench */}
      <rect x="30" y="65" width="160" height="20" rx="5" fill="#444"/>
      <rect x="40" y="85" width="12" height="40" rx="3" fill="#333"/>
      <rect x="168" y="85" width="12" height="40" rx="3" fill="#333"/>
      {/* Person seated */}
      <Head cx={170} cy={42}/>
      {/* Torso */}
      <rect x="140" y="53" width="26" height="36" rx="7" fill="#2563eb" opacity="0.85"/>
      {/* Upper leg on bench */}
      <line x1="140" y1="75" x2="75" y2="80" stroke="#f5c97a" strokeWidth="10" strokeLinecap="round"/>
      {/* Lower leg extended (extended position) */}
      <line x1="75" y1="80" x2="55" y2="115" stroke="#d4a843" strokeWidth="9" strokeLinecap="round"/>
      {/* Foot pad of machine */}
      <rect x="40" y="112" width="22" height="10" rx="4" fill="#666"/>
      {/* Arrow showing extension */}
      <path d="M65 118 Q45 100 55 85" stroke={C.accent} strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
      <text x="18" y="90" fill={C.accent} fontSize="8">extiende</text>
      <text x="18" y="100" fill={C.accent} fontSize="8">la pierna</text>
      {/* Seated legs */}
      <line x1="140" y1="89" x2="148" y2="120" stroke="#f5c97a" strokeWidth="8" strokeLinecap="round"/>
      <ellipse cx="148" cy="122" rx="10" ry="4" fill="#444"/>
      <text x="110" y="140" fill={C.muted} fontSize="8" textAnchor="middle">sentado en banco · extiende lento · aprieta cuádriceps</text>
    </svg>
  );

  if (type === "legcurl") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      {/* Bench face down */}
      <rect x="30" y="55" width="160" height="18" rx="5" fill="#444"/>
      <rect x="42" y="73" width="12" height="40" rx="3" fill="#333"/>
      <rect x="166" y="73" width="12" height="40" rx="3" fill="#333"/>
      {/* Person lying face down */}
      <rect x="40" y="40" width="140" height="15" rx="7" fill="#2563eb" opacity="0.85"/>
      <Head cx={188} cy={40}/>
      {/* Legs */}
      <line x1="55" y1="48" x2="45" y2="72" stroke="#f5c97a" strokeWidth="9" strokeLinecap="round"/>
      <line x1="75" y1="48" x2="72" y2="72" stroke="#f5c97a" strokeWidth="9" strokeLinecap="round"/>
      {/* Lower legs curled up */}
      <line x1="45" y1="72" x2="38" y2="45" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      <line x1="72" y1="72" x2="65" y2="45" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      {/* Foot pad */}
      <rect x="30" y="38" width="22" height="10" rx="4" fill="#666"/>
      {/* Curl arc arrow */}
      <path d="M38 68 Q22 55 36 40" stroke={C.accent} strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
      <text x="8" y="55" fill={C.accent} fontSize="8">curl</text>
      <text x="8" y="65" fill={C.accent} fontSize="8">↑</text>
      <text x="110" y="120" fill={C.muted} fontSize="8" textAnchor="middle">boca abajo · jala talones a glúteos · lento</text>
    </svg>
  );

  if (type === "stepup") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      <rect x="0" y="136" width="220" height="14" fill="#1a1a1a"/>
      <line x1="0" y1="136" x2="220" y2="136" stroke="#444" strokeWidth="1.5"/>
      {/* Bench/step */}
      <rect x="100" y="100" width="100" height="36" rx="4" fill="#444"/>
      <rect x="102" y="100" width="96" height="8" rx="3" fill="#555"/>
      <Head cx={155} cy={55}/>
      {/* Torso */}
      <rect x="142" y="66" width="26" height="42" rx="7" fill="#16a34a" opacity="0.85"/>
      {/* Leg on bench */}
      <line x1="150" y1="108" x2="150" y2="136" stroke="#d4a843" strokeWidth="9" strokeLinecap="round"/>
      <ellipse cx="150" cy="101" rx="12" ry="5" fill="#555"/>
      {/* Other leg on floor */}
      <line x1="158" y1="108" x2="170" y2="136" stroke="#f5c97a" strokeWidth="9" strokeLinecap="round"/>
      <ellipse cx="172" cy="137" rx="12" ry="4" fill="#444"/>
      {/* Dumbbells at sides */}
      <line x1="142" y1="78" x2="124" y2="100" stroke="#f5c97a" strokeWidth="4" strokeLinecap="round"/>
      <rect x="114" y="98" width="16" height="7" rx="3" fill="#555"/>
      {/* Arrow up */}
      <line x1="110" y1="95" x2="110" y2="65" stroke={C.accent} strokeWidth="2" strokeDasharray="3,2"/>
      <text x="95" y="62" fill={C.accent} fontSize="8" textAnchor="middle">sube</text>
      <text x="110" y="148" fill={C.muted} fontSize="8" textAnchor="middle">empuja con el talón del pie en banco</text>
    </svg>
  );

  if (type === "rowhammer") return (
    <svg width="220" height="150" style={s} viewBox="0 0 220 150">
      <rect x="0" y="136" width="220" height="14" fill="#1a1a1a"/>
      <line x1="0" y1="136" x2="220" y2="136" stroke="#444" strokeWidth="1.5"/>
      {/* Bench */}
      <rect x="80" y="65" width="100" height="16" rx="4" fill="#444"/>
      <rect x="90" y="81" width="10" height="30" rx="2" fill="#333"/>
      <rect x="162" y="81" width="10" height="30" rx="2" fill="#333"/>
      {/* Person in position */}
      <Head cx={190} cy={50}/>
      <rect x="155" y="62" width="22" height="38" rx="6" fill="#2563eb" opacity="0.8"/>
      {/* Support arm on bench */}
      <line x1="155" y1="75" x2="130" y2="65" stroke="#f5c97a" strokeWidth="4" strokeLinecap="round"/>
      <ellipse cx="128" cy="64" rx="6" ry="3" fill="#d4a843"/>
      {/* Pulling arm */}
      <line x1="155" y1="80" x2="128" y2="100" stroke="#f5c97a" strokeWidth="5" strokeLinecap="round"/>
      <rect x="118" y="98" width="18" height="9" rx="3" fill="#555"/>
      <rect x="120" y="96" width="4" height="13" rx="2" fill="#777"/>
      <rect x="130" y="96" width="4" height="13" rx="2" fill="#777"/>
      {/* Knee on bench */}
      <line x1="165" y1="100" x2="165" y2="65" stroke="#d4a843" strokeWidth="8" strokeLinecap="round"/>
      {/* Other leg floor */}
      <line x1="177" y1="100" x2="185" y2="136" stroke="#f5c97a" strokeWidth="8" strokeLinecap="round"/>
      <ellipse cx="186" cy="137" rx="11" ry="4" fill="#444"/>
      {/* Pull arrow */}
      <path d="M118 110 Q108 90 120 75" stroke={C.accent} strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
      <text x="95" y="80" fill={C.accent} fontSize="8">jala al</text>
      <text x="95" y="90" fill={C.accent} fontSize="8">costado</text>
      <text x="110" y="148" fill={C.muted} fontSize="8" textAnchor="middle">espalda paralela al suelo · codo arriba</text>
    </svg>
  );

  return <div style={{ width: 200, height: 120, background: "#111", borderRadius: 8 }}/>;
}

// ─── YouTube link component ───────────────────────────────────────────────────
function VideoLink({ url, label = "Ver video de referencia ▶" }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8,
        background: "#ff000022", border: "1px solid #ff000055", borderRadius: 6,
        padding: "5px 10px", color: "#ff4444", fontSize: 12, fontWeight: 700,
        textDecoration: "none" }}>
      ▶ {label}
    </a>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const WORKOUTS = {
  push: {
    label: "PUSH", color: "#ff6b35", emoji: "💪",
    desc: "Pecho • Hombros • Tríceps",
    warmup: "5 min cuerda — saltos básicos, ritmo cómodo",
    exercises: [
      {
        name: "Push-Up en Banco / Suelo",
        sets: "3 × 8-12 reps", rest: "60 seg",
        muscle: "Pecho + Tríceps",
        diagram: "pushup",
        video: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        steps: [
          "Coloca las manos en el borde del banco (o en el suelo), separadas al ancho de hombros.",
          "El cuerpo debe formar UNA LÍNEA RECTA desde los talones hasta la cabeza. Activa el abdomen.",
          "Baja lentamente (2 segundos) hasta que el pecho casi toque la superficie.",
          "Empuja explosivamente hacia arriba. Exhala al subir.",
          "Si no puedes completar las reps, hazlas con las rodillas apoyadas en el suelo."
        ],
        tip: "🔑 Si el banco está más alto que el suelo, el ejercicio es más fácil. Empieza ahí.",
        alternates: [
          { name: "Push-Up Declinado (pies en banco)", diagram: "pushup", video: "https://www.youtube.com/watch?v=SKPab2YC8BE", desc: "Pies en el banco, manos en el suelo. Trabaja más la parte superior del pecho y hombros." },
          { name: "Dips entre dos sillas", diagram: "trxpush", video: "https://www.youtube.com/watch?v=2z8JmcrW-As", desc: "Usa dos sillas firmes. Baja el cuerpo entre ellas doblando los codos. Tríceps y pecho." }
        ]
      },
      {
        name: "Press con Mancuernas en Banco (Inclinado)",
        sets: "3 × 10 reps", rest: "60 seg",
        muscle: "Pecho Superior + Hombros",
        diagram: "press",
        video: "https://www.youtube.com/watch?v=8iPEnn-ltC8",
        steps: [
          "Siéntate en el banco ajustado a ~45°. Toma las mancuernas y acuéstate.",
          "Mancuernas a los lados del pecho, codos a 45° del cuerpo (no a 90°).",
          "Empuja hacia arriba y ligeramente hacia el centro. Los pulgares casi se tocan arriba.",
          "Baja lentamente — el control al bajar es la mitad del trabajo.",
          "Pies planos en el suelo todo el tiempo."
        ],
        tip: "🔑 Empieza con las mancuernas más ligeras que crees necesitar. La técnica primero.",
        alternates: [
          { name: "Press Plano en Suelo con Mancuernas", diagram: "press", video: "https://www.youtube.com/watch?v=VmB1G1K7v94", desc: "Acostado en el suelo (sin banco). Los codos tocan el piso al bajar — rango de movimiento limitado, más seguro para principiantes." }
        ]
      },
      {
        name: "TRX Push-Up (Fondos en correas)",
        sets: "3 × 8-10 reps", rest: "60 seg",
        muscle: "Pecho + Core + Estabilizadores",
        diagram: "trxpush",
        video: "https://www.youtube.com/watch?v=xf5oUFbNS0I",
        steps: [
          "Ajusta las correas TRX a la altura de la cadera.",
          "Toma las manijas, estira los brazos y sepárate del punto de anclaje.",
          "Cuanto más inclinado hacia adelante, más difícil. Empieza casi vertical.",
          "Baja el pecho controlando la caída. El cuerpo va ENTERO, no solo el torso.",
          "Empuja de regreso. Si se mueve, más fácil es mejor que doblarse."
        ],
        tip: "🔑 Las TRX inestables son el secreto — tu core trabaja TODO el tiempo sin que lo notes.",
        alternates: [
          { name: "Press de Hombros con Mancuernas (sentado)", diagram: "press", video: "https://www.youtube.com/watch?v=qEwKCR5JCog", desc: "Sentado en banco a 90°. Empuja las mancuernas hacia arriba sobre la cabeza. Trabaja hombros directamente." }
        ]
      }
    ],
    finisher: { name: "💥 FINISHER — Máx Push-Ups en 60 seg", metric: "push_ups", unit: "reps", prepSec: 10, workSec: 60 },
    bonus: {
      name: "Pike Push-Up",
      sets: "2 × 8-10 reps", rest: "60 seg",
      muscle: "Hombros + Tríceps",
      diagram: "deadlift",
      video: "https://www.youtube.com/watch?v=EA4pKpn4s-E",
      steps: [
        "Desde el suelo, forma una V invertida con tu cuerpo: manos y pies en el suelo, caderas arriba.",
        "Las manos separadas al ancho de hombros, dedos apuntando ligeramente hacia adentro.",
        "Dobla los codos y baja la cabeza hacia el suelo entre las manos.",
        "Empuja de regreso a la posición de V. Exhala al subir.",
        "Cuanto más verticales estén tus caderas, más difícil — empieza con ángulo cómodo."
      ],
      tip: "🔑 Este es el ejercicio que más define los hombros sin equipo. Es el paso previo al handstand push-up."
    }
  },
  pull: {
    label: "PULL", color: "#4a9eff", emoji: "🔙",
    desc: "Espalda • Bíceps",
    warmup: "5 min cuerda — alterna entre saltos básicos y boxer skip",
    exercises: [
      {
        name: "TRX Row (Remo en correas)",
        sets: "3 × 10-12 reps", rest: "60 seg",
        muscle: "Espalda Media + Bíceps",
        diagram: "trxrow",
        video: "https://www.youtube.com/watch?v=hFdGJNMKkBQ",
        steps: [
          "Ajusta las correas TRX a altura de cintura aproximadamente.",
          "Toma las manijas y camina los pies hacia adelante hasta que tu cuerpo esté inclinado hacia atrás.",
          "Cuanto más recostado estés, más difícil. Empieza a ~45°.",
          "Jala las manijas hacia tu pecho mientras los codos van hacia atrás.",
          "Aprieta la espalda en lo más alto. Baja lento y controlado."
        ],
        tip: "🔑 Imagina que tienes un lápiz entre los omóplatos. Apriétalo al llegar arriba.",
        alternates: [
          { name: "Remo con Mancuerna (una mano en banco)", diagram: "rowhammer", video: "https://www.youtube.com/watch?v=rowhammer", desc: "Rodilla y mano apoyadas en banco. Jala la mancuerna hacia la cadera. Excelente para espalda unilateral." }
        ]
      },
      {
        name: "Curl de Bíceps con Mancuernas",
        sets: "3 × 10-12 reps", rest: "60 seg",
        muscle: "Bíceps",
        diagram: "curl",
        video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
        steps: [
          "De pie, pies separados al ancho de hombros. Una mancuerna en cada mano, palmas al frente.",
          "Los CODOS están pegados al cuerpo. No se mueven durante todo el ejercicio.",
          "Sube las mancuernas apretando el bíceps. Exhala al subir.",
          "Baja lentamente (3 segundos hacia abajo). Eso es donde más crece el músculo.",
          "No balancees el cuerpo. Si lo haces, el peso es demasiado."
        ],
        tip: "🔑 Puedes hacerlos alternando brazos para más control.",
        alternates: [
          { name: "Curl Martillo (pulgares arriba)", diagram: "curl", video: "https://www.youtube.com/watch?v=zC3nLlEvin4", desc: "Igual que el curl normal pero las palmas miran hacia adentro (como si cargara un martillo). Trabaja el bíceps braquial y antebrazo." }
        ]
      },
      {
        name: "TRX Face Pull",
        sets: "3 × 12-15 reps", rest: "60 seg",
        muscle: "Hombros Posteriores + Trapecios",
        diagram: "trxrow",
        video: "https://www.youtube.com/watch?v=rep-qVOkqgk",
        steps: [
          "Ajusta las TRX a altura de cara. Toma las manijas y párate frente al ancla.",
          "Inclínate ligeramente hacia atrás.",
          "Jala las manijas hacia tu cara, abriendo los codos a los lados (como una 'W').",
          "Aprieta los omóplatos juntos. Los nudillos apuntan hacia el techo al final.",
          "Regresa lento. Este ejercicio protege tus hombros a largo plazo."
        ],
        tip: "🔑 Muchas personas nunca trabajan esta área — es clave para la postura y verse definido de espaldas.",
        alternates: [
          { name: "Extensión de Tríceps con Mancuerna (overhead)", diagram: "curl", video: "https://www.youtube.com/watch?v=YbX7Wd8jQ-Q", desc: "De pie o sentado, sostén una mancuerna sobre la cabeza con ambas manos. Baja detrás de la cabeza doblando los codos. Tríceps largo." }
        ]
      }
    ],
    finisher: { name: "💥 FINISHER — Máx TRX Rows en 45 seg", metric: "trx_rows", unit: "reps", prepSec: 10, workSec: 45 },
    bonus: {
      name: "Curl de Martillo",
      sets: "2 × 12 reps", rest: "45 seg",
      muscle: "Braquial + Antebrazo",
      diagram: "curl",
      video: "https://www.youtube.com/watch?v=zC3nLlEvin4",
      steps: [
        "De pie, mancuernas a los lados con los pulgares apuntando hacia arriba — como si cargaras un martillo.",
        "Los codos pegados al cuerpo, no se mueven.",
        "Sube las mancuernas apretando el músculo. El pulgar siempre apunta al techo.",
        "Baja lentamente 3 segundos. Eso es donde más trabaja el braquial.",
        "Puedes alternar brazos o hacerlos simultáneamente."
      ],
      tip: "🔑 Los antebrazos definidos se notan muchísimo — son los primeros músculos que la gente ve en la vida diaria."
    }
  },
  legs: {
    label: "LEGS", color: "#4aff8c", emoji: "🦵",
    desc: "Cuádriceps • Isquios • Glúteos • Pantorrillas",
    warmup: "5 min cuerda — 1 min double bounce, 2 min básico, 2 min boxer skip",
    exercises: [
      {
        name: "Goblet Squat con Kettlebell",
        sets: "3 × 10 reps", rest: "60-90 seg",
        muscle: "Cuádriceps + Glúteos + Core",
        diagram: "goblet",
        video: "https://www.youtube.com/watch?v=MeIiIdhvXT4",
        steps: [
          "Sostén la kettlebell con AMBAS MANOS frente al pecho, como si fuera un cáliz.",
          "Pies separados un poco más del ancho de hombros. Puntillas ligeramente hacia afuera.",
          "Baja como si fueras a sentarte en una silla detrás de ti. La espalda RECTA.",
          "Rodillas apuntan hacia donde apuntan los pies. No hacia adentro.",
          "Baja hasta que los muslos queden paralelos al suelo (o lo más cerca que puedas).",
          "Sube empujando el suelo con los talones."
        ],
        tip: "🔑 El peso frente al pecho te obliga a mantener la espalda recta — perfecto para principiantes.",
        alternates: [
          { name: "Sentadilla Sumo con Kettlebell", diagram: "goblet", video: "https://www.youtube.com/watch?v=kkdmHTASZg8", desc: "Pies más separados y puntillas muy abiertas. Kettlebell colgando entre las piernas. Trabaja más el interior del muslo y glúteos." }
        ]
      },
      {
        name: "Leg Curl en Banco (Isquiotibiales)",
        sets: "3 × 12-15 reps", rest: "60 seg",
        muscle: "Isquiotibiales (aislado)",
        diagram: "legcurl",
        video: "https://www.youtube.com/watch?v=ELOCsoDSmrg",
        steps: [
          "Acuéstate boca abajo en el banco. Las rodillas deben quedar justo al borde.",
          "Coloca los tobillos detrás del rodillo acolchonado del banco.",
          "Jala los talones hacia los glúteos doblando las rodillas. Exhala al subir.",
          "Sostén 1 segundo arriba apretando el isquiotibial (parte posterior del muslo).",
          "Baja lentamente (3 segundos). El control al bajar es donde más trabaja el músculo.",
          "Los caderas permanecen pegadas al banco todo el tiempo — no los levantes."
        ],
        tip: "🔑 Movimiento aislado y seguro — no hay forma compleja que aprender. Perfecto para sentir y conectar con los isquiotibiales antes de pasar a movimientos compuestos.",
        alternates: [
          { name: "Peso Muerto Rumano con Mancuernas", diagram: "deadlift", video: "https://www.youtube.com/watch?v=2SHsk9AzdjA", desc: "Movimiento compuesto que trabaja isquios, glúteos y espalda baja. Requiere buena coordinación cadera-columna. Introdúcelo cuando sientas más control de la forma — empieza con peso muy ligero y frente a un espejo si es posible." },
          { name: "Good Mornings con Mancuernas", diagram: "deadlift", video: "https://www.youtube.com/watch?v=YA-h3n9L4YU", desc: "Mancuernas sobre los hombros, inclínate desde la cadera con espalda recta. Patrón similar al rumano pero más fácil de controlar para principiantes." }
        ]
      },
      {
        name: "Zancadas con Mancuernas (Lunges)",
        sets: "3 × 8 reps por pierna", rest: "60 seg",
        muscle: "Cuádriceps + Glúteos + Balance",
        diagram: "lunge",
        video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
        steps: [
          "De pie, mancuernas a los lados. Da un paso largo hacia adelante.",
          "Baja el cuerpo hasta que la rodilla TRASERA casi toque el suelo.",
          "La rodilla DELANTERA no debe pasar la punta del pie.",
          "El torso se mantiene recto — no te inclines hacia adelante.",
          "Empuja con el pie delantero para volver. Alterna piernas."
        ],
        tip: "🔑 Si pierdes el balance, hazlos estáticos: coloca el pie adelante y solo baja y sube.",
        alternates: [
          { name: "Step-Ups en Banco con Mancuernas", diagram: "stepup", video: "https://www.youtube.com/watch?v=dQqApCGd5Ss", desc: "Sube un pie al banco, empuja y sube todo el cuerpo. Baja controlado. Alterna piernas. Excelente para cuádriceps y glúteos con menos impacto en rodillas." }
        ]
      },

    ],
    finisher: { name: "💥 FINISHER — Máx Squats en 60 seg", metric: "squat_reps", unit: "reps", prepSec: 10, workSec: 60 },
    bonus: {
      name: "Leg Extension en Banco",
      sets: "2 × 12-15 reps", rest: "45 seg",
      muscle: "Cuádriceps (aislado)",
      diagram: "legext",
      video: "https://www.youtube.com/watch?v=YyvSfVjQeL0",
      steps: [
        "Siéntate al borde del banco, espalda contra el respaldo inclinado.",
        "Coloca los pies detrás del rodillo acolchonado del banco.",
        "Extiende las piernas hacia adelante y arriba apretando los cuádriceps.",
        "Sostén 1 segundo en lo alto. Baja lentamente (3 segundos).",
        "Los glúteos permanecen en el banco todo el tiempo."
      ],
      tip: "🔑 Aislamiento puro de cuádriceps — da esa línea definida en el frente del muslo que se nota cuando usas shorts."
    }
  }
};

// ─── Travel Workouts (bodyweight only) ───────────────────────────────────────
const TRAVEL_WORKOUTS = {
  push: {
    label: "PUSH ✈️", color: "#ff6b35", emoji: "💪",
    desc: "Pecho • Hombros • Tríceps — Sin equipo",
    warmup: "5 min — Jumping jacks, high knees, butt kicks",
    exercises: [
      {
        name: "Push-Up Normal",
        sets: "3 × 10-15 reps", rest: "60 seg",
        muscle: "Pecho + Tríceps",
        diagram: "pushup",
        video: "https://www.youtube.com/watch?v=IODxDxX7oi4",
        steps: [
          "Manos en el suelo al ancho de hombros, cuerpo en línea recta.",
          "Baja el pecho al suelo lentamente (2 seg). Codos a 45° del cuerpo.",
          "Empuja explosivamente hacia arriba. Exhala al subir.",
          "Si necesitas reducir, apoya las rodillas en el suelo.",
          "Mantén el core apretado todo el tiempo."
        ],
        tip: "🔑 Sin banco, el push-up en suelo es el ejercicio base. Perfecto para hotel.",
        alternates: [
          { name: "Push-Up con rodillas", diagram: "pushup", video: "https://www.youtube.com/watch?v=IODxDxX7oi4", desc: "Versión más fácil apoyando rodillas. Mismo patrón de movimiento." }
        ]
      },
      {
        name: "Pike Push-Up",
        sets: "3 × 8-10 reps", rest: "60 seg",
        muscle: "Hombros + Tríceps",
        diagram: "deadlift",
        video: "https://www.youtube.com/watch?v=EA4pKpn4s-E",
        steps: [
          "Desde el suelo forma una V invertida: caderas arriba, manos y pies en el suelo.",
          "Manos separadas al ancho de hombros, dedos apuntando ligeramente hacia adentro.",
          "Dobla los codos y baja la cabeza hacia el suelo entre las manos.",
          "Empuja de regreso a la V. Exhala al subir.",
          "Cuanto más vertical seas, más difícil — ajusta según tu nivel."
        ],
        tip: "🔑 El mejor ejercicio de hombros sin equipo. Reemplaza el press de mancuernas perfectamente.",
        alternates: []
      },
      {
        name: "Diamond Push-Up",
        sets: "3 × 8-10 reps", rest: "60 seg",
        muscle: "Tríceps (aislado) + Pecho",
        diagram: "pushup",
        video: "https://www.youtube.com/watch?v=J0DXe9WKdNs",
        steps: [
          "Manos juntas formando un diamante (pulgares e índices se tocan) directamente bajo el pecho.",
          "Cuerpo en plancha perfecta — línea recta de cabeza a talones.",
          "Baja lentamente hasta que el pecho casi toque las manos.",
          "Empuja hacia arriba. Los codos se cierran pegados al cuerpo.",
          "Si es muy difícil, separa un poco más las manos."
        ],
        tip: "🔑 Aísla el tríceps mejor que cualquier ejercicio con cable. Muy efectivo.",
        alternates: []
      }
    ],
    finisher: { name: "💥 FINISHER — Máx Push-Ups en 60 seg", metric: "push_ups", unit: "reps", prepSec: 10, workSec: 60 },
    bonus: {
      name: "Decline Push-Up (pies en cama)",
      sets: "2 × 8-10 reps", rest: "60 seg",
      muscle: "Pecho Superior + Hombros",
      diagram: "pushup",
      video: "https://www.youtube.com/watch?v=SKPab2YC8BE",
      steps: [
        "Apoya los pies en la cama del hotel, manos en el suelo.",
        "Cuerpo en línea recta diagonal.",
        "Baja el pecho al suelo controlado. Empuja hacia arriba.",
        "Más alto el borde, más difícil."
      ],
      tip: "🔑 La cama del hotel es perfecta para esto — reemplaza el press inclinado."
    }
  },
  pull: {
    label: "PULL ✈️", color: "#4a9eff", emoji: "🔙",
    desc: "Espalda + Bíceps — Versión hotel",
    warmup: "5 min — Arm circles, shoulder rolls, torso twists",
    exercises: [
      {
        name: "Superman Hold",
        sets: "3 × 10 reps (hold 3 seg)", rest: "45 seg",
        muscle: "Espalda Baja + Trapecios + Glúteos",
        diagram: "deadlift",
        video: "https://www.youtube.com/watch?v=cc6UVRS7PW4",
        steps: [
          "Acuéstate boca abajo, brazos extendidos al frente como Superman.",
          "Simultáneamente levanta brazos, pecho y piernas del suelo.",
          "Mantén la posición 3 segundos apretando toda la espalda.",
          "Baja lentamente. Eso es 1 rep.",
          "Mira al suelo, no al frente — protege el cuello."
        ],
        tip: "🔑 Activa toda la cadena posterior. Excelente para contrarrestar el sedentarismo de viajar.",
        alternates: []
      },
      {
        name: "Reverse Snow Angel",
        sets: "3 × 12 reps", rest: "45 seg",
        muscle: "Romboides + Deltoides Posterior + Trapecios",
        diagram: "deadlift",
        video: "https://www.youtube.com/watch?v=Kh4bMfNE6E8",
        steps: [
          "Acuéstate boca abajo, brazos extendidos a los lados en T.",
          "Levanta ligeramente los brazos del suelo — mantén esa altura todo el tiempo.",
          "Mueve los brazos hacia arriba (sobre la cabeza) y de regreso a la T. Como un ángel de nieve al revés.",
          "Aprieta los omóplatos juntos durante todo el movimiento.",
          "Movimiento lento y controlado — no importa la velocidad."
        ],
        tip: "🔑 Trabaja exactamente los músculos que el TRX Row — solo que con tu propio peso.",
        alternates: []
      },
      {
        name: "Curl de Bíceps Isométrico (en marco de puerta)",
        sets: "3 × 10 seg hold + 10 reps", rest: "45 seg",
        muscle: "Bíceps",
        diagram: "curl",
        video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
        steps: [
          "Párate en el marco de la puerta del hotel.",
          "Coloca el dorso de la mano bajo el marco y empuja hacia arriba como si quisieras levantar la puerta.",
          "Mantén la tensión 10 segundos — bíceps completamente contraído.",
          "Luego haz 10 curls normales sin peso, muy lentos (3 seg subir, 3 seg bajar).",
          "La tensión mental reemplaza el peso físico."
        ],
        tip: "🔑 Los curls lentos sin peso activan el bíceps sorprendentemente bien. La velocidad es la resistencia.",
        alternates: []
      }
    ],
    finisher: { name: "💥 FINISHER — Superman Holds: ¿cuántos en 45 seg?", metric: "trx_rows", unit: "reps", prepSec: 10, workSec: 45 },
    bonus: {
      name: "Archer Push-Up",
      sets: "2 × 6 reps c/lado", rest: "60 seg",
      muscle: "Espalda + Pecho (unilateral)",
      diagram: "pushup",
      video: "https://www.youtube.com/watch?v=HSt8JMCqrFk",
      steps: [
        "Posición de push-up, manos muy separadas (doble ancho de hombros).",
        "Baja hacia un lado doblando ese codo mientras el otro brazo queda extendido.",
        "El brazo extendido jala ligeramente — activa la espalda.",
        "Alterna lados. Es como un archer (arquero) apuntando.",
        "Muy difícil — reduce el rango si es necesario."
      ],
      tip: "🔑 El ejercicio más cercano a un jalón sin barra. Trabaja espalda y pecho unilateralmente."
    }
  },
  legs: {
    label: "LEGS ✈️", color: "#4aff8c", emoji: "🦵",
    desc: "Tren inferior — Sin equipo",
    warmup: "5 min — Leg swings, hip circles, bodyweight squats lentos",
    exercises: [
      {
        name: "Sentadilla Búlgara (pie en cama)",
        sets: "3 × 8 reps c/lado", rest: "60-90 seg",
        muscle: "Cuádriceps + Glúteos",
        diagram: "lunge",
        video: "https://www.youtube.com/watch?v=2C-uNgKwPLE",
        steps: [
          "Párate de espaldas a la cama del hotel, a un paso de distancia.",
          "Apoya el pie trasero en el borde de la cama.",
          "Baja el cuerpo doblando la rodilla delantera hasta que quede a 90°.",
          "La rodilla delantera no pasa la punta del pie.",
          "Empuja con el talón delantero para subir. Alterna piernas."
        ],
        tip: "🔑 La cama del hotel reemplaza perfectamente el banco. Este ejercicio es incluso más difícil que los lunges normales.",
        alternates: [
          { name: "Reverse Lunge normal", diagram: "lunge", video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U", desc: "Sin cama. Da un paso atrás y baja la rodilla al suelo. Mismo músculo, más fácil." }
        ]
      },
      {
        name: "Glute Bridge",
        sets: "3 × 15 reps", rest: "45 seg",
        muscle: "Glúteos + Isquiotibiales",
        diagram: "deadlift",
        video: "https://www.youtube.com/watch?v=OUgsJ8-Vi0E",
        steps: [
          "Acuéstate boca arriba, rodillas dobladas, pies planos en el suelo cerca de los glúteos.",
          "Empuja las caderas hacia arriba apretando los glúteos al máximo.",
          "En la cima sostén 2 segundos. La espalda forma una línea recta.",
          "Baja lentamente.",
          "Para más dificultad: una sola pierna (single-leg glute bridge)."
        ],
        tip: "🔑 Reemplaza el leg curl — trabaja isquios y glúteos sin ningún equipo.",
        alternates: [
          { name: "Single-Leg Glute Bridge", diagram: "deadlift", video: "https://www.youtube.com/watch?v=OUgsJ8-Vi0E", desc: "Una pierna extendida mientras la otra empuja. Doble de difícil, mismo músculo." }
        ]
      },
      {
        name: "Wall Sit",
        sets: "3 × 30-45 seg", rest: "45 seg",
        muscle: "Cuádriceps (isométrico)",
        diagram: "goblet",
        video: "https://www.youtube.com/watch?v=y-wV4Venusw",
        steps: [
          "Espalda plana contra la pared del cuarto.",
          "Deslízate hacia abajo hasta que las rodillas estén a 90°.",
          "Pies al ancho de hombros, rodillas alineadas con los pies.",
          "Mantén la posición el tiempo indicado. Respira normal.",
          "Si es fácil, levanta un pie — wall sit de una pierna."
        ],
        tip: "🔑 Quema los cuádriceps sin impacto. Perfecto para cuartos de hotel con vecinos abajo.",
        alternates: []
      }
    ],
    finisher: { name: "💥 FINISHER — Máx Squats en 60 seg", metric: "squat_reps", unit: "reps", prepSec: 10, workSec: 60 },
    bonus: {
      name: "Pistol Squat (progresión)",
      sets: "2 × 5 reps c/lado", rest: "60 seg",
      muscle: "Cuádriceps + Balance",
      diagram: "goblet",
      video: "https://www.youtube.com/watch?v=vq5-vdgJc0I",
      steps: [
        "Párate en un pie, otro extendido al frente.",
        "Baja lentamente en una sola pierna lo más que puedas.",
        "Usa la pared para apoyo si pierdes el balance — es una progresión.",
        "El objetivo es eventualmente bajar hasta el suelo.",
        "Alterna piernas."
      ],
      tip: "🔑 El ejercicio de piernas más avanzado del calistenia. Empieza con apoyo en la pared."
    }
  }
};

const TRAVEL_ROPE_SESSION = [
  { phase: "Calentamiento", duration: "5 min", color: "#4aff8c", items: [
    "1 min — Jumping jacks, ritmo cómodo",
    "1 min — High knees (rodillas arriba, simula la cuerda)",
    "1 min — Butt kicks (talones al glúteo)",
    "1 min — Footwork de boxeo libre",
    "1 min — Double bounce imaginario (salta con ritmo de 2)"
  ]},
  { phase: "Skill Work — Footwork", duration: "10 min", color: "#c084fc", items: [
    "Practica boxer skip SIN cuerda — mismo ritmo, misma coordinación",
    "3 min — Boxer skip básico (peso de pie a pie)",
    "2 min — High step (rodillas arriba)",
    "3 min — Patrones de footwork: adelante/atrás, lateral, diagonal",
    "2 min — Freestyle — inventa tu secuencia"
  ]},
  { phase: "HIIT", duration: "8 min", color: "#ff4a4a", items: [
    "Ronda 1: 40 seg Mountain Climbers / 20 seg descanso",
    "Ronda 2: 40 seg Burpees modificados (sin salto) / 20 seg",
    "Ronda 3: 40 seg Mountain Climbers / 20 seg descanso",
    "Ronda 4: 40 seg Burpees modificados / 20 seg",
    "Ronda 5: 40 seg Mountain Climbers / 20 seg descanso",
    "Ronda 6: 30 seg ALL OUT Jumping Jacks / 30 seg caminando"
  ]},
  { phase: "Enfriamiento", duration: "5 min", color: "#4a9eff", items: [
    "2 min — Caminata en el cuarto, respira profundo",
    "2 min — Footwork muy lento para bajar el ritmo",
    "1 min — Estiramiento de pantorrillas y hombros"
  ]}
];

const TRAVEL_ROPE_FINISHER = { name: "💥 FINISHER — Máx Jumping Jacks en 60 seg", metric: "rope_jumps", unit: "saltos", prepSec: 10, workSec: 60 };

const ROPE_FINISHER = { name: "💥 FINISHER — Máx Saltos Libres en 60 seg", metric: "rope_jumps", unit: "saltos" };

// ─── Core & Stretching Data ───────────────────────────────────────────────────
const CORE_EXERCISES = {
  push: {
    name: "Plank", sets: "3 × 20-30 seg", muscle: "Core completo + Estabilizadores",
    color: "#ff6b35",
    steps: [
      "Apoya los antebrazos en el suelo, codos directamente bajo los hombros.",
      "Levanta las caderas formando una línea recta de cabeza a talones.",
      "Activa el abdomen como si fueras a recibir un golpe. No subas ni bajes las caderas.",
      "Respira normal. Mantén la posición el tiempo indicado.",
      "Si la cadera cae antes del tiempo, descansa y reinicia — la calidad importa más que los segundos."
    ],
    tip: "🔑 Mira al suelo, no al frente. Eso mantiene el cuello alineado con la columna.",
    video: "https://www.youtube.com/watch?v=ASdvN_XEl_c"
  },
  pull: {
    name: "Bird Dog", sets: "3 × 8 reps por lado", muscle: "Core profundo + Espalda baja",
    color: "#4a9eff",
    steps: [
      "En cuatro apoyos: manos bajo hombros, rodillas bajo caderas. Espalda plana como una mesa.",
      "Simultáneamente extiende el brazo derecho al frente y la pierna izquierda atrás.",
      "Mantén la cadera nivelada — no la rotes ni la levantes. Ese es el reto.",
      "Sostén 2 segundos arriba apretando glúteo y abdomen.",
      "Regresa controlado y alterna lado. Eso es 1 rep."
    ],
    tip: "🔑 Imagina que tienes un vaso de agua en la espalda y no quieres derramarlo.",
    video: "https://www.youtube.com/watch?v=wiFNA3sqjCA"
  },
  legs: {
    name: "Dead Bug", sets: "3 × 8 reps por lado", muscle: "Core profundo + Lumbar",
    color: "#4aff8c",
    steps: [
      "Acuéstate boca arriba. Levanta los brazos apuntando al techo y las rodillas a 90° en el aire.",
      "Presiona la espalda baja contra el suelo — debe quedar completamente plana. Eso es lo más importante.",
      "Simultáneamente baja el brazo derecho atrás y la pierna izquierda al frente sin tocar el suelo.",
      "Exhala durante el movimiento. Mantén el abdomen apretado todo el tiempo.",
      "Regresa al centro y alterna. Si la espalda se despega del suelo, reduce el rango."
    ],
    tip: "🔑 Va perfecto después de squats y lunges porque protege la espalda baja cuando está fatigada.",
    video: "https://www.youtube.com/watch?v=g_BYB0R-4Ws"
  }
};

const STRETCHING = {
  push: [
    { name: "Estiramiento de pecho en marco",  duration: "30 seg c/lado", steps: ["Coloca el antebrazo en el marco de una puerta o en una pared, codo a 90°.", "Da un paso adelante hasta sentir el estiramiento en el pecho.", "No fuerces — debe sentirse bien, no doler.", "Alterna lados."], tip: "Perfecto para contrarrestar el acortamiento del pecho después de press y push-ups." },
    { name: "Estiramiento de tríceps overhead",duration: "30 seg c/lado", steps: ["Lleva un brazo detrás de la cabeza doblando el codo.", "Con la otra mano empuja suavemente el codo hacia abajo.", "Mantén el cuello relajado."], tip: "Si sientes tensión en el hombro, reduce el rango." },
    { name: "Estiramiento de hombros cruzados",duration: "30 seg c/lado", steps: ["Lleva un brazo extendido cruzando el pecho.", "Con el otro brazo presiónalo suavemente hacia tu cuerpo.", "Alterna lados."], tip: "Trabaja el deltoides posterior, muy importante para la postura." }
  ],
  pull: [
    { name: "Estiramiento de espalda en silla", duration: "30 seg", steps: ["Siéntate o párate frente a algo fijo (banco, pared).", "Agarra con ambas manos y deja caer el peso del cuerpo hacia atrás.", "Redondea la espalda dejando que los omóplatos se abran.", "Respira profundo y relaja."], tip: "Siente cómo se separan los omóplatos — eso es lo que buscas." },
    { name: "Curl de bíceps invertido (estiramiento)", duration: "20 seg c/lado", steps: ["Extiende el brazo al frente con la palma hacia arriba.", "Con la otra mano dobla la muñeca hacia abajo suavemente.", "Siente el estiramiento en el bíceps y antebrazo."], tip: "Muy bueno para prevenir tensión en el codo a largo plazo." },
    { name: "Rotación de cuello y hombros", duration: "30 seg", steps: ["Baja la oreja derecha hacia el hombro derecho suavemente.", "Mantén 15 segundos y cambia de lado.", "Luego rota los hombros hacia atrás 5 veces lento."], tip: "El Pull acumula tensión en trapecios — este lo libera." }
  ],
  legs: [
    { name: "Estiramiento de isquiotibiales de pie", duration: "30 seg c/lado", steps: ["Apoya un talón en el banco o una silla a altura de cadera.", "Mantén la pierna recta e inclínate ligeramente hacia adelante desde la cadera.", "No redondees la espalda — el movimiento viene de la cadera.", "Siente el jalón en la parte posterior del muslo."], tip: "Después del leg curl, los isquios estarán tensos — este es esencial." },
    { name: "Estiramiento de cuádriceps de pie",duration: "30 seg c/lado", steps: ["Párate en un pie y jala el otro talón hacia el glúteo.", "Mantén las rodillas juntas y el torso recto.", "Apóyate en la pared si pierdes el balance."], tip: "Después de squats y lunges, los cuádriceps lo necesitan." },
    { name: "Estiramiento de pantorrilla en pared", duration: "30 seg c/lado", steps: ["Coloca las manos en la pared y da un paso atrás con un pie.", "Mantén el talón en el suelo y la pierna trasera recta.", "Inclínate hacia la pared hasta sentir jalón en la pantorrilla."], tip: "Las pantorrillas trabajan en todos los ejercicios de pierna — no te saltes este." }
  ],
  rope: [
    { name: "Estiramiento de pantorrilla en escalón", duration: "30 seg c/lado", steps: ["Apoya la punta del pie en un escalón o borde del banco.", "Deja caer el talón lentamente por debajo del nivel del escalón.", "Siente el jalón profundo en la pantorrilla.", "Cambia de pie."], tip: "Es el más importante después de saltar cuerda — las pantorrillas absorben todo el impacto." },
    { name: "Estiramiento de hombros y muñecas",duration: "20 seg c/posición", steps: ["Extiende un brazo al frente con la palma hacia afuera.", "Con la otra mano jala los dedos hacia atrás suavemente.", "Luego cambia: palma hacia abajo y jala los dedos hacia arriba.", "Alterna manos."], tip: "Las muñecas giran la cuerda miles de veces — dales amor." },
    { name: "Estiramiento de cadera (figura 4)",duration: "30 seg c/lado", steps: ["Acuéstate boca arriba. Cruza el tobillo derecho sobre la rodilla izquierda.", "Levanta la pierna izquierda hacia el pecho sosteniendo el muslo.", "Siente el estiramiento en el glúteo derecho.", "Cambia de lado."], tip: "Libera la cadera después del cardio de cuerda — muy relajante." }
  ]
};


const ROPE_SKILLS = [
  { level: "Semana 1-2", color: "#4aff8c", tricks: [
    { name: "Boxer Skip", desc: "Rebota alternando el peso de pie izquierdo a derecho. Es el ritmo base de todo. Aprenderlo bien = todo lo demás fluye.", time: "2 min", video: "https://www.youtube.com/watch?v=4e4ZkMVFGvs" },
    { name: "High Step", desc: "Boxer skip pero levantando las rodillas más alto. Activa el core y se ve más dinámico.", time: "1 min", video: "https://www.youtube.com/watch?v=4e4ZkMVFGvs" },
  ]},
  { level: "Semana 3-4", color: "#4a9eff", tricks: [
    { name: "Double Bounce", desc: "Dos saltos por cada giro de cuerda. Tiempo para respirar entre giros — muy útil para recuperarte mientras mantienes el flujo.", time: "2 min", video: "https://www.youtube.com/watch?v=2ZKlPeEMjR4" },
    { name: "Side Swing", desc: "Mueve la cuerda de un lado al otro sin saltar, luego vuelve a entrar. Pausa activa y se ve increíble en video.", time: "30 seg", video: "https://www.youtube.com/watch?v=FJJNMkos7zk" },
  ]},
  { level: "Semana 5-6", color: "#c084fc", tricks: [
    { name: "Criss-Cross (Crossover)", desc: "Cruza los brazos mientras la cuerda pasa y salta a través del arco cruzado. El truco que todos quieren aprender primero.", time: "práctica", video: "https://www.youtube.com/watch?v=5cWbIR9CqGM" },
    { name: "Alternate Foot Step", desc: "Salto de un pie solo, como correr pero con cuerda. Más fácil de lo que parece y perfecto para intervalos.", time: "1 min", video: "https://www.youtube.com/watch?v=4e4ZkMVFGvs" },
  ]},
  { level: "Semana 7-8", color: "#ff6b35", tricks: [
    { name: "Double Under", desc: "La cuerda pasa DOS veces bajo tus pies en un salto. El más icónico del jump rope. Requiere potencia en el salto y velocidad de muñeca.", time: "práctica", video: "https://www.youtube.com/watch?v=82GsFnMh7Bk" },
    { name: "Toad (Doble cruzado)", desc: "Criss-cross pero cruzando aún más los brazos. Se ve como magia cuando fluye.", time: "práctica", video: "https://www.youtube.com/watch?v=5cWbIR9CqGM" },
  ]}
];

const ROPE_SESSION = [
  { phase: "Calentamiento", duration: "5 min", color: "#4aff8c", items: [
    "1 min — Saltos básicos, ritmo cómodo",
    "1 min — Boxer skip lento",
    "1 min — High step",
    "1 min — Libre (improvisa)",
    "1 min — Double bounce para recuperarte"
  ]},
  { phase: "Skill Work", duration: "10 min", color: "#c084fc", items: [
    "Elige UN truco de tu nivel actual",
    "3 min — Práctica con paradas (intenta, falla, ajusta)",
    "2 min — Saltos básicos para resetear",
    "3 min — Practica el truco de nuevo",
    "2 min — Libre / fluye"
  ]},
  { phase: "Intervalos HIIT", duration: "8 min", color: "#ff4a4a", items: [
    "Ronda 1: 40 seg fuerte / 20 seg descanso",
    "Ronda 2: 40 seg fuerte / 20 seg descanso",
    "Ronda 3: 40 seg fuerte / 20 seg descanso",
    "Ronda 4: 40 seg fuerte / 20 seg descanso",
    "Ronda 5: 40 seg fuerte / 20 seg descanso",
    "Ronda 6: 30 seg ALL OUT / 30 seg caminando"
  ]},
  { phase: "Enfriamiento + Truco Final", duration: "5 min", color: "#4a9eff", items: [
    "2 min — Saltos muy lentos, respira",
    "2 min — Intenta el truco de la sesión (sin presión)",
    "1 min — Estiramiento de pantorrillas y hombros"
  ]}
];

const WEEKS = Array.from({length: 12}, (_, i) => `S${i+1}`);

// ─── Components ──────────────────────────────────────────────────────────────
function Tag({ children, color }) {
  return (
    <span style={{ background: color + "22", color, border: `1px solid ${color}44`,
      borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
      {children}
    </span>
  );
}

function AlternateCard({ alt, color }) {
  return (
    <div style={{ background: "#111", border: `1px solid ${color}22`, borderRadius: 8,
      padding: "10px 12px", marginTop: 6 }}>
      <div style={{ fontWeight: 700, color, fontSize: 13, marginBottom: 4 }}>↪ {alt.name}</div>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flexWrap: "wrap" }}>
        <ExerciseDiagram type={alt.diagram} />
        <div style={{ flex: 1, minWidth: 140 }}>
          <div style={{ color: "#bbb", fontSize: 12, lineHeight: 1.6, marginBottom: 6 }}>{alt.desc}</div>
          <VideoLink url={alt.video} label="Ver video ▶" />
        </div>
      </div>
      {/* Pokédex section - all pokemon ordered by national dex */}
      {(() => {
        // Build full list ordered by national dex number
        const allPokes = [];
        const seen = new Set();
        // Collect all pokemon from LEVEL_POKEMON, dedupe, sort by id
        Object.values(LEVEL_POKEMON).flat().forEach(p => {
          if(!seen.has(p.name)) {
            seen.add(p.name);
            allPokes.push(p);
          }
        });
        allPokes.sort((a,b) => a.id - b.id);
        const caught = Object.keys(pokedex).filter(k=>pokedex[k].caught).length;
        return (
          <div style={{marginTop:20}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1}}>
                🔴 POKÉDEX PERSONAL
              </div>
              <div style={{color:"#e8ff4a",fontSize:11,fontWeight:700}}>
                {caught}/{allPokes.length} atrapados
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6}}>
              {allPokes.map(p => {
                const data = pokedex[p.name];
                const isCaught = data?.caught;
                const isShiny  = data?.shiny;
                const borderColor = isCaught
                  ? (p.fav===3?"#e8ff4a":p.fav===2?"#c084fc":"#4aff8c44")
                  : "#1e1e1e";
                return (
                  <div key={p.name} style={{
                    background: isCaught ? "#1a1a1a" : "#111",
                    border:`1px solid ${borderColor}`,
                    borderRadius:8,padding:"6px 4px",textAlign:"center",
                    opacity: isCaught ? 1 : 0.35,
                    position:"relative",transition:"all .2s"
                  }}>
                    {isCaught
                      ? <>
                          <img src={POKEMON_SPRITE(p.name, isShiny)} alt={p.name}
                            style={{width:48,height:48,objectFit:"contain",
                              filter:isShiny?"drop-shadow(0 0 4px gold)":"none"}}
                            onError={e=>{e.target.style.display="none";}}/>
                          {isShiny && <div style={{position:"absolute",top:2,right:4,fontSize:8}}>✨</div>}
                          <div style={{
                            position:"absolute",top:2,left:4,
                            fontSize:8,color:isCaught?"#4aff8c":"#333",fontWeight:700
                          }}>✓</div>
                        </>
                      : <div style={{width:48,height:48,margin:"0 auto",
                          display:"flex",alignItems:"center",justifyContent:"center",
                          fontSize:20,color:"#333"}}>
                          🔒
                        </div>
                    }
                    <div style={{
                      fontSize:8,textTransform:"capitalize",marginTop:2,
                      color: isCaught ? (p.fav===3?"#e8ff4a":p.fav===2?"#c084fc":"#888") : "#333",
                      overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",
                      padding:"0 2px"
                    }}>
                      {isCaught ? (p.fav===3?"⭐ ":p.fav===2?"★ ":"") : ""}
                      {p.name.replace(/-/g," ")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
    </div>
  );
}


// ─── Core Block ───────────────────────────────────────────────────────────────
function CoreBlock({ wk }) {
  const ex = CORE_EXERCISES[wk];
  if(!ex) return null;
  const [open, setOpen] = useState(false);
  return (
    <div style={{marginBottom:8}}>
      <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:8}}>
        🧱 CORE — OPCIONAL
      </div>
      <div style={{background:"#1a1a1a",border:`1px solid ${ex.color}44`,borderRadius:10,overflow:"hidden",borderStyle:"dashed"}}>
        <div onClick={()=>setOpen(o=>!o)}
          style={{cursor:"pointer",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontWeight:700,color:"#f0f0f0",fontSize:14}}>{ex.name}</div>
            <div style={{color:"#888",fontSize:12,marginTop:2}}>
              <span style={{color:ex.color}}>{ex.sets}</span> · {ex.muscle}
            </div>
          </div>
          <span style={{color:ex.color,fontSize:16}}>{open?"▲":"▼"}</span>
        </div>
        {open && (
          <div style={{padding:"0 16px 16px",borderTop:`1px solid ${ex.color}22`}}>
            <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,margin:"12px 0 8px"}}>CÓMO HACERLO</div>
            {ex.steps.map((s,i)=>(
              <div key={i} style={{display:"flex",gap:8,marginBottom:7}}>
                <span style={{color:ex.color,fontWeight:700,minWidth:20,fontSize:13}}>{i+1}.</span>
                <span style={{color:"#ccc",fontSize:13,lineHeight:1.5}}>{s}</span>
              </div>
            ))}
            <div style={{marginTop:10,background:ex.color+"11",border:`1px solid ${ex.color}33`,borderRadius:8,padding:"8px 12px",fontSize:13,color:"#ddd"}}>
              {ex.tip}
            </div>
            <VideoLink url={ex.video} label="Ver video de referencia ▶"/>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Stretching Block ─────────────────────────────────────────────────────────
function StretchingBlock({ wk, color }) {
  const stretches = STRETCHING[wk];
  if(!stretches) return null;
  const [open, setOpen] = useState(false);
  return (
    <div style={{marginTop:8}}>
      <div style={{background:"#1a1a2a",border:"1px solid #4a9eff33",borderRadius:10,overflow:"hidden"}}>
        <div onClick={()=>setOpen(o=>!o)}
          style={{cursor:"pointer",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontWeight:700,color:"#4a9eff",fontSize:14}}>🧘 Estiramientos</div>
            <div style={{color:"#888",fontSize:12,marginTop:2}}>{stretches.length} ejercicios · ~5 min</div>
          </div>
          <span style={{color:"#4a9eff",fontSize:16}}>{open?"▲":"▼"}</span>
        </div>
        {open && (
          <div style={{padding:"0 16px 16px",borderTop:"1px solid #4a9eff22"}}>
            {stretches.map((s,i)=>(
              <div key={i} style={{marginTop:14,paddingTop:i>0?14:0,borderTop:i>0?"1px solid #222":"none"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <span style={{fontWeight:700,color:"#f0f0f0",fontSize:13}}>{s.name}</span>
                  <span style={{background:"#4a9eff22",color:"#4a9eff",fontSize:10,fontWeight:700,
                    padding:"2px 8px",borderRadius:4,border:"1px solid #4a9eff33"}}>{s.duration}</span>
                </div>
                {s.steps.map((st,j)=>(
                  <div key={j} style={{display:"flex",gap:8,marginBottom:5}}>
                    <span style={{color:"#4a9eff",fontWeight:700,minWidth:18,fontSize:12}}>{j+1}.</span>
                    <span style={{color:"#bbb",fontSize:12,lineHeight:1.5}}>{st}</span>
                  </div>
                ))}
                <div style={{marginTop:8,background:"#4a9eff11",border:"1px solid #4a9eff22",
                  borderRadius:6,padding:"6px 10px",fontSize:11,color:"#888"}}>
                  💡 {s.tip}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ExerciseCard({ ex, color, onSeriesDone, checkedSets, onToggleSet }) {
  const [open, setOpen] = useState(false);
  const [showAlts, setShowAlts] = useState(false);
  const numSets = checkedSets ? checkedSets.length : (() => { const m = ex.sets.match(/^(\d+)/); return m ? parseInt(m[1]) : 3; })();
  const doneSets = checkedSets ? checkedSets.filter(Boolean).length : 0;
  const allDone = doneSets === numSets;

  const toggleSet = (i) => {
    if(onToggleSet) onToggleSet(i);
  };

  return (
    <div style={{ background: "#1a1a1a",
      border: `1px solid ${allDone ? color+"88" : ex.isBonus ? color+"55" : "#2a2a2a"}`,
      borderRadius: 12, overflow: "hidden", marginBottom: 12,
      ...(ex.isBonus ? { borderStyle: "dashed" } : {}),
      transition:"border-color .2s" }}>

      {/* Header — always visible */}
      <div onClick={() => setOpen(o => !o)} style={{ cursor: "pointer", padding: "12px 14px",
        display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{flex:1}}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontWeight: 700, color: allDone?"#4aff8c":"#f0f0f0", fontSize: 15,
              textDecoration: allDone?"line-through":"none", transition:"all .2s" }}>{ex.name}</span>
            {ex.isBonus && <Tag color={color}>BONUS</Tag>}
            {allDone && <span style={{color:"#4aff8c",fontSize:13,fontWeight:700}}>✓</span>}
          </div>
          <div style={{ color: "#888", fontSize: 12, marginTop: 3 }}>
            <span style={{ color }}>{ex.sets}</span> &nbsp;·&nbsp; {ex.muscle}
          </div>
        </div>
        <span style={{ color, fontSize: 18, marginLeft:8 }}>{open ? "▲" : "▼"}</span>
      </div>

      {/* Series checkboxes + progress bar — ALWAYS VISIBLE */}
      <div style={{padding:"0 14px 12px"}}>
        {/* Progress bar */}
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
          <div style={{flex:1,background:"#222",borderRadius:20,height:6,overflow:"hidden"}}>
            <div style={{background:`linear-gradient(90deg,${color},${color}cc)`,height:"100%",
              width:`${(doneSets/numSets)*100}%`,borderRadius:20,transition:"width .25s"}}/>
          </div>
          <span style={{color:allDone?"#4aff8c":color,fontSize:11,fontWeight:700,minWidth:32,textAlign:"right"}}>
            {doneSets}/{numSets}
          </span>
        </div>
        {/* Checkboxes */}
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {checkedSets.map((done,i)=>(
            <button key={i} onClick={()=>toggleSet(i)}
              style={{display:"flex",alignItems:"center",gap:4,
                background:done?color+"33":"#111",
                border:`1.5px solid ${done?color:"#333"}`,borderRadius:7,
                padding:"6px 12px",cursor:"pointer",
                color:done?color:"#555",fontSize:12,fontWeight:700,
                transition:"all .15s", minWidth:72}}>
              <span style={{fontSize:15,lineHeight:1}}>{done?"☑":"☐"}</span>
              Serie {i+1}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div style={{ padding: "0 14px 14px", borderTop: "1px solid #2a2a2a" }}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 14, alignItems: "flex-start" }}>
            <div>
              <ExerciseDiagram type={ex.diagram} />
              <VideoLink url={ex.video} />
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CÓMO HACERLO</div>
              {ex.steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                  <span style={{ color, fontWeight: 700, minWidth: 20, fontSize: 13 }}>{i+1}.</span>
                  <span style={{ color: "#ccc", fontSize: 13, lineHeight: 1.5 }}>{step}</span>
                </div>
              ))}
              <div style={{ marginTop: 10, background: color + "11", border: `1px solid ${color}33`,
                borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "#ddd" }}>
                {ex.tip}
              </div>
            </div>
          </div>
          {ex.alternates && ex.alternates.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <button onClick={() => setShowAlts(a => !a)}
                style={{ background: "none", border: `1px solid ${color}44`, borderRadius: 6,
                  color, fontSize: 12, fontWeight: 700, padding: "5px 12px", cursor: "pointer" }}>
                {showAlts ? "▲ Ocultar alternos" : `▼ Ver ${ex.alternates.length} ejercicio(s) alterno(s)`}
              </button>
              {showAlts && ex.alternates.map((alt, i) => (
                <AlternateCard key={i} alt={alt} color={color} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


// ─── Bonus Block ──────────────────────────────────────────────────────────────
function BonusBlock({ bonus, color, mainDone, onBonusComplete }) {
  const [open, setOpen] = useState(false);
  const numSets = (() => { const m = bonus.sets.match(/^(\d+)/); return m ? parseInt(m[1]) : 2; })();
  const [checkedSets, setCheckedSets] = usePersistedState(`vs_bonus_${bonus.name.replace(/\s/g,"_")}`, Array(numSets).fill(false));
  const doneSets = checkedSets.filter(Boolean).length;
  const allDone = doneSets === numSets;
  const [bonusFired, setBonusFired] = useState(false);
  const toggleSet = (i) => {
    setCheckedSets(s => {
      const next = s.map((v,j) => j===i ? !v : v);
      if(next.every(Boolean) && !bonusFired && onBonusComplete) {
        setBonusFired(true);
        setTimeout(()=>onBonusComplete(), 300);
      }
      return next;
    });
  };

  return (
    <div style={{marginTop:8}}>
      {/* Banner — only shown when main circuit is 100% done */}
      {mainDone && !allDone && (
        <div style={{background:`linear-gradient(135deg,${color}22,${color}11)`,
          border:`1px solid ${color}55`,borderRadius:10,padding:"10px 14px",marginBottom:8,
          display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:22}}>⚡</span>
          <div>
            <div style={{color,fontWeight:700,fontSize:13}}>¡Circuito completo! ¿Vas por más?</div>
            <div style={{color:"#888",fontSize:11}}>Bonus disponible — solo si tienes energía</div>
          </div>
        </div>
      )}
      {allDone && (
        <div style={{background:"linear-gradient(135deg,#e8ff4a22,#4aff8c22)",
          border:"1px solid #e8ff4a55",borderRadius:10,padding:"10px 14px",marginBottom:8,
          display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:22}}>🌟</span>
          <div>
            <div style={{color:"#e8ff4a",fontWeight:700,fontSize:13}}>¡Fuiste más allá del 100%!</div>
            <div style={{color:"#888",fontSize:11}}>Bonus completado — sesión épica</div>
          </div>
        </div>
      )}

      {/* Bonus card */}
      <div style={{background:"#1a1a1a",border:`1px dashed ${allDone?color+"88":color+"44"}`,
        borderRadius:10,overflow:"hidden",opacity:mainDone?1:0.45,transition:"opacity .3s"}}>
        <div onClick={()=>mainDone&&setOpen(o=>!o)}
          style={{cursor:mainDone?"pointer":"not-allowed",padding:"12px 14px",
            display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
              <span style={{background:color+"22",color,fontSize:9,fontWeight:700,
                padding:"2px 7px",borderRadius:4,border:`1px solid ${color}44`,letterSpacing:1}}>
                BONUS
              </span>
              {!mainDone && <span style={{color:"#555",fontSize:10}}>Completa el circuito primero</span>}
            </div>
            <div style={{fontWeight:700,color:allDone?"#4aff8c":"#f0f0f0",fontSize:14,
              textDecoration:allDone?"line-through":"none"}}>{bonus.name}</div>
            <div style={{color:"#888",fontSize:12,marginTop:2}}>
              <span style={{color}}>{bonus.sets}</span> · {bonus.muscle}
            </div>
          </div>
          {mainDone && <span style={{color,fontSize:16}}>{open?"▲":"▼"}</span>}
        </div>

        {/* Progress + checkboxes — visible when unlocked */}
        {mainDone && (
          <div style={{padding:"0 14px 12px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <div style={{flex:1,background:"#222",borderRadius:20,height:6,overflow:"hidden"}}>
                <div style={{background:`linear-gradient(90deg,${color},${color}cc)`,height:"100%",
                  width:`${(doneSets/numSets)*100}%`,borderRadius:20,transition:"width .25s"}}/>
              </div>
              <span style={{color:allDone?"#4aff8c":color,fontSize:11,fontWeight:700,minWidth:32,textAlign:"right"}}>
                {doneSets}/{numSets}
              </span>
            </div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {checkedSets.map((done,i)=>(
                <button key={i} onClick={()=>toggleSet(i)}
                  style={{display:"flex",alignItems:"center",gap:4,
                    background:done?color+"33":"#111",
                    border:`1.5px solid ${done?color:"#333"}`,borderRadius:7,
                    padding:"6px 12px",cursor:"pointer",
                    color:done?color:"#555",fontSize:12,fontWeight:700,
                    transition:"all .15s",minWidth:72}}>
                  <span style={{fontSize:15,lineHeight:1}}>{done?"☑":"☐"}</span>
                  Serie {i+1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Expanded instructions */}
        {open && mainDone && (
          <div style={{padding:"0 14px 14px",borderTop:`1px solid ${color}22`}}>
            <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,margin:"12px 0 8px"}}>CÓMO HACERLO</div>
            {bonus.steps.map((s,i)=>(
              <div key={i} style={{display:"flex",gap:8,marginBottom:7}}>
                <span style={{color,fontWeight:700,minWidth:20,fontSize:13}}>{i+1}.</span>
                <span style={{color:"#ccc",fontSize:13,lineHeight:1.5}}>{s}</span>
              </div>
            ))}
            <div style={{marginTop:10,background:color+"11",border:`1px solid ${color}33`,
              borderRadius:8,padding:"8px 12px",fontSize:13,color:"#ddd"}}>
              {bonus.tip}
            </div>
            <VideoLink url={bonus.video} label="Ver video de referencia ▶"/>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkoutTab({ wk, onComplete, onBonusXP, travelMode }) {
  const w = (travelMode && TRAVEL_WORKOUTS[wk]) ? TRAVEL_WORKOUTS[wk] : WORKOUTS[wk];
  const storageKey = `vs_finisher_${wk}`;
  const [history, setHistory] = usePersistedState(storageKey, []);
  const [newDate, setNewDate] = useState(new Date().toISOString().slice(0,10));
  const [newVal,  setNewVal]  = useState("");
  const addEntry = () => {
    if(!newVal) return;
    setHistory(h => [...h.filter(e=>e.date!==newDate), {date:newDate, value:newVal}].sort((a,b)=>b.date.localeCompare(a.date)));
    setNewVal("");
  };
  const sorted = [...history].sort((a,b)=>a.date.localeCompare(b.date));
  const best = history.length > 0 ? Math.max(...history.map(e=>parseFloat(e.value)||0)) : 0;
  // Session-wide series tracking for progress bar
  const numSetsPerEx = w.exercises.map(ex=>{ const m=ex.sets.match(/^(\d+)/); return m?parseInt(m[1]):3; });
  const defaultChecked = numSetsPerEx.map(n=>Array(n).fill(false));
  const defaultTracker = numSetsPerEx.map(n=>({done:0,total:n}));
  const [checkedPerEx, setCheckedPerEx] = usePersistedState(`vs_session_${wk}`, defaultChecked);
  const [completionFired, setCompletionFired] = usePersistedState(`vs_session_fired_${wk}`, false);
  // Compute progress from checkedPerEx
  const safeChecked = Array.isArray(checkedPerEx) ? checkedPerEx : defaultChecked;
  const seriesTracker = safeChecked.map((checks, i) => ({
    done: Array.isArray(checks) ? checks.filter(Boolean).length : 0,
    total: numSetsPerEx[i] || 3
  }));
  const sessionDone  = seriesTracker.reduce((s,e) => s + e.done, 0);
  const totalSeries  = seriesTracker.reduce((s,e) => s + e.total, 0);

  const toggleExSet = (exIdx, setIdx) => {
    setCheckedPerEx(prev => {
      const safe = Array.isArray(prev) ? prev : defaultChecked;
      const next = safe.map((checks, i) =>
        i===exIdx ? (Array.isArray(checks)?checks:[...Array(numSetsPerEx[i]).fill(false)]).map((v,j)=>j===setIdx?!v:v) : checks
      );
      const newDone  = next.reduce((s,checks)=>s+(Array.isArray(checks)?checks.filter(Boolean).length:0),0);
      const newTotal = numSetsPerEx.reduce((s,n)=>s+n,0);
      if(newDone===newTotal && newTotal>0 && !completionFired && onComplete) {
        setCompletionFired(true);
        const dtMap = {push:{label:"Push",emoji:"💪",color:"#ff6b35"},
          pull:{label:"Pull",emoji:"🔙",color:"#4a9eff"},
          legs:{label:"Legs",emoji:"🦵",color:"#4aff8c"}};
        const dt = dtMap[wk]||{label:wk,emoji:"💪",color:"#e8ff4a"};
        setTimeout(()=>onComplete(wk, dt.color, dt.label, dt.emoji), 400);
      }
      return next;
    });
  };
  const resetSession = () => {
    setCheckedPerEx(defaultChecked);
    setCompletionFired(false);
  };

  return (
    <div>
      {/* Session progress bar */}
      <div style={{background:"#1a1a1a",border:`1px solid ${w.color}33`,borderRadius:10,
        padding:"10px 14px",marginBottom:12}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{color:"#888",fontSize:11,fontWeight:700}}>PROGRESO DE SESIÓN</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{color:sessionDone===totalSeries?"#4aff8c":w.color,fontSize:11,fontWeight:700}}>
              {sessionDone}/{totalSeries} series
            </span>
            <button onClick={resetSession}
              style={{background:"none",border:"1px solid #333",borderRadius:5,color:"#555",
                fontSize:10,padding:"2px 7px",cursor:"pointer"}}>↺</button>
          </div>
        </div>
        <div style={{background:"#222",borderRadius:20,height:10,overflow:"hidden"}}>
          <div style={{background:`linear-gradient(90deg,${w.color},${w.color}aa)`,height:"100%",
            width:`${totalSeries>0?(sessionDone/totalSeries)*100:0}%`,
            borderRadius:20,transition:"width .3s"}}/>
        </div>
        {sessionDone===totalSeries && totalSeries>0 && (
          <div style={{color:"#4aff8c",fontWeight:700,fontSize:12,marginTop:6,textAlign:"center"}}>
            🎉 ¡Circuito completo! Ve al finisher.
          </div>
        )}
      </div>

      <div style={{ background: w.color + "15", border: `1px solid ${w.color}33`, borderRadius: 10,
        padding: "12px 16px", marginBottom: 16 }}>
        <div style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>CALENTAMIENTO</div>
        <div style={{ color: "#f0f0f0", marginTop: 4, fontSize: 14 }}>🪢 {w.warmup}</div>
      </div>
      <div style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 10 }}>
        CIRCUITO PRINCIPAL — 3 RONDAS
      </div>
      {w.exercises.map((ex, i) => <ExerciseCard key={i} ex={ex} color={w.color} checkedSets={Array.isArray(safeChecked[i])?safeChecked[i]:Array(numSetsPerEx[i]||3).fill(false)} onToggleSet={(j)=>toggleExSet(i,j)}/>)}

      {/* Core block */}
      <CoreBlock wk={wk}/>

      {/* Finisher block with history */}
      <div style={{ background: "#ff4a4a15", border: "1px solid #ff4a4a33", borderRadius: 10,
        overflow:"hidden", marginTop: 8 }}>
        <div style={{ padding:"12px 16px", borderBottom:"1px solid #ff4a4a22" }}>
          <div style={{ fontWeight: 700, color: "#ff4a4a", marginBottom:2 }}>{w.finisher.name}</div>
          <div style={{ color: "#888", fontSize: 12 }}>Registra tu resultado aquí · usa ⏱ Timer</div>
        </div>
        <div style={{padding:"12px 16px"}}>
          {/* Sparkline */}
          {sorted.length >= 2 && (() => {
            const vals = sorted.map(e=>parseFloat(e.value)||0);
            const maxV=Math.max(...vals), minV=Math.min(...vals), range=maxV-minV||1;
            const W=280, H=50;
            const path=sorted.map((e,i)=>{
              const x=(i/(sorted.length-1))*(W-20)+10;
              const y=H-8-((vals[i]-minV)/range)*(H-20);
              return `${i===0?"M":"L"}${x},${y}`;
            }).join(" ");
            return (
              <svg width={W} height={H} style={{display:"block",marginBottom:10}}>
                <path d={path} fill="none" stroke="#ff4a4a" strokeWidth="2" strokeLinejoin="round"/>
                {sorted.map((e,i)=>{
                  const x=(i/(sorted.length-1))*(W-20)+10;
                  const y=H-8-((vals[i]-minV)/range)*(H-20);
                  return <circle key={i} cx={x} cy={y} r="3.5" fill="#ff4a4a" stroke="#0f0f0f" strokeWidth="1.5"/>;
                })}
                <text x={W-10} y="12" fontSize="9" fill="#ff4a4a" textAnchor="end" fontWeight="700">
                  🏆 {best} {w.finisher.unit}
                </text>
              </svg>
            );
          })()}
          {/* Add entry */}
          <div style={{display:"flex",gap:8,marginBottom:8}}>
            <input type="date" value={newDate} onChange={e=>setNewDate(e.target.value)}
              style={{flex:1,background:"#111",border:"1px solid #ff4a4a44",borderRadius:6,padding:"6px 8px",color:"#f0f0f0",fontSize:13,outline:"none"}}/>
            <input type="number" value={newVal} onChange={e=>setNewVal(e.target.value)}
              placeholder={w.finisher.unit}
              style={{width:80,background:"#111",border:"1px solid #ff4a4a44",borderRadius:6,padding:"6px 8px",color:"#ff4a4a",fontSize:13,fontWeight:700,outline:"none"}}/>
            <button onClick={addEntry}
              style={{background:"#ff4a4a",border:"none",borderRadius:6,color:"#000",fontWeight:700,padding:"0 12px",cursor:"pointer",fontSize:13}}>+</button>
          </div>
          {/* History list */}
          <div style={{maxHeight:100,overflowY:"auto"}}>
            {history.length===0
              ? <div style={{color:"#555",fontSize:11,fontStyle:"italic"}}>Sin registros aún</div>
              : [...history].sort((a,b)=>b.date.localeCompare(a.date)).map((e,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"1px solid #222",fontSize:11}}>
                  <span style={{color:"#555"}}>{e.date}</span>
                  <span style={{color:"#ff4a4a",fontWeight:700}}>{e.value} {w.finisher.unit}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Bonus exercise */}
      {w.bonus && <BonusBlock bonus={w.bonus} color={w.color}
        mainDone={sessionDone===totalSeries && totalSeries>0}
        onBonusComplete={onBonusXP}/>}

      {/* Stretching */}
      <StretchingBlock wk={wk} color={w.color}/>
    </div>
  );
}

function RopeTab({ onComplete, travelMode }) {
  const [openSkill,    setOpenSkill]    = useState(null);
  const [openFinisher, setOpenFinisher] = useState(false);
  // Phase checkboxes — persisted so they survive tab switches
  const [checkedPhases, setCheckedPhases] = usePersistedState("vs_session_rope", Array(ROPE_SESSION.length).fill(false));
  const [completionFired, setCompletionFired] = usePersistedState("vs_session_fired_rope", false);
  const doneFases = checkedPhases.filter(Boolean).length;
  const totalFases = ROPE_SESSION.length;
  const allFasesDone = doneFases === totalFases;

  const togglePhase = (i) => {
    setCheckedPhases(s => {
      const next = s.map((v,j)=>j===i?!v:v);
      const newDone = next.filter(Boolean).length;
      // Fire completion when all phases checked
      if(newDone === totalFases && !completionFired && onComplete) {
        setCompletionFired(true);
        setTimeout(()=>onComplete("rope","#c084fc","Cuerda","🪢"), 400);
      }
      return next;
    });
  };

  const resetRope = () => {
    setCheckedPhases(Array(ROPE_SESSION.length).fill(false));
    setCompletionFired(false);
  };

  // Finisher history
  const [finHistory, setFinHistory] = usePersistedState("vs_finisher_rope", []);
  const [newDate, setNewDate] = useState(new Date().toISOString().slice(0,10));
  const [newVal,  setNewVal]  = useState("");
  const addEntry = () => {
    if(!newVal) return;
    setFinHistory(h=>[...h.filter(e=>e.date!==newDate),{date:newDate,value:newVal}].sort((a,b)=>b.date.localeCompare(a.date)));
    setNewVal("");
  };
  const sortedFin = [...finHistory].sort((a,b)=>a.date.localeCompare(b.date));
  const best = finHistory.length>0 ? Math.max(...finHistory.map(e=>parseFloat(e.value)||0)) : 0;

  return (
    <div>
      {/* Session progress bar */}
      <div style={{background:"#1a1a1a",border:"1px solid #c084fc33",borderRadius:10,
        padding:"10px 14px",marginBottom:12}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{color:"#888",fontSize:11,fontWeight:700}}>PROGRESO DE SESIÓN</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{color:allFasesDone?"#4aff8c":"#c084fc",fontSize:11,fontWeight:700}}>
              {doneFases}/{totalFases} fases
            </span>
            <button onClick={resetRope}
              style={{background:"none",border:"1px solid #333",borderRadius:5,color:"#555",
                fontSize:10,padding:"2px 7px",cursor:"pointer"}}>↺</button>
          </div>
        </div>
        <div style={{background:"#222",borderRadius:20,height:10,overflow:"hidden"}}>
          <div style={{background:"linear-gradient(90deg,#c084fc,#c084fcaa)",height:"100%",
            width:`${(doneFases/totalFases)*100}%`,borderRadius:20,transition:"width .3s"}}/>
        </div>
        {allFasesDone && (
          <div style={{color:"#4aff8c",fontWeight:700,fontSize:12,marginTop:6,textAlign:"center"}}>
            🎉 ¡Sesión completa! Ve al finisher.
          </div>
        )}
      </div>

      {travelMode && (
        <div style={{background:"#4a9eff22",border:"1px solid #4a9eff55",borderRadius:10,
          padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:16}}>✈️</span>
          <div style={{color:"#4a9eff",fontSize:12,fontWeight:700}}>Modo Viaje — Cardio sin cuerda</div>
        </div>
      )}
      <div style={{ marginBottom: 20 }}>
        <div style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>
          ESTRUCTURA DE CADA SESIÓN {travelMode?"— HOTEL":"DE CUERDA"}
        </div>
        {(travelMode ? TRAVEL_ROPE_SESSION : ROPE_SESSION).map((p, i) => (
          <div key={i} style={{ background: "#1a1a1a", border: `1px solid ${checkedPhases[i]?p.color+"88":p.color+"33"}`, borderRadius: 10,
            padding: "12px 14px", marginBottom: 10, transition:"border-color .2s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: p.color }}>{p.phase}</span>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <Tag color={p.color}>{p.duration}</Tag>
                <button onClick={()=>togglePhase(i)}
                  style={{background:checkedPhases[i]?p.color+"22":"none",border:`1px solid ${checkedPhases[i]?p.color:"#333"}`,
                    borderRadius:6,padding:"3px 8px",cursor:"pointer",color:checkedPhases[i]?p.color:"#555",fontSize:12,fontWeight:700}}>
                  {checkedPhases[i]?"☑":"☐"}
                </button>
              </div>
            </div>
            {p.items.map((it, j) => (
              <div key={j} style={{ color: "#bbb", fontSize: 13, paddingLeft: 8, marginBottom: 4,
                borderLeft: `2px solid ${p.color}44` }}>{it}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Finisher — collapsible, after Enfriamiento */}
      <div style={{ background:"#ff4a4a15", border:"1px solid #ff4a4a33", borderRadius:10, overflow:"hidden", marginBottom:20 }}>
        <div onClick={()=>setOpenFinisher(o=>!o)}
          style={{ padding:"12px 16px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:700, color:"#ff4a4a", marginBottom:2 }}>{travelMode ? TRAVEL_ROPE_FINISHER.name : ROPE_FINISHER.name}</div>
            <div style={{ color:"#888", fontSize:12 }}>🔑 No importa el estilo, importa el número.</div>
          </div>
          <span style={{color:"#ff4a4a",fontSize:18}}>{openFinisher?"▲":"▼"}</span>
        </div>
        {openFinisher && (
          <div style={{padding:"0 16px 16px", borderTop:"1px solid #ff4a4a22"}}>
            <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,margin:"12px 0 8px"}}>CÓMO HACERLO</div>
            {["Prepárate 10 seg — usa el Timer con preset Cuerda (10+60).",
              "Al arrancar, salta a ritmo constante durante 60 segundos. No sprint.",
              "Puedes usar cualquier salto: básico, boxer skip, alternate foot.",
              "Cuenta cada salto. Si pierdes la cuenta, estima por grupos de 10.",
              "Registra el total aquí abajo."
            ].map((s,i)=>(
              <div key={i} style={{display:"flex",gap:8,marginBottom:6}}>
                <span style={{color:"#ff4a4a",fontWeight:700,minWidth:20,fontSize:13}}>{i+1}.</span>
                <span style={{color:"#ccc",fontSize:13,lineHeight:1.5}}>{s}</span>
              </div>
            ))}
            <div style={{marginTop:12}}>
              {sortedFin.length >= 2 && (() => {
                const vals=sortedFin.map(e=>parseFloat(e.value)||0);
                const maxV=Math.max(...vals),minV=Math.min(...vals),range=maxV-minV||1;
                const W=280,H=50;
                const path=sortedFin.map((e,i)=>{
                  const x=(i/(sortedFin.length-1))*(W-20)+10;
                  const y=H-8-((vals[i]-minV)/range)*(H-20);
                  return `${i===0?"M":"L"}${x},${y}`;
                }).join(" ");
                return (
                  <svg width={W} height={H} style={{display:"block",marginBottom:10}}>
                    <path d={path} fill="none" stroke="#ff4a4a" strokeWidth="2" strokeLinejoin="round"/>
                    {sortedFin.map((e,i)=>{
                      const x=(i/(sortedFin.length-1))*(W-20)+10;
                      const y=H-8-((vals[i]-minV)/range)*(H-20);
                      return <circle key={i} cx={x} cy={y} r="3.5" fill="#ff4a4a" stroke="#0f0f0f" strokeWidth="1.5"/>;
                    })}
                    <text x={W-10} y="12" fontSize="9" fill="#ff4a4a" textAnchor="end" fontWeight="700">🏆 {best} saltos</text>
                  </svg>
                );
              })()}
              <div style={{display:"flex",gap:8,marginBottom:8}}>
                <input type="date" value={newDate} onChange={e=>setNewDate(e.target.value)}
                  style={{flex:1,background:"#111",border:"1px solid #ff4a4a44",borderRadius:6,padding:"6px 8px",color:"#f0f0f0",fontSize:13,outline:"none"}}/>
                <input type="number" value={newVal} onChange={e=>setNewVal(e.target.value)} placeholder="saltos"
                  style={{width:80,background:"#111",border:"1px solid #ff4a4a44",borderRadius:6,padding:"6px 8px",color:"#ff4a4a",fontSize:13,fontWeight:700,outline:"none"}}/>
                <button onClick={addEntry}
                  style={{background:"#ff4a4a",border:"none",borderRadius:6,color:"#000",fontWeight:700,padding:"0 12px",cursor:"pointer",fontSize:13}}>+</button>
              </div>
              <div style={{maxHeight:90,overflowY:"auto"}}>
                {finHistory.length===0
                  ? <div style={{color:"#555",fontSize:11,fontStyle:"italic"}}>Sin registros aún</div>
                  : [...finHistory].sort((a,b)=>b.date.localeCompare(a.date)).map((e,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"3px 0",borderBottom:"1px solid #222",fontSize:11}}>
                      <span style={{color:"#555"}}>{e.date}</span>
                      <span style={{color:"#ff4a4a",fontWeight:700}}>{e.value} saltos</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>
        TRUCOS POR SEMANA 🎯
      </div>
      {ROPE_SKILLS.map((s, i) => (
        <div key={i} style={{ background: "#1a1a1a", border: `1px solid ${s.color}33`, borderRadius: 10,
          marginBottom: 10, overflow: "hidden" }}>
          <div onClick={() => setOpenSkill(openSkill === i ? null : i)}
            style={{ cursor: "pointer", padding: "12px 14px", display: "flex",
              justifyContent: "space-between", alignItems: "center" }}>
            <Tag color={s.color}>{s.level}</Tag>
            <span style={{ color: s.color }}>{openSkill === i ? "▲" : "▼"}</span>
          </div>
          {openSkill === i && s.tricks.map((t, j) => (
            <div key={j} style={{ padding: "10px 14px", borderTop: "1px solid #2a2a2a" }}>
              <div style={{ fontWeight: 700, color: "#f0f0f0", marginBottom: 4 }}>
                {t.name} <span style={{ color: s.color, fontSize: 11, marginLeft: 8 }}>⏱ {t.time}</span>
              </div>
              <div style={{ color: "#bbb", fontSize: 13, lineHeight: 1.6, marginBottom: 6 }}>{t.desc}</div>
              <VideoLink url={t.video} />
            </div>
          ))}
        </div>
      ))}

      {/* Stretching */}
      <StretchingBlock wk="rope" color="#c084fc"/>
    </div>
  );
}

function ProgressSection({ weightHistory: _pwh = [], setWeightHistory, goalWeight = "200", setGoalWeight, pokedex={} }) {
  const weightHistory = Array.isArray(_pwh) ? _pwh : [];
  // Weight comes from weightHistory (shared with DataTab)
  const sortedWeights = [...weightHistory].sort((a,b)=>a.date.localeCompare(b.date));
  const startWeight = sortedWeights.length > 0 ? parseFloat(sortedWeights[0].value) || 250 : 250;
  const currentWeight = sortedWeights.length > 0 ? parseFloat(sortedWeights[sortedWeights.length-1].value) || startWeight : startWeight;

  const metrics = [
    { key: "push_ups",   label: "Push-ups / 60 seg",   unit: "reps", color: "#ff6b35", icon: "💪" },
    { key: "trx_rows",   label: "TRX Rows / 45 seg",   unit: "reps", color: "#4a9eff", icon: "🔙" },
    { key: "squat_hold", label: "Goblet Hold peso",     unit: "lbs",  color: "#4aff8c", icon: "🦵" },
    { key: "rope_jumps", label: "Cuerda — Saltos / 60 seg", unit: "saltos", color: "#c084fc", icon: "🪢" },
  ];

  function Sparkline({ data, color, lowerIsBetter }) {
    const vals = data.map(v => parseFloat(v) || 0);
    const nonZero = vals.filter(v => v > 0);
    if (nonZero.length < 2) return (
      <div style={{ color: "#555", fontSize: 11, fontStyle: "italic", padding: "8px 0" }}>
        Registra al menos 2 semanas para ver la gráfica
      </div>
    );
    const max = Math.max(...nonZero);
    const min = Math.min(...nonZero);
    const range = max - min || 1;
    const pts = vals.map((v, i) => {
      const x = (i / (vals.length - 1)) * 280 + 10;
      const y = v === 0 ? null : lowerIsBetter
        ? 15 + ((v - min) / range) * 40
        : 55 - ((v - min) / range) * 40;
      return { x, y, v };
    }).filter(p => p.y !== null);
    const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
    return (
      <svg width="300" height="70" style={{ display: "block", margin: "6px 0" }}>
        <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" opacity="0.9" strokeLinejoin="round"/>
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill={color} stroke="#0f0f0f" strokeWidth="2"/>
            {i === pts.length - 1 && (
              <text x={p.x + 6} y={p.y + 4} fill={color} fontSize="10" fontWeight="700">{p.v}</text>
            )}
          </g>
        ))}
      </svg>
    );
  }

  const caughtCount = Object.keys(pokedex).filter(k=>pokedex[k].caught).length;
  const totalPokes  = Object.values(LEVEL_POKEMON).flat().length;

  // Read finisher histories from exercise tabs
  const pushHist  = (() => { try { const s=localStorage.getItem("vs_finisher_push");  return s?JSON.parse(s):[];} catch{return [];} })();
  const pullHist  = (() => { try { const s=localStorage.getItem("vs_finisher_pull");  return s?JSON.parse(s):[];} catch{return [];} })();
  const legsHist  = (() => { try { const s=localStorage.getItem("vs_finisher_legs");  return s?JSON.parse(s):[];} catch{return [];} })();
  const ropeHist  = (() => { try { const s=localStorage.getItem("vs_finisher_rope");  return s?JSON.parse(s):[];} catch{return [];} })();

  const finMetrics = [
    { key:"push", label:"Push-ups / 60 seg",      unit:"reps",   color:"#ff6b35", icon:"💪", hist:pushHist },
    { key:"pull", label:"TRX Rows / 45 seg",       unit:"reps",   color:"#4a9eff", icon:"🔙", hist:pullHist },
    { key:"legs", label:"Goblet Hold peso",         unit:"lbs",    color:"#4aff8c", icon:"🦵", hist:legsHist },
    { key:"rope", label:"Cuerda — Saltos / 60 seg", unit:"saltos", color:"#c084fc", icon:"🪢", hist:ropeHist },
  ];

  return (
    <div>
      {/* Pokédex counter */}
      <div style={{marginBottom:16}}>
        <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:8}}>
          🔴 POKÉDEX
        </div>
        <div style={{background:"#1a1a1a",border:"1px solid #e8ff4a33",borderRadius:10,
          padding:"10px 14px",display:"flex",alignItems:"center",gap:12}}>
          <span style={{fontSize:24}}>🔴</span>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"baseline",gap:6}}>
              <span style={{color:"#e8ff4a",fontWeight:900,fontSize:22}}>{caughtCount}</span>
              <span style={{color:"#555",fontSize:12}}>/ {totalPokes} Pokémon atrapados</span>
            </div>
            <div style={{background:"#222",borderRadius:20,height:6,marginTop:6,overflow:"hidden"}}>
              <div style={{background:"linear-gradient(90deg,#e8ff4a,#4aff8c)",height:"100%",
                width:`${totalPokes>0?(caughtCount/totalPokes)*100:0}%`,
                borderRadius:20,transition:"width .4s"}}/>
            </div>
          </div>
          {caughtCount===0 && <span style={{color:"#555",fontSize:11}}>Sube de nivel</span>}
        </div>
      </div>
      <div style={{ color: "#888", fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>
        TU PROGRESIÓN — FINISHERS
      </div>
      <div style={{color:"#555",fontSize:11,marginBottom:16}}>Registra tus resultados en cada pestaña de ejercicio</div>
      {finMetrics.map(m => {
        const sorted = [...m.hist].sort((a,b)=>a.date.localeCompare(b.date));
        const vals = sorted.map(e=>parseFloat(e.value)||0);
        const best = vals.length>0 ? Math.max(...vals) : 0;
        return (
          <div key={m.key} style={{ background: "#1a1a1a", border: `1px solid #2a2a2a`,
            borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom:4 }}>
              <span style={{ fontWeight: 700, color: m.color, fontSize: 14 }}>{m.icon} {m.label}</span>
              {best > 0 && <Tag color={m.color}>🏆 {best} {m.unit}</Tag>}
            </div>
            <Sparkline data={sorted.map(e=>e.value)} color={m.color} lowerIsBetter={false}/>
          </div>
        );
      })}

      {/* Weight progress — reads from Data tab history */}
      <div style={{ background: "#1a1a1a", border: "1px solid #e8ff4a33", borderRadius: 10,
        padding: "14px 16px", marginTop: 8 }}>
        <div style={{ fontWeight: 700, color: "#e8ff4a", marginBottom: 10 }}>⚖️ Progreso de Peso</div>
        {sortedWeights.length === 0
          ? <div style={{color:"#555",fontSize:12,fontStyle:"italic"}}>Registra tu peso en la pestaña 👤 Data para ver el progreso aquí</div>
          : <>
            {/* Weight sparkline from real history */}
            {(() => {
              const pts = sortedWeights.filter(e=>parseFloat(e.value)>0);
              if(pts.length < 2) return <div style={{color:"#555",fontSize:11,fontStyle:"italic",marginBottom:12}}>Agrega al menos 2 registros de peso en Data para ver la gráfica</div>;
              const vals = pts.map(e=>parseFloat(e.value));
              const maxV=Math.max(...vals), minV=Math.min(...vals), range=maxV-minV||1;
              const W=300, H=60;
              const path = pts.map((e,i)=>{
                const x=(i/(pts.length-1))*(W-20)+10;
                const y=H-8-((vals[i]-minV)/range)*(H-20);
                return `${i===0?"M":"L"}${x},${y}`;
              }).join(" ");
              return (
                <svg width={W} height={H} style={{display:"block",margin:"0 0 12px"}}>
                  <path d={path} fill="none" stroke="#e8ff4a" strokeWidth="2.5" strokeLinejoin="round"/>
                  {pts.map((e,i)=>{
                    const x=(i/(pts.length-1))*(W-20)+10;
                    const y=H-8-((vals[i]-minV)/range)*(H-20);
                    return <circle key={i} cx={x} cy={y} r="4" fill="#e8ff4a" stroke="#0f0f0f" strokeWidth="1.5"/>;
                  })}
                  <text x="10" y={H} fontSize="8" fill="#555">{pts[0].date.slice(5)}</text>
                  <text x={W-10} y={H} fontSize="8" fill="#555" textAnchor="end">{pts[pts.length-1].date.slice(5)}</text>
                  <text x={W-10} y="12" fontSize="9" fill="#e8ff4a" textAnchor="end" fontWeight="700">{vals[vals.length-1]} lbs</text>
                </svg>
              );
            })()}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ color: "#888", fontSize: 12 }}>Meta:</span>
              <input type="number" value={goalWeight} onChange={e => setGoalWeight && setGoalWeight(e.target.value)}
                style={{ width: 70, background: "#111", border: "1px solid #e8ff4a44",
                  borderRadius: 6, padding: "4px 8px", color: "#e8ff4a", fontSize: 14,
                  fontWeight: 700, outline: "none" }}/>
              <span style={{ color: "#888", fontSize: 12 }}>lbs</span>
            </div>
            {(() => {
              const goalW = parseFloat(goalWeight) || 200;
              const prog = Math.max(0, Math.min(100, ((startWeight - currentWeight) / (startWeight - goalW)) * 100));
              const lost = (startWeight - currentWeight).toFixed(1);
              return (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#888", marginBottom: 6 }}>
                    <span>{startWeight} lbs (inicio)</span>
                    <span>🏆 {goalW} lbs (meta)</span>
                  </div>
                  <div style={{ background: "#222", borderRadius: 20, height: 16, overflow: "hidden" }}>
                    <div style={{ background: "linear-gradient(90deg, #e8ff4a, #4aff8c)",
                      height: "100%", width: `${prog}%`, borderRadius: 20, transition: "width 0.5s ease" }}/>
                  </div>
                  <div style={{ color: "#e8ff4a", fontWeight: 700, marginTop: 8, fontSize: 15 }}>
                    {prog.toFixed(1)}% — {lost} lbs {parseFloat(lost)>=0?"perdidas":"ganadas"}
                  </div>
                  <div style={{ color: "#888", fontSize: 11, marginTop: 4 }}>
                    Actual: {currentWeight} lbs · Meta: {goalW} lbs · Faltan: {Math.max(0, currentWeight - goalW).toFixed(1)} lbs
                  </div>
                </>
              );
            })()}
          </>
        }
      </div>
    </div>
  );
}

function WeekPlanTab({ plan: planProp, setPlan: setPlanProp, weekChecked: weekCheckedProp, setWeekChecked: setWeekCheckedProp, onGoToWorkout, onMarkPlanned, alreadyPlanned, travelMode, setTravelMode }) {
  const DAYS = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  const ACTIVITY_OPTIONS = [
    { id:"push",    label:"💪 Push",      color:"#ff6b35", duration:"35-45 min" },
    { id:"pull",    label:"🔙 Pull",      color:"#4a9eff", duration:"35-45 min" },
    { id:"legs",    label:"🦵 Legs",      color:"#4aff8c", duration:"35-45 min" },
    { id:"rope",    label:"🪢 Cuerda",    color:"#c084fc", duration:"25-30 min" },
    { id:"hike",    label:"🏔️ Caminata", color:"#e8ff4a", duration:"libre"     },
    { id:"gamefit", label:"🎮 Game Fit",  color:"#f472b6", duration:"20-30 min" },
    { id:"activo",  label:"⚡ Activo",    color:"#fb923c", duration:"libre"     },
    { id:"mental",  label:"🧠 Mental",    color:"#67e8f9", duration:"libre"     },
    { id:"rest",    label:"😴 Descanso",  color:"#555",    duration:""          },
  ];

  const plan = planProp;
  const setPlan = setPlanProp;
  const checked = weekCheckedProp || Array(7).fill(false);
  const setChecked = setWeekCheckedProp || (()=>{});
  const [editingDay, setEditingDay] = useState(null);
  const toggleCheck = (i) => setChecked(c => c.map((v,j) => j===i ? !v : v));
  const resetChecks = () => setChecked(Array(7).fill(false));

  const updateDay = (i, field, val) => {
    setPlan(p => p.map((d,j) => j===i ? {...d,[field]:val} : d));
  };

  // Sunday detection for banner
  const now__ = new Date();
  const isSunday = now__.getDay() === 0;
  const isSaturdayEvening = now__.getDay() === 6 && now__.getHours() >= 18;
  const showReplanBanner = isSunday || isSaturdayEvening;

  // Summary counts
  const workouts = plan.filter(d=>["push","pull","legs","rope"].includes(d.activity)).length;
  const cardio   = plan.filter(d=>["hike","rope","activo"].includes(d.activity)).length;
  const light    = plan.filter(d=>["gamefit","mental"].includes(d.activity)).length;
  const rest     = plan.filter(d=>d.activity==="rest").length;
  const doneCount = checked.filter(Boolean).length;

  return (
    <div>
      {/* Summary bar */}
      <div style={{background:"#1a1a1a",border:"1px solid #2a2a2a",borderRadius:10,padding:12,marginBottom:16,display:"flex",gap:0,flexWrap:"wrap"}}>
        {[
          {label:"Entrenos", value:workouts, color:"#ff6b35"},
          {label:"Cardio",   value:cardio,   color:"#e8ff4a"},
          {label:"Leve",     value:light,    color:"#f472b6"},
          {label:"Descanso", value:rest,     color:"#555"},
        ].map((s,i)=>(
          <div key={i} style={{flex:1,textAlign:"center",borderRight:i<3?"1px solid #2a2a2a":"none",padding:"4px 0"}}>
            <div style={{color:s.color,fontWeight:900,fontSize:20}}>{s.value}</div>
            <div style={{color:"#555",fontSize:9}}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar for week */}
      <div style={{background:"#1a1a1a",border:"1px solid #2a2a2a",borderRadius:10,padding:"10px 14px",marginBottom:10}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{color:"#888",fontSize:11,fontWeight:700}}>SEMANA ACTUAL</span>
          <span style={{color:"#e8ff4a",fontSize:11,fontWeight:700}}>{doneCount}/7 días</span>
        </div>
        <div style={{background:"#222",borderRadius:20,height:8,overflow:"hidden",marginBottom:10}}>
          <div style={{background:"linear-gradient(90deg,#e8ff4a,#4aff8c)",height:"100%",
            width:`${(doneCount/7)*100}%`,borderRadius:20,transition:"width .3s"}}/>
        </div>
        <button onClick={resetChecks}
          style={{width:"100%",background:"#222",border:"1px solid #333",borderRadius:6,
            color:"#888",fontSize:12,fontWeight:700,padding:"6px",cursor:"pointer"}}>
          ↺ Resetear checkboxes de la semana
        </button>
      </div>

      {/* Travel mode toggle */}
      <div style={{background: travelMode?"#4a9eff22":"#1a1a1a",
        border:`1px solid ${travelMode?"#4a9eff":"#2a2a2a"}`,
        borderRadius:10,padding:"12px 14px",marginBottom:12,
        display:"flex",justifyContent:"space-between",alignItems:"center",
        transition:"all .2s"}}>
        <div>
          <div style={{color:travelMode?"#4a9eff":"#888",fontWeight:700,fontSize:14}}>
            ✈️ Modo Viaje
          </div>
          <div style={{color:"#555",fontSize:11,marginTop:2}}>
            {travelMode?"Rutinas sin equipo activas":"Activa si estarás de viaje esta semana"}
          </div>
        </div>
        <div onClick={()=>setTravelMode&&setTravelMode(t=>!t)}
          style={{width:44,height:24,borderRadius:12,
            background:travelMode?"#4a9eff":"#333",
            position:"relative",cursor:"pointer",transition:"background .2s",flexShrink:0}}>
          <div style={{position:"absolute",top:3,
            left:travelMode?22:3,width:18,height:18,
            borderRadius:"50%",background:"#fff",
            transition:"left .2s",boxShadow:"0 1px 3px #0006"}}/>
        </div>
      </div>

      {/* Sunday banner */}
      {showReplanBanner && (
        <div style={{background:"#e8ff4a22",border:"1px solid #e8ff4a55",borderRadius:10,
          padding:"12px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:24}}>📅</span>
          <div>
            <div style={{color:"#e8ff4a",fontWeight:700,fontSize:13}}>¡Es domingo! Nueva semana.</div>
            <div style={{color:"#bbb",fontSize:11,marginTop:2}}>Revisa tu plan y ajusta lo que necesites.</div>
          </div>
        </div>
      )}

      {/* Days */}
      {DAYS.map((day, i) => {
        const d = plan[i];
        const act = ACTIVITY_OPTIONS.find(a=>a.id===d.activity) || ACTIVITY_OPTIONS[8];
        const isEditing = editingDay === i;
        return (
          <div key={i} style={{background:"#1a1a1a",border:`1px solid ${act.color}33`,
            borderRadius:10,marginBottom:8,overflow:"hidden"}}>
            {/* Day row */}
            <div style={{padding:"12px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              {/* Checkbox */}
              <button onClick={()=>toggleCheck(i)}
                style={{background:checked[i]?act.color+"33":"#111",border:`2px solid ${checked[i]?act.color:"#333"}`,
                  borderRadius:8,width:36,height:36,cursor:"pointer",fontSize:18,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  flexShrink:0,marginRight:10,transition:"all .15s"}}>
                {checked[i]?"☑":"☐"}
              </button>
              <div style={{flex:1}}>
                <div style={{color:"#555",fontSize:10,fontWeight:700,marginBottom:2}}>{day.toUpperCase()}</div>
                <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                  <span style={{color:checked[i]?act.color+"99":act.color,fontWeight:700,fontSize:16,
                    textDecoration:checked[i]?"line-through":"none",transition:"all .2s"}}>
                    {act.label}
                  </span>
                  {["push","pull","legs","rope"].includes(d.activity) && onGoToWorkout && (
                    <button onClick={e=>{ e.stopPropagation(); onGoToWorkout(d.activity); }}
                      style={{background:act.color+"22",border:`1px solid ${act.color}66`,
                        borderRadius:7,padding:"3px 10px",cursor:"pointer",
                        color:act.color,fontSize:12,fontWeight:700,display:"flex",
                        alignItems:"center",gap:4}}>
                      {checked[i]?"Ver →":"Ir →"}
                    </button>
                  )}
                </div>
                {d.note && <div style={{color:"#666",fontSize:11,marginTop:2}}>📝 {d.note}</div>}
                {travelMode && ["push","pull","legs","rope"].includes(d.activity) && (
                  <div style={{color:"#4a9eff",fontSize:10,fontWeight:700,marginTop:3}}>✈️ sin equipo</div>
                )}
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                {act.duration && !checked[i] && (
                  <div style={{background:act.color+"22",borderRadius:6,padding:"4px 10px",
                    fontSize:11,color:act.color,fontWeight:700}}>{act.duration}</div>
                )}
                {checked[i] && (
                  <div style={{background:"#4aff8c22",borderRadius:6,padding:"4px 10px",
                    fontSize:11,color:"#4aff8c",fontWeight:700}}>✓ Hecho</div>
                )}
                <button onClick={()=>setEditingDay(isEditing?null:i)}
                  style={{background:"none",border:`1px solid ${isEditing?"#e8ff4a":"#333"}`,
                    borderRadius:6,color:isEditing?"#e8ff4a":"#555",fontSize:12,
                    padding:"4px 10px",cursor:"pointer",fontWeight:700}}>
                  {isEditing?"✓":"✏️"}
                </button>
              </div>
            </div>

            {/* Edit panel */}
            {isEditing && (
              <div style={{padding:"0 14px 14px",borderTop:"1px solid #2a2a2a"}}>
                <div style={{color:"#888",fontSize:11,fontWeight:700,margin:"10px 0 8px"}}>ACTIVIDAD</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
                  {ACTIVITY_OPTIONS.map(opt=>(
                    <button key={opt.id} onClick={()=>updateDay(i,"activity",opt.id)}
                      style={{background:d.activity===opt.id?opt.color+"33":"#111",
                        border:`1px solid ${d.activity===opt.id?opt.color:"#333"}`,
                        borderRadius:7,padding:"7px 4px",cursor:"pointer",
                        color:d.activity===opt.id?opt.color:"#666",fontSize:11,fontWeight:700}}>
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div style={{color:"#888",fontSize:11,fontWeight:700,marginBottom:6}}>NOTA (opcional)</div>
                <input type="text" value={d.note} onChange={e=>updateDay(i,"note",e.target.value)}
                  placeholder="Ej: teletrabajo, salgo tarde..."
                  style={{width:"100%",background:"#111",border:"1px solid #333",borderRadius:6,
                    padding:"7px 10px",color:"#f0f0f0",fontSize:13,outline:"none",
                    boxSizing:"border-box"}}/>
                <button onClick={()=>setEditingDay(null)}
                  style={{marginTop:8,width:"100%",background:"#e8ff4a",border:"none",
                    borderRadius:6,color:"#000",fontWeight:700,fontSize:13,
                    padding:"8px",cursor:"pointer"}}>
                  Guardar
                </button>
              </div>
            )}
          </div>
        );
      })}

      {/* Mark week planned button */}
      <div style={{marginTop:12,marginBottom:4}}>
        {alreadyPlanned
          ? <div style={{background:"#4aff8c22",border:"1px solid #4aff8c55",borderRadius:10,
              padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:20}}>✅</span>
              <span style={{color:"#4aff8c",fontWeight:700,fontSize:14}}>Semana planificada</span>
            </div>
          : <button onClick={onMarkPlanned}
              style={{width:"100%",background:"#e8ff4a",border:"none",borderRadius:10,
                color:"#000",fontWeight:900,fontSize:15,padding:"13px",cursor:"pointer"}}>
              ✓ Semana planificada — guardar
            </button>
        }
      </div>

      {/* Checklist */}
      <div style={{background:"#1a1a1a",border:"1px solid #333",borderRadius:10,padding:14,marginTop:8}}>
        <div style={{color:"#e8ff4a",fontWeight:700,marginBottom:8}}>📋 Checklist mental pre-sesión</div>
        {["¿Tengo agua?","¿Puse música?","¿Sé qué ejercicio toca?","¿Tengo 35 min libres?",
          "Si no tienes ganas: solo haz el calentamiento. Casi siempre sigues después."].map((c,i)=>(
          <div key={i} style={{color:"#bbb",fontSize:13,marginBottom:5,paddingLeft:8,
            borderLeft:"2px solid #e8ff4a44"}}>☐ {c}</div>
        ))}
      </div>
    </div>
  );
}

// ─── Pokédex Data ────────────────────────────────────────────────────────────
const LEVEL_POKEMON = {
  2: [{id:4,name:"charmander",fav:1,choice:true},{id:7,name:"squirtle",fav:1,choice:true},{id:1,name:"bulbasaur",fav:1,choice:true}],
  3: [{id:121,name:"starmie",fav:1}],
  4: [{id:93,name:"haunter",fav:1}],
  5: [{id:123,name:"scyther",fav:1}],
  6: [{id:906,name:"sprigatito",fav:1}],
  7: [{id:147,name:"dratini",fav:1}],
  8: [{id:7,name:"squirtle",fav:1},{id:181,name:"ampharos",fav:1}],
  9: [{id:25,name:"pikachu",fav:2}],
  10: [{id:134,name:"vaporeon",fav:1},{id:26,name:"raichu",fav:1}],
  11: [{id:133,name:"eevee",fav:1}],
  12: [{id:1,name:"bulbasaur",fav:1},{id:5,name:"charmeleon",fav:1}],
  13: [{id:255,name:"torchic",fav:1}],
  14: [{id:653,name:"fennekin",fav:1}],
  15: [{id:208,name:"steelix",fav:1}],
  16: [{id:350,name:"milotic",fav:2}],
  17: [{id:92,name:"gastly",fav:1},{id:228,name:"houndour",fav:1}],
  18: [{id:427,name:"buneary",fav:1}],
  19: [{id:216,name:"teddiursa",fav:1}],
  20: [{id:260,name:"swampert",fav:1}],
  21: [{id:607,name:"litwick",fav:1}],
  22: [{id:158,name:"totodile",fav:2},{id:160,name:"feraligatr",fav:1}],
  23: [{id:2,name:"ivysaur",fav:1}],
  24: [{id:214,name:"heracross",fav:1}],
  25: [{id:444,name:"gabite",fav:1}],
  26: [{id:608,name:"lampent",fav:1}],
  27: [{id:6,name:"charizard",fav:1}],
  28: [{id:227,name:"skarmory",fav:2},{id:912,name:"quaxly",fav:1}],
  29: [{id:229,name:"houndoom",fav:1}],
  30: [{id:778,name:"mimikyu",fav:3}],
  31: [{id:445,name:"garchomp",fav:1}],
  32: [{id:292,name:"shedinja",fav:1},{id:865,name:"sirfetchd",fav:1}],
  33: [{id:437,name:"bronzong",fav:1}],
  34: [{id:374,name:"beldum",fav:1}],
  35: [{id:886,name:"drakloak",fav:1}],
  36: [{id:658,name:"greninja",fav:1}],
  37: [{id:475,name:"gallade",fav:1}],
  38: [{id:371,name:"bagon",fav:1}],
  39: [{id:330,name:"flygon",fav:1}],
  40: [{id:935,name:"charcadet",fav:1}],
  41: [{id:681,name:"aegislash",fav:2}],
  42: [{id:867,name:"runerigus",fav:1}],
  43: [{id:436,name:"bronzor",fav:1}],
  44: [{id:715,name:"noivern",fav:1}],
  45: [{id:686,name:"inkay",fav:1},{id:634,name:"zweilous",fav:1}],
  46: [{id:687,name:"malamar",fav:1}],
  47: [{id:334,name:"altaria",fav:1}],
  48: [{id:471,name:"glaceon",fav:2}],
  49: [{id:448,name:"lucario",fav:1}],
  50: [{id:150,name:"mewtwo",fav:2}],
  51: [{id:478,name:"froslass",fav:1}],
  52: [{id:508,name:"stoutland",fav:1}],
  53: [{id:251,name:"celebi",fav:1}],
  54: [{id:560,name:"scrafty",fav:1}],
  55: [{id:248,name:"tyranitar",fav:1}],
  56: [{id:983,name:"kingambit",fav:1}],
  57: [{id:717,name:"yveltal",fav:2},{id:652,name:"chesnaught",fav:1}],
  58: [{id:856,name:"hatenna",fav:1}],
  59: [{id:885,name:"dreepy",fav:1}],
  60: [{id:970,name:"glimmora",fav:1}],
  61: [{id:798,name:"kartana",fav:1}],
  62: [{id:862,name:"obstagoon",fav:2}],
  63: [{id:907,name:"floragato",fav:1}],
  64: [{id:486,name:"regigigas",fav:2}],
  65: [{id:1012,name:"poltchageist",fav:1}],
  66: [{id:911,name:"skeledirge",fav:1}],
  67: [{id:936,name:"armarouge",fav:1}],
  68: [{id:730,name:"primarina",fav:1}],
  69: [{id:700,name:"sylveon",fav:2}],
  70: [{id:972,name:"houndstone",fav:1}],
  71: [{id:937,name:"ceruledge",fav:2}],
  72: [{id:861,name:"grimmsnarl",fav:1}],
  73: [{id:957,name:"tinkatink",fav:1}],
  74: [{id:744,name:"rockruff",fav:1}],
  75: [{id:384,name:"rayquaza",fav:2}],
  76: [{id:10054,name:"medicham-mega",fav:1}],
  77: [{id:10170,name:"zapdos-galar",fav:1},{id:10102,name:"sandslash-alola",fav:1}],
  78: [{id:10051,name:"gardevoir-mega",fav:1}],
  79: [{id:383,name:"groudon",fav:1}],
  80: [{id:488,name:"cresselia",fav:1}],
  81: [{id:10068,name:"gallade-mega",fav:1}],
  82: [{id:10039,name:"kangaskhan-mega",fav:1},{id:145,name:"zapdos",fav:1}],
  83: [{id:10126,name:"lycanroc-midnight",fav:1},{id:10037,name:"alakazam-mega",fav:1}],
  84: [{id:151,name:"mew",fav:2}],
  85: [{id:10038,name:"gengar-mega",fav:2}],
  86: [{id:10115,name:"marowak-alola",fav:1}],
  87: [{id:381,name:"latios",fav:1}],
  88: [{id:888,name:"zacian",fav:1}],
  89: [{id:10104,name:"ninetales-alola",fav:2}],
  90: [{id:493,name:"arceus",fav:1}],
  91: [{id:10079,name:"rayquaza-mega",fav:2}],
  92: [{id:10188,name:"zacian-crowned",fav:2}],
  93: [{id:494,name:"victini",fav:1},{id:10162,name:"ponyta-galar",fav:1}],
  94: [{id:10078,name:"groudon-primal",fav:1}],
  95: [{id:10171,name:"moltres-galar",fav:1}],
  96: [{id:10046,name:"scizor-mega",fav:1}],
  97: [{id:10193,name:"calyrex-ice",fav:1}],
  98: [{id:10187,name:"morpeko-hangry",fav:1}],
  99: [{id:10116,name:"greninja-battle-bond",fav:1}],
  100: [{id:778,name:"mimikyu",fav:3,shiny:true}],
};

const SPECIAL_POKEMON = {
  "rope10": {id:798,name:"kartana",fav:1,emoji:"🗡️",desc:"Completar 10 sesiones de cuerda"},
  "rest7": {id:143,name:"snorlax",fav:1,emoji:"😴",desc:"Registrar 7 días de descanso"},
  "level30": {id:778,name:"mimikyu",fav:3,emoji:"🎭",desc:"Alcanzar nivel 30"},
  "level50": {id:150,name:"mewtwo",fav:2,emoji:"👾",desc:"Alcanzar nivel 50"},
  "level75": {id:384,name:"rayquaza",fav:2,emoji:"🐉",desc:"Alcanzar nivel 75"},
};

const POKEMON_SPRITE = (name, shiny=false) => {
  // Use PokeAPI sprites — reliable and CORS-friendly
  // For forms/megas, fall back to base name
  const cleanName = name.toLowerCase()
    .replace(/-mega$|-mega-x$|-mega-y$/,"")
    .replace(/-primal$/,"")
    .replace(/-alola$/,"-alolan")
    .replace(/-galar$/,"-galarian")
    .replace(/-hisui$/,"-hisuian")
    .replace(/-crowned$/,"")
    .replace(/-battle-bond$/,"")
    .replace(/-ash$/,"")
    .replace(/^10[0-9]{3,}/,""); // strip alternate form IDs
  const base = shiny
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${name.replace(/[^a-z0-9-]/g,"")}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.replace(/[^a-z0-9-]/g,"")}.png`;
  return base;
};

// Fallback: use official sprite by dex number
const POKEMON_SPRITE_BY_ID = (id, shiny=false) => {
  if(shiny) return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

// ─── XP & Level System ───────────────────────────────────────────────────────
const XP_TABLE = {
  1: 8,
  2: 12,
  3: 20,
  4: 29,
  5: 44,
  6: 54,
  7: 56,
  8: 57,
  9: 59,
  10: 60,
  11: 61,
  12: 63,
  13: 64,
  14: 65,
  15: 67,
  16: 68,
  17: 69,
  18: 70,
  19: 72,
  20: 73,
  21: 74,
  22: 75,
  23: 77,
  24: 78,
  25: 79,
  26: 80,
  27: 81,
  28: 82,
  29: 83,
  30: 84,
  31: 85,
  32: 86,
  33: 87,
  34: 88,
  35: 89,
  36: 91,
  37: 92,
  38: 93,
  39: 94,
  40: 95,
  41: 96,
  42: 97,
  43: 98,
  44: 99,
  45: 101,
  46: 102,
  47: 103,
  48: 104,
  49: 105,
  50: 106,
  51: 107,
  52: 108,
  53: 109,
  54: 110,
  55: 111,
  56: 112,
  57: 114,
  58: 115,
  59: 116,
  60: 117,
  61: 118,
  62: 119,
  63: 120,
  64: 121,
  65: 122,
  66: 123,
  67: 124,
  68: 125,
  69: 126,
  70: 127,
  71: 128,
  72: 129,
  73: 130,
  74: 131,
  75: 132,
  76: 134,
  77: 135,
  78: 136,
  79: 136,
  80: 137,
  81: 138,
  82: 139,
  83: 140,
  84: 141,
  85: 142,
  86: 143,
  87: 144,
  88: 145,
  89: 146,
  90: 147,
  91: 148,
  92: 149,
  93: 150,
  94: 151,
  95: 152,
  96: 153,
  97: 154,
  98: 155,
  99: 156,
  100: 157,
};

// XP needed to reach level N from level 1
function xpForLevel(targetLevel) {
  let total = 0;
  for(let i = 1; i < targetLevel; i++) {
    total += XP_TABLE[i] || 157;
  }
  return total;
}

function calcLevel(xp) {
  let level = 1, remaining = xp;
  while(level < 100 && remaining >= (XP_TABLE[level] || 157)) {
    remaining -= (XP_TABLE[level] || 157);
    level++;
  }
  const toNext = XP_TABLE[level] || 157;
  return { level, progress: remaining, remaining: toNext - remaining, toNext };
}


// ─── Radar Chart ─────────────────────────────────────────────────────────────
function RadarChart({ data, maxVal = 50 }) {
  const n = data.length;
  const cx = 110, cy = 110, r = 80;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i, val) => {
    const a = angle(i), ratio = Math.min(val, maxVal) / maxVal;
    return { x: cx + r * ratio * Math.cos(a), y: cy + r * ratio * Math.sin(a) };
  };
  const gridPath = (ratio) =>
    Array.from({length: n}, (_, i) => {
      const a = angle(i);
      return `${i===0?"M":"L"}${cx+r*ratio*Math.cos(a)},${cy+r*ratio*Math.sin(a)}`;
    }).join(" ") + "Z";
  const dataPath = data.map((d, i) => {
    const p = pt(i, d.value);
    return `${i===0?"M":"L"}${p.x},${p.y}`;
  }).join(" ") + "Z";
  return (
    <svg width="220" height="240" viewBox="0 0 220 240" style={{ display:"block", margin:"0 auto" }}>
      {[0.25,0.5,0.75,1].map((ratio,gi) => (
        <path key={gi} d={gridPath(ratio)} fill="none" stroke="#2a2a2a" strokeWidth="1"/>
      ))}
      {Array.from({length:n},(_,i)=>{
        const a=angle(i);
        return <line key={i} x1={cx} y1={cy} x2={cx+r*Math.cos(a)} y2={cy+r*Math.sin(a)} stroke="#333" strokeWidth="1"/>;
      })}
      <path d={dataPath} fill="#e8ff4a18" stroke="#e8ff4a" strokeWidth="2.5"/>
      {data.map((d,i)=>{
        const p=pt(i,d.value);
        return <circle key={i} cx={p.x} cy={p.y} r="4" fill="#e8ff4a" stroke="#0f0f0f" strokeWidth="1.5"/>;
      })}
      {data.map((d,i)=>{
        const a=angle(i), lx=cx+(r+22)*Math.cos(a), ly=cy+(r+22)*Math.sin(a);
        return (
          <text key={i} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#aaa" fontWeight="700">
            {d.emoji} {d.label}
          </text>
        );
      })}
      <circle cx={cx} cy={cy} r="3" fill="#555"/>
      <text x={cx+6} y={cy-r-6} fontSize="8" fill="#444">/{maxVal}</text>
    </svg>
  );
}

// ─── Habit Tracker Data ───────────────────────────────────────────────────────
const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

const DAY_TYPES = [
  { id:"push",    label:"Push",     color:"#ff6b35", emoji:"💪", xp:10, isWorkout:true  },
  { id:"pull",    label:"Pull",     color:"#4a9eff", emoji:"🔙", xp:10, isWorkout:true  },
  { id:"legs",    label:"Legs",     color:"#4aff8c", emoji:"🦵", xp:10, isWorkout:true  },
  { id:"rope",    label:"Cuerda",   color:"#c084fc", emoji:"🪢", xp:10, isWorkout:true  },
  { id:"hike",    label:"Caminata", color:"#e8ff4a", emoji:"🏔️", xp:5,  isWorkout:false },
  { id:"gamefit", label:"Game Fit", color:"#f472b6", emoji:"🎮", xp:5,  isWorkout:false },
  { id:"activo",  label:"Activo",   color:"#fb923c", emoji:"⚡", xp:5,  isWorkout:false },
  { id:"mental",  label:"Mental",   color:"#67e8f9", emoji:"🧠", xp:5,  isWorkout:false },
  { id:"rest",    label:"Descanso", color:"#555",    emoji:"😴", xp:0,  isWorkout:false },
];

// Global helper — safely get types array from a log entry (handles both old array format and new object format)
function getLogTypes(entry) {
  if (!entry) return [];
  if (Array.isArray(entry)) return entry;
  return entry.types || [];
}

function weekSemaphore(workouts, lightBonus) {
  const total = workouts + lightBonus;
  if (total === 0)     return { color:"#ff4a4a", label:"Sin actividad", emoji:"🔴" };
  if (workouts < 2)    return { color:"#ff9500", label:"Por debajo",    emoji:"🟠" };
  if (workouts <= 3)   return { color:"#4aff8c", label:"En meta ✓",     emoji:"🟢" };
  return                      { color:"#e8ff4a", label:"¡Semana épica!",emoji:"⭐" };
}

// logs = { "YYYY-MM-DD": ["push","mental", ...] }  (arrays now)
function HabitTrackerTab({ logs, setLogs, onXP, xpAwarded, setXpAwarded }) {
  const now = new Date();
  const [viewYear,  setViewYear]  = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [selecting, setSelecting] = useState(null);
  const [xpToast, setXpToast] = useState(null); // { pts, label }

  const daysInMonth = new Date(viewYear, viewMonth+1, 0).getDate();
  const firstDow    = new Date(viewYear, viewMonth, 1).getDay();
  const todayStr    = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
  const dateStr = (d) => `${viewYear}-${String(viewMonth+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;

  const getTypes = (ds) => {
    const d = logs[ds];
    if (!d) return [];
    if (Array.isArray(d)) return d; // legacy support
    return d.types || [];
  };
  const getCals = (ds) => {
    const d = logs[ds];
    if (!d || Array.isArray(d)) return {};
    return d.cals || {};
  };
  const toggleType = (ds, typeId) => {
    setLogs(l => {
      const cur = getTypes(ds);
      const curCals = getCals(ds);
      const next = cur.includes(typeId) ? cur.filter(x=>x!==typeId) : [...cur, typeId];
      const nextCals = {...curCals};
      if (!next.includes(typeId)) delete nextCals[typeId];
      return { ...l, [ds]: { types: next, cals: nextCals } };
    });
  };
  const setCal = (ds, typeId, val) => {
    setLogs(l => {
      const cur = getTypes(ds);
      const curCals = getCals(ds);
      return { ...l, [ds]: { types: cur, cals: { ...curCals, [typeId]: val } } };
    });
  };
  const clearDay = (ds) => { setLogs(l => ({ ...l, [ds]: { types: [], cals: {} } })); setSelecting(null); };

  const cells = [];
  for (let i=0; i<firstDow; i++) cells.push(null);
  for (let d=1; d<=daysInMonth; d++) cells.push(d);
  while (cells.length%7!==0) cells.push(null);
  const weeks = [];
  for (let i=0; i<cells.length; i+=7) weeks.push(cells.slice(i,i+7));

  const monthDays = Array.from({length:daysInMonth},(_,i)=>dateStr(i+1));
  const allMonthTypes = monthDays.flatMap(d => getTypes(d));
  const workoutDays = monthDays.filter(d=>getTypes(d).some(t=>DAY_TYPES.find(dt=>dt.id===t)?.isWorkout)).length;
  const hikeDays   = allMonthTypes.filter(t=>t==="hike").length;
  const gameDays   = allMonthTypes.filter(t=>t==="gamefit").length;
  const activoDays = allMonthTypes.filter(t=>t==="activo").length;
  const mentalDays = allMonthTypes.filter(t=>t==="mental").length;
  const restDays   = allMonthTypes.filter(t=>t==="rest").length;

  const weekStats = weeks.map(wk => {
    const filled = wk.filter(Boolean);
    const wTypes = filled.flatMap(d => getTypes(dateStr(d)));
    const workouts = wTypes.filter(t=>DAY_TYPES.find(dt=>dt.id===t)?.isWorkout).length;
    const lightBonus = ["hike","gamefit","activo","mental"].filter(t=>wTypes.includes(t)).length * 0.5;
    return weekSemaphore(workouts, lightBonus);
  });

  const prevMonth = () => { if(viewMonth===0){setViewMonth(11);setViewYear(y=>y-1);}else setViewMonth(m=>m-1); setSelecting(null); };
  const nextMonth = () => { if(viewMonth===11){setViewMonth(0);setViewYear(y=>y+1);}else setViewMonth(m=>m+1); setSelecting(null); };

  return (
    <div>
      {/* XP Toast */}
      {xpToast && (
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",
          background:"linear-gradient(135deg,#c084fc,#818cf8)",borderRadius:12,
          padding:"10px 20px",zIndex:999,textAlign:"center",boxShadow:"0 4px 20px #c084fc44"}}>
          <div style={{color:"#000",fontWeight:900,fontSize:18}}>+{xpToast.pts} XP!</div>
          <div style={{color:"#000",fontSize:12,opacity:0.8}}>{xpToast.label}</div>
        </div>
      )}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
        <button onClick={prevMonth} style={{ background:"#1a1a1a", border:"1px solid #333", borderRadius:8, color:"#888", fontSize:18, width:36, height:36, cursor:"pointer" }}>‹</button>
        <span style={{ color:"#e8ff4a", fontWeight:900, fontSize:18 }}>{MONTHS[viewMonth]} {viewYear}</span>
        <button onClick={nextMonth} style={{ background:"#1a1a1a", border:"1px solid #333", borderRadius:8, color:"#888", fontSize:18, width:36, height:36, cursor:"pointer" }}>›</button>
      </div>

      <div style={{ background:"#1a1a1a", borderRadius:14, overflow:"hidden", border:"1px solid #2a2a2a", marginBottom:16 }}>
        <div style={{ display:"grid", gridTemplateColumns:"26px repeat(7,1fr)", borderBottom:"1px solid #2a2a2a" }}>
          <div/>
          {["D","L","M","X","J","V","S"].map(d=>(
            <div key={d} style={{ textAlign:"center", padding:"8px 0", color:"#555", fontSize:11, fontWeight:700 }}>{d}</div>
          ))}
        </div>
        {weeks.map((wk,wi)=>{
          const sem = weekStats[wi];
          const hasAny = wk.some(d=>d&&getTypes(dateStr(d)).length>0);
          return (
            <div key={wi} style={{ display:"grid", gridTemplateColumns:"26px repeat(7,1fr)", borderBottom:wi<weeks.length-1?"1px solid #1e1e1e":"none" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                {hasAny
                  ? <div title={sem.label} style={{ width:9, height:9, borderRadius:"50%", background:sem.color, boxShadow:`0 0 5px ${sem.color}88` }}/>
                  : <div style={{ width:9, height:9, borderRadius:"50%", background:"#2a2a2a" }}/>}
              </div>
              {wk.map((d,di)=>{
                if(!d) return <div key={di}/>;
                const ds = dateStr(d);
                const types = getTypes(ds);
                const isToday = ds===todayStr;
                const isSel   = selecting===ds;
                const mainType = types[0] ? DAY_TYPES.find(dt=>dt.id===types[0]) : null;
                return (
                  <div key={di} onClick={()=>setSelecting(isSel?null:ds)}
                    style={{ padding:"5px 2px", textAlign:"center", cursor:"pointer", background:isSel?"#2a2a2a":"transparent", position:"relative" }}>
                    <div style={{ fontSize:11, fontWeight:isToday?900:400, color:isToday?"#e8ff4a":mainType?mainType.color:"#555", lineHeight:1, marginBottom:2 }}>{d}</div>
                    {types.length>0
                      ? <div style={{ fontSize:12, lineHeight:1 }}>{types.slice(0,2).map(t=>DAY_TYPES.find(dt=>dt.id===t)?.emoji||"").join("")}{types.length>2?"+":""}</div>
                      : <div style={{ width:6, height:6, borderRadius:"50%", background:isToday?"#e8ff4a44":"#2a2a2a", margin:"0 auto" }}/>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {selecting && (
        <div style={{ background:"#1a1a1a", border:"1px solid #e8ff4a44", borderRadius:12, padding:14, marginBottom:16 }}>
          <div style={{ color:"#e8ff4a", fontWeight:700, fontSize:13, marginBottom:4 }}>
            Día {parseInt(selecting.split("-")[2])} — ¿Qué hiciste? <span style={{ color:"#555", fontWeight:400, fontSize:11 }}>(puedes elegir varios)</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:7, marginBottom:10 }}>
            {DAY_TYPES.map(dt=>{
              const sel = getTypes(selecting).includes(dt.id);
              return (
                <button key={dt.id} onClick={()=>toggleType(selecting,dt.id)}
                  style={{ background:sel?dt.color+"33":"#111", border:`1px solid ${sel?dt.color:"#333"}`,
                    borderRadius:8, padding:"8px 4px", cursor:"pointer", color:sel?dt.color:"#888",
                    display:"flex", flexDirection:"column", alignItems:"center", gap:3, transition:"all .15s" }}>
                  <span style={{ fontSize:18 }}>{dt.emoji}</span>
                  <span style={{ fontSize:10, fontWeight:700 }}>{dt.label}</span>
                  {sel && <span style={{ fontSize:8, color:dt.color }}>✓</span>}
                </button>
              );
            })}
          </div>
          {/* Calorie inputs per selected activity */}
          {getTypes(selecting).filter(t=>t!=="rest").length>0 && (
            <div style={{marginBottom:10}}>
              <div style={{color:"#888",fontSize:11,fontWeight:700,marginBottom:6}}>🔥 CALORÍAS QUEMADAS <span style={{color:"#555",fontWeight:400}}>(opcional · usa tu reloj)</span></div>
              {getTypes(selecting).filter(t=>t!=="rest").map(tid=>{
                const dt = DAY_TYPES.find(d=>d.id===tid);
                const calVal = getCals(selecting)[tid]||"";
                const hasCalEntry = !!calVal;
                return (
                  <div key={tid} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <span style={{fontSize:14,minWidth:20}}>{dt?.emoji}</span>
                    <span style={{color:dt?.color,fontSize:11,minWidth:52}}>{dt?.label}</span>
                    <input type="number" placeholder="kcal" value={calVal}
                      onChange={e=>setCal(selecting,tid,e.target.value)}
                      style={{width:80,background:"#111",border:`1px solid ${hasCalEntry?"#ff6b35":"#333"}`,borderRadius:6,padding:"5px 8px",color:"#ff6b35",fontSize:13,fontWeight:700,outline:"none"}}/>
                    {hasCalEntry && <span style={{color:"#4aff8c",fontSize:11}}>+1 XP ✓</span>}
                  </div>
                );
              })}
            </div>
          )}
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={()=>{
              // Calculate XP delta vs what was already awarded for this day
              const ds = selecting;
              const prev = xpAwarded[ds] || { types:[], calCount:0 };
              const curTypes = getTypes(ds);
              const curCals  = getCals(ds);
              let earned = 0;
              let earnedLabel = [];

              // XP for new activity types added (not in prev)
              curTypes.forEach(tid => {
                if(prev.types.includes(tid)) return; // already awarded
                const dt = DAY_TYPES.find(d=>d.id===tid);
                if(!dt) return;
                if(dt.isWorkout) { earned += 10; earnedLabel.push(`+10 ${dt.emoji}`); }
                else if(tid!=="rest") { earned += 5; earnedLabel.push(`+5 ${dt.emoji}`); }
              });

              // XP for calorie entries (2.5 per new filled field)
              const newCalCount = Object.values(curCals).filter(v=>parseFloat(v)>0).length;
              const prevCalCount = prev.calCount || 0;
              const newCals = Math.max(0, newCalCount - prevCalCount);
              if(newCals > 0) { earned += newCals * 1; earnedLabel.push(`+${newCals} 🔥`); }

              // Check if this day completes a 3-workout week (bonus +10 XP, once per week)
              const weekKey = (() => {
                const d = new Date(ds);
                const mon = new Date(d); mon.setDate(d.getDate() - ((d.getDay()+6)%7));
                return mon.toISOString().slice(0,10);
              })();
              const weekDays = Array.from({length:7},(_,i)=>{
                const d2=new Date(weekKey); d2.setDate(d2.getDate()+i);
                return d2.toISOString().slice(0,10);
              });
              // Use curTypes for today, existing logs for other days
              const weekWorkouts = weekDays.reduce((sum,wd)=>{
                const types = wd===ds ? curTypes : getTypes(wd);
                return sum + (types.some(t=>DAY_TYPES.find(dt=>dt.id===t)?.isWorkout) ? 1 : 0);
              }, 0);
              const weekBonusKey = `week_${weekKey}`;
              if(weekWorkouts >= 3 && !xpAwarded[weekBonusKey]) {
                earned += 10;
                earnedLabel.push("+10 ⭐ semana");
                setXpAwarded(a => ({ ...a, [weekBonusKey]: true }));
              }

              // Save awarded state for this day
              setXpAwarded(a => ({ ...a, [ds]: { types: curTypes, calCount: newCalCount } }));

              if(earned > 0 && onXP) {
                onXP(x => x + earned);
                setXpToast({ pts: earned, label: earnedLabel.join("  ") });
                setTimeout(() => setXpToast(null), 2500);
              }
              setSelecting(null);
            }}
              style={{ flex:1, background:"#e8ff4a", border:"none", borderRadius:6, color:"#000", fontSize:12, fontWeight:700, padding:"7px", cursor:"pointer" }}>
              Guardar
            </button>
            <button onClick={()=>clearDay(selecting)}
              style={{ background:"none", border:"1px solid #333", borderRadius:6, color:"#555", fontSize:12, padding:"7px 12px", cursor:"pointer" }}>
              Limpiar
            </button>
          </div>
        </div>
      )}

      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:16 }}>
        {[{emoji:"🔴",label:"0 días"},{emoji:"🟠",label:"1 día"},{emoji:"🟢",label:"2-3 entrenos"},{emoji:"⭐",label:"+4 / épica"}].map((s,i)=>(
          <div key={i} style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", borderRadius:6, padding:"4px 8px", fontSize:10, color:"#888" }}>{s.emoji} {s.label}</div>
        ))}
      </div>

      <div style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", borderRadius:12, padding:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:12 }}>RESUMEN DEL MES</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:14 }}>
          {[
            {label:"Entrenos", value:workoutDays,  color:"#4aff8c", emoji:"💪"},
            {label:"Caminatas",value:hikeDays,     color:"#e8ff4a", emoji:"🏔️"},
            {label:"Game Fit", value:gameDays,     color:"#f472b6", emoji:"🎮"},
            {label:"Activo",   value:activoDays,   color:"#fb923c", emoji:"⚡"},
            {label:"Mental",   value:mentalDays,   color:"#67e8f9", emoji:"🧠"},
            {label:"Descanso", value:restDays,     color:"#555",    emoji:"😴"},
          ].map((s,i)=>(
            <div key={i} style={{ background:"#111", borderRadius:8, padding:"8px 6px", textAlign:"center", border:`1px solid ${s.color}33` }}>
              <div style={{ fontSize:16 }}>{s.emoji}</div>
              <div style={{ color:s.color, fontWeight:900, fontSize:20 }}>{s.value}</div>
              <div style={{ color:"#555", fontSize:9 }}>{s.label}</div>
            </div>
          ))}
        </div>
        {DAY_TYPES.filter(t=>t.id!=="rest").map(dt=>{
          const cnt = allMonthTypes.filter(t=>t===dt.id).length;
          if(!cnt) return null;
          const pct = (cnt/daysInMonth)*100;
          return (
            <div key={dt.id} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
              <span style={{ fontSize:13, minWidth:18 }}>{dt.emoji}</span>
              <span style={{ color:dt.color, fontSize:11, minWidth:52 }}>{dt.label}</span>
              <div style={{ flex:1, background:"#222", borderRadius:10, height:7, overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, height:"100%", background:dt.color, borderRadius:10 }}/>
              </div>
              <span style={{ color:"#555", fontSize:10, minWidth:18 }}>{cnt}d</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Data Tab ────────────────────────────────────────────────────────────────
function DataTab({ appName, setAppName, logs, xp, setXp, weightHistory: _wh, setWeightHistory, goalWeight, setGoalWeight, pokedex={} }) {
  const weightHistory = Array.isArray(_wh) ? _wh : [];
  const [name,      setName]      = usePersistedState("vs_name", "Atleta");
  const [birthday,  setBirthday]  = usePersistedState("vs_birthday", "");
  const [heightCm,  setHeightCm]  = usePersistedState("vs_height", "180");
  const [editingName, setEditingName] = useState(false);
  const [editingApp,  setEditingApp]  = useState(false);
  const [tempApp,     setTempApp]     = useState(appName);

  // Weight history passed as prop from App
  const [newWeightDate, setNewWeightDate]  = useState(new Date().toISOString().slice(0,10));
  const [newWeightVal,  setNewWeightVal]   = useState("");

  // BMR history: [{date, value}]
  const [bmrHistory, setBmrHistory] = usePersistedState("vs_bmrHistory", []);
  const [newBmrDate, setNewBmrDate] = useState(new Date().toISOString().slice(0,10));
  const [newBmrVal,  setNewBmrVal]  = useState("");

  // Confirm delete modal: { type: "weight"|"bmr", entry: {date,value} } | null
  const [confirmDelete, setConfirmDelete] = useState(null);
  const doDelete = () => {
    if(!confirmDelete) return;
    if(confirmDelete.type === "weight")
      setWeightHistory(h => h.filter(x => x.date !== confirmDelete.entry.date));
    else
      setBmrHistory(h => h.filter(x => x.date !== confirmDelete.entry.date));
    setConfirmDelete(null);
  };

  const addWeight = () => {
    if(!newWeightVal) return;
    setWeightHistory(h => [...h.filter(e=>e.date!==newWeightDate), {date:newWeightDate,value:newWeightVal}].sort((a,b)=>a.date.localeCompare(b.date)));
    setNewWeightVal("");
  };
  const addBmr = () => {
    if(!newBmrVal) return;
    setBmrHistory(h => [...h.filter(e=>e.date!==newBmrDate), {date:newBmrDate,value:newBmrVal}].sort((a,b)=>a.date.localeCompare(b.date)));
    setNewBmrVal("");
  };

  // Age
  const age = birthday ? Math.floor((new Date() - new Date(birthday)) / (365.25*24*3600*1000)) : null;

  // XP level
  const { level, progress, remaining, toNext } = calcLevel(xp);

  // Award daily open XP (5pts, once a day)
  const todayKey = new Date().toISOString().slice(0,10);
  const [lastAwardDate, setLastAwardDate] = usePersistedState("vs_lastAwardDate", "");
  const awardedToday = lastAwardDate === todayKey;
  const awardOpenApp = () => {
    if(!awardedToday){ setXp(x=>x+5); setLastAwardDate(todayKey); }
  };

  // Radar data computed from logs
  const allTypes = Object.values(logs).flatMap(e => getLogTypes(e));
  const allDays  = Object.keys(logs);
  // Count weeks with 3+ workouts for Maestría
  const weekGroups = {};
  allDays.forEach(ds => {
    const d = new Date(ds);
    const week = `${d.getFullYear()}-W${Math.ceil((d.getDate()+new Date(d.getFullYear(),d.getMonth(),1).getDay())/7)}`;
    weekGroups[week] = weekGroups[week]||[];
    weekGroups[week].push(...getLogTypes(logs[ds]));
  });
  const maestria = Object.values(weekGroups).filter(wt=>wt.filter(t=>DAY_TYPES.find(dt=>dt.id===t)?.isWorkout).length>=3).length;

  const radarData = [
    { label:"Mental",    emoji:"🧠", value: allTypes.filter(t=>t==="mental").length },
    { label:"Push",      emoji:"💪", value: allTypes.filter(t=>t==="push").length },
    { label:"Pull",      emoji:"🔙", value: allTypes.filter(t=>t==="pull").length },
    { label:"Legs",      emoji:"🦵", value: allTypes.filter(t=>t==="legs").length },
    { label:"Agilidad",  emoji:"🪢", value: Math.floor(allTypes.filter(t=>t==="rope").length/2) },
    { label:"Maestría",  emoji:"⭐", value: maestria },
  ];

  // Weight sparkline
  function WeightLine() {
    const pts = weightHistory.filter(e=>parseFloat(e.value)>0);
    if(pts.length<2) return <div style={{color:"#555",fontSize:11,fontStyle:"italic",padding:"8px 0"}}>Agrega al menos 2 registros para ver la gráfica</div>;
    const vals = pts.map(e=>parseFloat(e.value));
    const maxV=Math.max(...vals), minV=Math.min(...vals), range=maxV-minV||1;
    const W=300, H=70;
    const path = pts.map((e,i)=>{
      const x=(i/(pts.length-1))*(W-20)+10;
      const y=H-10-((vals[i]-minV)/range)*(H-20);
      return `${i===0?"M":"L"}${x},${y}`;
    }).join(" ");
    return (
      <svg width={W} height={H} style={{display:"block",margin:"8px 0"}}>
        <path d={path} fill="none" stroke="#e8ff4a" strokeWidth="2.5" strokeLinejoin="round"/>
        {pts.map((e,i)=>{
          const x=(i/(pts.length-1))*(W-20)+10;
          const y=H-10-((vals[i]-minV)/range)*(H-20);
          return <circle key={i} cx={x} cy={y} r="4" fill="#e8ff4a" stroke="#0f0f0f" strokeWidth="1.5"/>;
        })}
        <text x="10" y={H-2} fontSize="8" fill="#555">{pts[0].date.slice(5)}</text>
        <text x={W-10} y={H-2} fontSize="8" fill="#555" textAnchor="end">{pts[pts.length-1].date.slice(5)}</text>
        <text x={W-10} y="12" fontSize="9" fill="#e8ff4a" textAnchor="end" fontWeight="700">{vals[vals.length-1]} lbs</text>
      </svg>
    );
  }

  const inputStyle = { width:"100%", background:"#111", border:"1px solid #333", borderRadius:6, padding:"7px 10px", color:"#f0f0f0", fontSize:14, outline:"none", boxSizing:"border-box" };
  const labelStyle = { color:"#888", fontSize:11, marginBottom:4, display:"block" };

  return (
    <div>
      {/* App name edit */}
      <div style={{ background:"#1a1a1a", border:"1px solid #e8ff4a33", borderRadius:12, padding:14, marginBottom:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:8 }}>NOMBRE DE LA APP</div>
        {editingApp
          ? <div style={{ display:"flex", gap:8 }}>
              <input value={tempApp} onChange={e=>setTempApp(e.target.value)} style={{...inputStyle, flex:1}} placeholder="Nombre de tu app"/>
              <button onClick={()=>{setAppName(tempApp);setEditingApp(false);}} style={{ background:"#e8ff4a", border:"none", borderRadius:6, color:"#000", fontWeight:700, padding:"0 14px", cursor:"pointer", fontSize:13 }}>✓</button>
              <button onClick={()=>setEditingApp(false)} style={{ background:"none", border:"1px solid #333", borderRadius:6, color:"#555", padding:"0 10px", cursor:"pointer" }}>✕</button>
            </div>
          : <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ color:"#e8ff4a", fontWeight:900, fontSize:20 }}>{appName}</span>
              <button onClick={()=>{setTempApp(appName);setEditingApp(true);}} style={{ background:"none", border:"1px solid #333", borderRadius:6, color:"#888", fontSize:11, padding:"4px 10px", cursor:"pointer" }}>✏️ Editar</button>
            </div>
        }
      </div>

      {/* Personal data */}
      <div style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", borderRadius:12, padding:14, marginBottom:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:12 }}>DATOS PERSONALES</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:10 }}>
          <div>
            <label style={labelStyle}>Nombre</label>
            {editingName
              ? <div style={{display:"flex",gap:6}}>
                  <input value={name} onChange={e=>setName(e.target.value)} style={{...inputStyle,flex:1}} onBlur={()=>setEditingName(false)} autoFocus/>
                </div>
              : <div onClick={()=>setEditingName(true)} style={{color:"#f0f0f0",fontSize:15,fontWeight:700,cursor:"pointer",padding:"7px 0"}}>
                  {name} <span style={{color:"#555",fontSize:11}}>✏️</span>
                </div>
            }
          </div>
          <div>
            <label style={labelStyle}>Fecha de nacimiento</label>
            <input type="date" value={birthday} onChange={e=>setBirthday(e.target.value)} style={inputStyle}/>
          </div>
          <div>
            <label style={labelStyle}>Estatura (cm)</label>
            <input type="number" value={heightCm} onChange={e=>setHeightCm(e.target.value)} style={inputStyle}/>
          </div>
          <div>
            <label style={labelStyle}>Edad calculada</label>
            <div style={{color:"#4aff8c",fontWeight:700,fontSize:18,padding:"7px 0"}}>{age!==null?`${age} años`:"—"}</div>
          </div>
        </div>
      </div>

      {/* Level / XP */}
      <div style={{ background:"#1a1a1a", border:"1px solid #c084fc44", borderRadius:12, padding:14, marginBottom:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:12 }}>NIVEL & EXPERIENCIA</div>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
          <div style={{ background:"linear-gradient(135deg,#c084fc,#818cf8)", borderRadius:12, width:56, height:56, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
            <span style={{fontSize:9,color:"#000",fontWeight:700}}>LVL</span>
            <span style={{fontSize:22,color:"#000",fontWeight:900,lineHeight:1}}>{level}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
              <span style={{color:"#c084fc",fontWeight:700,fontSize:13}}>{xp} XP total</span>
              <span style={{color:"#555",fontSize:11}}>{remaining} XP para nivel {level+1}</span>
            </div>
            {(() => {
              const pct2 = toNext > 0 ? (progress/toNext)*100 : 0;
              return (
                <div style={{background:"#222",borderRadius:20,height:14,overflow:"hidden",position:"relative"}}>
                  <div style={{background:"linear-gradient(90deg,#c084fc,#818cf8)",height:"100%",width:`${pct2}%`,borderRadius:20,transition:"width .5s ease"}}/>
                  <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <span style={{fontSize:9,color:"#fff",fontWeight:700,mixBlendMode:"difference"}}>{progress}/{toNext}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
        <div style={{color:"#888",fontSize:11,fontWeight:700,marginBottom:8}}>CÓMO GANAR XP</div>
        {[
          {label:"Abrir la app (1×/día)",pts:5,emoji:"📱"},
          {label:"Activo / Game Fit / Caminata / Mental",pts:5,emoji:"⚡"},
          {label:"Entreno o Cuerda",pts:10,emoji:"💪"},
          {label:"Semana con 3+ entrenos",pts:10,emoji:"⭐"},
          {label:"Planificar la semana",pts:5,emoji:"📅"},
          {label:"Registrar calorías del día",pts:1,emoji:"🔥"},
        ].map((r,i)=>(
          <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:i<3?"1px solid #222":"none"}}>
            <span style={{color:"#bbb",fontSize:12}}>{r.emoji} {r.label}</span>
            <span style={{color:"#c084fc",fontWeight:700,fontSize:13}}>+{r.pts} XP</span>
          </div>
        ))}
        <button onClick={awardOpenApp} style={{marginTop:10,width:"100%",background:awardedToday?"#1a1a1a":"#c084fc22",border:`1px solid ${awardedToday?"#333":"#c084fc55"}`,borderRadius:8,color:awardedToday?"#555":"#c084fc",fontSize:12,fontWeight:700,padding:"8px",cursor:awardedToday?"default":"pointer"}}>
          {awardedToday?"✓ App abierta hoy (+5 XP ya reclamado)":"📱 Reclamar +5 XP — apertura de hoy"}
        </button>
      </div>

      {/* Radar */}
      <div style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", borderRadius:12, padding:14, marginBottom:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:4 }}>RADAR DE HABILIDADES</div>
        <div style={{color:"#555",fontSize:10,marginBottom:8}}>Basado en tus actividades registradas · máx 50</div>
        <RadarChart data={radarData} maxVal={50}/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginTop:8}}>
          {radarData.map((d,i)=>(
            <div key={i} style={{background:"#111",borderRadius:6,padding:"6px 8px",textAlign:"center"}}>
              <div style={{fontSize:14}}>{d.emoji}</div>
              <div style={{color:"#e8ff4a",fontWeight:700,fontSize:16}}>{d.value}</div>
              <div style={{color:"#555",fontSize:9}}>{d.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Weight history */}
      <div style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", borderRadius:12, padding:14, marginBottom:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:12 }}>HISTORIAL DE PESO</div>
        <WeightLine/>
        <div style={{display:"flex",gap:8,marginTop:10}}>
          <input type="date" value={newWeightDate} onChange={e=>setNewWeightDate(e.target.value)} style={{...inputStyle,flex:1}}/>
          <input type="number" value={newWeightVal} onChange={e=>setNewWeightVal(e.target.value)} placeholder="lbs" style={{...inputStyle,width:80}}/>
          <button onClick={addWeight} style={{background:"#e8ff4a",border:"none",borderRadius:6,color:"#000",fontWeight:700,padding:"0 12px",cursor:"pointer",fontSize:13}}>+</button>
        </div>
        <div style={{marginTop:10,maxHeight:160,overflowY:"auto"}}>
          {[...weightHistory].sort((a,b)=>b.date.localeCompare(a.date)).map((e,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0",borderBottom:"1px solid #222",fontSize:12}}>
              <span style={{color:"#888"}}>{e.date}</span>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{color:"#e8ff4a",fontWeight:700}}>{e.value} lbs</span>
                <button onClick={()=>setConfirmDelete({type:"weight",entry:e})}
                  style={{background:"none",border:"none",color:"#ff4a4a",cursor:"pointer",fontSize:14,padding:"0 2px",lineHeight:1}}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BMR + Calories section */}
      <div style={{ background:"#1a1a1a", border:"1px solid #2a2a2a", borderRadius:12, padding:14, marginBottom:14 }}>
        <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:4 }}>BMR ACTUAL</div>
        <div style={{color:"#555",fontSize:10,marginBottom:10}}>Tasa metabólica basal · calorías/día en reposo total</div>
        <div style={{display:"flex",gap:8,marginBottom:8}}>
          <input type="date" value={newBmrDate} onChange={e=>setNewBmrDate(e.target.value)} style={{...inputStyle,flex:1}}/>
          <input type="number" value={newBmrVal} onChange={e=>setNewBmrVal(e.target.value)} placeholder="kcal" style={{...inputStyle,width:80}}/>
          <button onClick={addBmr} style={{background:"#4a9eff",border:"none",borderRadius:6,color:"#000",fontWeight:700,padding:"0 12px",cursor:"pointer",fontSize:13}}>+</button>
        </div>
        {bmrHistory.length===0
          ? <div style={{color:"#555",fontSize:11,fontStyle:"italic"}}>Sin registros aún</div>
          : <div style={{maxHeight:120,overflowY:"auto",marginTop:4}}>
              {[...bmrHistory].sort((a,b)=>b.date.localeCompare(a.date)).map((e,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0",borderBottom:"1px solid #222",fontSize:12}}>
                  <span style={{color:"#888"}}>{e.date}</span>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{color:"#4a9eff",fontWeight:700}}>{e.value} kcal/día</span>
                    <button onClick={()=>setConfirmDelete({type:"bmr",entry:e})}
                      style={{background:"none",border:"none",color:"#ff4a4a",cursor:"pointer",fontSize:14,padding:"0 2px",lineHeight:1}}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
        }
      </div>

      {/* Calories burned chart */}
      {(() => {
        // Build last 7 weeks of daily cal data from logs
        const now2 = new Date();
        const days = Array.from({length:28},(_,i)=>{
          const d = new Date(now2); d.setDate(d.getDate()-27+i);
          return d.toISOString().slice(0,10);
        });
        const dayData = days.map(ds=>{
          const entry = logs[ds];
          if(!entry) return {ds,kcal:0};
          const cals = Array.isArray(entry) ? {} : (entry.cals||{});
          const total = Object.values(cals).reduce((s,v)=>s+(parseFloat(v)||0),0);
          return {ds,kcal:total};
        });
        const hasCals = dayData.some(d=>d.kcal>0);
        const maxCal = Math.max(...dayData.map(d=>d.kcal),1);
        const latestBmr = bmrHistory.length>0 ? parseFloat([...bmrHistory].slice(-1)[0].value)||0 : 0;
        const weekTotal = dayData.slice(-7).reduce((s,d)=>s+d.kcal,0);
        const weekDaysActive = dayData.slice(-7).filter(d=>d.kcal>0).length;
        return (
          <div style={{ background:"#1a1a1a", border:"1px solid #ff6b3533", borderRadius:12, padding:14 }}>
            <div style={{ color:"#888", fontSize:11, fontWeight:700, letterSpacing:1, marginBottom:4 }}>🔥 CALORÍAS QUEMADAS EN EJERCICIO</div>
            <div style={{color:"#555",fontSize:10,marginBottom:12}}>Últimos 28 días · registradas desde el tracker</div>
            {!hasCals
              ? <div style={{color:"#555",fontSize:11,fontStyle:"italic",marginBottom:12}}>Registra calorías en el Tracker para ver la gráfica</div>
              : <>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
                  <div style={{background:"#111",borderRadius:8,padding:"8px",textAlign:"center",border:"1px solid #ff6b3533"}}>
                    <div style={{color:"#ff6b35",fontWeight:900,fontSize:20}}>{weekTotal.toLocaleString()}</div>
                    <div style={{color:"#555",fontSize:9}}>kcal esta semana</div>
                  </div>
                  <div style={{background:"#111",borderRadius:8,padding:"8px",textAlign:"center",border:"1px solid #ff6b3533"}}>
                    <div style={{color:"#ff6b35",fontWeight:900,fontSize:20}}>{weekDaysActive>0?Math.round(weekTotal/weekDaysActive):0}</div>
                    <div style={{color:"#555",fontSize:9}}>kcal/día activo</div>
                  </div>
                  <div style={{background:"#111",borderRadius:8,padding:"8px",textAlign:"center",border:`1px solid ${latestBmr?"#4a9eff33":"#333"}`}}>
                    <div style={{color:"#4a9eff",fontWeight:900,fontSize:20}}>{latestBmr?`+${Math.round(weekTotal/7)}`:"—"}</div>
                    <div style={{color:"#555",fontSize:9}}>kcal extra/día 7d</div>
                  </div>
                </div>
                {/* Bar chart */}
                <div style={{display:"flex",alignItems:"flex-end",gap:2,height:60,marginBottom:6}}>
                  {dayData.map((d,i)=>{
                    const h = d.kcal>0 ? Math.max(4, (d.kcal/maxCal)*56) : 2;
                    const isToday2 = d.ds===new Date().toISOString().slice(0,10);
                    return (
                      <div key={i} title={`${d.ds}: ${d.kcal} kcal`}
                        style={{flex:1,height:h,background:isToday2?"#e8ff4a":d.kcal>0?"#ff6b35":"#222",borderRadius:2,transition:"height .3s",minWidth:4}}/>
                    );
                  })}
                </div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:9,color:"#555"}}>
                  <span>{dayData[0].ds.slice(5)}</span><span>hoy</span>
                </div>
              </>
            }
          </div>
        );
      })()}

      {/* Divider */}
      <div style={{margin:"24px 0 16px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
          <div style={{flex:1,height:1,background:"#2a2a2a"}}/>
          <span style={{color:"#e8ff4a",fontSize:16,fontWeight:900,letterSpacing:2}}>📊 PROGRESO</span>
          <div style={{flex:1,height:1,background:"#2a2a2a"}}/>
        </div>
      </div>
      <ProgressSection weightHistory={weightHistory} setWeightHistory={setWeightHistory} goalWeight={goalWeight} setGoalWeight={setGoalWeight} pokedex={pokedex}/>

      {/* ── Export / Import / Reset ── */}
      <DataManagement/>
      {/* Confirm delete modal */}
      {confirmDelete && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#000a",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:"#1a1a1a",border:"1px solid #ff4a4a",borderRadius:14,padding:24,margin:16,maxWidth:320,width:"100%"}}>
            <div style={{fontSize:28,textAlign:"center",marginBottom:12}}>🗑️</div>
            <div style={{color:"#f0f0f0",fontWeight:700,fontSize:15,textAlign:"center",marginBottom:8}}>¿Borrar este registro?</div>
            <div style={{background:"#111",borderRadius:8,padding:"10px 14px",marginBottom:16,textAlign:"center"}}>
              <div style={{color:"#888",fontSize:12}}>{confirmDelete.entry.date}</div>
              <div style={{color:"#ff4a4a",fontWeight:700,fontSize:18,marginTop:4}}>
                {confirmDelete.entry.value} {confirmDelete.type==="weight"?"lbs":"kcal"}
              </div>
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setConfirmDelete(null)}
                style={{flex:1,padding:"10px",background:"#222",border:"1px solid #333",borderRadius:8,color:"#888",fontWeight:700,fontSize:14,cursor:"pointer"}}>
                Cancelar
              </button>
              <button onClick={doDelete}
                style={{flex:1,padding:"10px",background:"#ff4a4a22",border:"1px solid #ff4a4a",borderRadius:8,color:"#ff4a4a",fontWeight:700,fontSize:14,cursor:"pointer"}}>
                Sí, borrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



// ─── Data Management (Export / Import / Reset) ───────────────────────────────
const VS_KEYS = [
  "vs_appName","vs_xp","vs_logs","vs_weightHistory","vs_goalWeight",
  "vs_name","vs_birthday","vs_height","vs_bmrHistory","vs_lastAwardDate",
  "vs_xpAwarded","vs_weekChecked","vs_travel_mode","vs_session_push","vs_session_pull","vs_session_legs","vs_session_rope","vs_session_fired_push","vs_session_fired_pull","vs_session_fired_legs","vs_session_fired_rope","vs_finisher_push","vs_finisher_pull","vs_finisher_legs",
  "vs_finisher_rope","vs_bitacora","vs_prs","vs_pokedex","vs_special_pokedex","vs_catchup_queue"
];

function DataManagement() {
  const [showReset,   setShowReset]   = useState(false);
  const [resetInput,  setResetInput]  = useState("");
  const [resetStep,   setResetStep]   = useState(1); // 1 = hidden, 2 = warning shown, 3 = type to confirm
  const [importError, setImportError] = useState("");
  const [toast,       setToast]       = useState("");

  const showToast = (msg) => { setToast(msg); setTimeout(()=>setToast(""),2500); };

  // ── Export ──────────────────────────────────────────────────────
  const exportData = () => {
    const data = {};
    VS_KEYS.forEach(k => {
      try { const v = localStorage.getItem(k); if(v!==null) data[k]=JSON.parse(v); } catch{}
    });
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `valle-strong-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("✓ Datos exportados");
  };

  // ── Import ──────────────────────────────────────────────────────
  const importData = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        let count = 0;
        VS_KEYS.forEach(k => {
          if(data[k] !== undefined) {
            localStorage.setItem(k, JSON.stringify(data[k]));
            count++;
          }
        });
        showToast(`✓ ${count} datos importados — recarga la app`);
        setImportError("");
        // Force reload to reflect imported data
        setTimeout(()=>window.location.reload(), 1500);
      } catch(err) {
        setImportError("Archivo inválido. Usa un backup generado por esta app.");
      }
    };
    reader.readAsText(file);
    e.target.value = ""; // reset input
  };

  // ── Reset ───────────────────────────────────────────────────────
  const doReset = () => {
    if(resetInput.toLowerCase() !== "erase") return;
    VS_KEYS.forEach(k => localStorage.removeItem(k));
    showToast("Datos eliminados — recargando...");
    setTimeout(()=>window.location.reload(), 1500);
  };

  return (
    <div style={{marginTop:8}}>
      {/* Toast */}
      {toast && (
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",
          background:"#1a1a1a",border:"1px solid #4aff8c",borderRadius:10,
          padding:"10px 20px",zIndex:999,color:"#4aff8c",fontWeight:700,fontSize:13,
          boxShadow:"0 4px 20px #00000088"}}>
          {toast}
        </div>
      )}

      {/* Export / Import — easy access */}
      <div style={{background:"#1a1a1a",border:"1px solid #4a9eff33",borderRadius:12,padding:14,marginBottom:10}}>
        <div style={{color:"#4a9eff",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:12}}>
          💾 DATOS — EXPORTAR / IMPORTAR
        </div>
        <div style={{color:"#888",fontSize:12,marginBottom:12,lineHeight:1.6}}>
          Exporta tus datos para hacer respaldo o para usarlos en otro dispositivo. Importa un respaldo para restaurar tu progreso.
        </div>
        <div style={{display:"flex",gap:8,marginBottom:importError?"8px":"0"}}>
          <button onClick={exportData}
            style={{flex:1,background:"#4a9eff22",border:"1px solid #4a9eff55",borderRadius:8,
              color:"#4a9eff",fontWeight:700,fontSize:13,padding:"11px 8px",cursor:"pointer"}}>
            📤 Exportar
          </button>
          <label style={{flex:1,background:"#4aff8c22",border:"1px solid #4aff8c55",borderRadius:8,
            color:"#4aff8c",fontWeight:700,fontSize:13,padding:"11px 8px",cursor:"pointer",
            textAlign:"center",display:"block"}}>
            📥 Importar
            <input type="file" accept=".json" onChange={importData} style={{display:"none"}}/>
          </label>
        </div>
        {importError && <div style={{color:"#ff4a4a",fontSize:11,marginTop:6}}>{importError}</div>}
      </div>

      {/* Reset — hidden behind steps */}
      <div style={{marginTop:16}}>
        {resetStep === 1 && (
          <button onClick={()=>setResetStep(2)}
            style={{background:"none",border:"none",color:"#333",fontSize:11,cursor:"pointer",
              textDecoration:"underline",padding:0}}>
            Opciones avanzadas
          </button>
        )}
        {resetStep === 2 && (
          <div style={{background:"#1a1a1a",border:"1px solid #333",borderRadius:10,padding:14}}>
            <div style={{color:"#555",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:8}}>
              ZONA DE PELIGRO
            </div>
            <div style={{color:"#888",fontSize:12,marginBottom:12,lineHeight:1.6}}>
              Borrar todos los datos eliminará permanentemente tu progreso, historial de peso, XP, bitácora y toda la información guardada. Esta acción no se puede deshacer.
            </div>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>{setResetStep(3);setResetInput("");}}
                style={{background:"#ff4a4a11",border:"1px solid #ff4a4a44",borderRadius:8,
                  color:"#ff4a4a",fontWeight:700,fontSize:12,padding:"8px 14px",cursor:"pointer"}}>
                Continuar →
              </button>
              <button onClick={()=>setResetStep(1)}
                style={{background:"#222",border:"1px solid #555",borderRadius:8,
                  color:"#aaa",fontSize:12,fontWeight:700,padding:"8px 14px",cursor:"pointer"}}>
                ✕ Cancelar
              </button>
            </div>
          </div>
        )}
        {resetStep === 3 && (
          <div style={{background:"#1a1a1a",border:"1px solid #ff4a4a",borderRadius:10,padding:14}}>
            <div style={{color:"#ff4a4a",fontSize:13,fontWeight:700,marginBottom:4}}>⚠️ Confirmación final</div>
            <div style={{color:"#888",fontSize:12,marginBottom:12}}>
              Escribe <span style={{color:"#ff4a4a",fontWeight:700,fontFamily:"monospace"}}>erase</span> para confirmar el borrado total.
            </div>
            <input type="text" value={resetInput} onChange={e=>setResetInput(e.target.value)}
              placeholder="Escribe: erase"
              style={{width:"100%",background:"#111",border:`1px solid ${resetInput.toLowerCase()==="erase"?"#ff4a4a":"#333"}`,
                borderRadius:6,padding:"8px 10px",color:"#ff4a4a",fontSize:14,
                fontWeight:700,outline:"none",boxSizing:"border-box",
                fontFamily:"monospace",marginBottom:10}}/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={doReset}
                disabled={resetInput.toLowerCase()!=="erase"}
                style={{flex:1,background:resetInput.toLowerCase()==="erase"?"#ff4a4a":"#222",
                  border:"none",borderRadius:8,color:resetInput.toLowerCase()==="erase"?"#000":"#555",
                  fontWeight:700,fontSize:13,padding:"10px",
                  cursor:resetInput.toLowerCase()==="erase"?"pointer":"not-allowed",transition:"all .2s"}}>
                🗑️ Borrar todo
              </button>
              <button onClick={()=>{setResetStep(1);setResetInput("");}}
                style={{background:"#222",border:"1px solid #555",borderRadius:8,
                  color:"#aaa",fontSize:12,fontWeight:700,padding:"10px 14px",cursor:"pointer"}}>
                ✕ Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Timer Tab ───────────────────────────────────────────────────────────────
const FINISHER_PRESETS = [
  { label:"Push — 10+60 seg",  emoji:"💪", prepSec:10, workSec:60, color:"#ff6b35" },
  { label:"Pull — 10+45 seg",  emoji:"🔙", prepSec:10, workSec:45, color:"#4a9eff" },
  { label:"Legs — 10+60 seg",  emoji:"🦵", prepSec:10, workSec:60, color:"#4aff8c" },
  { label:"Cuerda — 10+60 seg",emoji:"🪢", prepSec:10, workSec:60, color:"#c084fc" },
];

const WARMUP_PHASES = [
  { name:"Saltos básicos",  duration:60, hint:"Ritmo cómodo, respira" },
  { name:"Boxer Skip",      duration:60, hint:"Alterna el peso pie a pie" },
  { name:"High Step",       duration:60, hint:"Rodillas arriba, activa el core" },
  { name:"Libre",           duration:60, hint:"Improvisa, lo que fluya" },
  { name:"Double Bounce",   duration:60, hint:"2 saltos por giro — respira" },
];

function TimerTab() {
  const [mode,       setMode]       = useState("countdown"); // "stopwatch" | "countdown" | "warmup_simple" | "warmup_guided"
  const [running,    setRunning]    = useState(false);
  const [elapsed,    setElapsed]    = useState(0);
  const [cdTotal,    setCdTotal]    = useState(60);
  const [cdLeft,     setCdLeft]     = useState(60);
  const [phase,      setPhase]      = useState("prep"); // "prep" | "work" | "done"
  const [prepTotal,  setPrepTotal]  = useState(10);
  const [workTotal,  setWorkTotal]  = useState(60);
  const [customMin,  setCustomMin]  = useState("1");
  const [customSec,  setCustomSec]  = useState("0");
  // Guided warmup state
  const [wuPhaseIdx, setWuPhaseIdx] = useState(0);   // current phase index
  const [wuLeft,     setWuLeft]     = useState(10);   // seconds left in current sub-phase
  const [wuSubPhase, setWuSubPhase] = useState("prep"); // "prep" | "work" | "done"
  const intervalRef = useRef(null);
  const startRef    = useRef(null);

  const clearInt = () => { if(intervalRef.current) clearInterval(intervalRef.current); };

  const playBeep = (freq=880, dur=0.15, reps=3) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      for(let i=0; i<reps; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.4, ctx.currentTime + i*0.25);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i*0.25 + dur);
        osc.start(ctx.currentTime + i*0.25);
        osc.stop(ctx.currentTime + i*0.25 + dur + 0.05);
      }
    } catch(e) {}
  };

  const startStopwatch = () => {
    startRef.current = Date.now() - elapsed;
    intervalRef.current = setInterval(()=>setElapsed(Date.now()-startRef.current), 50);
    setRunning(true);
  };
  const startCountdown = (prep, work) => {
    clearInt();
    setPrepTotal(prep); setWorkTotal(work);
    setCdLeft(prep); setPhase("prep"); setRunning(true);
    intervalRef.current = setInterval(()=>{
      setCdLeft(prev=>{
        if(prev<=1){
          setPhase(ph=>{
            if(ph==="prep"){ setCdLeft(work); playBeep(660,0.1,2); return "work"; }
            clearInt(); setRunning(false); playBeep(880,0.15,3); return "done";
          });
          return prev;
        }
        return prev-1;
      });
    },1000);
  };

  const reset = () => {
    clearInt(); setRunning(false); setElapsed(0);
    setCdLeft(cdTotal); setPhase("prep");
    setWuPhaseIdx(0); setWuLeft(10); setWuSubPhase("prep");
  };

  const startWarmupSimple = () => {
    setMode("warmup_simple");
    startCountdown(10, 5*60); // 10s prep + 5 min
  };

  const startWarmupGuided = () => {
    setMode("warmup_guided");
    clearInt();
    setWuPhaseIdx(0); setWuLeft(10); setWuSubPhase("prep"); setRunning(true);
    intervalRef.current = setInterval(() => {
      setWuLeft(prev => {
        if(prev <= 1) {
          setWuSubPhase(sp => {
            if(sp === "prep") {
              // Start work phase
              setWuLeft(WARMUP_PHASES[0].duration);
              playBeep(660,0.1,1);
              return "work";
            } else {
              // Move to next phase
              setWuPhaseIdx(idx => {
                const next = idx + 1;
                if(next >= WARMUP_PHASES.length) {
                  clearInt(); setRunning(false);
                  setWuSubPhase("done");
                  playBeep(880,0.15,3);
                  return idx;
                }
                setWuLeft(10);
                setWuSubPhase("prep");
                playBeep(440,0.1,1);
                return next;
              });
              return prev;
            }
          });
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(()=>()=>clearInt(),[]);

  const fmtMs = (ms) => {
    const s=Math.floor(ms/1000), m=Math.floor(s/60);
    return `${String(m).padStart(2,"0")}:${String(s%60).padStart(2,"0")}.${String(Math.floor((ms%1000)/10)).padStart(2,"0")}`;
  };
  const fmtSec = (s) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

  const phaseColor = phase==="prep"?"#e8ff4a":phase==="work"?"#ff4a4a":"#4aff8c";
  const cdPct = phase==="prep"?(1-cdLeft/prepTotal)*100:(1-cdLeft/workTotal)*100;

  return (
    <div>
      {/* Mode selector */}
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        {[{id:"countdown",label:"⏳ Countdown"},{id:"stopwatch",label:"⏱ Cronómetro"}].map(m=>(
          <button key={m.id} onClick={()=>{reset();setMode(m.id);}}
            style={{flex:1,padding:"10px",background:["stopwatch","countdown"].includes(mode)&&mode===m.id?"#e8ff4a22":"#1a1a1a",
              border:`1px solid ${mode===m.id?"#e8ff4a":"#333"}`,borderRadius:8,
              color:mode===m.id?"#e8ff4a":"#888",fontWeight:700,fontSize:13,cursor:"pointer"}}>
            {m.label}
          </button>
        ))}
      </div>

      {mode==="stopwatch" && (
        <div style={{textAlign:"center"}}>
          <div style={{fontFamily:"monospace",fontSize:52,fontWeight:900,color:"#e8ff4a",letterSpacing:2,margin:"24px 0"}}>{fmtMs(elapsed)}</div>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={()=>{if(running){clearInt();setRunning(false);}else startStopwatch();}}
              style={{padding:"14px 32px",background:running?"#ff4a4a":"#4aff8c",border:"none",borderRadius:12,color:"#000",fontWeight:900,fontSize:16,cursor:"pointer"}}>
              {running?"⏸ Pausar":"▶ Iniciar"}
            </button>
            <button onClick={reset} style={{padding:"14px 20px",background:"#1a1a1a",border:"1px solid #333",borderRadius:12,color:"#888",fontWeight:700,fontSize:16,cursor:"pointer"}}>↺</button>
          </div>
        </div>
      )}

      {(mode==="countdown" || mode==="warmup_simple") && (
        <div>
          {/* Warmup presets */}
          <div style={{marginBottom:14}}>
            <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:8}}>🪢 CALENTAMIENTO CUERDA</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <button onClick={startWarmupSimple}
                style={{background:"#c084fc22",border:"1px solid #c084fc55",borderRadius:8,
                  padding:"10px 8px",cursor:"pointer",color:"#c084fc",fontWeight:700,fontSize:12,textAlign:"left"}}>
                <span style={{fontSize:16}}>🪢</span><br/>Simple — 5 min
              </button>
              <button onClick={startWarmupGuided}
                style={{background:"#c084fc22",border:"1px solid #c084fc55",borderRadius:8,
                  padding:"10px 8px",cursor:"pointer",color:"#c084fc",fontWeight:700,fontSize:12,textAlign:"left"}}>
                <span style={{fontSize:16}}>🎯</span><br/>Guiado — 5 fases
              </button>
            </div>
          </div>

          {/* Finisher Presets */}
          <div style={{marginBottom:16}}>
            <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:8}}>FINISHERS PREDETERMINADOS</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {FINISHER_PRESETS.map((p,i)=>(
                <button key={i} onClick={()=>{ setMode("countdown"); startCountdown(p.prepSec,p.workSec); }}
                  style={{background:p.color+"22",border:`1px solid ${p.color}55`,borderRadius:8,padding:"10px 8px",cursor:"pointer",color:p.color,fontWeight:700,fontSize:12,textAlign:"left"}}>
                  <span style={{fontSize:16}}>{p.emoji}</span><br/>{p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom */}
          <div style={{background:"#1a1a1a",border:"1px solid #333",borderRadius:10,padding:12,marginBottom:16}}>
            <div style={{color:"#888",fontSize:11,fontWeight:700,marginBottom:8}}>PERSONALIZADO</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <input type="number" value={customMin} onChange={e=>setCustomMin(e.target.value)} placeholder="min"
                style={{width:60,background:"#111",border:"1px solid #333",borderRadius:6,padding:"6px",color:"#f0f0f0",fontSize:14,fontWeight:700,outline:"none",textAlign:"center"}}/>
              <span style={{color:"#555"}}>min</span>
              <input type="number" value={customSec} onChange={e=>setCustomSec(e.target.value)} placeholder="seg"
                style={{width:60,background:"#111",border:"1px solid #333",borderRadius:6,padding:"6px",color:"#f0f0f0",fontSize:14,fontWeight:700,outline:"none",textAlign:"center"}}/>
              <span style={{color:"#555"}}>seg</span>
              <button onClick={()=>startCountdown(10,(parseInt(customMin)||0)*60+(parseInt(customSec)||0))}
                style={{flex:1,background:"#e8ff4a",border:"none",borderRadius:6,color:"#000",fontWeight:700,padding:"8px",cursor:"pointer",fontSize:12}}>
                10s prep + iniciar
              </button>
            </div>
          </div>

          {/* Display */}
          <div style={{textAlign:"center",background:"#1a1a1a",borderRadius:16,padding:"24px 16px",border:`2px solid ${phaseColor}44`}}>
            {phase==="done"
              ? <div style={{fontSize:40,marginBottom:8}}>🎉</div>
              : <>
                <div style={{color:phaseColor,fontSize:12,fontWeight:700,letterSpacing:2,marginBottom:8}}>
                  {phase==="prep"?"PREPARACIÓN":"¡AHORA!"}
                </div>
                <div style={{fontFamily:"monospace",fontSize:64,fontWeight:900,color:phaseColor,lineHeight:1,marginBottom:16}}>
                  {fmtSec(cdLeft)}
                </div>
                <div style={{background:"#222",borderRadius:20,height:10,overflow:"hidden",marginBottom:16}}>
                  <div style={{background:phaseColor,height:"100%",width:`${cdPct}%`,borderRadius:20,transition:"width 1s linear"}}/>
                </div>
              </>
            }
            <div style={{display:"flex",gap:12,justifyContent:"center"}}>
              <button onClick={()=>{if(running){clearInt();setRunning(false);}else if(phase!=="done")startCountdown(prepTotal,workTotal);}}
                style={{padding:"12px 28px",background:running?"#ff4a4a22":phase==="done"?"#333":"#4aff8c22",border:`1px solid ${running?"#ff4a4a":phase==="done"?"#555":"#4aff8c"}`,borderRadius:10,color:running?"#ff4a4a":phase==="done"?"#555":"#4aff8c",fontWeight:900,fontSize:15,cursor:"pointer"}}>
                {running?"⏸ Pausar":phase==="done"?"✓ Listo":"▶ Iniciar"}
              </button>
              <button onClick={reset} style={{padding:"12px 16px",background:"#1a1a1a",border:"1px solid #333",borderRadius:10,color:"#888",fontWeight:700,fontSize:15,cursor:"pointer"}}>↺</button>
            </div>
          </div>
        </div>
      )}

      {/* Warmup Simple — reuses countdown display, already handled by mode change */}

      {/* Warmup Guided display */}
      {mode==="warmup_guided" && (
        <div>
          {/* Phase progress dots */}
          <div style={{display:"flex",gap:6,justifyContent:"center",marginBottom:14}}>
            {WARMUP_PHASES.map((p,i)=>(
              <div key={i} style={{width:10,height:10,borderRadius:"50%",
                background:i<wuPhaseIdx?"#4aff8c":i===wuPhaseIdx?"#c084fc":"#333",
                transition:"background .3s"}}/>
            ))}
          </div>
          <div style={{textAlign:"center",background:"#1a1a1a",borderRadius:16,padding:"20px 16px",
            border:`2px solid ${wuSubPhase==="prep"?"#e8ff4a":wuSubPhase==="done"?"#4aff8c":"#c084fc"}44`}}>
            {wuSubPhase==="done"
              ? <>
                  <div style={{fontSize:40,marginBottom:8}}>🎉</div>
                  <div style={{color:"#4aff8c",fontWeight:900,fontSize:18}}>¡Calentamiento completo!</div>
                  <div style={{color:"#888",fontSize:12,marginTop:4}}>Listo para la sesión</div>
                </>
              : <>
                  {/* Phase counter */}
                  <div style={{color:"#888",fontSize:10,fontWeight:700,letterSpacing:2,marginBottom:8}}>
                    FASE {wuPhaseIdx+1}/{WARMUP_PHASES.length}
                  </div>

                  {/* Main exercise name — always prominent */}
                  <div style={{
                    color: wuSubPhase==="prep" ? "#e8ff4a" : "#c084fc",
                    fontWeight:900, fontSize:26, marginBottom:4, lineHeight:1.2
                  }}>
                    {WARMUP_PHASES[wuPhaseIdx].name}
                  </div>

                  {/* Hint — always visible */}
                  <div style={{color:"#888",fontSize:12,marginBottom:12}}>
                    💡 {WARMUP_PHASES[wuPhaseIdx].hint}
                  </div>

                  {/* Prep/Work label */}
                  <div style={{
                    color: wuSubPhase==="prep" ? "#e8ff4a" : "#c084fc",
                    fontSize:11, fontWeight:700, letterSpacing:2, marginBottom:6
                  }}>
                    {wuSubPhase==="prep"
                      ? wuPhaseIdx===0 ? "⚡ PREPÁRATE" : "⏸ DESCANSO"
                      : "🔥 ¡AHORA!"}
                  </div>

                  {/* Countdown */}
                  <div style={{fontFamily:"monospace",fontSize:64,fontWeight:900,
                    color:wuSubPhase==="prep"?"#e8ff4a":"#c084fc",lineHeight:1,marginBottom:12}}>
                    {String(Math.floor(wuLeft/60)).padStart(2,"0")}:{String(wuLeft%60).padStart(2,"0")}
                  </div>

                  {/* Progress bar */}
                  <div style={{background:"#222",borderRadius:20,height:8,overflow:"hidden",marginBottom:8}}>
                    <div style={{background:wuSubPhase==="prep"?"#e8ff4a":"#c084fc",height:"100%",
                      width:`${wuSubPhase==="prep"?(1-wuLeft/10)*100:(1-wuLeft/WARMUP_PHASES[wuPhaseIdx].duration)*100}%`,
                      borderRadius:20,transition:"width 1s linear"}}/>
                  </div>

                  {/* Next phase preview — shown during prep/rest */}
                  {wuPhaseIdx+1 < WARMUP_PHASES.length && wuSubPhase==="prep" && (
                    <div style={{background:"#e8ff4a11",border:"1px solid #e8ff4a33",
                      borderRadius:8,padding:"6px 12px",marginBottom:8,display:"inline-block"}}>
                      <span style={{color:"#555",fontSize:11}}>Next: </span>
                      <span style={{color:"#e8ff4a",fontSize:13,fontWeight:700}}>
                        {WARMUP_PHASES[wuPhaseIdx+1].name}
                      </span>
                    </div>
                  )}
                  {wuSubPhase==="work" && wuPhaseIdx+1 < WARMUP_PHASES.length && (
                    <div style={{color:"#555",fontSize:11,marginBottom:8}}>
                      Next: {WARMUP_PHASES[wuPhaseIdx+1].name}
                    </div>
                  )}
                </>
            }
            <div style={{display:"flex",gap:12,justifyContent:"center",marginTop:8}}>
              <button onClick={()=>{
                if(running){ clearInt(); setRunning(false); }
                else if(wuSubPhase!=="done") startWarmupGuided();
              }} style={{padding:"12px 28px",
                background:running?"#ff4a4a22":wuSubPhase==="done"?"#333":"#4aff8c22",
                border:`1px solid ${running?"#ff4a4a":wuSubPhase==="done"?"#555":"#4aff8c"}`,
                borderRadius:10,color:running?"#ff4a4a":wuSubPhase==="done"?"#555":"#4aff8c",
                fontWeight:900,fontSize:15,cursor:"pointer"}}>
                {running?"⏸ Pausar":wuSubPhase==="done"?"✓ Listo":"▶ Iniciar"}
              </button>
              <button onClick={()=>{ reset(); setMode("countdown"); }}
                style={{padding:"12px 16px",background:"#1a1a1a",border:"1px solid #333",
                  borderRadius:10,color:"#888",fontWeight:700,fontSize:15,cursor:"pointer"}}>↺</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  { id:"first_workout",   emoji:"🏅", label:"Primer entreno",        desc:"Completa tu primer día de ejercicio",         check:(logs)=>Object.values(logs).some(d=>getLogTypes(d).some(t=>["push","pull","legs","rope"].includes(t))) },
  { id:"week1",           emoji:"🔥", label:"Primera semana",         desc:"3+ entrenos en una semana",                  check:(logs,_,weekStreak)=>weekStreak>=1 },
  { id:"ten_workouts",    emoji:"💪", label:"10 entrenos",            desc:"Registra 10 días de entreno",               check:(logs)=>Object.values(logs).flatMap(d=>Array.isArray(d)?d:d.types||[]).filter(t=>["push","pull","legs","rope"].includes(t)).length>=10 },
  { id:"first_hike",      emoji:"🏔️", label:"Explorador",             desc:"Primera caminata registrada",               check:(logs)=>Object.values(logs).some(d=>getLogTypes(d).includes("hike")) },
  { id:"mental_3",        emoji:"🧠", label:"Mente activa",           desc:"3 días de actividad mental",                check:(logs)=>Object.values(logs).flatMap(d=>Array.isArray(d)?d:d.types||[]).filter(t=>t==="mental").length>=3 },
  { id:"streak3",         emoji:"⚡", label:"En racha",               desc:"3 semanas seguidas cumpliendo meta",         check:(logs,_,weekStreak)=>weekStreak>=3 },
  { id:"calories_5",      emoji:"🔥", label:"Quemador",               desc:"Registra calorías 5 veces",                 check:(logs)=>Object.values(logs).filter(d=>!Array.isArray(d)&&Object.values(d.cals||{}).some(v=>parseFloat(v)>0)).length>=5 },
  { id:"level5",          emoji:"⭐", label:"Nivel 5",                desc:"Alcanza el nivel 5",                        check:(_,xp)=>xp>=400 },
  { id:"level10",         emoji:"🌟", label:"Nivel 10",               desc:"Alcanza el nivel 10",                       check:(_,xp)=>xp>=900 },
  { id:"month1",          emoji:"🏆", label:"Mes completo",           desc:"30+ días de actividad registrados",         check:(logs)=>Object.values(logs).filter(d=>getLogTypes(d).length>0).length>=30 },
];

function AchievementsTab({ logs, xp, pokedex={} }) {
  // Compute week streak
  const now = new Date();
  let weekStreak = 0;
  for(let w=0; w<52; w++){
    const monday = new Date(now);
    monday.setDate(now.getDate() - now.getDay() + 1 - w*7);
    const days = Array.from({length:7},(_,i)=>{
      const d=new Date(monday); d.setDate(monday.getDate()+i);
      return d.toISOString().slice(0,10);
    });
    const workouts = days.flatMap(ds=>getLogTypes(logs[ds])).filter(t=>["push","pull","legs","rope"].includes(t)).length;
    if(workouts>=3) weekStreak++;
    else if(w>0) break;
  }

  const unlocked = ACHIEVEMENTS.filter(a=>a.check(logs,xp,weekStreak));
  const locked   = ACHIEVEMENTS.filter(a=>!a.check(logs,xp,weekStreak));

  return (
    <div>
      <div style={{background:"#1a1a1a",border:"1px solid #e8ff4a33",borderRadius:12,padding:14,marginBottom:16,display:"flex",alignItems:"center",gap:12}}>
        <div style={{fontSize:32}}>⚡</div>
        <div>
          <div style={{color:"#e8ff4a",fontWeight:900,fontSize:22}}>{weekStreak}</div>
          <div style={{color:"#888",fontSize:12}}>semanas seguidas cumpliendo meta</div>
        </div>
        <div style={{marginLeft:"auto",textAlign:"right"}}>
          <div style={{color:"#4aff8c",fontWeight:700,fontSize:16}}>{unlocked.length}/{ACHIEVEMENTS.length}</div>
          <div style={{color:"#555",fontSize:11}}>logros</div>
        </div>
      </div>

      <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:10}}>DESBLOQUEADOS</div>
      {unlocked.length===0 && <div style={{color:"#555",fontSize:12,fontStyle:"italic",marginBottom:16}}>Completa tu primer entreno para desbloquear logros</div>}
      {unlocked.map(a=>(
        <div key={a.id} style={{display:"flex",alignItems:"center",gap:12,background:"#1a1a1a",border:"1px solid #e8ff4a33",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
          <span style={{fontSize:28}}>{a.emoji}</span>
          <div>
            <div style={{color:"#e8ff4a",fontWeight:700,fontSize:14}}>{a.label}</div>
            <div style={{color:"#888",fontSize:11}}>{a.desc}</div>
          </div>
          <span style={{marginLeft:"auto",color:"#4aff8c",fontSize:18}}>✓</span>
        </div>
      ))}

      <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,margin:"16px 0 10px"}}>BLOQUEADOS</div>
      {locked.map(a=>(
        <div key={a.id} style={{display:"flex",alignItems:"center",gap:12,background:"#111",border:"1px solid #222",borderRadius:10,padding:"12px 14px",marginBottom:8,opacity:0.5}}>
          <span style={{fontSize:28,filter:"grayscale(1)"}}>{a.emoji}</span>
          <div>
            <div style={{color:"#888",fontWeight:700,fontSize:14}}>{a.label}</div>
            <div style={{color:"#555",fontSize:11}}>{a.desc}</div>
          </div>
          <span style={{marginLeft:"auto",color:"#333",fontSize:18}}>🔒</span>
        </div>
      ))}

      {/* ── POKÉDEX PERSONAL ── */}
      {(() => {
        const allPokes = [];
        const seen = new Set();
        Object.values(LEVEL_POKEMON).flat().forEach(p => {
          if(!seen.has(p.name)) { seen.add(p.name); allPokes.push(p); }
        });
        allPokes.sort((a,b) => a.id - b.id);
        const caughtCount = allPokes.filter(p => pokedex[p.name]?.caught).length;
        return (
          <div style={{marginTop:24}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{color:"#e8ff4a",fontSize:14,fontWeight:900,letterSpacing:1}}>
                🔴 POKÉDEX PERSONAL
              </div>
              <div style={{color:"#888",fontSize:12}}>
                <span style={{color:"#e8ff4a",fontWeight:700}}>{caughtCount}</span>/{allPokes.length}
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6}}>
              {allPokes.map(p => {
                const data    = pokedex[p.name];
                const caught  = data?.caught;
                const shiny   = data?.shiny;
                return (
                  <div key={p.name} style={{
                    background: caught ? "#1a1a1a" : "#141414",
                    border:`1px solid ${caught ? (p.fav===3?"#e8ff4a":p.fav===2?"#c084fc":"#4aff8c55") : "#2a2a2a"}`,
                    borderRadius:8, padding:"6px 4px", textAlign:"center",
                    opacity: caught ? 1 : 0.7, position:"relative"
                  }}>
                    {caught ? (
                      <>
                        <ImgWithFallback src={POKEMON_SPRITE_BY_ID(p.id, shiny)}
                          fallback={POKEMON_SPRITE(p.name, shiny)}
                          alt={p.name} id={p.id}
                          style={{width:48,height:48,objectFit:"contain",display:"block",margin:"0 auto",
                            filter:shiny?"drop-shadow(0 0 4px gold)":"none"}}/>
                        <div style={{position:"absolute",top:2,left:3,color:"#4aff8c",fontSize:8,fontWeight:700}}>✓</div>
                        {shiny && <div style={{position:"absolute",top:2,right:3,fontSize:8}}>✨</div>}
                      </>
                    ) : (
                      <div style={{width:48,height:48,margin:"0 auto",display:"flex",
                        alignItems:"center",justifyContent:"center",color:"#333",fontSize:22}}>
                        ?
                      </div>
                    )}
                    <div style={{fontSize:8,textTransform:"capitalize",marginTop:2,
                      color: caught ? (p.fav===3?"#e8ff4a":p.fav===2?"#c084fc":"#888") : "#444",
                      overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"0 2px"}}>
                      {caught?(p.fav===3?"⭐ ":p.fav===2?"★ ":""):""}{p.name.replace(/-/g," ")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── Bitácora ─────────────────────────────────────────────────────────────────
const BITA_ACTIVITIES = [
  { id:"gamefit", label:"🎮 Game Fit",  color:"#f472b6" },
  { id:"activo",  label:"⚡ Activo",    color:"#fb923c" },
  { id:"mental",  label:"🧠 Mental",    color:"#67e8f9" },
  { id:"hike",    label:"🏔️ Caminata", color:"#e8ff4a" },
  { id:"rest",    label:"😴 Descanso",  color:"#555"    },
  { id:"note",    label:"📓 Nota",      color:"#888"    },
];

function BitacoraTab({ entries: entriesProp, setEntries: setEntriesProp, registerActivity, markWeekDay, plan, setWeekChecked }) {
  const [entriesLocal, setEntriesLocal] = usePersistedState("vs_bitacora", []);
  const entries    = entriesProp    || entriesLocal;
  const setEntries = setEntriesProp || setEntriesLocal;
  const [openId,  setOpenId]  = useState(null);
  const [newDate, setNewDate] = useState(new Date().toISOString().slice(0,10));
  const [newTitle,setNewTitle]= useState("");
  const [newBody, setNewBody] = useState("");
  const [newActivity, setNewActivity] = useState("note");
  const [editId,       setEditId]       = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Auto-open if entry has empty body (came from completion modal)
  useEffect(()=>{
    if(entries.length>0 && entries[0].body==="" && entries[0].id) {
      setOpenId(entries[0].id);
      setEditId(entries[0].id);
    }
  },[]);

  const addEntry = () => {
    if(!newTitle.trim()) return;
    const entry = { id: Date.now(), date: newDate, title: newTitle.trim(), body: newBody.trim(), activity: newActivity };
    setEntries(e => [entry, ...e]);
    // Register in tracker + Mi Semana if not "note"
    if(newActivity !== "note" && registerActivity) {
      registerActivity(newDate, newActivity);
      if(markWeekDay) markWeekDay(newActivity, newDate);
    }
    setNewTitle(""); setNewBody(""); setNewActivity("note");
  };

  const deleteEntry = (id) => setEntries(e => e.filter(x => x.id !== id));

  const sorted = [...entries].sort((a,b) => b.date.localeCompare(a.date));

  const inputStyle = {
    width:"100%", background:"#111", border:"1px solid #333", borderRadius:6,
    padding:"8px 10px", color:"#f0f0f0", fontSize:13, outline:"none",
    boxSizing:"border-box", fontFamily:"inherit"
  };

  return (
    <div>
      {/* Add entry */}
      <div style={{background:"#1a1a1a",border:"1px solid #67e8f933",borderRadius:12,padding:14,marginBottom:16}}>
        <div style={{color:"#67e8f9",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:12}}>NUEVA ENTRADA</div>
        <div style={{display:"flex",gap:8,marginBottom:8}}>
          <input type="date" value={newDate} onChange={e=>setNewDate(e.target.value)}
            style={{...inputStyle, flex:"0 0 auto", width:150}}/>
          <input type="text" value={newTitle} onChange={e=>setNewTitle(e.target.value)}
            placeholder="Título..." style={{...inputStyle,flex:1}}/>
        </div>
        <textarea value={newBody} onChange={e=>setNewBody(e.target.value)}
          placeholder="¿Qué pasó hoy? Notas, reflexiones, logros mentales, lecturas, juegos terminados..."
          rows={4} style={{...inputStyle, resize:"vertical", lineHeight:1.6}}/>
        {/* Activity assignment */}
        <div style={{marginTop:10,marginBottom:10}}>
          <div style={{color:"#888",fontSize:11,fontWeight:700,marginBottom:6}}>ASIGNAR A (opcional)</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {BITA_ACTIVITIES.map(a=>(
              <button key={a.id} onClick={()=>setNewActivity(a.id)}
                style={{background:newActivity===a.id?a.color+"33":"#111",
                  border:`1px solid ${newActivity===a.id?a.color:"#333"}`,
                  borderRadius:7,padding:"5px 10px",cursor:"pointer",
                  color:newActivity===a.id?a.color:"#555",fontSize:11,fontWeight:700}}>
                {a.label}
              </button>
            ))}
          </div>
        </div>
        <button onClick={addEntry}
          style={{width:"100%",background:"#67e8f9",border:"none",borderRadius:8,
            color:"#000",fontWeight:700,fontSize:14,padding:"10px",cursor:"pointer"}}>
          + Agregar entrada
        </button>
      </div>

      {/* Entries list */}
      <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:10}}>
        ENTRADAS — {entries.length} total
      </div>
      {sorted.length === 0 && (
        <div style={{color:"#555",fontSize:12,fontStyle:"italic",textAlign:"center",padding:"24px 0"}}>
          Tu bitácora está vacía. ¡Empieza a escribir!
        </div>
      )}
      {sorted.map(e => {
        const isOpen = openId === e.id;
        return (
          <div key={e.id} style={{background:"#1a1a1a",border:`1px solid ${isOpen?"#67e8f944":"#2a2a2a"}`,
            borderRadius:10,marginBottom:8,overflow:"hidden",transition:"border-color .2s"}}>
            <div onClick={()=>setOpenId(isOpen?null:e.id)}
              style={{padding:"12px 14px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                  <span style={{color:"#555",fontSize:10}}>{e.date}</span>
                  {e.activity && e.activity!=="note" && (() => {
                    const a=BITA_ACTIVITIES.find(x=>x.id===e.activity);
                    return a ? <span style={{background:a.color+"22",color:a.color,fontSize:9,
                      fontWeight:700,padding:"1px 6px",borderRadius:4,border:`1px solid ${a.color}44`}}>
                      {a.label}</span> : null;
                  })()}
                </div>
                <div style={{color:"#f0f0f0",fontWeight:700,fontSize:14}}>{e.title}</div>
                {!isOpen && e.body && (
                  <div style={{color:"#555",fontSize:11,marginTop:3,overflow:"hidden",
                    textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:220}}>
                    {e.body.slice(0,80)}{e.body.length>80?"...":""}
                  </div>
                )}
              </div>
              <span style={{color:"#67e8f9",fontSize:16,marginLeft:8}}>{isOpen?"▲":"▼"}</span>
            </div>
            {isOpen && (
              <div style={{padding:"0 14px 14px",borderTop:"1px solid #2a2a2a"}}>
                {editId === e.id
                  ? <EditEntry entry={e} onSave={(updated)=>{
                      setEntries(es=>es.map(x=>x.id===e.id?{...x,...updated}:x));
                      setEditId(null);
                    }} onCancel={()=>setEditId(null)} inputStyle={inputStyle}/>
                  : <>
                    <div style={{color:"#ccc",fontSize:13,lineHeight:1.7,marginTop:12,whiteSpace:"pre-wrap"}}>
                      {e.body || <span style={{color:"#555",fontStyle:"italic"}}>Sin descripción</span>}
                    </div>
                    <div style={{display:"flex",gap:8,marginTop:12}}>
                      <button onClick={()=>setEditId(e.id)}
                        style={{background:"#222",border:"1px solid #333",borderRadius:6,color:"#888",
                          fontSize:12,padding:"5px 12px",cursor:"pointer"}}>✏️ Editar</button>
                      <button onClick={()=>{
                        if(deleteConfirm===e.id){ deleteEntry(e.id); setDeleteConfirm(null); }
                        else setDeleteConfirm(e.id);
                      }} style={{background:deleteConfirm===e.id?"#ff4a4a22":"none",
                        border:`1px solid ${deleteConfirm===e.id?"#ff4a4a":"#333"}`,borderRadius:6,
                        color:deleteConfirm===e.id?"#ff4a4a":"#555",fontSize:12,padding:"5px 12px",cursor:"pointer"}}>
                        {deleteConfirm===e.id?"¿Confirmar borrar?":"🗑️ Borrar"}
                      </button>
                      {deleteConfirm===e.id && (
                        <button onClick={()=>setDeleteConfirm(null)}
                          style={{background:"none",border:"1px solid #333",borderRadius:6,color:"#555",fontSize:12,padding:"5px 10px",cursor:"pointer"}}>Cancelar</button>
                      )}
                    </div>
                  </>
                }
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function EditEntry({ entry, onSave, onCancel, inputStyle }) {
  const [title,    setTitle]    = useState(entry.title);
  const [body,     setBody]     = useState(entry.body);
  const [date,     setDate]     = useState(entry.date);
  const [activity, setActivity] = useState(entry.activity||"note");
  return (
    <div style={{marginTop:12}}>
      <div style={{display:"flex",gap:8,marginBottom:8}}>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)}
          style={{...inputStyle,flex:"0 0 auto",width:150}}/>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)}
          style={{...inputStyle,flex:1}}/>
      </div>
      <textarea value={body} onChange={e=>setBody(e.target.value)} rows={4}
        style={{...inputStyle,resize:"vertical",lineHeight:1.6}}/>
      <div style={{display:"flex",gap:8,marginTop:8}}>
        <button onClick={()=>onSave({title,body,date,activity})}
          style={{flex:1,background:"#67e8f9",border:"none",borderRadius:6,color:"#000",fontWeight:700,padding:"8px",cursor:"pointer",fontSize:13}}>
          Guardar cambios
        </button>
        <button onClick={onCancel}
          style={{background:"none",border:"1px solid #333",borderRadius:6,color:"#555",padding:"8px 14px",cursor:"pointer",fontSize:13}}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

// ─── Ejercicios Hub Tab ───────────────────────────────────────────────────────
function EjerciciosTab({ onSelectWorkout, onComplete, onBonusXP, activeWorkout, setActiveWorkout, travelMode, setTravelMode }) {
  const WORKOUTS_META = [
    { id:"push", label:"Push",   emoji:"💪", color:"#ff6b35", desc:"Pecho · Hombros · Tríceps",   duration:"35-45 min" },
    { id:"pull", label:"Pull",   emoji:"🔙", color:"#4a9eff", desc:"Espalda · Bíceps",             duration:"35-45 min" },
    { id:"legs", label:"Legs",   emoji:"🦵", color:"#4aff8c", desc:"Cuádriceps · Isquios · Glúteos", duration:"35-45 min" },
    { id:"rope", label:"Cuerda", emoji:"🪢", color:"#c084fc", desc:"Cardio · Agilidad · Salto",   duration:"25-30 min" },
  ];

  if(activeWorkout) {
    return (
      <div>
        {/* Back button */}
        <button onClick={()=>setActiveWorkout(null)}
          style={{display:"flex",alignItems:"center",gap:6,background:"#1a1a1a",
            border:"1px solid #333",borderRadius:8,color:"#888",fontSize:13,fontWeight:700,
            padding:"8px 14px",cursor:"pointer",marginBottom:14}}>
          ← Volver a Ejercicios
        </button>
        {activeWorkout==="rope"
          ? <RopeTab onComplete={onComplete} travelMode={travelMode}/>
          : <WorkoutTab wk={activeWorkout} onComplete={onComplete} onBonusXP={onBonusXP} travelMode={travelMode}/>
        }
      </div>
    );
  }

  return (
    <div>
      {/* Travel mode toggle */}
      <div style={{background: travelMode?"#4a9eff22":"#1a1a1a",
        border:`1px solid ${travelMode?"#4a9eff":"#2a2a2a"}`,
        borderRadius:10,padding:"12px 14px",marginBottom:14,
        display:"flex",justifyContent:"space-between",alignItems:"center",
        transition:"all .2s"}}>
        <div>
          <div style={{color:travelMode?"#4a9eff":"#888",fontWeight:700,fontSize:14}}>
            ✈️ Modo Viaje
          </div>
          <div style={{color:"#555",fontSize:11,marginTop:2}}>
            {travelMode?"Rutinas sin equipo activas":"Sin equipo disponible esta sesión"}
          </div>
        </div>
        <div onClick={()=>setTravelMode(t=>!t)}
          style={{width:44,height:24,borderRadius:12,
            background:travelMode?"#4a9eff":"#333",
            position:"relative",cursor:"pointer",transition:"background .2s",flexShrink:0}}>
          <div style={{position:"absolute",top:3,
            left:travelMode?22:3,width:18,height:18,
            borderRadius:"50%",background:"#fff",
            transition:"left .2s",boxShadow:"0 1px 3px #0006"}}/>
        </div>
      </div>

      <div style={{color:"#888",fontSize:11,fontWeight:700,letterSpacing:1,marginBottom:14}}>
        SELECCIONA TU SESIÓN DE HOY
      </div>
      {WORKOUTS_META.map(w => {
        // Read session progress from localStorage
        const sessionKey = `vs_session_${w.id}`;
        let sessionPct = 0;
        try {
          const saved = localStorage.getItem(sessionKey);
          if(saved) {
            const data = JSON.parse(saved);
            if(Array.isArray(data)) {
              const done  = data.reduce((s,e)=>s+(e.done||0),0);
              const total = data.reduce((s,e)=>s+(e.total||0),0);
              sessionPct = total>0 ? Math.round((done/total)*100) : 0;
            }
          }
        } catch{}

        return (
          <div key={w.id} onClick={()=>setActiveWorkout(w.id)}
            style={{background:"#1a1a1a",border:`1px solid ${sessionPct===100?w.color+"88":w.color+"33"}`,
              borderRadius:14,padding:"18px 16px",marginBottom:12,cursor:"pointer",
              transition:"all .2s",position:"relative",overflow:"hidden"}}>
            {travelMode && ["push","pull","legs","rope"].includes(w.id) && (
              <div style={{position:"absolute",top:8,right:8,background:"#4a9eff22",
                border:"1px solid #4a9eff55",borderRadius:5,padding:"2px 7px",
                color:"#4a9eff",fontSize:10,fontWeight:700}}>✈️ Viaje</div>
            )}
            {/* Progress bar background */}
            {sessionPct>0 && (
              <div style={{position:"absolute",top:0,left:0,height:"100%",
                width:`${sessionPct}%`,background:w.color+"0d",transition:"width .3s"}}/>
            )}
            <div style={{position:"relative",display:"flex",alignItems:"center",gap:14}}>
              {/* Emoji circle */}
              <div style={{background:w.color+"22",border:`2px solid ${w.color}44`,
                borderRadius:14,width:54,height:54,display:"flex",alignItems:"center",
                justifyContent:"center",fontSize:26,flexShrink:0}}>
                {w.emoji}
              </div>
              <div style={{flex:1}}>
                <div style={{color:w.color,fontWeight:900,fontSize:18}}>{w.label}</div>
                <div style={{color:"#888",fontSize:12,marginTop:2}}>{w.desc}</div>
                <div style={{color:"#555",fontSize:11,marginTop:4}}>{w.duration}</div>
              </div>
              {/* Progress indicator */}
              <div style={{textAlign:"right",flexShrink:0}}>
                {sessionPct===100
                  ? <div style={{color:"#4aff8c",fontWeight:900,fontSize:18}}>✓</div>
                  : sessionPct>0
                    ? <div style={{color:w.color,fontWeight:700,fontSize:14}}>{sessionPct}%</div>
                    : <div style={{color:"#333",fontSize:20}}>›</div>
                }
                <div style={{color:"#555",fontSize:9,marginTop:2}}>
                  {sessionPct===100?"Completo":sessionPct>0?"En progreso":"Iniciar"}
                </div>
              </div>
            </div>
            {/* Mini progress bar at bottom */}
            {sessionPct>0 && sessionPct<100 && (
              <div style={{position:"relative",marginTop:12,background:"#222",borderRadius:20,height:4,overflow:"hidden"}}>
                <div style={{background:w.color,height:"100%",width:`${sessionPct}%`,borderRadius:20}}/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Mini XP Bar ─────────────────────────────────────────────────────────────
function MiniXPBar({ xp, appName }) {
  const { level, progress, toNext } = calcLevel(xp);
  const pct = toNext > 0 ? (progress/toNext)*100 : 0;
  return (
    <div id="app-xpbar" style={{ padding:"8px 20px 10px", background:"linear-gradient(135deg,#111 0%,#1a1a0a 100%)", borderBottom:"1px solid #2a2a2a" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ background:"linear-gradient(135deg,#c084fc,#818cf8)", borderRadius:8, padding:"3px 8px", fontSize:11, fontWeight:900, color:"#000", whiteSpace:"nowrap" }}>
          LVL {level}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ background:"#222", borderRadius:20, height:8, overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(90deg,#c084fc,#818cf8)", height:"100%", width:`${pct}%`, borderRadius:20, transition:"width .5s" }}/>
          </div>
        </div>
        <span style={{ color:"#555", fontSize:10, whiteSpace:"nowrap" }}>{progress}/{toNext} XP</span>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
// ─── localStorage helpers ───────────────────────────────────
function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : defaultValue;
    } catch { return defaultValue; }
  });
  const setPersisted = (value) => {
    setState(prev => {
      const next = typeof value === "function" ? value(prev) : value;
      try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
      return next;
    });
  };
  return [state, setPersisted];
}


// ─── Live Clock ───────────────────────────────────────────────────────────────
function LiveClock() {
  const [time, setTime] = useState(() => {
    const n = new Date();
    return n.toLocaleTimeString("es-HN", {hour:"2-digit", minute:"2-digit", hour12:true});
  });
  useEffect(() => {
    const id = setInterval(() => {
      const n = new Date();
      setTime(n.toLocaleTimeString("es-HN", {hour:"2-digit", minute:"2-digit", hour12:true}));
    }, 10000); // update every 10 seconds
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{textAlign:"right"}}>
      <div style={{color:"#e8ff4a",fontWeight:700,fontSize:18,letterSpacing:1,fontFamily:"monospace"}}>
        {time}
      </div>
    </div>
  );
}




// ─── Image with Fallback ──────────────────────────────────────────────────────
function ImgWithFallback({ src, fallback, alt, id, style }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failed, setFailed] = useState(false);
  return failed
    ? <div style={{...style, background:"#1a1a1a", borderRadius:12,
        display:"flex", flexDirection:"column", alignItems:"center",
        justifyContent:"center", border:"1px solid #333"}}>
        <div style={{fontSize:28, marginBottom:4}}>🔴</div>
        <div style={{color:"#555", fontSize:10}}>#{id}</div>
      </div>
    : <img src={imgSrc} alt={alt} style={style}
        onError={()=>{
          if(imgSrc !== fallback) { setImgSrc(fallback); }
          else { setFailed(true); }
        }}/>;
}

// ─── Catchup Modal ────────────────────────────────────────────────────────────
function CatchupModal({ queue, setQueue, setPokedex }) {
  const [idx, setIdx] = useState(0);
  const current = queue[idx];
  if(!current) return null;

  const catchPoke = () => {
    setPokedex(d => ({...d, [current.name]: {caught:true, shiny:!!current.shiny, fav:current.fav}}));
    if(idx + 1 >= queue.length) {
      setQueue([]); // done
    } else {
      setIdx(i => i + 1);
    }
  };

  return (
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#000d",
      zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:"linear-gradient(135deg,#1a1a1a,#1a1a2a)",
        border:"2px solid #e8ff4a",borderRadius:20,padding:24,
        maxWidth:320,width:"100%",textAlign:"center",
        boxShadow:"0 0 40px #e8ff4a22",maxHeight:"90vh",overflowY:"auto"}}>
        
        {/* Header */}
        <div style={{fontSize:32,marginBottom:4}}>🎁</div>
        <div style={{color:"#e8ff4a",fontWeight:900,fontSize:18,marginBottom:2}}>
          ¡Capturas pendientes!
        </div>
        <div style={{color:"#555",fontSize:12,marginBottom:16}}>
          {idx + 1} de {queue.length} Pokémon te estaban esperando
        </div>

        {/* Progress dots */}
        <div style={{display:"flex",gap:4,justifyContent:"center",marginBottom:16,flexWrap:"wrap"}}>
          {queue.map((_,i) => (
            <div key={i} style={{width:8,height:8,borderRadius:"50%",
              background: i < idx ? "#4aff8c" : i === idx ? "#e8ff4a" : "#333",
              transition:"background .3s"}}/>
          ))}
        </div>

        {/* Level badge */}
        <div style={{background:"#111",borderRadius:8,padding:"4px 12px",
          display:"inline-block",marginBottom:12}}>
          <span style={{color:"#555",fontSize:11}}>Nivel </span>
          <span style={{color:"#e8ff4a",fontWeight:700,fontSize:13}}>{current.level}</span>
        </div>

        {/* Pokemon */}
        <div style={{background:"#111",borderRadius:12,padding:16,marginBottom:16}}>
          <div style={{color:"#888",fontSize:11,marginBottom:8}}>¡Un Pokémon apareció!</div>
          <ImgWithFallback
            src={POKEMON_SPRITE_BY_ID(current.id, current.shiny)}
            fallback={POKEMON_SPRITE(current.name, current.shiny)}
            alt={current.name}
            id={current.id}
            style={{width:96,height:96,objectFit:"contain",display:"block",margin:"0 auto",
              filter:current.shiny?"drop-shadow(0 0 8px gold)":"none"}}/>
          <div style={{color:"#f0f0f0",fontWeight:700,fontSize:16,textTransform:"capitalize",marginTop:8}}>
            {current.fav===3?"⭐ ":current.fav===2?"★ ":""}
            {current.name.replace(/-/g," ")}
            {current.shiny?" ✨":""}
          </div>
        </div>

        <button onClick={catchPoke}
          style={{width:"100%",background:"#e8ff4a",border:"none",
            borderRadius:10,color:"#000",fontWeight:900,fontSize:15,
            padding:"12px",cursor:"pointer"}}>
          ¡Atrapar! 🎯
        </button>

        {/* Skip all */}
        <button onClick={()=>setQueue([])}
          style={{marginTop:8,background:"none",border:"none",
            color:"#333",fontSize:11,cursor:"pointer",textDecoration:"underline"}}>
          Saltar todos
        </button>
      </div>
    </div>
  );
}

// ─── Level Up Modal Component ─────────────────────────────────────────────────
function LevelUpModal({ levelUpModal, setLevelUpModal, setPokedex }) {
  const lvl   = levelUpModal.level;
  const pokes = levelUpModal.pokes || [];
  const isChoice = pokes.length > 1 && pokes[0].choice;
  const [chosenPoke, setChosenPoke] = useState(isChoice ? null : (pokes[0]||null));

  const lvlMsg = lvl===2?"¡Elegiste tu starter! El viaje comienza 🌿🔥💧"
    :lvl===5?"Primera medalla conseguida 🏅"
    :lvl===10?"¡Derrotaste al primer Gym Leader! 💪"
    :lvl===15?"Team Rocket no te detiene 🚀"
    :lvl===20?"¡8 medallas! Listo para el Alto Mando 🏆"
    :lvl===25?"Derrotaste al Alto Mando. Campeón en progreso 👑"
    :lvl===30?"¡Modo post-game! Como capturar legendarios 🦋"
    :lvl===40?"Completando la Pokédex — disciplina de maestro 📖"
    :lvl===50?"¡Nivel 50! Como un Pokémon completamente evolucionado ⚡"
    :lvl===75?"Rango Master Ball — solo los mejores llegan aquí 🎯"
    :lvl===100?"¡Campeón Mundial! Eres el mejor, como ninguno 🌟"
    :"Tu Pokémon ganó experiencia ✨";

  const catchPoke = (p) => {
    setPokedex(d => ({...d, [p.name]: {caught:true, shiny:!!p.shiny, fav:p.fav}}));
    setLevelUpModal(null);
  };

  return (
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#000d",
      zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:"linear-gradient(135deg,#1a1a1a,#2a1a2a)",
        border:"2px solid #c084fc",borderRadius:20,padding:24,
        maxWidth:320,width:"100%",textAlign:"center",
        boxShadow:"0 0 40px #c084fc44",maxHeight:"90vh",overflowY:"auto"}}>
        <div style={{fontSize:40,marginBottom:4}}>⬆️</div>
        <div style={{color:"#555",fontSize:11,fontWeight:700,letterSpacing:3,marginBottom:4}}>LEVEL UP</div>
        <div style={{background:"linear-gradient(135deg,#c084fc,#818cf8)",
          borderRadius:12,padding:"6px 0",marginBottom:8}}>
          <div style={{color:"#000",fontWeight:900,fontSize:44,lineHeight:1}}>{lvl}</div>
        </div>
        <div style={{color:"#c084fc",fontWeight:700,fontSize:15,marginBottom:4}}>
          ¡Nivel {lvl} alcanzado!
        </div>
        <div style={{color:"#888",fontSize:12,marginBottom:16,lineHeight:1.5}}>{lvlMsg}</div>

        {pokes.length > 0 && (
          <div style={{background:"#111",borderRadius:12,padding:14,marginBottom:14}}>
            {isChoice && !chosenPoke ? (
              <>
                <div style={{color:"#e8ff4a",fontWeight:700,fontSize:13,marginBottom:12}}>
                  ¡Elige tu Starter! 🌿🔥💧
                </div>
                <div style={{display:"flex",gap:8,justifyContent:"center"}}>
                  {pokes.map(p=>(
                    <div key={p.id} onClick={()=>setChosenPoke(p)}
                      style={{cursor:"pointer",background:"#1a1a1a",border:"2px solid #333",
                        borderRadius:10,padding:"8px",flex:1}}>
                      <ImgWithFallback src={POKEMON_SPRITE_BY_ID(p.id)} fallback={POKEMON_SPRITE(p.name)}
                        alt={p.name} id={p.id}
                        style={{width:64,height:64,objectFit:"contain"}}/>
                      <div style={{color:"#f0f0f0",fontSize:11,fontWeight:700,
                        textTransform:"capitalize",marginTop:4}}>
                        {p.name}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : chosenPoke ? (
              <>
                <div style={{color:"#e8ff4a",fontWeight:700,fontSize:12,marginBottom:8}}>
                  {chosenPoke.shiny ? "✨ ¡Un Pokémon shiny apareció!" : "¡Un Pokémon apareció!"}
                </div>
                <ImgWithFallback src={POKEMON_SPRITE_BY_ID(chosenPoke.id, chosenPoke.shiny)}
                  fallback={POKEMON_SPRITE(chosenPoke.name, chosenPoke.shiny)}
                  alt={chosenPoke.name} id={chosenPoke.id}
                  style={{width:96,height:96,objectFit:"contain",
                    filter:chosenPoke.shiny?"drop-shadow(0 0 8px gold)":"none"}}/>
                <div style={{color:"#f0f0f0",fontWeight:700,fontSize:16,
                  textTransform:"capitalize",marginTop:4}}>
                  {chosenPoke.fav===3?"⭐ ":chosenPoke.fav===2?"★ ":""}
                  {chosenPoke.name.replace(/-/g," ")}
                  {chosenPoke.shiny?" ✨":""}
                </div>
                <button onClick={()=>catchPoke(chosenPoke)}
                  style={{marginTop:10,background:"#e8ff4a",border:"none",
                    borderRadius:8,color:"#000",fontWeight:900,fontSize:14,
                    padding:"8px 20px",cursor:"pointer"}}>
                  ¡Atrapar! 🎯
                </button>
              </>
            ) : null}
          </div>
        )}

        {pokes.length === 0 && (
          <button onClick={()=>setLevelUpModal(null)}
            style={{background:"linear-gradient(135deg,#c084fc,#818cf8)",border:"none",
              borderRadius:10,color:"#000",fontWeight:900,fontSize:14,
              padding:"10px 28px",cursor:"pointer"}}>
            ¡Vamos! 💪
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("data");

  // Responsive CSS — pure CSS, zero JSX changes
  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `
      ::-webkit-scrollbar { width: 0; height: 0; }
      * { scrollbar-width: none; }

      /* Desktop layout — fixed sidebar approach */
      @media (min-width: 900px) {
        #app-outer {
          max-width: 100% !important;
          padding-left: 260px;
        }
        #app-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          z-index: 100;
          border-right: 1px solid #2a2a2a;
          box-sizing: border-box;
        }
        #app-xpbar {
          position: fixed;
          top: 88px;
          left: 0;
          width: 260px;
          z-index: 100;
          border-right: 1px solid #2a2a2a;
          border-bottom: none !important;
          box-sizing: border-box;
        }
        #app-tabbar {
          position: fixed;
          top: 138px;
          left: 0;
          width: 260px;
          height: calc(100vh - 138px);
          overflow-y: auto;
          z-index: 100;
          flex-direction: column !important;
          overflow-x: hidden !important;
          border-bottom: none !important;
          border-right: 1px solid #2a2a2a;
          align-items: stretch;
          padding: 8px 0 !important;
          box-sizing: border-box;
          background: #1a1a1a;
        }
        #app-tabbar button {
          text-align: left !important;
          justify-content: flex-start !important;
          border-bottom: none !important;
          border-left: 3px solid transparent !important;
          padding: 12px 16px !important;
          font-size: 13px !important;
          white-space: nowrap !important;
          width: 100% !important;
        }
        #app-content {
          padding: 24px 40px 40px !important;
          min-height: 100vh;
        }
      }
    `;
    document.head.appendChild(s);
  }, []);

  const [appName, setAppName]         = usePersistedState("vs_appName", "PokExcercise - ADHD Edition 🏔️");
  const [xp,      setXp]              = usePersistedState("vs_xp", 0);
  const [levelUpModal, setLevelUpModal] = useState(null); // { level }
  const [pokedex, setPokedex] = usePersistedState("vs_pokedex", {}); // {name: {caught:true, shiny:bool}}
  const [pendingCapture, setPendingCapture] = useState(null);
  const [specialPokedex, setSpecialPokedex] = usePersistedState("vs_special_pokedex", {});
  const [catchupQueue, setCatchupQueue] = usePersistedState("vs_catchup_queue", null);
  // null = not checked yet, [] = checked and done, [...] = pending pokes

  // On mount: detect skipped pokemon
  useEffect(() => {
    if(catchupQueue !== null) return; // already checked
    const { level: currentLevel } = calcLevel(xp);
    if(currentLevel <= 1) { setCatchupQueue([]); return; }
    // Find all pokemon from levels 2..currentLevel that aren't caught
    const missed = [];
    for(let lvl = 2; lvl <= currentLevel; lvl++) {
      const pokes = LEVEL_POKEMON[lvl] || [];
      // Skip starter choice levels - handle separately
      const isChoice = pokes.length > 1 && pokes[0]?.choice;
      if(isChoice) {
        // Check if any starter was caught
        const anyCaught = pokes.some(p => pokedex[p.name]?.caught);
        if(!anyCaught) missed.push({...pokes[0], choice: false, level: lvl});
      } else {
        pokes.forEach(p => {
          if(!pokedex[p.name]?.caught) missed.push({...p, level: lvl});
        });
      }
    }
    setCatchupQueue(missed.length > 0 ? missed : []);
  }, []);
  const prevLevelRef = useRef(calcLevel(0).level);

  // Wrapped setXp that detects level-up
  const setXpWithLevelUp = (updater) => {
    setXp(prev => {
      const newXp = typeof updater === "function" ? updater(prev) : updater;
      const oldLevel = calcLevel(prev).level;
      const newLevel = calcLevel(newXp).level;
      if(newLevel > oldLevel) {
        const pokes = LEVEL_POKEMON[newLevel];
        setTimeout(() => setLevelUpModal({ level: newLevel, pokes: pokes||[] }), 300);
      }
      return newXp;
    });
  };
  const [logs,    setLogs]            = usePersistedState("vs_logs", {});
  const [weightHistory, setWeightHistory] = usePersistedState("vs_weightHistory", []);
  const [goalWeight,    setGoalWeight]    = usePersistedState("vs_goalWeight", "200");
  const [bitacoraEntries, setBitacoraEntries] = usePersistedState("vs_bitacora", []);
  const defaultPlanApp = [
    { activity:"hike",    note:"Siempre" },
    { activity:"gamefit", note:"" },
    { activity:"legs",    note:"" },
    { activity:"push",    note:"Teletrabajo" },
    { activity:"legs",    note:"" },
    { activity:"rope",    note:"" },
    { activity:"pull",    note:"" },
  ];
  const [plan, setPlan] = usePersistedState("vs_weekplan", defaultPlanApp);
  const [weekChecked, setWeekChecked] = usePersistedState("vs_weekChecked", Array(7).fill(false));
  const [travelMode, setTravelMode] = usePersistedState("vs_travel_mode", false);
  const [activeWorkout, setActiveWorkout] = useState(null);

  // Helper: register activity in logs for a given date
  const registerActivity = (date, activityId) => {
    setLogs(l => {
      const cur = l[date] || {types:[], cals:{}};
      const types = Array.isArray(cur) ? cur : (cur.types||[]);
      const cals  = Array.isArray(cur) ? {} : (cur.cals||{});
      if(types.includes(activityId)) return l;
      return { ...l, [date]: { types:[...types, activityId], cals } };
    });
  };

  // Helper: mark Mi Semana day as done (checkbox)
  const DAYS_ORDER = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  const markWeekDay = (activityId, date) => {
    const dow = new Date(date + "T12:00:00").getDay(); // 0=Sun..6=Sat
    // find which plan slot matches this day-of-week AND activity
    const slotIdx = plan.findIndex((d,i) => i===dow && d.activity===activityId);
    if(slotIdx !== -1) {
      setWeekChecked(c => c.map((v,j) => j===slotIdx ? true : v));
    }
  };

  // Centralized XP award — uses xpAwarded to prevent duplicates
  // xpAwarded lives in HabitTrackerTab but we need it here too — lift it up
  const [xpAwarded, setXpAwarded] = usePersistedState("vs_xpAwarded", {});

  const awardXP = (activityId, date, extraPts = 0, extraLabel = "") => {
    const daysSince = (new Date() - new Date(date + "T12:00:00")) / (1000*60*60*24);
    const withinGrace = daysSince <= 3; // 3-day grace period
    const prev = xpAwarded[date] || { types:[], calCount:0 };
    const alreadyAwarded = prev.types.includes(activityId);
    let earned = 0;
    let labels = [];
    if(!alreadyAwarded && withinGrace) {
      const dt = DAY_TYPES.find(d=>d.id===activityId);
      if(dt) {
        earned += dt.xp || (dt.isWorkout ? 10 : 5);
        labels.push(`+${dt.xp||10} ${dt.emoji||""}`);
      }
      setXpAwarded(a => ({...a, [date]: {...prev, types:[...prev.types, activityId]}}));
    }
    if(extraPts > 0) {
      earned += extraPts;
      labels.push(`+${extraPts} ${extraLabel}`);
    }
    if(earned > 0) {
      setXpWithLevelUp(x => x + earned);
    }
    return { earned, labels };
  };

  // Completion modal state (shown when workout hits 100%)
  const [completionModal, setCompletionModal] = useState(null);
  // { wk, label, emoji, color, date }
  const handleWorkoutComplete = (wk, color, label, emoji) => {
    const today = new Date().toISOString().slice(0,10);
    // Don't register yet — wait for user to confirm date in modal
    setCompletionModal({ wk, label, emoji, color, date: today, confirmed: false });
  };

  // Called when user confirms the modal (either via bitacora or dismiss)
  const confirmWorkoutModal = (modal) => {
    const { wk, date } = modal;
    registerActivity(date, wk);
    markWeekDay(wk, date);
    awardXP(wk, date);
    setCompletionModal(null);
  };
  // Replan modal logic
  const now_         = new Date();
  const todayDow     = now_.getDay(); // 0=Sun, 6=Sat
  const todayHour    = now_.getHours();
  const todayKey     = now_.toISOString().slice(0,10);
  const isSatEvening = todayDow === 6 && todayHour >= 18;
  const isSunday_    = todayDow === 0;

  // Get ISO week number to track if planned this week
  const getWeekKey = (d) => {
    const date = new Date(d);
    date.setHours(0,0,0,0);
    date.setDate(date.getDate() + 3 - (date.getDay()+6)%7);
    const week1 = new Date(date.getFullYear(),0,4);
    return `${date.getFullYear()}-W${String(1+Math.round(((date-week1)/86400000-3+(week1.getDay()+6)%7)/7)).padStart(2,"0")}`;
  };
  const thisWeekKey = getWeekKey(now_);
  const [weekPlanned, setWeekPlanned]         = usePersistedState("vs_weekPlanned", "");
  const [sundayModalSeen, setSundayModalSeen] = usePersistedState("vs_sundayModal", "");
  const alreadyPlanned = weekPlanned === thisWeekKey;

  // Saturday: show once per day. Sunday: show every app open until planned.
  const shouldShowReplan = !alreadyPlanned && (
    (isSatEvening && sundayModalSeen !== todayKey) || isSunday_
  );
  const [showSundayModal, setShowSundayModal] = useState(shouldShowReplan);

  const dismissSundayModal = (goToPlan) => {
    if(isSatEvening && !isSunday_) setSundayModalSeen(todayKey); // sat: only hide today
    setShowSundayModal(false);
    if(goToPlan) setTab("plan");
  };

  const markWeekPlanned = () => {
    setWeekPlanned(thisWeekKey);
    setShowSundayModal(false);
    setXpWithLevelUp(x => x + 5);
  };

  const TABS = [
    { id:"data",         label:"👤 Data/Progreso" },
    { id:"plan",         label:"📅 Mi Semana" },
    { id:"tracker",      label:"📆 Tracker" },
    { id:"timer",        label:"⏱ Timer" },
    { id:"ejercicios",   label:"🏋️ Ejercicios" },
    { id:"bitacora",     label:"📓 Bitácora" },
    { id:"achievements", label:"🏆 Logros" },
  ];

  return (
    <div id="app-outer" style={{ background:"#0f0f0f", minHeight:"100vh", fontFamily:"'Segoe UI',Arial,sans-serif", color:"#f0f0f0", maxWidth:560, margin:"0 auto" }}>
      {/* Header */}
      <div id="app-header" style={{ background:"linear-gradient(135deg,#111 0%,#1a1a0a 100%)", padding:"20px 20px 12px" }}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{ color:"#e8ff4a", fontWeight:900, fontSize:24, letterSpacing:-1 }}>{appName}</div>
          <LiveClock/>
        </div>
        <div style={{ color:"#888", fontSize:12, marginTop:2 }}>ADHD Friendly Excercise Program · Pokemón Themed</div>
        <div style={{ display:"flex", gap:6, marginTop:8, flexWrap:"wrap" }}>
          <Tag color="#ff6b35">3-5 días/semana</Tag>
          <Tag color="#4aff8c">35-45 min/sesión</Tag>
          <Tag color="#c084fc">TDAH-friendly</Tag>
        </div>
      </div>
      {/* Mini XP bar */}
      <MiniXPBar xp={xp} appName={appName}/>

      {/* Sunday modal */}
      {showSundayModal && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#000c",
          zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:"#1a1a1a",border:"2px solid #e8ff4a",borderRadius:16,
            padding:24,margin:16,maxWidth:320,width:"100%",textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:8}}>📅</div>
            <div style={{color:"#e8ff4a",fontWeight:900,fontSize:20,marginBottom:6}}>
              ¡Nueva semana!
            </div>
            <div style={{color:"#bbb",fontSize:13,lineHeight:1.6,marginBottom:20}}>
              {new Date().getDay()===6 ? "Es sábado por la noche — buen momento para planificar tu semana." : "Es domingo — revisa tu plan y ajusta lo que necesites."}
            </div>
            <div style={{display:"flex",gap:10,flexDirection:"column"}}>
              <button onClick={()=>dismissSundayModal(true)}
                style={{background:"#e8ff4a",border:"none",borderRadius:10,color:"#000",
                  fontWeight:900,fontSize:15,padding:"12px",cursor:"pointer"}}>
                📅 Revisar Mi Semana
              </button>
              <button onClick={()=>dismissSundayModal(false)}
                style={{background:"none",border:"1px solid #444",borderRadius:10,color:"#888",
                  fontWeight:700,fontSize:14,padding:"10px",cursor:"pointer"}}>
                {new Date().getDay()===0?"Después (me recordará de nuevo)":"Después"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Level Up modal */}
      {catchupQueue && catchupQueue.length > 0 && (
        <CatchupModal queue={catchupQueue} setQueue={setCatchupQueue} setPokedex={setPokedex}/>
      )}
      {(!catchupQueue || catchupQueue.length === 0) && levelUpModal && (
        <LevelUpModal levelUpModal={levelUpModal} setLevelUpModal={setLevelUpModal} setPokedex={setPokedex}/>
      )}
      {/* Workout completion modal */}
      {completionModal && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"#000c",
          zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:"#1a1a1a",border:`2px solid ${completionModal.color}`,
            borderRadius:16,padding:24,margin:16,maxWidth:320,width:"100%",textAlign:"center"}}>
            <div style={{fontSize:48,marginBottom:8}}>{completionModal.emoji}</div>
            <div style={{color:completionModal.color,fontWeight:900,fontSize:22,marginBottom:4}}>
              ¡{completionModal.label} completo!
            </div>
            {/* Editable date field */}
            <div style={{display:"flex",alignItems:"center",gap:8,justifyContent:"center",marginBottom:12}}>
              <span style={{color:"#888",fontSize:12}}>Fecha:</span>
              <input type="date"
                value={completionModal.date}
                onChange={e=>{
                  const newDate = e.target.value;
                  setCompletionModal(m=>({...m, date: newDate}));
                }}
                style={{background:"#111",border:`1px solid ${completionModal.color}44`,
                  borderRadius:6,padding:"5px 8px",color:"#f0f0f0",fontSize:13,outline:"none"}}/>
            </div>
            <div style={{color:"#555",fontSize:11,marginBottom:12}}>
              Se registrará al confirmar · <span style={{color:"#e8ff4a"}}>+10 XP</span>
              <div style={{color:"#555",fontSize:10,marginTop:2}}>
                Cambia la fecha si lo hiciste otro día · XP válido hasta 3 días atrás
              </div>
            </div>

            {/* Bonus + Finisher motivation */}
            {completionModal.wk !== "rope" && (
              <div style={{background:"#111",borderRadius:12,padding:12,marginBottom:14,textAlign:"left"}}>
                <div style={{color:"#e8ff4a",fontWeight:700,fontSize:12,marginBottom:8}}>
                  ¿Tienes más energía? 🔥
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,
                    padding:"6px 10px",background:"#1a1a1a",borderRadius:8,
                    border:`1px solid ${completionModal.color}33`}}>
                    <span style={{fontSize:16}}>⚡</span>
                    <div>
                      <div style={{color:completionModal.color,fontSize:12,fontWeight:700}}>Bonus desbloqueado</div>
                      <div style={{color:"#555",fontSize:10}}>Ejercicio extra de aislamiento</div>
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8,
                    padding:"6px 10px",background:"#1a1a1a",borderRadius:8,
                    border:"1px solid #ff4a4a33"}}>
                    <span style={{fontSize:16}}>💥</span>
                    <div>
                      <div style={{color:"#ff4a4a",fontSize:12,fontWeight:700}}>Finisher — 60 seg máximos</div>
                      <div style={{color:"#555",fontSize:10}}>Puedes hacerlo después si el tiempo no da</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div style={{display:"flex",gap:10,flexDirection:"column"}}>
              <button onClick={()=>{
                confirmWorkoutModal(completionModal);
                setTab("ejercicios");
              }} style={{background:`linear-gradient(135deg,${completionModal.color},${completionModal.color}aa)`,
                border:"none",borderRadius:10,color:"#000",fontWeight:900,fontSize:14,
                padding:"12px",cursor:"pointer"}}>
                🔥 ¡Voy por el bonus y finisher!
              </button>
              <button onClick={()=>{
                confirmWorkoutModal(completionModal);
                setBitacoraEntries(e=>[{
                  id:Date.now(), date:completionModal.date,
                  title:`${completionModal.emoji} ${completionModal.label}`,
                  body:"", activity:completionModal.wk
                },...e]);
                setTab("bitacora");
              }} style={{background:"#1a1a1a",border:`1px solid ${completionModal.color}44`,borderRadius:10,
                color:"#888",fontWeight:700,fontSize:13,padding:"10px",cursor:"pointer"}}>
                📓 Agregar nota a Bitácora
              </button>
              <button onClick={()=>confirmWorkoutModal(completionModal)}
                style={{background:"none",border:"1px solid #333",borderRadius:10,color:"#555",
                  fontWeight:700,fontSize:13,padding:"8px",cursor:"pointer"}}>
                Registrar y terminar
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Tabs */}
      <div  id="app-tabbar" style={{ display:"flex", overflowX:"auto", borderBottom:"1px solid #2a2a2a", background:"#1a1a1a", padding:"0 4px" }}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{ padding:"11px 12px", background:"none", border:"none", cursor:"pointer",
              color:tab===t.id?"#e8ff4a":"#888",
              borderBottom:tab===t.id?"2px solid #e8ff4a":"2px solid transparent",
              fontWeight:tab===t.id?700:400, fontSize:12, whiteSpace:"nowrap" }}>
            {t.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div id="app-content" style={{ padding:"16px 16px 40px" }}>
        {tab==="data"     && <DataTab appName={appName} setAppName={setAppName} logs={logs} xp={xp} setXp={setXpWithLevelUp} weightHistory={weightHistory} setWeightHistory={setWeightHistory} goalWeight={goalWeight} setGoalWeight={setGoalWeight} pokedex={pokedex}/>}
        {tab==="tracker"      && <HabitTrackerTab logs={logs} setLogs={setLogs} onXP={setXpWithLevelUp} xpAwarded={xpAwarded} setXpAwarded={setXpAwarded}/>}
        {tab==="timer"        && <TimerTab/>}
        {tab==="plan"         && <WeekPlanTab plan={plan} setPlan={setPlan} weekChecked={weekChecked} setWeekChecked={setWeekChecked} onGoToWorkout={(wk)=>{ setActiveWorkout(wk); setTab("ejercicios"); }} onMarkPlanned={markWeekPlanned} alreadyPlanned={alreadyPlanned} travelMode={travelMode} setTravelMode={setTravelMode}/>}
        {tab==="achievements" && <AchievementsTab logs={logs} xp={xp} pokedex={pokedex}/>}
        {tab==="ejercicios"  && <EjerciciosTab
          onComplete={handleWorkoutComplete}
          onBonusXP={()=>setXpWithLevelUp(x=>x+2.5)}
          activeWorkout={activeWorkout}
          setActiveWorkout={setActiveWorkout}
          travelMode={travelMode}
          setTravelMode={setTravelMode}/>}
        {tab==="bitacora"     && <BitacoraTab entries={bitacoraEntries} setEntries={setBitacoraEntries} registerActivity={registerActivity} markWeekDay={markWeekDay} plan={plan} setWeekChecked={setWeekChecked}/>}
      </div>
    </div>
  );
}
