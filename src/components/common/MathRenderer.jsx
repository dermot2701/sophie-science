import katex from 'katex'
import { useMemo } from 'react'

export default function MathRenderer({ latex, display = false }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      })
    } catch {
      return latex
    }
  }, [latex, display])

  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
