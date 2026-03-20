import { useParams, Link } from 'react-router-dom'
import { topics } from '../../data/topics'
import { useProgress } from '../../context/ProgressContext'
import * as Icons from 'lucide-react'
import { BookOpen, Brain, Layers, ChevronRight, CheckCircle2, Circle, Clock } from 'lucide-react'

const statusConfig = {
  'not-started': { icon: Circle, label: 'Not Started', color: 'text-gray-400' },
  'learning': { icon: Clock, label: 'Learning', color: 'text-blue-500' },
  'reviewing': { icon: Clock, label: 'Reviewing', color: 'text-amber-500' },
  'mastered': { icon: CheckCircle2, label: 'Mastered', color: 'text-emerald-500' },
}

export default function TopicPage() {
  const { topicId } = useParams()
  const topic = topics.find(t => t.id === topicId)
  const { progress, updateSubtopicStatus } = useProgress()

  if (!topic) return <div className="text-center py-12">Topic not found</div>

  const Icon = Icons[topic.icon] || BookOpen
  const topicProgress = progress.topics[topicId]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${topic.bgClass} text-white`}>
          <Icon size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{topic.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{topic.description}</p>
        </div>
      </div>

      {/* Inquiry Questions */}
      {topic.inquiryQuestions && topic.inquiryQuestions.length > 0 && (
        <div className="bg-violet-50 dark:bg-violet-950/30 rounded-xl border border-violet-200 dark:border-violet-800 p-4">
          <h2 className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-2">Key Inquiry Questions</h2>
          <p className="text-xs text-violet-600 dark:text-violet-400 mb-3">Mastering these questions is central to exam success. Practice answering each with examples.</p>
          <ul className="space-y-2">
            {topic.inquiryQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-violet-800 dark:text-violet-200">
                <span className="font-bold text-violet-500 shrink-0">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Quick links */}
      <div className="flex gap-3">
        <Link to={`/quiz/${topicId}`}
          className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors">
          <Brain size={16} /> Start Quiz
        </Link>
        <Link to={`/flashcards/${topicId}`}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-950/50 transition-colors">
          <Layers size={16} /> Flashcards
        </Link>
      </div>

      {/* Subtopics */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Subtopics</h2>
        {topic.subtopics.map(sub => {
          const subProgress = topicProgress?.subtopics?.[sub.id]
          const status = subProgress?.status || 'not-started'
          const StatusIcon = statusConfig[status].icon

          return (
            <div key={sub.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <StatusIcon size={18} className={statusConfig[status].color} />
                    <h3 className="font-semibold text-sm">{sub.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-6">{sub.description}</p>
                </div>
                <select
                  value={status}
                  onChange={e => updateSubtopicStatus(topicId, sub.id, e.target.value)}
                  className="text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1"
                >
                  <option value="not-started">Not Started</option>
                  <option value="learning">Learning</option>
                  <option value="reviewing">Reviewing</option>
                  <option value="mastered">Mastered</option>
                </select>
              </div>

              {sub.keyPoints && (
                <ul className="mt-3 ml-6 space-y-1">
                  {sub.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <ChevronRight size={12} className="mt-0.5 shrink-0 text-gray-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
