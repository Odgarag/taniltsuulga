'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Оршин суугчид болон СӨХ <br /> нэг платформоор холбож байна
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300"
        >
          E-Apartment бол СӨХ болон оршин суугчид хоорондын харилцаа, төлбөрийн
          хяналт, санал хүсэлтийг нэг дор төвлөрүүлсэн платформ юм.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            size="lg"
            onClick={() => (window.location.href = '/taniltsah')}
          >
            Танилцах
          </Button>
        </motion.div>
      </section>
    </main>
  )
}
