import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María García',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Increíble resultado! Mi cabello quedó súper liso y brillante. El tratamiento orgánico no maltrató nada mi pelo. 100% recomendado.',
  },
  {
    name: 'Ana Martínez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Llevaba años buscando un alisado que no dañara mi cabello. Aquí encontré exactamente eso. Profesionales y productos de primera.',
  },
  {
    name: 'Carolina López',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'El mejor salón para alisados en Cuenca. La atención es excelente y los resultados hablan por sí solos. Ya van 6 meses y sigue perfecto.',
  },
  {
    name: 'Lucía Fernández',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Me encantó el tratamiento vegano. Mi cabello nunca había estado tan saludable y manejable. Definitivamente volveré.',
  },
  {
    name: 'Sofía Rodríguez',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Excelente servicio y ambiente muy agradable. El alisado orgánico dejó mi cabello hermoso sin ese olor fuerte de otros tratamientos.',
  },
  {
    name: 'Valentina Torres',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'Tenía miedo de alisar mi cabello rizado pero aquí me explicaron todo el proceso. El resultado fue natural y hermoso. Gracias!',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-[#d4af37] font-medium text-sm tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-[Playfair_Display] mt-3">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#d4af37]/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Cliente verificada</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
