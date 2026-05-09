'use client'

import { useState, useEffect } from 'react'

export default function SmartLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loader after mount
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loader-wrapper ${!loading ? 'hidden' : ''}`}>
      <div className="smart-loader"></div>
      <div className="loader-text">MS Advocate</div>
    </div>
  )
}
