'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [showIntro, setShowIntro] = useState(false)
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50">
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Төлбөрийн хяналт',
              desc: 'Сард төлөх дүн болон төлбөрийн түүхээ харах боломжтой.',
            },
            {
              title: 'Санал хүсэлт илгээх',
              desc: 'Холбоонд шууд санал, гомдлоо илгээж шийдвэрлүүлэх.',
            },
            {
              title: 'Нэгдсэн мэдээлэл',
              desc: 'Зар, мэдэгдэл, санхүүгийн тайланг хамтдаа хянах.',
            },
            {
              title: 'Мобайл хандалт',
              desc: 'Гар утаснаас хялбар хандаж, мэдээллээ шалгах.',
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <Dialog>
                <DialogTrigger>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {f.desc}
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Бидний тухай</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Манай платформ нь орон сууцны байрны{' '}
            <strong>сууц өмчлөгчдийн холбоо</strong> болон{' '}
            <strong>оршин суугчдыг</strong> үр дүнтэй холбож өгдөг. Энэ нь оршин
            суугч бүр төлбөрөө хянах, мэдээлэл авах, санал хүсэлт илгээх
            боломжтой болгодог.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Бидний зорилго бол мэдээллийн ил тод байдал, харилцааны хурд, хамтын
            шийдвэр гаргалтыг дэмжих замаар амьдрах орчинг илүү зохион
            байгуулалттай, тав тухтай болгох юм.
          </p>
        </div>
      </motion.section>
    </main>
  )
}
