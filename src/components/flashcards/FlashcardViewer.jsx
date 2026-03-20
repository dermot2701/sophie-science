import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { topics } from '../../data/topics'
import { flashcards as allFlashcards } from '../../data/flashcards'
import { useProgress } from '../../context/ProgressContext'
import { ArrowLeft, ThumbsUp, ThumbsDown, RotateCcw, Shuffle } from 'lucide-react'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FlashcardViewer() {
  const { topicId } = useParams()
  const topic = topics.find(t => t.id === topicId)
  const { progress, updateFlashcardBucket, recordStudyActivity } = useProgress()

  const topicCards = useMemo(() =>
    allFlashcards.filter(c => c.topicId === topicId), [topicId]
  )

  const [cards, setCards] = useState(() => shuffle(topicCards))
  const [currentIdx, setCurrentIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [sessionStats, setSessionStats] = useState({ known: 0, learning: 0 })

  if (!topic) return <div className="text-center py-12">Topic not found</div>

  const reshuffle = () => {
    setCards(shuffle(topicCards))
    setCurrentIdx(0)
    setFlipped(false)
    setSessionStats({ known: 0, learning: 0 })
  }

  const handleResponse = (knew) => {
    const card = cards[currentIdx]
    const current = progress.flashcardProgress[card.id]
    const currentBucket = current?.bucket || 0

    if (knew) {
      updateFlashcardBucket(card.id, Math.min(currentBucket + 1, 4))
      setSessionStats(s => ({ ...s, known: s.known + 1 }))
    } else {
      updateFlashcardBucket(card.id, 0)
      setSessionStats(s => ({ ...s, learning: s.learning + 1 }))
    }

    recordStudyActivity()
    setFlipped(false)
    if (currentIdx < cards.length - 1) {
      setCurrentIdx(i => i + 1)
    }
  }

  const card = cards[currentIdx]
  const isFinished = currentIdx >= cards.length - 1 && (sessionStats.known + sessionStats.learning > 0) && !flipped
  const bucket = progress.flashcardProgress[card?.id]?.bucket || 0

  if (!card || (isFinished && currentIdx === cards.length)) {
    return (
      <div className="space-y-6 text-center py-12">
        <h1 className="text-2xl font-bold">Session Complete!</h1>
        <div className="flex justify-center gap-8">
          <div>
            <p className="text-3xl font-bold text-emerald-500">{sessionStats.known}</p>
            <p className="text-sm text-gray-500">Got it</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-500">{sessionStats.learning}</p>
            <p className="text-sm text-gray-500">Still learning</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button onClick={reshuffle} className="flex items-center gap-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-sm font-medium">
            <RotateCcw size={16} /> Go Again
          </button>
          <Link to="/flashcards" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-sm font-medium">
            Back
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/flashcards" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{currentIdx + 1} / {cards.length}</span>
          <button onClick={reshuffle} className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <Shuffle size={16} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-violet-500 transition-all duration-300 rounded-full"
          style={{ width: `${((currentIdx + 1) / cards.length) * 100}%` }} />
      </div>

      {/* Flashcard */}
      <div className="flip-card mx-auto" style={{ maxWidth: '500px' }}>
        <div
          onClick={() => setFlipped(!flipped)}
          className={`flip-card-inner relative cursor-pointer ${flipped ? 'flipped' : ''}`}
          style={{ minHeight: '280px' }}
        >
          {/* Front */}
          <div className="flip-card-front absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-4">Question</div>
            <p className="text-lg font-medium">{card.front}</p>
            <p className="text-xs text-gray-400 mt-6">Tap to reveal answer</p>
          </div>

          {/* Back */}
          <div className="flip-card-back absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl border-2 border-violet-300 dark:border-violet-700 p-8 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="text-xs text-violet-500 uppercase tracking-wide mb-4">Answer</div>
            <p className="text-base whitespace-pre-line">{card.back}</p>
          </div>
        </div>
      </div>

      {/* Response buttons */}
      {flipped && (
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleResponse(false)}
            className="flex items-center gap-2 px-6 py-3 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-xl font-medium hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
          >
            <ThumbsDown size={18} /> Still Learning
          </button>
          <button
            onClick={() => handleResponse(true)}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-xl font-medium hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
          >
            <ThumbsUp size={18} /> Got It!
          </button>
        </div>
      )}

      {/* Session stats */}
      <div className="flex justify-center gap-6 text-sm text-gray-500">
        <span className="text-emerald-500">{sessionStats.known} known</span>
        <span className="text-amber-500">{sessionStats.learning} learning</span>
      </div>
    </div>
  )
}
