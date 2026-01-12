"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
// removed unused icon import
import { cn } from "../../lib/utils"

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close
export const SheetPortal = Dialog.Portal

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/50 transition-opacity duration-360 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100", className)}
    {...props}
  />
))
SheetOverlay.displayName = "SheetOverlay"

export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  side?: "top" | "bottom" | "left" | "right"
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed z-50 bg-white shadow-2xl will-change-transform transition-transform",
        side === "right" && "inset-y-0 right-0 w-[88vw] max-w-sm data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full duration-[380ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        side === "left" && "inset-y-0 left-0 w-[88vw] max-w-sm data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full duration-300 ease-out",
        side === "top" && "inset-x-0 top-0 h-[40vh] data-[state=open]:translate-y-0 data-[state=closed]:-translate-y-full duration-300 ease-out",
        side === "bottom" && "inset-x-0 bottom-0 h-[40vh] data-[state=open]:translate-y-0 data-[state=closed]:translate-y-full duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </Dialog.Content>
  </SheetPortal>
))
SheetContent.displayName = "SheetContent"
