import { useState, useMemo, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { topics } from '../../data/topics'
import { questions as allQuestions } from '../../data/questions'
import { useProgress } from '../../context/ProgressContext'
import MathRenderer from '../common/MathRenderer'
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizEngine() {
  const { topicId } = useParams()
  const topic = topics.find(t => t.id === topicId)
  const { recordQuizResult, recordStudyActivity } = useProgress()

  const [questionCount, setQuestionCount] = useState(null)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showSolution, setShowSolution] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const topicQuestions = useMemo(() =>
    allQuestions.filter(q => q.topicId === topicId), [topicId]
  )

  const startQuiz = (count) => {
    setQuestionCount(count)
    setQuizQuestions(shuffle(topicQuestions).slice(0, count))
    setCurrentIdx(0)
    setAnswers({})
    setShowSolution({})
    setSubmitted(false)
    recordStudyActivity()
  }

  const handleAnswer = (questionId, answer) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const submitQuiz = () => {
    setSubmitted(true)
    const results = quizQuestions.map(q => ({
      questionId: q.id,
      correct: q.type === 'mcq' ? answers[q.id] === q.correctAnswer : null,
    }))
    const correct = results.filter(r => r.correct === true).length
    recordQuizResult({
      id: `quiz-${Date.now()}`,
      topicId,
      date: new Date().toISOString(),
      totalQuestions: quizQuestions.length,
      correct,
      percentage: Math.round(correct / quizQuestions.length * 100),
      questionResults: results,
    })
  }

  if (!topic) return <div className="text-center py-12">Topic not found</div>

  // Selection screen
  if (!questionCount) {
    const maxQ = topicQuestions.length
    return (
      <div className="space-y-6">
        <Link to="/quiz" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <ArrowLeft size={16} /> Back to Quizzes
        </Link>
        <h1 className="text-2xl font-bold">{topic.shortTitle} Quiz</h1>
        <p className="text-gray-500 dark:text-gray-400">{maxQ} questions available</p>
        <div className="flex flex-wrap gap-3">
          {[5, 10, 15, maxQ].filter((n, i, a) => n <= maxQ && a.indexOf(n) === i).map(n => (
            <button key={n} onClick={() => startQuiz(n)}
              className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-colors">
              {n === maxQ ? `All ${n}` : n} Questions
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Results screen
  if (submitted) {
    const correct = quizQuestions.filter(q => q.type === 'mcq' && answers[q.id] === q.correctAnswer).length
    const total = quizQuestions.filter(q => q.type === 'mcq').length
    const pct = total > 0 ? Math.round(correct / total * 100) : 0

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Quiz Results</h1>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
          <p className={`text-5xl font-bold ${pct >= 70 ? 'text-emerald-500' : pct >= 50 ? 'text-amber-500' : 'text-red-500'}`}>{pct}%</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">{correct}/{total} MCQ correct</p>
        </div>

        <div className="space-y-3">
          {quizQuestions.map((q, i) => {
            const userAns = answers[q.id]
            const isCorrect = q.type === 'mcq' && userAns === q.correctAnswer
            const solutionOpen = showSolution[q.id]

            return (
              <div key={q.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-start gap-2">
                  {q.type === 'mcq' && (isCorrect
                    ? <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    : <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />)}
                  <div className="flex-1">
                    <p className="text-sm font-medium">Q{i + 1}. {q.question}</p>
                    {q.type === 'mcq' && (
                      <p className="text-xs mt-1">
                        <span className="text-gray-500">Your answer: </span>
                        <span className={isCorrect ? 'text-emerald-600' : 'text-red-600'}>{userAns || 'No answer'}</span>
                        {!isCorrect && <span className="text-emerald-600 ml-2">Correct: {q.correctAnswer}</span>}
                      </p>
                    )}
                    <button onClick={() => setShowSolution(s => ({ ...s, [q.id]: !s[q.id] }))}
                      className="text-xs text-violet-500 hover:text-violet-600 mt-2 flex items-center gap-1">
                      {solutionOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      {solutionOpen ? 'Hide' : 'Show'} solution
                    </button>
                    {solutionOpen && (
                      <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-xs whitespace-pre-wrap">
                        {q.workedSolution || q.sampleAnswer}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          <button onClick={() => startQuiz(questionCount)}
            className="flex items-center gap-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-sm font-medium transition-colors">
            <RotateCcw size={16} /> Retry
          </button>
          <Link to="/quiz"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
            Back to Quizzes
          </Link>
        </div>
      </div>
    )
  }

  // Quiz in progress
  const q = quizQuestions[currentIdx]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/quiz" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <ArrowLeft size={16} /> Exit
        </Link>
        <span className="text-sm text-gray-500">Question {currentIdx + 1} of {quizQuestions.length}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-violet-500 transition-all duration-300 rounded-full"
          style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }} />
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            q.difficulty === 1 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
            q.difficulty === 2 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {q.difficulty === 1 ? 'Easy' : q.difficulty === 2 ? 'Medium' : 'Hard'}
          </span>
          <span className="text-xs text-gray-400">{q.marks} mark{q.marks > 1 ? 's' : ''}</span>
        </div>
        <p className="text-base font-medium mt-3">{q.question}</p>

        {q.type === 'mcq' && (
          <div className="mt-4 space-y-2">
            {q.options.map(opt => (
              <button key={opt.label}
                onClick={() => handleAnswer(q.id, opt.label)}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors
                  ${answers[q.id] === opt.label
                    ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300'
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >
                <span className="font-semibold mr-2">{opt.label}.</span>
                {opt.text}
              </button>
            ))}
          </div>
        )}

        {q.type === 'short-answer' && (
          <div className="mt-4">
            <textarea
              value={answers[q.id] || ''}
              onChange={e => handleAnswer(q.id, e.target.value)}
              placeholder="Type your answer..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm resize-none focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 transition-colors"
        >
          <ArrowLeft size={16} /> Previous
        </button>

        {currentIdx < quizQuestions.length - 1 ? (
          <button
            onClick={() => setCurrentIdx(i => i + 1)}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg bg-violet-500 hover:bg-violet-600 text-white transition-colors"
          >
            Next <ArrowRight size={16} />
          </button>
        ) : (
          <button onClick={submitQuiz}
            className="px-6 py-2 text-sm font-medium rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  )
}
