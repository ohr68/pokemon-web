import { motion, useCycle } from 'motion/react'
import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBorderProps extends PropsWithChildren {
  className?: string
  borderSize?: number
}

export function AnimatedBorder ({
  children,
  className,
  borderSize = 2
}: AnimatedBorderProps) {
  const [isHovering, toggleIsHovering] = useCycle(false, true)

  return (
    <motion.div
      data-state={isHovering ? 'hovering' : 'idle'}
      onHoverStart={() => toggleIsHovering(1)}
      onHoverEnd={() => toggleIsHovering(0)}
      animate={isHovering ? 'hovering' : 'idle'}
      variants={{
        idle: { padding: 0 },
        hovering: { padding: borderSize }
      }}
      className={cn(
                `relative rounded-xl overflow-hidden shadow-shape border border-transparent
        data-[state=hovering]:animate-border
        data-[state=hovering]:[background:linear-gradient(45deg,#09090B,theme(colors.zinc.900)_50%,#09090B)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.zinc.600/.48))_border-box]`,
                className
      )}
    >
      {children}
    </motion.div>
  )
}
