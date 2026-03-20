import { Link } from 'react-router-dom'
import { topics } from '../../data/topics'
import { useProgress } from '../../context/ProgressContext'
import ProgressRing from '../common/ProgressRing'
import * as Icons from 'lucide-react'
import { BookOpen, Trophy, Flame, Target } from 'lucide-react'

export default function Dashboard() {
  const { getTopicProgress, progress } = useProgress()
  const streak = progress.studyStreak
  const totalQuizzes = progress.quizHistory.length
  const avgScore = totalQuizzes > 0
    ? Math.round(progress.quizHistory.reduce((s, q) => s + q.percentage, 0) / totalQuizzes)
    : 0

  const overallProgress = Math.round(
    topics.reduce((sum, t) => sum + getTopicProgress(t.id), 0) / topics.length
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome back, Sophie!</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Physical Sciences PSC315118 — Year 11 TASC</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard icon={Target} label="Overall" value={`${overallProgress}%`} color="text-violet-500" />
        <StatCard icon={Flame} label="Streak" value={`${streak.currentStreak} days`} color="text-orange-500" />
        <StatCard icon={BookOpen} label="Quizzes" value={totalQuizzes} color="text-blue-500" />
        <StatCard icon={Trophy} label="Avg Score" value={totalQuizzes > 0 ? `${avgScore}%` : '--'} color="text-emerald-500" />
      </div>

      {/* Topic cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Content Threads</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map(topic => {
            const Icon = Icons[topic.icon] || BookOpen
            const percent = getTopicProgress(topic.id)
            return (
              <Link
                key={topic.id}
                to={`/topic/${topic.id}`}
                className={`${topic.lightBgClass} rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${topic.bgClass} text-white`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{topic.shortTitle}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {topic.subtopics.length} subtopics
                      </p>
                    </div>
                  </div>
                  <ProgressRing percent={percent} size={48} stroke={4} color={topic.color} />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 line-clamp-2">
                  {topic.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <QuickAction to="/quiz" icon={Icons.Brain} label="Start Quiz" color="bg-blue-500" />
          <QuickAction to="/flashcards" icon={Icons.Layers} label="Flashcards" color="bg-emerald-500" />
          <QuickAction to="/formulas" icon={Icons.Calculator} label="Formulas" color="bg-amber-500" />
          <QuickAction to="/papers" icon={Icons.FileText} label="Past Papers" color="bg-red-500" />
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
      <Icon size={18} className={`${color} mb-2`} />
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  )
}

function QuickAction({ to, icon: Icon, label, color }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
    >
      <div className={`p-2.5 rounded-lg ${color} text-white`}>
        <Icon size={20} />
      </div>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  )
}
