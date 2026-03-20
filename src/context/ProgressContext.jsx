import { createContext, useContext, useState, useCallback } from 'react'
import { topics } from '../data/topics'

const STORAGE_KEY = 'sophie-science-progress'

const ProgressContext = createContext()

function getInitialProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}

  const topicProgress = {}
  topics.forEach(t => {
    const subtopics = {}
    t.subtopics.forEach(s => {
      subtopics[s.id] = { status: 'not-started', lastReviewed: null }
    })
    topicProgress[t.id] = { status: 'not-started', subtopics }
  })

  return {
    version: 1,
    topics: topicProgress,
    quizHistory: [],
    flashcardProgress: {},
    studyStreak: { currentStreak: 0, longestStreak: 0, activeDates: [] },
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, lastUpdated: new Date().toISOString() }))
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(getInitialProgress)

  const updateSubtopicStatus = useCallback((topicId, subtopicId, status) => {
    setProgress(prev => {
      const next = { ...prev, topics: { ...prev.topics } }
      const topic = { ...next.topics[topicId], subtopics: { ...next.topics[topicId].subtopics } }
      topic.subtopics[subtopicId] = { status, lastReviewed: new Date().toISOString().slice(0, 10) }

      // Derive topic-level status from subtopics
      const statuses = Object.values(topic.subtopics).map(s => s.status)
      if (statuses.every(s => s === 'mastered')) topic.status = 'mastered'
      else if (statuses.every(s => s === 'not-started')) topic.status = 'not-started'
      else topic.status = 'learning'

      next.topics[topicId] = topic
      save(next)
      return next
    })
  }, [])

  const recordQuizResult = useCallback((result) => {
    setProgress(prev => {
      const next = { ...prev, quizHistory: [...prev.quizHistory, result] }
      save(next)
      return next
    })
  }, [])

  const updateFlashcardBucket = useCallback((cardId, bucket) => {
    setProgress(prev => {
      const intervals = [1, 2, 4, 7, 14]
      const nextReview = new Date()
      nextReview.setDate(nextReview.getDate() + intervals[Math.min(bucket, 4)])
      const next = {
        ...prev,
        flashcardProgress: {
          ...prev.flashcardProgress,
          [cardId]: { bucket, nextReview: nextReview.toISOString().slice(0, 10) },
        },
      }
      save(next)
      return next
    })
  }, [])

  const recordStudyActivity = useCallback(() => {
    setProgress(prev => {
      const today = new Date().toISOString().slice(0, 10)
      const streak = { ...prev.studyStreak }
      if (streak.activeDates[0] === today) return prev

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayStr = yesterday.toISOString().slice(0, 10)

      streak.activeDates = [today, ...streak.activeDates].slice(0, 365)
      streak.currentStreak = streak.activeDates[1] === yesterdayStr ? streak.currentStreak + 1 : 1
      streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak)

      const next = { ...prev, studyStreak: streak }
      save(next)
      return next
    })
  }, [])

  const getTopicProgress = useCallback((topicId) => {
    const topic = progress.topics[topicId]
    if (!topic) return 0
    const subs = Object.values(topic.subtopics)
    if (subs.length === 0) return 0
    const weights = { 'not-started': 0, 'learning': 0.33, 'reviewing': 0.66, 'mastered': 1 }
    return Math.round(subs.reduce((sum, s) => sum + (weights[s.status] || 0), 0) / subs.length * 100)
  }, [progress])

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setProgress(getInitialProgress())
  }, [])

  return (
    <ProgressContext.Provider value={{
      progress, updateSubtopicStatus, recordQuizResult,
      updateFlashcardBucket, recordStudyActivity, getTopicProgress, resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
