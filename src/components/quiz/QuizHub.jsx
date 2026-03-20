import { Link } from 'react-router-dom'
import { topics } from '../../data/topics'
import { useProgress } from '../../context/ProgressContext'
import * as Icons from 'lucide-react'
import { BookOpen, Brain } from 'lucide-react'

export default function QuizHub() {
  const { progress } = useProgress()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Practice Quizzes</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Test your knowledge with topic-based questions</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {topics.map(topic => {
          const Icon = Icons[topic.icon] || BookOpen
          const topicQuizzes = progress.quizHistory.filter(q => q.topicId === topic.id)
          const lastScore = topicQuizzes.length > 0 ? topicQuizzes[topicQuizzes.length - 1].percentage : null

          return (
            <Link
              key={topic.id}
              to={`/quiz/${topic.id}`}
              className={`${topic.lightBgClass} rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${topic.bgClass} text-white`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{topic.shortTitle}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{topic.subtopics.length} subtopics</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {topicQuizzes.length} quiz{topicQuizzes.length !== 1 ? 'zes' : ''} taken
                </span>
                {lastScore !== null && (
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full
                    ${lastScore >= 70 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                      lastScore >= 50 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    Last: {lastScore}%
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>

      {/* Recent quiz history */}
      {progress.quizHistory.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Results</h2>
          <div className="space-y-2">
            {progress.quizHistory.slice(-5).reverse().map((q, i) => {
              const topic = topics.find(t => t.id === q.topicId)
              return (
                <div key={i} className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Brain size={16} className={topic?.textClass} />
                    <div>
                      <span className="text-sm font-medium">{topic?.shortTitle}</span>
                      <span className="text-xs text-gray-400 ml-2">{new Date(q.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${q.percentage >= 70 ? 'text-emerald-500' : q.percentage >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                    {q.correct}/{q.totalQuestions} ({q.percentage}%)
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
