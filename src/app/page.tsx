'use client'

import { motion } from 'framer-motion'
import { img } from 'framer-motion/client'
import { useEffect } from 'react'

export default function PresentationPage() {
  useEffect(() => {
    document.title = 'eApartment - Танилцуулга'
  }, [])
  const Array = [
    {
      name: 'Б. Наранцогт',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/v1754540935/untitled-90_hkhbo0.jpg',
      role: 'Full stack developer',
    },
    {
      name: 'Н. Гүндсамба',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/v1754540937/untitled-112_f0nclf.jpg',
      role: 'Full stack developer',
    },
    {
      name: 'Г. Хувьтөгөлдөр',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/f_auto/IMG_4793_wn6ktx.heic',
      role: 'Full stack developer',
    },
    {
      name: 'С. Одгараг',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/v1754540540/a4bb8c0f-d3e0-45d7-9148-4445a6572334_marpcs.jpg',
      role: 'Full stack developer',
    },
    {
      name: 'Т. Бумбарай',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/v1754540938/untitled-108_t98coi.jpg',
      role: 'Full stack developer',
    },
    {
      name: 'М. Эрдэнэсувд',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/v1754540937/untitled-94_qilhob.jpg',
      role: 'Full stack developer',
    },
    {
      name: 'Алимаа',
      img: 'https://res.cloudinary.com/docvcxodh/image/upload/v1754540934/untitled-140_qj2nvi.jpg',
      role: 'Full stack developer',
    },
  ]

  return (
    <main className="scroll-smooth text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold"
        >
          eApartment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl mt-4 max-w-xl"
        >
          Таны амьдрах орчныг ухаалаг, хялбар болгоно — хэрэглэгч төвтэй, бүрэн
          шийдэл бүхий платформ.
        </motion.p>
        <motion.a
          href="#problem"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition"
        >
          Танилцуулга үзэх
        </motion.a>
      </section>

      <section
        id="problem"
        className="min-h-screen py-24 px-6 flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Асуудал юу вэ?
        </motion.h2>
        <motion.ul className="space-y-6 max-w-3xl text-lg text-center">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🧾 Оршин суугчдын төлбөрийн мэдээлэл алдагддаг, гар аргаар
            бүртгэдэг.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            📉 Санхүү, орлого, зардлын тайлан тодорхой бус байдаг.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            🔒 Мэдээлэл найдвартай хадгалагдахгүй.
          </motion.li>
          <motion.a
            href="#solution"
            whileHover={{ scale: 1.1 }}
            className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            Бидний шийдэл
          </motion.a>
        </motion.ul>
      </section>

      <section
        id="solution"
        className="min-h-screen py-24 px-6 flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Бидний Шийдэл
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            [
              '💳 Онлайн төлбөр төлөх систем',
              'Төлбөрийг онлайнаар хялбар төлөх, бүртгэх боломж.',
            ],
            [
              '📊 Тайлангийн хяналт',
              'Орлого, зардал, үлдэгдлийн дэлгэрэнгүй хяналт.',
            ],
            [
              '🏘 Байрны удирдлага',
              'Орон сууц, оршин суугчдыг удирдах нэгж бүрдүүлэлт.',
            ],
            ['📩 Харилцаа холбоо', 'Санал хүсэлт илгээх, мэдэгдэл авах.'],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.a
          href="#team"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition"
        >
          Багын танилцуулга
        </motion.a>
      </section>

      <section
        id="team"
        className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-gray-900"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 -mt-20"
        >
          Багын Танилцуулга
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Array.map((_, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <img
                className="w-24 h-24 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 mb-4"
                src={_.img}
                alt={_.name}
                style={{ objectFit: 'cover' }}
              />
              <h4 className="font-semibold text-lg">{_.name}</h4>
              <p className="text-sm">{_.role}</p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="#demo"
          whileHover={{ scale: 1.1 }}
          className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-800 transition ml-155"
        >
          Веб Demo үзэх
        </motion.a>
      </section>

      <section id="demo" className="py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Төслийн Demo
        </motion.h2>
        <p className="mb-6 text-lg">
          Манай платформыг доорх холбоосоор орж үзнэ үү.
        </p>
        <img
          src="https://res.cloudinary.com/docvcxodh/image/upload/v1754539505/frame_dsxb9b.png"
          alt="Төслийн Demo"
          className="mx-auto mb-6 w-[30%]"
        />
        <a
          href="https://e-apartment.vercel.app"
          target="_blank"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          Платформ үзэх
        </a>
      </section>
    </main>
  )
}
