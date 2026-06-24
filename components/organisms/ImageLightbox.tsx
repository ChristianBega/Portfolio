'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ImageLightboxProps {
  src: string
  alt: string
  open: boolean
  onClose: () => void
}

export default function ImageLightbox({ src, alt, open, onClose }: ImageLightboxProps) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(10, 13, 23, 0.92)' }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-card text-text-primary transition-colors hover:bg-surface"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <i className="ti ti-x text-[20px]" aria-hidden="true" />
          </button>

          <motion.div
            className="relative h-[85vh] w-full max-w-5xl"
            initial={reduced ? false : { scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduced ? undefined : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="rounded-[13px] object-contain"
              sizes="(max-width: 1024px) 95vw, 1024px"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
