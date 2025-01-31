import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function AnimatedNumber({ targetNumber }) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, targetNumber, { duration: 4 })
    return () => controls.stop()
  }, [targetNumber])

  return <motion.span>{rounded}</motion.span>
}

/**
 * ==============   Styles   ================
 */

const text = {
  fontSize: 64,
  color: "#4ff0b7",
}
