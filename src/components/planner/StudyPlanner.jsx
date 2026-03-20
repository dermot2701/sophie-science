import { useState } from 'react'
import { topics } from '../../data/topics'
import { useProgress } from '../../context/ProgressContext'
import ProgressRing from '../common/ProgressRing'
import { Flame, Trophy, Target, Calendar, CheckCircle2, Circle, Clock, RotateCcw } from 'lucide-react'

const statusConfig = {
  'not-started': { icon: Circle, label: 'Not Started', color: 'text-gray-400', bg: 'bg-gray-100 dark:bg-gray-800' },
  'learning': { icon: Clock, label: 'Learning', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  'reviewing': { icon: RotateCcw, label: 'Reviewing', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  'mastered': { icon: CheckCircle2, label: 'Mastered', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
}

export default function StudyPlanner() {
  const { progress, getTopicProgress, updateSubtopicStatus, resetProgress } = useProgress()
  const [examDate, setExamDate] = useState(() => localStorage.getItem('sophie-exam-date') || '')
  const [showReset, setShowReset] = useState(false)

  const handleExamDate = (date) => {
    setExamDate(date)
    localStorage.setItem('sophie-exam-date', date)
  }

  const daysUntilExam = examDate
    ? Math.max(0, Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24)))
    : null

  const overallProgress = Math.round(
    topics.reduce((sum, t) => sum + getTopicProgress(t.id), 0) / topics.length
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Study Planner</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Track your progress and plan your study</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
          <Target size={20} className="text-violet-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{overallProgress}%</p>
          <p className="text-xs text-gray-500">Overall</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
          <Flame size={20} className="text-orange-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{progress.studyStreak.currentStreak}</p>
          <p className="text-xs text-gray-500">Day Streak</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
          <Trophy size={20} className="text-amber-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{progress.studyStreak.longestStreak}</p>
          <p className="text-xs text-gray-500">Best Streak</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center">
          <Calendar size={20} className="text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{daysUntilExam !== null ? daysUntilExam : '--'}</p>
          <p className="text-xs text-gray-500">Days to Exam</p>
        </div>
      </div>

      {/* Exam date setter */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <label className="text-sm font-medium">Exam Date</label>
        <input
          type="date" value={examDate} onChange={e => handleExamDate(e.target.value)}
          className="block mt-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
        />
      </div>

      {/* Topic mastery breakdown */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Topic Mastery</h2>
        {topics.map(topic => {
          const percent = getTopicProgress(topic.id)
          const topicProgress = progress.topics[topic.id]

          return (
            <div key={topic.id} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <ProgressRing percent={percent} size={40} stroke={3} color={topic.color} />
                  <div>
                    <h3 className="font-semibold text-sm">{topic.title}</h3>
                    <p className="text-xs text-gray-500">{percent}% complete</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {topic.subtopics.map(sub => {
                  const status = topicProgress?.subtopics?.[sub.id]?.status || 'not-started'
                  const cfg = statusConfig[status]
                  const StatusIcon = cfg.icon

                  return (
                    <div key={sub.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StatusIcon size={14} className={cfg.color} />
                        <span className="text-sm">{sub.title}</span>
                      </div>
                      <select
                        value={status}
                        onChange={e => updateSubtopicStatus(topic.id, sub.id, e.target.value)}
                        className={`text-xs rounded-lg border-0 px-2 py-1 ${cfg.bg} ${cfg.color} font-medium`}
                      >
                        <option value="not-started">Not Started</option>
                        <option value="learning">Learning</option>
                        <option value="reviewing">Reviewing</option>
                        <option value="mastered">Mastered</option>
                      </select>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Reset */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        {!showReset ? (
          <button onClick={() => setShowReset(true)}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors">
            Reset all progress...
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-xs text-red-500">Are you sure? This cannot be undone.</span>
            <button onClick={() => { resetProgress(); setShowReset(false) }}
              className="text-xs px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Reset
            </button>
            <button onClick={() => setShowReset(false)}
              className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
