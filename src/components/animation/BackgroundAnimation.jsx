import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const BackgroundAnimation = ({
  className = '',
  isActive = true,
  style
}) => {
  const controller1 = useAnimationControls()
  const controller2 = useAnimationControls()
  const controller3 = useAnimationControls()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Fungsi untuk mengupdate opasitas berdasarkan posisi scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const newOpacity = Math.max(1 - scrollPosition / 500, 0)
      setOpacity(newOpacity)
    }

    // Event listener untuk scroll
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    const transition = {
      repeat: Infinity,
      duration: 8
    }

    if (isActive) {
      controller1.start({
        x: [0, -100, -150, 0],
        y: [-100, -200, 0, -100],
        scale: [1, 1.2, 1.3, 1],
        transition
      })

      controller2.start({
        x: [170, 170, 0, 170],
        y: [20, -200, -100, 20],
        scale: [1.2, 1, 1, 1.2],
        transition
      })

      controller3.start({
        x: [150, 50, 0, 150],
        y: [-150, -50, -150, -150],
        scale: [1, 1.4, 1, 1],
        transition
      })
    } else {
      controller1.stop()
      controller2.stop()
      controller3.stop()
    }

    return () => {
      controller1.stop()
      controller2.stop()
      controller3.stop()
    }
  }, [controller1, controller2, controller3, isActive])

  return (
    <motion.div
      style={{...style,opacity}}
      initial={{ opacity: opacity }}
      animate={{ opacity: opacity }}
      className={className}
    >
      <motion.div
        data-testid="circle"
        animate={controller1}
        className="absolute h-64 w-52 rounded-full bg-RedDarkest/80 blur-3xl"
      />
      <motion.div
        data-testid="circle"
        animate={controller2}
        className="absolute h-64 w-52 rounded-full bg-orange-400/80 blur-3xl"
      />
      <motion.div
        data-testid="circle"
        animate={controller3}
        className="absolute h-64 w-52 rounded-full bg-yellow-300/30 blur-3xl"
      />
    </motion.div>
  )
}

export default BackgroundAnimation
