import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { Card } from "./card"
import { cn } from "../../lib/utils"

export type MotionCardProps = React.ComponentProps<typeof Card> & HTMLMotionProps<"div">

export const MotionCard: React.FC<MotionCardProps> = ({ className, children, ...motionProps }) => {
  return (
    <motion.div {...motionProps} className={cn("will-change-transform", (motionProps as any).outerClassName)}>
      <Card className={className}>{children}</Card>
    </motion.div>
  )
}

export default MotionCard
