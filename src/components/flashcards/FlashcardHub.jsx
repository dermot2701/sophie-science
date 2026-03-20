import { Link } from 'react-router-dom'
import { topics } from '../../data/topics'
import { flashcards } from '../../data/flashcards'
import { useProgress } from '../../context/ProgressContext'
import * as Icons from 'lucide-react'
import { BookOpen, Layers } from 'lucide-react'

export default function FlashcardHub() {
  const { progress } = useProgress()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Flashcards</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Review key concepts with spaced repetition</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {topics.map(topic => {
          const Icon = Icons[topic.icon] || BookOpen
          const topicCards = flashcards.filter(f => f.topicId === topic.id)
          const knownCount = topicCards.filter(c => {
            const p = progress.flashcardProgress[c.id]
            return p && p.bucket >= 3
          }).length

          return (
            <Link
              key={topic.id}
              to={`/flashcards/${topic.id}`}
              className={`${topic.lightBgClass} rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${topic.bgClass} text-white`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{topic.shortTitle}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{topicCards.length} cards</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {knownCount}/{topicCards.length} mastered
                </span>
                <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: topicCards.length > 0 ? `${(knownCount / topicCards.length) * 100}%` : '0%' }} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
