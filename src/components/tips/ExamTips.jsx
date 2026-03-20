import { useState } from 'react'
import { Lightbulb, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Clock, Calculator } from 'lucide-react'

const tips = [
  {
    category: 'SI Units & Significant Figures',
    icon: Calculator,
    color: 'text-blue-500',
    items: [
      {
        title: 'Always use SI units in calculations',
        content: 'Convert all values to SI units before substituting into formulas:\n\n- Distance: metres (m), not cm or km\n- Mass: kilograms (kg), not grams\n- Time: seconds (s), not minutes\n- Force: newtons (N)\n- Energy: joules (J)\n- Temperature: kelvin (K) for gas law calculations',
      },
      {
        title: 'Significant figures',
        content: 'Your answer should have the same number of significant figures as the least precise measurement in the question.\n\n- 3 sig figs is usually appropriate unless told otherwise\n- When in doubt, give your answer to 3 significant figures\n- Don\'t round intermediate calculations — only round the final answer\n- Leading zeros are NOT significant (0.0045 = 2 sig figs)\n- Trailing zeros after a decimal point ARE significant (2.50 = 3 sig figs)',
      },
      {
        title: 'Scientific notation',
        content: 'Use scientific notation for very large or very small numbers:\n\n- 6.022 \u00D7 10\u00B2\u00B3 (not 602200000000000000000000)\n- 1.60 \u00D7 10\u207B\u00B9\u2079 (not 0.00000000000000000016)\n\nEnsure your calculator is in scientific mode for these calculations.',
      },
    ],
  },
  {
    category: 'Answer Structure',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    items: [
      {
        title: 'Show ALL working for calculations',
        content: 'For every calculation question:\n\n1. Write the relevant formula\n2. Identify and list known values with units\n3. Substitute values into the formula\n4. Show the calculation step by step\n5. State the final answer with correct units and sig figs\n\nYou get marks for working even if your final answer is wrong!',
      },
      {
        title: '"Explain" questions need cause and effect',
        content: 'When asked to "explain", you must link cause to effect:\n\n- State the scientific principle or law\n- Apply it to the specific situation\n- Describe the outcome/result\n\nExample: "Explain why the ball accelerates."\n\u2718 "Because of gravity"\n\u2714 "The gravitational force acts downward on the ball (cause). Since there is a net unbalanced force, by Newton\'s Second Law, the ball accelerates in the direction of the net force (effect)."',
      },
      {
        title: '"Compare" questions need both similarities AND differences',
        content: 'When comparing two things:\n\n- Use linking words: "whereas", "while", "both", "however"\n- Be specific — don\'t just say "they are different"\n- Structure: Point about A \u2192 contrasting point about B\n\nExample: "Elastic collisions conserve both momentum and kinetic energy, whereas inelastic collisions conserve momentum but kinetic energy is transformed into other forms such as heat and sound."',
      },
    ],
  },
  {
    category: 'Time Management',
    icon: Clock,
    color: 'text-amber-500',
    items: [
      {
        title: 'Allocate time based on marks',
        content: 'The TASC Physical Sciences exam is 3 hours (180 minutes).\n\nGeneral guide: about 1.5 minutes per mark\n\n- Section A (MCQ, ~20 marks): 30 minutes\n- Section B (Short answer, ~80 marks): 120 minutes\n- Reading & review time: 30 minutes\n\nDon\'t spend too long on any single question — mark it and come back.',
      },
      {
        title: 'Read the whole paper first',
        content: 'Spend the first 10 minutes reading through the entire paper:\n\n- Identify easy questions you can answer quickly\n- Note difficult questions to allocate extra time\n- Check if any questions relate to each other\n- Start with questions you\'re most confident about',
      },
    ],
  },
  {
    category: 'Common Mistakes to Avoid',
    icon: AlertTriangle,
    color: 'text-red-500',
    items: [
      {
        title: 'Don\'t confuse mass and weight',
        content: 'Mass (kg) \u2260 Weight (N)\n\n- Mass is the amount of matter (scalar, measured in kg)\n- Weight is the gravitational force on an object (vector, measured in N)\n- W = mg\n- A 60 kg person has a weight of 60 \u00D7 9.8 = 588 N on Earth',
      },
      {
        title: 'Don\'t confuse speed and velocity',
        content: 'Speed (scalar) \u2260 Velocity (vector)\n\n- Speed: how fast something moves (magnitude only)\n- Velocity: speed + direction\n- A car going around a circular track at constant speed has CHANGING velocity (because direction changes)',
      },
      {
        title: 'Don\'t forget vector directions',
        content: 'Always state direction for vector quantities:\n\n- Velocity: "5 m/s to the right" not just "5 m/s"\n- Force: "20 N downward"\n- Momentum: "15 kg m/s north"\n\nUse a consistent sign convention (e.g., right/up = positive).',
      },
      {
        title: 'Don\'t confuse atoms and ions',
        content: 'An atom is neutral (protons = electrons).\nAn ion has gained or lost electrons:\n\n- Cation (+): lost electrons (fewer electrons than protons)\n- Anion (\u2212): gained electrons (more electrons than protons)\n\nThe number of protons NEVER changes — that would change the element.',
      },
      {
        title: 'Mole calculations: check your units',
        content: 'Common mole formula mix-ups:\n\n- n = m/M (mass must be in grams, M is molar mass in g/mol)\n- c = n/V (volume must be in LITRES, not mL)\n- Don\'t forget to multiply molar mass by subscripts: M(H\u2082O) = 2(1) + 16 = 18 g/mol\n- Always check: does my answer make sense? (Negative moles = something is wrong)',
      },
    ],
  },
]

const criteria = [
  { num: 1, name: 'Communicating', desc: 'Use scientific language, SI units, significant figures, and proper referencing throughout.' },
  { num: 2, name: 'Planning & Managing', desc: 'Plan investigations and manage group work in scientific contexts.' },
  { num: 3, name: 'Communicating Scientific Ideas', desc: 'Represent scientific phenomena using diagrams, graphs, equations, and models.' },
  { num: 4, name: 'Atoms & Nuclear Reactions', desc: 'Apply knowledge of atomic structure, electron configuration, isotopes, and nuclear decay.' },
  { num: 5, name: 'Motion & Force', desc: 'Apply kinematics, Newton\'s laws, and projectile motion to analyse physical situations.' },
  { num: 6, name: 'Conservation Laws', desc: 'Apply conservation of momentum and energy to collisions and energy transformations.' },
  { num: 7, name: 'Chemical Structures', desc: 'Analyse bonding, molecular shape, intermolecular forces, and periodic trends.' },
  { num: 8, name: 'Chemical Reactions', desc: 'Apply stoichiometry, mole calculations, and reaction types to chemical problems.' },
]

export default function ExamTips() {
  const [expanded, setExpanded] = useState({})

  const toggle = (key) => setExpanded(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Exam Tips & Techniques</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">How to maximise your marks in the TASC Physical Sciences exam</p>
      </div>

      {/* Tips sections */}
      {tips.map(section => {
        const SectionIcon = section.icon
        return (
          <div key={section.category}>
            <div className="flex items-center gap-2 mb-3">
              <SectionIcon size={18} className={section.color} />
              <h2 className="text-lg font-semibold">{section.category}</h2>
            </div>
            <div className="space-y-2">
              {section.items.map(item => {
                const key = `${section.category}-${item.title}`
                const isOpen = expanded[key]
                return (
                  <div key={key} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="text-sm font-medium">{item.title}</span>
                      {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-3">
                        <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{item.content}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* TASC Criteria */}
      <div>
        <h2 className="text-lg font-semibold mb-3">TASC Assessment Criteria</h2>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-400 w-16">#</th>
                <th className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-400">Criterion</th>
                <th className="px-4 py-2 text-left font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map(c => (
                <tr key={c.num} className="border-b border-gray-50 dark:border-gray-800/50 last:border-0">
                  <td className="px-4 py-2 font-mono text-gray-400">C{c.num}</td>
                  <td className="px-4 py-2 font-medium">{c.name}</td>
                  <td className="px-4 py-2 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
