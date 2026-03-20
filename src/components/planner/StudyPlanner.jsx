import { useState, useEffect } from 'react'
import { topics } from '../../data/topics'
import { useProgress } from '../../context/ProgressContext'
import ProgressRing from '../common/ProgressRing'
import { Flame, Trophy, Target, Calendar, CheckCircle2, Circle, Clock, RotateCcw, Plus, Trash2, AlertTriangle, Edit2, Save } from 'lucide-react'

const DATES_KEY = 'sophie-assessment-dates'

const defaultAssessments = [
  { id: '1', title: 'Internal Test: Atoms & Nuclear', date: '2026-05-02', type: 'test', topicId: 'atoms' },
  { id: '2', title: 'Internal Test: Motion & Force', date: '2026-06-13', type: 'test', topicId: 'motion' },
  { id: '3', title: 'Practical Investigation Report', date: '2026-07-18', type: 'assignment', topicId: null },
  { id: '4', title: 'Internal Test: Conservation Laws', date: '2026-08-08', type: 'test', topicId: 'conservation' },
  { id: '5', title: 'Internal Test: Chemical Structures', date: '2026-08-29', type: 'test', topicId: 'chemical-structures' },
  { id: '6', title: 'Internal Test: Reactions & Stoichiometry', date: '2026-09-19', type: 'test', topicId: 'reactions' },
  { id: '7', title: 'Trial Exam (Full Course)', date: '2026-10-02', type: 'exam', topicId: null },
  { id: '8', title: 'TASC External Exam', date: '2026-11-03', type: 'exam', topicId: null },
]

const typeConfig = {
  test: { label: 'Test', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  assignment: { label: 'Assignment', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  exam: { label: 'Exam', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
}

const statusConfig = {
  'not-started': { icon: Circle, label: 'Not Started', color: 'text-gray-400', bg: 'bg-gray-100 dark:bg-gray-800' },
  'learning': { icon: Clock, label: 'Learning', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  'reviewing': { icon: RotateCcw, label: 'Reviewing', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  'mastered': { icon: CheckCircle2, label: 'Mastered', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
}

function loadDates() {
  try {
    const saved = localStorage.getItem(DATES_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return defaultAssessments
}

export default function StudyPlanner() {
  const { progress, getTopicProgress, updateSubtopicStatus, resetProgress } = useProgress()
  const [showReset, setShowReset] = useState(false)
  const [assessments, setAssessments] = useState(loadDates)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [newItem, setNewItem] = useState({ title: '', date: '', type: 'test', topicId: '' })

  useEffect(() => {
    localStorage.setItem(DATES_KEY, JSON.stringify(assessments))
  }, [assessments])

  const today = new Date().toISOString().slice(0, 10)

  const upcoming = assessments
    .filter(a => a.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))

  const past = assessments
    .filter(a => a.date < today)
    .sort((a, b) => b.date.localeCompare(a.date))

  const nextAssessment = upcoming[0]
  const daysUntilNext = nextAssessment
    ? Math.max(0, Math.ceil((new Date(nextAssessment.date) - new Date()) / (1000 * 60 * 60 * 24)))
    : null

  const addAssessment = () => {
    if (!newItem.title || !newItem.date) return
    setAssessments(prev => [...prev, { ...newItem, id: Date.now().toString(), topicId: newItem.topicId || null }])
    setNewItem({ title: '', date: '', type: 'test', topicId: '' })
    setShowAddForm(false)
  }

  const removeAssessment = (id) => {
    setAssessments(prev => prev.filter(a => a.id !== id))
  }

  const updateAssessment = (id, field, value) => {
    setAssessments(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a))
  }

  const overallProgress = Math.round(
    topics.reduce((sum, t) => sum + getTopicProgress(t.id), 0) / topics.length
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Study Planner</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Track progress, assessments, and exam dates</p>
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
          <p className="text-2xl font-bold">{daysUntilNext !== null ? daysUntilNext : '--'}</p>
          <p className="text-xs text-gray-500">{nextAssessment ? 'Days to Next' : 'No Upcoming'}</p>
        </div>
      </div>

      {/* Upcoming Assessments */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Upcoming Assessments</h2>
          <button onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1 text-xs font-medium text-violet-500 hover:text-violet-600 transition-colors">
            <Plus size={14} /> Add Date
          </button>
        </div>

        {/* Add form */}
        {showAddForm && (
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-violet-200 dark:border-violet-800 p-4 mb-3 space-y-3">
            <input type="text" placeholder="Assessment title" value={newItem.title}
              onChange={e => setNewItem(n => ({ ...n, title: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm" />
            <div className="flex gap-3">
              <input type="date" value={newItem.date}
                onChange={e => setNewItem(n => ({ ...n, date: e.target.value }))}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm" />
              <select value={newItem.type} onChange={e => setNewItem(n => ({ ...n, type: e.target.value }))}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                <option value="test">Test</option>
                <option value="assignment">Assignment</option>
                <option value="exam">Exam</option>
              </select>
            </div>
            <div className="flex gap-3">
              <select value={newItem.topicId} onChange={e => setNewItem(n => ({ ...n, topicId: e.target.value }))}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                <option value="">All topics / General</option>
                {topics.map(t => <option key={t.id} value={t.id}>{t.shortTitle}</option>)}
              </select>
              <button onClick={addAssessment}
                className="px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-sm font-medium transition-colors">
                Add
              </button>
            </div>
          </div>
        )}

        {upcoming.length === 0 && !showAddForm && (
          <p className="text-sm text-gray-400 py-4 text-center">No upcoming assessments. Click "Add Date" to add one.</p>
        )}

        <div className="space-y-2">
          {upcoming.map(a => {
            const days = Math.max(0, Math.ceil((new Date(a.date) - new Date()) / (1000 * 60 * 60 * 24)))
            const tc = typeConfig[a.type] || typeConfig.test
            const linkedTopic = a.topicId ? topics.find(t => t.id === a.topicId) : null
            const isEditing = editingId === a.id
            const urgent = days <= 7

            return (
              <div key={a.id} className={`bg-white dark:bg-gray-900 rounded-xl border p-4 transition-shadow
                ${urgent ? 'border-red-300 dark:border-red-800' : 'border-gray-200 dark:border-gray-700'}`}>
                {isEditing ? (
                  <div className="space-y-2">
                    <input type="text" value={a.title}
                      onChange={e => updateAssessment(a.id, 'title', e.target.value)}
                      className="w-full px-2 py-1 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm" />
                    <div className="flex gap-2">
                      <input type="date" value={a.date}
                        onChange={e => updateAssessment(a.id, 'date', e.target.value)}
                        className="flex-1 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm" />
                      <select value={a.type} onChange={e => updateAssessment(a.id, 'type', e.target.value)}
                        className="px-2 py-1 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                        <option value="test">Test</option>
                        <option value="assignment">Assignment</option>
                        <option value="exam">Exam</option>
                      </select>
                      <button onClick={() => setEditingId(null)} className="text-emerald-500"><Save size={16} /></button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      {urgent && <AlertTriangle size={16} className="text-red-500 shrink-0" />}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-sm truncate">{a.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tc.color}`}>{tc.label}</span>
                          {linkedTopic && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${linkedTopic.lightBgClass} ${linkedTopic.textClass}`}>
                              {linkedTopic.shortTitle}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {new Date(a.date).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                          <span className={`ml-2 font-medium ${urgent ? 'text-red-500' : 'text-gray-400'}`}>
                            {days === 0 ? 'Today!' : days === 1 ? 'Tomorrow' : `${days} days`}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => setEditingId(a.id)} className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400">
                        <Edit2 size={14} />
                      </button>
                      <button onClick={() => removeAssessment(a.id)} className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-red-500">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Past assessments (collapsed) */}
      {past.length > 0 && (
        <details className="text-sm">
          <summary className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
            Past assessments ({past.length})
          </summary>
          <div className="mt-2 space-y-1">
            {past.map(a => (
              <div key={a.id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-gray-400">
                <span className="text-xs">{a.title}</span>
                <span className="text-xs">{new Date(a.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}</span>
              </div>
            ))}
          </div>
        </details>
      )}

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
