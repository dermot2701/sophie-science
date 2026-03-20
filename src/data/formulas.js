export const formulas = [
  // === MOTION & FORCE ===
  {
    id: 'f-kin-1', topicId: 'motion', category: 'Kinematics',
    name: 'Velocity-Time', formula: 'v = u + at',
    latex: 'v = u + at',
    variables: { v: 'final velocity (m/s)', u: 'initial velocity (m/s)', a: 'acceleration (m/s\u00B2)', t: 'time (s)' },
  },
  {
    id: 'f-kin-2', topicId: 'motion', category: 'Kinematics',
    name: 'Displacement (with time)', formula: 's = ut + \u00BDat\u00B2',
    latex: 's = ut + \\frac{1}{2}at^2',
    variables: { s: 'displacement (m)', u: 'initial velocity (m/s)', a: 'acceleration (m/s\u00B2)', t: 'time (s)' },
  },
  {
    id: 'f-kin-3', topicId: 'motion', category: 'Kinematics',
    name: 'Velocity-Displacement', formula: 'v\u00B2 = u\u00B2 + 2as',
    latex: 'v^2 = u^2 + 2as',
    variables: { v: 'final velocity (m/s)', u: 'initial velocity (m/s)', a: 'acceleration (m/s\u00B2)', s: 'displacement (m)' },
  },
  {
    id: 'f-kin-4', topicId: 'motion', category: 'Kinematics',
    name: 'Average Velocity', formula: 's = \u00BD(u + v)t',
    latex: 's = \\frac{1}{2}(u + v)t',
    variables: { s: 'displacement (m)', u: 'initial velocity (m/s)', v: 'final velocity (m/s)', t: 'time (s)' },
  },
  {
    id: 'f-newton-1', topicId: 'motion', category: "Newton's Laws",
    name: "Newton's Second Law", formula: 'F = ma',
    latex: 'F_{net} = ma',
    variables: { 'F_net': 'net force (N)', m: 'mass (kg)', a: 'acceleration (m/s\u00B2)' },
  },
  {
    id: 'f-weight', topicId: 'motion', category: "Newton's Laws",
    name: 'Weight', formula: 'W = mg',
    latex: 'W = mg',
    variables: { W: 'weight (N)', m: 'mass (kg)', g: 'acceleration due to gravity (m/s\u00B2)' },
  },

  // === CONSERVATION LAWS ===
  {
    id: 'f-mom-1', topicId: 'conservation', category: 'Momentum',
    name: 'Momentum', formula: 'p = mv',
    latex: 'p = mv',
    variables: { p: 'momentum (kg m/s)', m: 'mass (kg)', v: 'velocity (m/s)' },
  },
  {
    id: 'f-imp-1', topicId: 'conservation', category: 'Momentum',
    name: 'Impulse', formula: 'J = F\u0394t = \u0394p',
    latex: 'J = F\\Delta t = \\Delta p',
    variables: { J: 'impulse (N s)', F: 'force (N)', '\u0394t': 'time interval (s)', '\u0394p': 'change in momentum (kg m/s)' },
  },
  {
    id: 'f-ke-1', topicId: 'conservation', category: 'Energy',
    name: 'Kinetic Energy', formula: 'E_k = \u00BDmv\u00B2',
    latex: 'E_k = \\frac{1}{2}mv^2',
    variables: { 'E_k': 'kinetic energy (J)', m: 'mass (kg)', v: 'velocity (m/s)' },
  },
  {
    id: 'f-pe-1', topicId: 'conservation', category: 'Energy',
    name: 'Gravitational Potential Energy', formula: 'E_p = mgh',
    latex: 'E_p = mgh',
    variables: { 'E_p': 'potential energy (J)', m: 'mass (kg)', g: 'gravity (m/s\u00B2)', h: 'height (m)' },
  },
  {
    id: 'f-work-1', topicId: 'conservation', category: 'Energy',
    name: 'Work', formula: 'W = Fs cos\u03B8',
    latex: 'W = Fs\\cos\\theta',
    variables: { W: 'work (J)', F: 'force (N)', s: 'displacement (m)', '\u03B8': 'angle between F and s' },
  },
  {
    id: 'f-power-1', topicId: 'conservation', category: 'Energy',
    name: 'Power', formula: 'P = W/t',
    latex: 'P = \\frac{W}{t}',
    variables: { P: 'power (W)', W: 'work (J)', t: 'time (s)' },
  },
  {
    id: 'f-power-2', topicId: 'conservation', category: 'Energy',
    name: 'Power (velocity form)', formula: 'P = Fv',
    latex: 'P = Fv',
    variables: { P: 'power (W)', F: 'force (N)', v: 'velocity (m/s)' },
  },
  {
    id: 'f-eff', topicId: 'conservation', category: 'Energy',
    name: 'Efficiency', formula: '\u03B7 = useful output / total input \u00D7 100%',
    latex: '\\eta = \\frac{E_{useful}}{E_{total}} \\times 100\\%',
    variables: { '\u03B7': 'efficiency (%)', 'E_useful': 'useful energy output (J)', 'E_total': 'total energy input (J)' },
  },

  // === ATOMS & NUCLEAR ===
  {
    id: 'f-halflife', topicId: 'atoms', category: 'Nuclear',
    name: 'Radioactive Decay', formula: 'N = N\u2080 \u00D7 (\u00BD)^(t/t\u00BD)',
    latex: 'N = N_0 \\times \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}',
    variables: { N: 'remaining nuclei', 'N\u2080': 'initial nuclei', t: 'time elapsed', 't\u00BD': 'half-life' },
  },
  {
    id: 'f-emc2', topicId: 'atoms', category: 'Nuclear',
    name: 'Mass-Energy Equivalence', formula: 'E = mc\u00B2',
    latex: 'E = mc^2',
    variables: { E: 'energy (J)', m: 'mass (kg)', c: 'speed of light (3.00 \u00D7 10\u2078 m/s)' },
  },

  // === CHEMICAL REACTIONS & STOICHIOMETRY ===
  {
    id: 'f-moles-1', topicId: 'reactions', category: 'Moles',
    name: 'Moles from Mass', formula: 'n = m/M',
    latex: 'n = \\frac{m}{M}',
    variables: { n: 'moles (mol)', m: 'mass (g)', M: 'molar mass (g/mol)' },
  },
  {
    id: 'f-moles-2', topicId: 'reactions', category: 'Moles',
    name: 'Moles from Particles', formula: 'n = N/N_A',
    latex: 'n = \\frac{N}{N_A}',
    variables: { n: 'moles (mol)', N: 'number of particles', 'N_A': "Avogadro's number (6.022 \u00D7 10\u00B2\u00B3)" },
  },
  {
    id: 'f-conc', topicId: 'reactions', category: 'Solutions',
    name: 'Concentration', formula: 'c = n/V',
    latex: 'c = \\frac{n}{V}',
    variables: { c: 'concentration (mol/L)', n: 'moles (mol)', V: 'volume (L)' },
  },
  {
    id: 'f-dilution', topicId: 'reactions', category: 'Solutions',
    name: 'Dilution', formula: 'c\u2081V\u2081 = c\u2082V\u2082',
    latex: 'c_1V_1 = c_2V_2',
    variables: { 'c\u2081': 'initial concentration', 'V\u2081': 'initial volume', 'c\u2082': 'final concentration', 'V\u2082': 'final volume' },
  },
  {
    id: 'f-gas', topicId: 'reactions', category: 'Gases',
    name: 'Molar Volume (STP)', formula: 'V = n \u00D7 22.71',
    latex: 'V = n \\times 22.71',
    variables: { V: 'volume (L)', n: 'moles (mol)', '22.71': 'molar volume at STP (L/mol)' },
  },
  {
    id: 'f-yield', topicId: 'reactions', category: 'Stoichiometry',
    name: 'Percentage Yield', formula: '% yield = (actual/theoretical) \u00D7 100',
    latex: '\\% \\text{yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100',
    variables: {},
  },
]

export const constants = [
  { name: 'Acceleration due to gravity', symbol: 'g', value: '9.80', unit: 'm/s\u00B2' },
  { name: 'Speed of light', symbol: 'c', value: '3.00 \u00D7 10\u2078', unit: 'm/s' },
  { name: 'Elementary charge', symbol: 'e', value: '1.602 \u00D7 10\u207B\u00B9\u2079', unit: 'C' },
  { name: "Avogadro's number", symbol: 'N_A', value: '6.022 \u00D7 10\u00B2\u00B3', unit: 'mol\u207B\u00B9' },
  { name: 'Universal gas constant', symbol: 'R', value: '8.314', unit: 'J mol\u207B\u00B9 K\u207B\u00B9' },
  { name: 'Molar volume at STP', symbol: 'V_m', value: '22.71', unit: 'L/mol' },
  { name: 'Planck\'s constant', symbol: 'h', value: '6.626 \u00D7 10\u207B\u00B3\u2074', unit: 'J s' },
  { name: 'Atomic mass unit', symbol: 'u', value: '1.661 \u00D7 10\u207B\u00B2\u2077', unit: 'kg' },
  { name: 'Mass of electron', symbol: 'm_e', value: '9.109 \u00D7 10\u207B\u00B3\u00B9', unit: 'kg' },
  { name: 'Mass of proton', symbol: 'm_p', value: '1.673 \u00D7 10\u207B\u00B2\u2077', unit: 'kg' },
  { name: 'Mass of neutron', symbol: 'm_n', value: '1.675 \u00D7 10\u207B\u00B2\u2077', unit: 'kg' },
]
