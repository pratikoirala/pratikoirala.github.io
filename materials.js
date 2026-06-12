/**
 * materials.js — Composite Material Database
 * ============================================
 * Add new materials here. The dropdowns in the CLT and PFA tools
 * will update automatically — no changes to index.html needed.
 *
 * Units:
 *   Moduli  (E1, E2, G12)                 : GPa
 *   Poisson (nu12)                        : dimensionless
 *   Strengths (Xt, Xc, Yt, Yc, S12, S23) : MPa
 *   Thickness (tply)                      : mm
 *   Density (rho)                         : kg/m³
 *
 * To add a material, copy an existing entry, give it a unique key,
 * fill in the properties, and add a source citation.
 */

const MATERIAL_DB = {

  // ── Carbon Fiber / Epoxy ────────────────────────────────────────────────────
  "AS4/3501-6 Carbon/Epoxy": {
    E1:    142,
    E2:    10.3,
    G12:   7.2,
    nu12:  0.27,
    Xt:    1830,
    Xc:    1096,
    Yt:    57,
    Yc:    228,
    S12:   71,
    S23:   40,
    tply:  0.125,
    rho:   1580,
    source: "Daniel & Ishai, Engineering Mechanics of Composite Materials, Table A.4"
  },

  "T300/5208 Carbon/Epoxy": {
    E1:    181,
    E2:    10.3,
    G12:   7.17,
    nu12:  0.28,
    Xt:    1500,
    Xc:    1500,
    Yt:    40,
    Yc:    246,
    S12:   68,
    S23:   40,
    tply:  0.125,
    rho:   1600,
    source: "Jones, Mechanics of Composite Materials, 2nd Ed."
  },

  "IM6/SC1081 Carbon/Epoxy": {
    E1:    177,
    E2:    10.8,
    G12:   7.6,
    nu12:  0.27,
    Xt:    2860,
    Xc:    1750,
    Yt:    49,
    Yc:    246,
    S12:   83,
    S23:   45,
    tply:  0.125,
    rho:   1600,
    source: "MIL-HDBK-17"
  },

  // ── Carbon Fiber / Thermoplastic ────────────────────────────────────────────
  "AS4/PEEK Carbon/PEEK": {
    E1:    134,
    E2:    8.9,
    G12:   5.1,
    nu12:  0.28,
    Xt:    2130,
    Xc:    1100,
    Yt:    80,
    Yc:    200,
    S12:   160,
    S23:   60,
    tply:  0.125,
    rho:   1600,
    source: "APC-2 Thermoplastic Composite Data Sheet, Cytec"
  },

  // ── Glass Fiber / Epoxy ─────────────────────────────────────────────────────
  "E-Glass/MY750 Epoxy (UD)": {
    E1:    45.6,
    E2:    16.2,
    G12:   5.83,
    nu12:  0.278,
    Xt:    1280,
    Xc:    800,
    Yt:    40,
    Yc:    145,
    S12:   73,
    S23:   45,
    tply:  0.25,
    rho:   2000,
    source: "WWFE Test Case 1 — Hinton & Soden, Composites Sci. Tech. 1998"
  },

  "E-Glass/Epoxy (Woven)": {
    E1:    25,
    E2:    25,
    G12:   4.0,
    nu12:  0.17,
    Xt:    440,
    Xc:    425,
    Yt:    440,
    Yc:    425,
    S12:   40,
    S23:   30,
    tply:  0.25,
    rho:   1900,
    source: "WWFE Benchmark — Hinton, Kaddour & Soden 2004"
  },

  // ── Aramid / Epoxy ──────────────────────────────────────────────────────────
  "Kevlar-49/Epoxy": {
    E1:    76,
    E2:    5.5,
    G12:   2.1,
    nu12:  0.34,
    Xt:    1400,
    Xc:    235,
    Yt:    12,
    Yc:    53,
    S12:   34,
    S23:   20,
    tply:  0.125,
    rho:   1380,
    source: "MIL-HDBK-17 / Daniel & Ishai, Table A.4"
  },

  // ── Boron / Epoxy ───────────────────────────────────────────────────────────
  "Boron/Epoxy": {
    E1:    204,
    E2:    18.5,
    G12:   5.59,
    nu12:  0.23,
    Xt:    1260,
    Xc:    2500,
    Yt:    61,
    Yc:    202,
    S12:   67,
    S23:   40,
    tply:  0.1346,
    rho:   2000,
    source: "Daniel & Ishai, Engineering Mechanics of Composite Materials, Table A.4"
  },

  // ── Custom (editable) ───────────────────────────────────────────────────────
  "Custom": {
    E1:    140,
    E2:    10,
    G12:   5.0,
    nu12:  0.30,
    Xt:    1500,
    Xc:    1500,
    Yt:    40,
    Yc:    246,
    S12:   68,
    S23:   40,
    tply:  0.125,
    rho:   1600,
    source: ""
  }

};
