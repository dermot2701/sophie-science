import { useState } from 'react'
import { FileText, ExternalLink, Download } from 'lucide-react'

const papers = [
  {
    year: 2025,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/7799/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202025.pdf',
    solutionUrl: null,
  },
  {
    year: 2024,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/5881/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202024.pdf',
    solutionUrl: null,
  },
  {
    year: 2023,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4968/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202023.pdf',
    solutionUrl: null,
  },
  {
    year: 2022,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4661/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202022.pdf',
    solutionUrl: null,
  },
  {
    year: 2021,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4657/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202021.pdf',
    solutionUrl: null,
  },
  {
    year: 2020,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4655/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202020.pdf',
    solutionUrl: null,
  },
  {
    year: 2019,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4653/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202019.pdf',
    solutionUrl: null,
  },
]

const tuscSolutions = 'https://tusctas.wordpress.com/physical-sciences/'

export default function PaperLibrary() {
  const [selectedYear, setSelectedYear] = useState(null)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Past Papers</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Official TASC exam papers (2019-2025) for Physical Sciences PSC315118
        </p>
      </div>

      {/* Solutions link */}
      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800 p-4">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Solutions for all past papers (1996-2024) are available from TUSC.
        </p>
        <a
          href={tuscSolutions}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-1"
        >
          Visit TUSC for solutions <ExternalLink size={14} />
        </a>
      </div>

      {/* Paper list */}
      <div className="grid gap-3">
        {papers.map(paper => (
          <div key={paper.year}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/30">
                  <FileText size={20} className="text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{paper.year} Exam Paper</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Physical Sciences PSC315118</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={paper.examUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-lg text-xs font-medium hover:bg-violet-100 dark:hover:bg-violet-950/50 transition-colors"
                >
                  <ExternalLink size={14} /> View PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Study tips for past papers */}
      <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 p-4">
        <h3 className="font-semibold text-sm text-amber-800 dark:text-amber-300 mb-2">How to use past papers effectively</h3>
        <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1">
          <li>1. Start with the most recent paper (2025) to see current exam style</li>
          <li>2. Work under timed conditions: 3 hours for the full paper</li>
          <li>3. Mark your answers using the TUSC solutions</li>
          <li>4. Identify weak topics and focus your revision on those areas</li>
          <li>5. Redo papers you scored poorly on after revising those topics</li>
        </ul>
      </div>

      {/* Video resource */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="font-semibold text-sm mb-2">Video Resources</h3>
        <a
          href="https://youtu.be/UKJ-wylgbiI?si=svZceqGUEma0fWH9"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 hover:underline"
        >
          Physics Course Overview (HSC) <ExternalLink size={14} />
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          NSW HSC Physics overview — covers overlapping topics like projectile motion, electromagnetism, and nuclear physics
        </p>
      </div>
    </div>
  )
}
