export const flashcards = [
  // ============================================================
  // TOPIC 1: ATOMS (15 cards)
  // ============================================================

  // --- electron-config ---
  {
    id: 'fc-atoms-001',
    topicId: 'atoms',
    subtopicId: 'electron-config',
    front: 'What are the four quantum numbers and what does each describe?',
    back: 'n = principal (energy level/shell), l = angular momentum (subshell shape: s,p,d,f), m_l = magnetic (orbital orientation), m_s = spin (+1/2 or -1/2). Together they uniquely describe every electron in an atom.',
  },
  {
    id: 'fc-atoms-002',
    topicId: 'atoms',
    subtopicId: 'electron-config',
    front: 'Write the electron configuration for calcium (Ca, Z = 20).',
    back: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Calcium fills the 4s subshell before 3d because 4s is lower in energy for elements in this region of the periodic table.',
  },
  {
    id: 'fc-atoms-003',
    topicId: 'atoms',
    subtopicId: 'electron-config',
    front: 'State the Aufbau principle, Hund\'s rule, and the Pauli exclusion principle.',
    back: 'Aufbau: electrons fill orbitals from lowest to highest energy. Hund\'s rule: electrons occupy all orbitals in a subshell singly (same spin) before pairing. Pauli exclusion: no two electrons in an atom can have the same four quantum numbers.',
  },
  {
    id: 'fc-atoms-004',
    topicId: 'atoms',
    subtopicId: 'electron-config',
    front: 'How many electrons can each subshell hold? (s, p, d, f)',
    back: 's = 2, p = 6, d = 10, f = 14. Each orbital holds 2 electrons (opposite spins). The number of orbitals per subshell is 1, 3, 5, 7 respectively.',
  },

  // --- isotopes ---
  {
    id: 'fc-atoms-005',
    topicId: 'atoms',
    subtopicId: 'isotopes',
    front: 'What are isotopes? Give an example.',
    back: 'Isotopes are atoms of the same element (same number of protons) but with different numbers of neutrons. Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n). They have identical chemical properties but different masses.',
  },
  {
    id: 'fc-atoms-006',
    topicId: 'atoms',
    subtopicId: 'isotopes',
    front: 'How do you calculate the relative atomic mass of an element from its isotopes?',
    back: 'Relative atomic mass = sum of (isotope mass x fractional abundance) for each isotope. Example: if Cl-35 is 75% and Cl-37 is 25%, then Ar = (35 x 0.75) + (37 x 0.25) = 35.5.',
  },
  {
    id: 'fc-atoms-007',
    topicId: 'atoms',
    subtopicId: 'isotopes',
    front: 'What is the difference between mass number (A) and atomic number (Z)?',
    back: 'Atomic number (Z) = number of protons (defines the element). Mass number (A) = protons + neutrons. Number of neutrons = A - Z. Isotopes share the same Z but have different A values.',
  },

  // --- nuclear-decay ---
  {
    id: 'fc-atoms-008',
    topicId: 'atoms',
    subtopicId: 'nuclear-decay',
    front: 'Describe alpha (a) decay. What is emitted and how do Z and A change?',
    back: 'An alpha particle (a helium-4 nucleus: 2 protons + 2 neutrons) is emitted. Z decreases by 2, A decreases by 4. Example: U-238 -> Th-234 + He-4. Alpha particles are the least penetrating but most ionising.',
  },
  {
    id: 'fc-atoms-009',
    topicId: 'atoms',
    subtopicId: 'nuclear-decay',
    front: 'Describe beta-minus (b-) decay. What happens at the nuclear level?',
    back: 'A neutron converts into a proton, emitting an electron (beta particle) and an antineutrino. Z increases by 1, A stays the same. Example: C-14 -> N-14 + e- + antineutrino. More penetrating than alpha but less ionising.',
  },
  {
    id: 'fc-atoms-010',
    topicId: 'atoms',
    subtopicId: 'nuclear-decay',
    front: 'What is half-life? If a sample has a half-life of 10 days and starts with 800 g, how much remains after 30 days?',
    back: 'Half-life is the time for half the radioactive nuclei in a sample to decay. After 30 days = 3 half-lives: 800 -> 400 -> 200 -> 100 g remaining.',
  },
  {
    id: 'fc-atoms-011',
    topicId: 'atoms',
    subtopicId: 'nuclear-decay',
    front: 'Compare the penetrating power and ionising ability of alpha, beta, and gamma radiation.',
    back: 'Alpha: stopped by paper, highest ionising. Beta: stopped by aluminium (~few mm), moderate ionising. Gamma: stopped by thick lead/concrete, lowest ionising. Penetrating power and ionising ability are inversely related.',
  },

  // --- nuclear-reactions ---
  {
    id: 'fc-atoms-012',
    topicId: 'atoms',
    subtopicId: 'nuclear-reactions',
    front: 'What is the difference between nuclear fission and nuclear fusion?',
    back: 'Fission: a heavy nucleus splits into lighter nuclei, releasing energy (e.g. U-235 in reactors). Fusion: light nuclei combine to form a heavier nucleus, releasing energy (e.g. H nuclei fusing in the Sun). Both release energy due to mass defect (E = mc\u00B2).',
  },
  {
    id: 'fc-atoms-013',
    topicId: 'atoms',
    subtopicId: 'nuclear-reactions',
    front: 'What does E = mc\u00B2 mean and how does it relate to nuclear reactions?',
    back: 'Energy equals mass times the speed of light squared. In nuclear reactions, a small amount of mass (mass defect) is converted into a large amount of energy. This explains why nuclear reactions release millions of times more energy than chemical reactions.',
  },
  {
    id: 'fc-atoms-014',
    topicId: 'atoms',
    subtopicId: 'nuclear-reactions',
    front: 'What is a chain reaction in nuclear fission?',
    back: 'When a U-235 nucleus absorbs a neutron and splits, it releases 2-3 more neutrons. These can cause further fission events, creating a self-sustaining chain reaction. In reactors, control rods absorb excess neutrons to regulate the rate.',
  },
  {
    id: 'fc-atoms-015',
    topicId: 'atoms',
    subtopicId: 'nuclear-reactions',
    front: 'Why is fusion difficult to achieve on Earth despite being the energy source of stars?',
    back: 'Fusion requires extremely high temperatures (~100 million degrees) to overcome the electrostatic repulsion between positively charged nuclei. Containing plasma at these temperatures is a major engineering challenge (no material container can withstand it).',
  },

  // ============================================================
  // TOPIC 2: MOTION (16 cards)
  // ============================================================

  // --- scalars-vectors ---
  {
    id: 'fc-motion-001',
    topicId: 'motion',
    subtopicId: 'scalars-vectors',
    front: 'What is the difference between a scalar and a vector quantity?',
    back: 'Scalar: has magnitude only (e.g. speed, mass, distance, energy, time, temperature). Vector: has both magnitude and direction (e.g. velocity, acceleration, displacement, force, momentum).',
  },
  {
    id: 'fc-motion-002',
    topicId: 'motion',
    subtopicId: 'scalars-vectors',
    front: 'What is the difference between distance and displacement?',
    back: 'Distance is a scalar - the total path length travelled. Displacement is a vector - the straight-line distance from start to finish with a direction. A person walking 3 m east then 3 m west travels 6 m distance but has 0 m displacement.',
  },
  {
    id: 'fc-motion-003',
    topicId: 'motion',
    subtopicId: 'scalars-vectors',
    front: 'What is the difference between speed and velocity?',
    back: 'Speed is a scalar (how fast, no direction). Velocity is a vector (speed + direction). An object moving in a circle at constant speed has changing velocity because its direction changes continuously.',
  },

  // --- kinematics ---
  {
    id: 'fc-motion-004',
    topicId: 'motion',
    subtopicId: 'kinematics',
    front: 'List the four kinematic (SUVAT) equations for uniformly accelerated motion.',
    back: 'v = u + at\ns = ut + 1/2 at\u00B2\nv\u00B2 = u\u00B2 + 2as\ns = 1/2(u + v)t\nWhere: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time.',
  },
  {
    id: 'fc-motion-005',
    topicId: 'motion',
    subtopicId: 'kinematics',
    front: 'A car accelerates from rest at 3 m/s\u00B2 for 5 seconds. What is its final velocity and how far does it travel?',
    back: 'v = u + at = 0 + 3(5) = 15 m/s. s = ut + 1/2 at\u00B2 = 0 + 1/2(3)(25) = 37.5 m. Always check units and identify which SUVAT equation has the right variables.',
  },
  {
    id: 'fc-motion-006',
    topicId: 'motion',
    subtopicId: 'kinematics',
    front: 'What is the acceleration due to gravity near Earth\'s surface and what assumptions do we make?',
    back: 'g \u2248 9.8 m/s\u00B2 (often rounded to 10 m/s\u00B2) directed downward. We assume: no air resistance, g is constant over the height involved, and the object is near Earth\'s surface.',
  },

  // --- motion-graphs ---
  {
    id: 'fc-motion-007',
    topicId: 'motion',
    subtopicId: 'motion-graphs',
    front: 'On a displacement-time graph, what does the gradient represent? What about the area under the curve?',
    back: 'The gradient (slope) of a displacement-time graph gives velocity. A straight line = constant velocity, a curve = changing velocity. The area under a displacement-time graph has no standard physical meaning.',
  },
  {
    id: 'fc-motion-008',
    topicId: 'motion',
    subtopicId: 'motion-graphs',
    front: 'On a velocity-time graph, what does the gradient represent and what does the area under the curve represent?',
    back: 'Gradient = acceleration (positive slope = speeding up, negative = slowing down). Area under the curve = displacement. This is the most information-rich motion graph - learn to read it well!',
  },
  {
    id: 'fc-motion-009',
    topicId: 'motion',
    subtopicId: 'motion-graphs',
    front: 'How does a velocity-time graph look for an object thrown vertically upward (ignoring air resistance)?',
    back: 'A straight line with negative gradient (slope = -g = -9.8 m/s\u00B2). Starts with positive velocity (upward), passes through zero at the peak, then becomes negative (downward). The gradient is constant throughout because g is constant.',
  },

  // --- newtons-laws ---
  {
    id: 'fc-motion-010',
    topicId: 'motion',
    subtopicId: 'newtons-laws',
    front: 'State Newton\'s First Law of Motion.',
    back: 'An object remains at rest or in uniform motion in a straight line unless acted upon by a net (unbalanced) external force. This is also called the law of inertia. Key idea: no net force means no change in velocity.',
  },
  {
    id: 'fc-motion-011',
    topicId: 'motion',
    subtopicId: 'newtons-laws',
    front: 'State Newton\'s Second Law and give its formula.',
    back: 'The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. F_net = ma, where F is in Newtons (N), m in kilograms (kg), a in m/s\u00B2.',
  },
  {
    id: 'fc-motion-012',
    topicId: 'motion',
    subtopicId: 'newtons-laws',
    front: 'State Newton\'s Third Law. Why don\'t action-reaction pairs cancel out?',
    back: 'For every action force there is an equal and opposite reaction force. They don\'t cancel because they act on different objects. Example: you push a wall (action on wall), wall pushes you back (reaction on you). The forces act on different bodies.',
  },
  {
    id: 'fc-motion-013',
    topicId: 'motion',
    subtopicId: 'newtons-laws',
    front: 'A 5 kg box is pushed with 30 N of force across a surface with 10 N of friction. What is the acceleration?',
    back: 'F_net = 30 - 10 = 20 N. a = F_net / m = 20 / 5 = 4 m/s\u00B2. Common mistake: using the applied force instead of the net force. Always subtract friction and other opposing forces first.',
  },

  // --- projectile-motion ---
  {
    id: 'fc-motion-014',
    topicId: 'motion',
    subtopicId: 'projectile-motion',
    front: 'In projectile motion, what happens to horizontal and vertical velocity components (ignoring air resistance)?',
    back: 'Horizontal velocity stays constant (no horizontal force). Vertical velocity changes due to gravity (a = g = 9.8 m/s\u00B2 downward). The two components are independent of each other. This independence is the key principle of projectile motion.',
  },
  {
    id: 'fc-motion-015',
    topicId: 'motion',
    subtopicId: 'projectile-motion',
    front: 'A ball is launched horizontally at 10 m/s from a 20 m high cliff. How long until it hits the ground? (Use g = 10 m/s\u00B2)',
    back: 'Use vertical motion only: s = ut + 1/2 gt\u00B2. Vertical u = 0 (launched horizontally). 20 = 0 + 1/2(10)t\u00B2, so t\u00B2 = 4, t = 2 s. Horizontal distance = 10 x 2 = 20 m. Horizontal and vertical are solved independently.',
  },
  {
    id: 'fc-motion-016',
    topicId: 'motion',
    subtopicId: 'projectile-motion',
    front: 'At what point in its trajectory does a projectile have minimum speed (ignoring air resistance)?',
    back: 'At the highest point. Here the vertical component of velocity is zero, so speed equals just the horizontal component. Common exam trap: speed is not zero at the top (unless launched straight up) because horizontal velocity is maintained.',
  },

  // ============================================================
  // TOPIC 3: CONSERVATION (16 cards)
  // ============================================================

  // --- momentum ---
  {
    id: 'fc-conservation-001',
    topicId: 'conservation',
    subtopicId: 'momentum',
    front: 'What is momentum? Give its formula and units.',
    back: 'Momentum (p) = mass x velocity, p = mv. Units: kg\u00B7m/s (or N\u00B7s). Momentum is a vector quantity - it has both magnitude and direction. Direction matters when solving problems.',
  },
  {
    id: 'fc-conservation-002',
    topicId: 'conservation',
    subtopicId: 'momentum',
    front: 'State the law of conservation of momentum.',
    back: 'In a closed system (no external net force), the total momentum before an event equals the total momentum after. p_total(before) = p_total(after). Applies to collisions, explosions, and any interaction within a closed system.',
  },
  {
    id: 'fc-conservation-003',
    topicId: 'conservation',
    subtopicId: 'momentum',
    front: 'What is impulse and how is it related to momentum?',
    back: 'Impulse (J) = force x time = F\u0394t. Impulse equals the change in momentum: J = \u0394p = mv - mu. Units: N\u00B7s (same as momentum). This explains why airbags work - they increase the collision time, reducing the force for the same change in momentum.',
  },
  {
    id: 'fc-conservation-004',
    topicId: 'conservation',
    subtopicId: 'momentum',
    front: 'A 2 kg ball moving at 5 m/s collides with a stationary 3 kg ball. They stick together. Find the final velocity.',
    back: 'Conservation of momentum: m\u2081u\u2081 + m\u2082u\u2082 = (m\u2081 + m\u2082)v. (2)(5) + (3)(0) = (2+3)v. 10 = 5v, so v = 2 m/s. This is a perfectly inelastic collision (objects stick together).',
  },

  // --- work-energy ---
  {
    id: 'fc-conservation-005',
    topicId: 'conservation',
    subtopicId: 'work-energy',
    front: 'What is work in physics? Give the formula and units.',
    back: 'Work (W) = force x displacement in the direction of the force. W = Fs cos\u03B8, where \u03B8 is the angle between force and displacement. Units: Joules (J). No displacement = no work done. Force perpendicular to motion = no work.',
  },
  {
    id: 'fc-conservation-006',
    topicId: 'conservation',
    subtopicId: 'work-energy',
    front: 'What is kinetic energy? Give its formula.',
    back: 'Kinetic energy is the energy of motion. KE = 1/2 mv\u00B2. Units: Joules (J). Key: KE depends on v\u00B2, so doubling speed quadruples KE. This is why car stopping distances increase dramatically at higher speeds.',
  },
  {
    id: 'fc-conservation-007',
    topicId: 'conservation',
    subtopicId: 'work-energy',
    front: 'What is gravitational potential energy? Give its formula.',
    back: 'GPE is energy stored due to an object\'s height in a gravitational field. GPE = mgh, where m = mass (kg), g = 9.8 m/s\u00B2, h = height (m). Units: Joules (J). The reference point for h can be chosen for convenience.',
  },
  {
    id: 'fc-conservation-008',
    topicId: 'conservation',
    subtopicId: 'work-energy',
    front: 'State the work-energy theorem.',
    back: 'The net work done on an object equals its change in kinetic energy. W_net = \u0394KE = 1/2 mv\u00B2 - 1/2 mu\u00B2. This connects force/displacement concepts with energy concepts. Positive net work increases KE; negative net work decreases KE.',
  },

  // --- collisions ---
  {
    id: 'fc-conservation-009',
    topicId: 'conservation',
    subtopicId: 'collisions',
    front: 'What is the difference between elastic and inelastic collisions?',
    back: 'Elastic: both momentum AND kinetic energy are conserved (e.g. billiard balls, ideal). Inelastic: momentum is conserved but kinetic energy is NOT (some KE converted to heat, sound, deformation). Perfectly inelastic: objects stick together (maximum KE loss).',
  },
  {
    id: 'fc-conservation-010',
    topicId: 'conservation',
    subtopicId: 'collisions',
    front: 'Is momentum conserved in an explosion? Is kinetic energy conserved?',
    back: 'Yes, momentum is conserved (total momentum before = total after, often both are zero). No, kinetic energy is NOT conserved - it increases because chemical/stored energy is converted to kinetic energy. Explosions are the reverse of perfectly inelastic collisions.',
  },
  {
    id: 'fc-conservation-011',
    topicId: 'conservation',
    subtopicId: 'collisions',
    front: 'Two objects of equal mass collide head-on elastically. What happens?',
    back: 'They exchange velocities. If one is stationary and the other moving, the moving one stops and the stationary one moves off at the first object\'s original speed. This is a key result of solving both conservation of momentum and conservation of KE simultaneously.',
  },
  {
    id: 'fc-conservation-012',
    topicId: 'conservation',
    subtopicId: 'collisions',
    front: 'Common exam trap: a bullet embeds in a wooden block on a frictionless surface. What type of collision is this?',
    back: 'Perfectly inelastic (they stick together). Use conservation of momentum to find the block+bullet velocity after impact: m_bullet x v_bullet = (m_bullet + m_block) x v_final. Most KE is lost as heat and deformation. Students often incorrectly try to conserve KE here.',
  },

  // --- energy-conservation ---
  {
    id: 'fc-conservation-013',
    topicId: 'conservation',
    subtopicId: 'energy-conservation',
    front: 'State the law of conservation of energy.',
    back: 'Energy cannot be created or destroyed, only transformed from one form to another or transferred from one object to another. The total energy of a closed system remains constant.',
  },
  {
    id: 'fc-conservation-014',
    topicId: 'conservation',
    subtopicId: 'energy-conservation',
    front: 'A 2 kg ball is dropped from 5 m. What is its speed just before hitting the ground? (Use g = 10 m/s\u00B2, ignore air resistance)',
    back: 'Using conservation of energy: GPE at top = KE at bottom. mgh = 1/2 mv\u00B2. Mass cancels: gh = 1/2 v\u00B2. v\u00B2 = 2gh = 2(10)(5) = 100, so v = 10 m/s. Energy methods often avoid needing time or acceleration.',
  },
  {
    id: 'fc-conservation-015',
    topicId: 'conservation',
    subtopicId: 'energy-conservation',
    front: 'What is power? Give the formula and units.',
    back: 'Power is the rate of doing work or the rate of energy transfer. P = W/t = E/t. Units: Watts (W), where 1 W = 1 J/s. Also: P = Fv (force x velocity) for an object moving at constant velocity.',
  },
  {
    id: 'fc-conservation-016',
    topicId: 'conservation',
    subtopicId: 'energy-conservation',
    front: 'What is efficiency? Why can it never be 100% in practice?',
    back: 'Efficiency = (useful energy output / total energy input) x 100%. In practice, some energy is always lost to the surroundings as heat (due to friction, air resistance, electrical resistance, sound, etc.), so efficiency < 100%. Energy is conserved but not all is useful.',
  },

  // ============================================================
  // TOPIC 4: CHEMICAL STRUCTURES (16 cards)
  // ============================================================

  // --- bonding ---
  {
    id: 'fc-chemical-structures-001',
    topicId: 'chemical-structures',
    subtopicId: 'bonding',
    front: 'What is an ionic bond and how does it form?',
    back: 'An ionic bond forms when electrons are transferred from a metal to a non-metal. The metal loses electrons to become a positive cation; the non-metal gains electrons to become a negative anion. The electrostatic attraction between oppositely charged ions forms the bond. Example: NaCl.',
  },
  {
    id: 'fc-chemical-structures-002',
    topicId: 'chemical-structures',
    subtopicId: 'bonding',
    front: 'What is a covalent bond and how does it form?',
    back: 'A covalent bond forms when two non-metal atoms share one or more pairs of electrons. Each atom contributes one electron to each shared pair. This allows both atoms to achieve a stable electron configuration. Example: H\u2082O, CO\u2082, O\u2082.',
  },
  {
    id: 'fc-chemical-structures-003',
    topicId: 'chemical-structures',
    subtopicId: 'bonding',
    front: 'What is metallic bonding?',
    back: 'In metallic bonding, metal atoms release their valence electrons into a shared \"sea of delocalised electrons\". The positive metal cations are held together by attraction to this electron sea. This explains metallic properties: conductivity, malleability, ductility, and lustre.',
  },
  {
    id: 'fc-chemical-structures-004',
    topicId: 'chemical-structures',
    subtopicId: 'bonding',
    front: 'Compare properties of ionic and covalent compounds.',
    back: 'Ionic: high melting/boiling points, form crystal lattices, conduct electricity when molten/dissolved (mobile ions), solid at room temp, soluble in water. Covalent (simple molecular): low melting/boiling points, do not conduct electricity, often gases/liquids at room temp.',
  },

  // --- lewis-structures ---
  {
    id: 'fc-chemical-structures-005',
    topicId: 'chemical-structures',
    subtopicId: 'lewis-structures',
    front: 'How do you draw a Lewis dot structure?',
    back: '1. Count total valence electrons. 2. Place least electronegative atom in centre. 3. Draw single bonds to surrounding atoms (2e\u207B each). 4. Complete octets on outer atoms with lone pairs. 5. If not enough electrons, form double/triple bonds. 6. Check all octets (H needs only 2).',
  },
  {
    id: 'fc-chemical-structures-006',
    topicId: 'chemical-structures',
    subtopicId: 'lewis-structures',
    front: 'Draw the Lewis structure for CO\u2082.',
    back: 'O=C=O. Carbon is central with double bonds to each oxygen. Total valence electrons: 4 + 6 + 6 = 16. Each O has 2 lone pairs. All atoms satisfy the octet rule. Linear shape (180\u00B0 bond angle) due to 2 regions of electron density.',
  },
  {
    id: 'fc-chemical-structures-007',
    topicId: 'chemical-structures',
    subtopicId: 'lewis-structures',
    front: 'What is the octet rule and what are its common exceptions?',
    back: 'Atoms tend to gain, lose, or share electrons to achieve 8 electrons in their valence shell (like noble gases). Exceptions: H only needs 2 (duet). Elements in period 3+ can have expanded octets (e.g. SF\u2086 has 12 electrons around S). Some molecules have odd electrons (e.g. NO).',
  },
  {
    id: 'fc-chemical-structures-008',
    topicId: 'chemical-structures',
    subtopicId: 'lewis-structures',
    front: 'What is the difference between a bonding pair and a lone pair?',
    back: 'Bonding pair: a pair of electrons shared between two atoms in a covalent bond. Lone pair: a pair of valence electrons not involved in bonding, belonging to one atom. Lone pairs take up more space than bonding pairs and affect molecular shape.',
  },

  // --- intermolecular ---
  {
    id: 'fc-chemical-structures-009',
    topicId: 'chemical-structures',
    subtopicId: 'intermolecular',
    front: 'List the three types of intermolecular forces in order of increasing strength.',
    back: '1. Dispersion forces (London forces) - weakest, present in ALL molecules. 2. Dipole-dipole forces - between polar molecules. 3. Hydrogen bonding - strongest intermolecular force, occurs when H is bonded to N, O, or F and attracted to a lone pair on another N, O, or F.',
  },
  {
    id: 'fc-chemical-structures-010',
    topicId: 'chemical-structures',
    subtopicId: 'intermolecular',
    front: 'Why does water (H\u2082O) have an unusually high boiling point for its molecular mass?',
    back: 'Water has strong hydrogen bonds between molecules (O-H...O). These require significant energy to break, raising the boiling point. Without hydrogen bonding, water would be a gas at room temperature (predicted BP around -80\u00B0C based on molecular mass trends).',
  },
  {
    id: 'fc-chemical-structures-011',
    topicId: 'chemical-structures',
    subtopicId: 'intermolecular',
    front: 'What is the difference between intermolecular forces and intramolecular bonds?',
    back: 'Intramolecular bonds hold atoms together WITHIN a molecule (ionic, covalent, metallic) - these are strong. Intermolecular forces act BETWEEN molecules (dispersion, dipole-dipole, H-bonding) - these are much weaker. Boiling only breaks intermolecular forces, not covalent bonds.',
  },
  {
    id: 'fc-chemical-structures-012',
    topicId: 'chemical-structures',
    subtopicId: 'intermolecular',
    front: 'Common exam trap: When water boils, what bonds are broken?',
    back: 'Only the intermolecular forces (hydrogen bonds) between water molecules are broken. The covalent O-H bonds within water molecules are NOT broken. Students often incorrectly say covalent bonds break during boiling. Covalent bonds break only in chemical reactions, not phase changes.',
  },

  // --- periodic-trends ---
  {
    id: 'fc-chemical-structures-013',
    topicId: 'chemical-structures',
    subtopicId: 'periodic-trends',
    front: 'How does electronegativity trend across a period and down a group?',
    back: 'Electronegativity increases across a period (left to right) because nuclear charge increases with similar shielding. It decreases down a group because atomic radius increases and valence electrons are further from the nucleus. Fluorine is the most electronegative element.',
  },
  {
    id: 'fc-chemical-structures-014',
    topicId: 'chemical-structures',
    subtopicId: 'periodic-trends',
    front: 'How does atomic radius trend across a period and down a group? Explain why.',
    back: 'Atomic radius decreases across a period (more protons pull electrons closer, same number of shells). Increases down a group (more electron shells added). These trends are due to the balance between nuclear charge (protons) and electron shielding.',
  },
  {
    id: 'fc-chemical-structures-015',
    topicId: 'chemical-structures',
    subtopicId: 'periodic-trends',
    front: 'How does ionisation energy trend across a period and down a group?',
    back: 'First ionisation energy generally increases across a period (stronger nuclear attraction, harder to remove electron) and decreases down a group (valence electrons are further from nucleus, easier to remove). Noble gases have the highest IE in each period.',
  },
  {
    id: 'fc-chemical-structures-016',
    topicId: 'chemical-structures',
    subtopicId: 'periodic-trends',
    front: 'Why are metals good conductors of electricity and heat?',
    back: 'Metals have delocalised (free) electrons in their structure. These electrons can flow when a voltage is applied (electrical conductivity) and can transfer kinetic energy rapidly through the structure (thermal conductivity). This is a direct result of metallic bonding.',
  },

  // ============================================================
  // TOPIC 5: REACTIONS (16 cards)
  // ============================================================

  // --- reaction-types ---
  {
    id: 'fc-reactions-001',
    topicId: 'reactions',
    subtopicId: 'reaction-types',
    front: 'List and define the five main types of chemical reactions.',
    back: '1. Synthesis (combination): A + B -> AB. 2. Decomposition: AB -> A + B. 3. Single displacement: A + BC -> AC + B. 4. Double displacement (metathesis): AB + CD -> AD + CB. 5. Combustion: fuel + O\u2082 -> CO\u2082 + H\u2082O (+ energy).',
  },
  {
    id: 'fc-reactions-002',
    topicId: 'reactions',
    subtopicId: 'reaction-types',
    front: 'What is an acid-base neutralisation reaction? Give a general equation.',
    back: 'An acid reacts with a base to produce a salt and water. Acid + Base -> Salt + Water. Example: HCl + NaOH -> NaCl + H\u2082O. The H\u207A from the acid combines with OH\u207B from the base to form water.',
  },
  {
    id: 'fc-reactions-003',
    topicId: 'reactions',
    subtopicId: 'reaction-types',
    front: 'What is a combustion reaction? What is the difference between complete and incomplete combustion?',
    back: 'Combustion is a reaction with oxygen releasing heat/light. Complete combustion (excess O\u2082): produces CO\u2082 + H\u2082O. Incomplete combustion (limited O\u2082): produces CO (carbon monoxide, toxic) or C (soot) + H\u2082O. Incomplete combustion releases less energy.',
  },

  // --- balancing ---
  {
    id: 'fc-reactions-004',
    topicId: 'reactions',
    subtopicId: 'balancing',
    front: 'Why must chemical equations be balanced?',
    back: 'The law of conservation of mass: atoms cannot be created or destroyed in a chemical reaction. The number of each type of atom must be equal on both sides of the equation. We adjust coefficients (not subscripts) to balance.',
  },
  {
    id: 'fc-reactions-005',
    topicId: 'reactions',
    subtopicId: 'balancing',
    front: 'Balance this equation: Fe + O\u2082 -> Fe\u2082O\u2083',
    back: '4Fe + 3O\u2082 -> 2Fe\u2082O\u2083. Check: Fe: 4 = 2x2 = 4. O: 3x2 = 6 = 2x3 = 6. Tip: when an element appears in an odd number on one side, try doubling the coefficient on that side first.',
  },
  {
    id: 'fc-reactions-006',
    topicId: 'reactions',
    subtopicId: 'balancing',
    front: 'Balance: C\u2083H\u2088 + O\u2082 -> CO\u2082 + H\u2082O',
    back: 'C\u2083H\u2088 + 5O\u2082 -> 3CO\u2082 + 4H\u2082O. Steps: balance C first (3 CO\u2082), then H (4 H\u2082O gives 8 H), then O last (3x2 + 4x1 = 10 O needed, so 5O\u2082). Always balance O last in combustion reactions.',
  },

  // --- mole-concept ---
  {
    id: 'fc-reactions-007',
    topicId: 'reactions',
    subtopicId: 'mole-concept',
    front: 'What is a mole? What is Avogadro\'s number?',
    back: 'A mole is 6.022 x 10\u00B2\u00B3 particles (atoms, molecules, ions, etc.). This is Avogadro\'s number (N_A). One mole of any substance contains this many particles. It\'s the link between the atomic scale and the macroscopic scale.',
  },
  {
    id: 'fc-reactions-008',
    topicId: 'reactions',
    subtopicId: 'mole-concept',
    front: 'How do you calculate the number of moles from mass?',
    back: 'n = m / M, where n = number of moles, m = mass in grams (g), M = molar mass in g/mol (numerically equal to relative atomic/molecular mass). Example: 36 g of water (M = 18 g/mol): n = 36/18 = 2 mol.',
  },
  {
    id: 'fc-reactions-009',
    topicId: 'reactions',
    subtopicId: 'mole-concept',
    front: 'What is molar volume? How many litres does 1 mole of any gas occupy at STP?',
    back: 'At standard temperature and pressure (STP: 0\u00B0C, 100 kPa), 1 mole of any ideal gas occupies 22.7 L. Formula: V = n x V_m, where V_m = 22.7 L/mol at STP. This applies to all gases regardless of identity (Avogadro\'s law).',
  },

  // --- stoichiometry ---
  {
    id: 'fc-reactions-010',
    topicId: 'reactions',
    subtopicId: 'stoichiometry',
    front: 'What is stoichiometry and what are the general steps to solve a stoichiometry problem?',
    back: '1. Write and balance the equation. 2. Convert given quantity to moles (using n=m/M, n=V/V_m, or n=cV). 3. Use mole ratio from balanced equation to find moles of desired substance. 4. Convert moles to required units (g, L, etc.).',
  },
  {
    id: 'fc-reactions-011',
    topicId: 'reactions',
    subtopicId: 'stoichiometry',
    front: 'In the reaction 2H\u2082 + O\u2082 -> 2H\u2082O, how many grams of water are produced from 4 g of H\u2082?',
    back: 'n(H\u2082) = 4/2 = 2 mol. Mole ratio H\u2082:H\u2082O = 2:2 = 1:1, so n(H\u2082O) = 2 mol. m(H\u2082O) = 2 x 18 = 36 g. Always go through moles - never directly convert grams to grams.',
  },
  {
    id: 'fc-reactions-012',
    topicId: 'reactions',
    subtopicId: 'stoichiometry',
    front: 'What is a limiting reagent?',
    back: 'The reactant that is completely consumed first in a reaction, determining the maximum amount of product formed. The other reactant(s) are in excess. To find it: calculate moles of each reactant, divide by their coefficients - the smallest value is the limiting reagent.',
  },
  {
    id: 'fc-reactions-013',
    topicId: 'reactions',
    subtopicId: 'stoichiometry',
    front: 'What is percentage yield and why is it usually less than 100%?',
    back: '% yield = (actual yield / theoretical yield) x 100%. It\'s usually < 100% due to: incomplete reactions, side reactions, loss during transfer/purification, or equilibrium not favouring products. Theoretical yield is calculated from stoichiometry assuming 100% conversion.',
  },

  // --- concentration ---
  {
    id: 'fc-reactions-014',
    topicId: 'reactions',
    subtopicId: 'concentration',
    front: 'What is concentration (molarity)? Give the formula and units.',
    back: 'Concentration (c) = moles of solute / volume of solution. c = n / V, where n is in mol and V is in litres (L). Units: mol/L (also written as M or mol L\u207B\u00B9). Always convert mL to L by dividing by 1000.',
  },
  {
    id: 'fc-reactions-015',
    topicId: 'reactions',
    subtopicId: 'concentration',
    front: 'What is a dilution and what formula relates the concentrations before and after?',
    back: 'Dilution is adding solvent to reduce concentration. The amount of solute stays the same: c\u2081V\u2081 = c\u2082V\u2082, where c\u2081, V\u2081 = initial concentration and volume, c\u2082, V\u2082 = final. Example: diluting 50 mL of 2 M to 0.5 M: V\u2082 = (2 x 0.05)/0.5 = 0.2 L = 200 mL.',
  },
  {
    id: 'fc-reactions-016',
    topicId: 'reactions',
    subtopicId: 'concentration',
    front: 'If 25.0 mL of 0.10 mol/L NaOH neutralises 20.0 mL of HCl, what is the concentration of HCl?',
    back: 'NaOH + HCl -> NaCl + H\u2082O (1:1 ratio). n(NaOH) = 0.10 x 0.025 = 0.0025 mol. n(HCl) = 0.0025 mol (1:1). c(HCl) = 0.0025 / 0.020 = 0.125 mol/L. Always convert mL to L and use the mole ratio from the balanced equation.',
  },
];
