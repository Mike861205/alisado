import { motion } from 'framer-motion'
import { Leaf, Sparkles, Heart, Wind, Droplets } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Alisado Permanente Orgánico',
    description: 'Fórmula libre de formol con ingredientes naturales. Resultados duraderos de 4 a 6 meses con máximo brillo y suavidad.',
    highlight: 'Sin químicos agresivos',
  },
  {
    icon: Sparkles,
    title: 'Alisado Vegano Premium',
    description: 'Tratamiento 100% vegano y cruelty-free. Ideal para cabellos sensibles, nutre mientras alisa.',
    highlight: '100% Vegano',
  },
  {
    icon: Heart,
    title: 'Tratamientos Reparadores',
    description: 'Restaura cabellos dañados por procesos químicos. Reconstrucción profunda de la fibra capilar.',
    highlight: 'Reparación intensa',
  },
  {
    icon: Wind,
    title: 'Control de Frizz',
    description: 'Elimina el frizz y encrespamiento. Mantén tu cabello liso y manejable en cualquier clima.',
    highlight: 'Resultados inmediatos',
  },
  {
    icon: Droplets,
    title: 'Nutrición Profunda',
    description: 'Hidratación intensiva con keratina y aceites naturales. Devuelve la vitalidad a tu cabello.',
    highlight: 'Hidratación extrema',
  },
]

const Services = () => {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 bg-[#f5f0e8]">
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
            Nuestros Servicios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-[Playfair_Display] mt-3">
            Tratamientos Premium
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Ofrecemos los mejores tratamientos de alisado con productos de alta calidad
            que cuidan y embellecen tu cabello.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[#d4af37] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="inline-block bg-[#f5f0e8] text-[#d4af37] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {service.highlight}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/593987226871?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#d4af37] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b8962f] transition-colors shadow-lg"
          >
            <span>Consulta precios y disponibilidad</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
