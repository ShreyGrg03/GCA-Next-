'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number // milliseconds per character
  delay?: number // initial delay before typing starts
  className?: string
}

const TypingEffect = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = "" 
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('')
    setCurrentIndex(0)
    setIsTyping(false)

    // Initial delay
    const initialTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(initialTimeout)
  }, [text, delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
    }
  }, [currentIndex, speed, text, isTyping])

  return (
    <div className={className}>
      {displayedText}
      {isTyping && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-blink ml-1" />
      )}
    </div>
  )
}

export default TypingEffect