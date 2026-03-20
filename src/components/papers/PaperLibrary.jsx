import { useState } from 'react'
import { FileText, ExternalLink, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'

const papers = [
  {
    year: 2025,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/7799/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202025.pdf',
    solutionUrl: null,
    source: 'tasc',
  },
  {
    year: 2024,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/5881/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202024.pdf',
    solutionUrl: 'https://tusctas.wordpress.com/wp-content/uploads/2025/03/physicalsciences2024solutions.pdf',
    source: 'both',
  },
  {
    year: 2023,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4968/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202023.pdf',
    solutionUrl: 'https://tusctas.wordpress.com/wp-content/uploads/2024/05/physicalsciences2023solutions.pdf',
    source: 'both',
  },
  {
    year: 2022,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4661/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202022.pdf',
    solutionUrl: 'https://tusctas.wordpress.com/wp-content/uploads/2023/03/physicalsciences2022solutions.pdf',
    source: 'both',
  },
  {
    year: 2021,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4657/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202021.pdf',
    solutionUrl: 'https://tusctas.wordpress.com/wp-content/uploads/2022/02/physicalsciences2021solutions.pdf',
    source: 'both',
  },
  {
    year: 2020,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4655/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202020.pdf',
    solutionUrl: 'https://tusctas.wordpress.com/wp-content/uploads/2021/02/physicalsciences2020solutions.pdf',
    source: 'both',
  },
  {
    year: 2019,
    examUrl: 'https://cma.education.tas.gov.au/api/Document/4653/PSC315118%20Physical%20Sciences%20TASC%20Exam%20Paper%202019.pdf',
    solutionUrl: 'https://tusctas.wordpress.com/wp-content/uploads/2020/02/physicalsciences2019solutions.pdf',
    source: 'both',
  },
]

// Older papers only available from TUSC
const olderPapers = []
for (let y = 2018; y >= 1996; y--) {
  const folder = y >= 2018 ? '2019/09' : '2019/09'
  olderPapers.push({
    year: y,
    examUrl: `https://tusctas.wordpress.com/wp-content/uploads/${folder}/physicalsciences${y}.pdf`,
    solutionUrl: `https://tusctas.wordpress.com/wp-content/uploads/${folder}/physicalsciences${y}solutions.pdf`,
    source: 'tusc',
  })
}

const infoSheetUrl = 'https://tusctas.wordpress.com/wp-content/uploads/2025/03/psinformationsheet.pdf'

export default function PaperLibrary() {
  const [showOlder, setShowOlder] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Past Papers & Resources</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Official TASC exam papers with TUSC solutions — 29 years of papers available
        </p>
      </div>

      {/* Information Sheet */}
      <div className="bg-violet-50 dark:bg-violet-950/30 rounded-xl border border-violet-200 dark:border-violet-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen size={20} className="text-violet-500" />
            <div>
              <h3 className="font-semibold text-sm text-violet-800 dark:text-violet-200">Physical Sciences Information Sheet</h3>
              <p className="text-xs text-violet-600 dark:text-violet-400">Formula sheet provided in the exam — study this!</p>
            </div>
          </div>
          <a href={infoSheetUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-lg text-xs font-medium hover:bg-violet-200 dark:hover:bg-violet-900/70 transition-colors">
            <ExternalLink size={14} /> View PDF
          </a>
        </div>
      </div>

      {/* Recent Papers (2019-2025) with solutions */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Recent Papers (2019-2025)</h2>
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
                  <a href={paper.examUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-lg text-xs font-medium hover:bg-violet-100 dark:hover:bg-violet-950/50 transition-colors">
                    <ExternalLink size={14} /> Paper
                  </a>
                  {paper.solutionUrl && (
                    <a href={paper.solutionUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-medium hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-colors">
                      <ExternalLink size={14} /> Solutions
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Older papers toggle */}
      <div>
        <button onClick={() => setShowOlder(!showOlder)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
          {showOlder ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          Older Papers (1996-2018) — {olderPapers.length} papers with solutions
        </button>

        {showOlder && (
          <div className="grid gap-2 mt-3">
            {olderPapers.map(paper => (
              <div key={paper.year}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-gray-400" />
                  <span className="text-sm font-medium">{paper.year}</span>
                  <span className="text-xs text-gray-400">via TUSC</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href={paper.examUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-violet-500 hover:underline">Paper</a>
                  <span className="text-gray-300">|</span>
                  <a href={paper.solutionUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-emerald-500 hover:underline">Solutions</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Study tips */}
      <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 p-4">
        <h3 className="font-semibold text-sm text-amber-800 dark:text-amber-300 mb-2">How to use past papers effectively</h3>
        <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1">
          <li>1. Start with the most recent paper (2025) to see current exam style</li>
          <li>2. Work under timed conditions: 3 hours for the full paper</li>
          <li>3. Mark your answers using the TUSC solutions</li>
          <li>4. Identify weak topics and focus your revision on those areas</li>
          <li>5. Redo papers you scored poorly on after revising those topics</li>
          <li>6. The Information Sheet is provided in the exam — know every formula on it!</li>
        </ul>
      </div>

      {/* Video resource */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="font-semibold text-sm mb-2">Video Resources</h3>
        <a href="https://youtu.be/UKJ-wylgbiI?si=svZceqGUEma0fWH9"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 hover:underline">
          Physics Course Overview (HSC) <ExternalLink size={14} />
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          NSW HSC Physics overview — covers overlapping topics like projectile motion, electromagnetism, and nuclear physics
        </p>
      </div>

      {/* Attribution */}
      <p className="text-xs text-gray-400 text-center">
        Past paper solutions courtesy of <a href="https://tusctas.wordpress.com/physical-sciences/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">TUSC</a> (Tasmanian Unofficial Source of Coursework)
      </p>
    </div>
  )
}
