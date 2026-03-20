import { useState, useMemo } from 'react'
import { formulas, constants } from '../../data/formulas'
import { topics } from '../../data/topics'
import MathRenderer from '../common/MathRenderer'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

export default function FormulaSheet() {
  const [search, setSearch] = useState('')
  const [filterTopic, setFilterTopic] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = useMemo(() => {
    return formulas.filter(f => {
      const matchTopic = filterTopic === 'all' || f.topicId === filterTopic
      const matchSearch = !search ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.formula.toLowerCase().includes(search.toLowerCase()) ||
        f.category.toLowerCase().includes(search.toLowerCase())
      return matchTopic && matchSearch
    })
  }, [search, filterTopic])

  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach(f => {
      if (!groups[f.category]) groups[f.category] = []
      groups[f.category].push(f)
    })
    return groups
  }, [filtered])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Formulas & Constants</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Quick reference for all Physics and Chemistry formulas</p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text" placeholder="Search formulas..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>
        <select
          value={filterTopic} onChange={e => setFilterTopic(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
        >
          <option value="all">All Topics</option>
          {topics.map(t => <option key={t.id} value={t.id}>{t.shortTitle}</option>)}
        </select>
      </div>

      {/* Formula groups */}
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">{category}</h2>
          <div className="space-y-2">
            {items.map(f => {
              const expanded = expandedId === f.id
              return (
                <div key={f.id}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setExpandedId(expanded ? null : f.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium">{f.name}</span>
                      <span className="text-lg"><MathRenderer latex={f.latex} /></span>
                    </div>
                    {expanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </button>
                  {expanded && Object.keys(f.variables).length > 0 && (
                    <div className="px-4 pb-3 border-t border-gray-100 dark:border-gray-800 pt-2">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Variables:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {Object.entries(f.variables).map(([sym, desc]) => (
                          <p key={sym} className="text-xs text-gray-600 dark:text-gray-300">
                            <span className="font-mono font-medium">{sym}</span> = {desc}
                          </p>
                        ))}
                      </div>
                      {f.notes && <p className="text-xs text-gray-400 mt-2 italic">{f.notes}</p>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Constants table */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Physical Constants</h2>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 text-left">
                <th className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">Constant</th>
                <th className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">Symbol</th>
                <th className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">Value</th>
                <th className="px-4 py-2 font-medium text-gray-500 dark:text-gray-400">Unit</th>
              </tr>
            </thead>
            <tbody>
              {constants.map((c, i) => (
                <tr key={i} className="border-b border-gray-50 dark:border-gray-800/50 last:border-0">
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{c.name}</td>
                  <td className="px-4 py-2 font-mono">{c.symbol}</td>
                  <td className="px-4 py-2 font-mono">{c.value}</td>
                  <td className="px-4 py-2 text-gray-500">{c.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
