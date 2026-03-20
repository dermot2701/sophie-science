import { Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Dashboard from './components/dashboard/Dashboard'
import TopicPage from './components/topics/TopicPage'
import PaperLibrary from './components/papers/PaperLibrary'
import FormulaSheet from './components/formulas/FormulaSheet'
import QuizHub from './components/quiz/QuizHub'
import QuizEngine from './components/quiz/QuizEngine'
import FlashcardHub from './components/flashcards/FlashcardHub'
import FlashcardViewer from './components/flashcards/FlashcardViewer'
import StudyPlanner from './components/planner/StudyPlanner'
import ExamTips from './components/tips/ExamTips'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/papers" element={<PaperLibrary />} />
        <Route path="/formulas" element={<FormulaSheet />} />
        <Route path="/quiz" element={<QuizHub />} />
        <Route path="/quiz/:topicId" element={<QuizEngine />} />
        <Route path="/flashcards" element={<FlashcardHub />} />
        <Route path="/flashcards/:topicId" element={<FlashcardViewer />} />
        <Route path="/planner" element={<StudyPlanner />} />
        <Route path="/tips" element={<ExamTips />} />
      </Routes>
    </AppShell>
  )
}
