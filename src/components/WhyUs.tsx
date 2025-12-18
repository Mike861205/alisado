import { motion } from 'framer-motion'
import { Award, Leaf, Sparkles, Heart, Users } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Especialistas Certificados',
    description: 'Profesionales con años de experiencia y certificaciones internacionales en técnicas de alisado premium.',
  },
  {
    icon: Leaf,
    title: 'Productos Orgánicos y Veganos',
    description: 'Utilizamos productos libres de formol, parabenos y sulfatos. Fórmulas orgánicas y veganas certificadas.',
  },
  {
    icon: Sparkles,
    title: 'Resultados Naturales',
    description: 'Logramos un alisado natural que respeta la estructura de tu cabello, sin aspecto artificial.',
  },
  {
    icon: Heart,
    title: 'Cuidado de la Salud Capilar',
    description: 'Priorizamos la salud de tu cabello. Nuestros tratamientos nutren y fortalecen mientras alisan.',
  },
  {
    icon: Users,
    title: 'Alta Satisfacción de Clientes',
    description: 'Más del 98% de nuestras clientas recomiendan nuestros servicios. Tu satisfacción es nuestra prioridad.',
  },
]

const WhyUs = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#d4af37] font-medium text-sm tracking-wider uppercase">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[Playfair_Display] mt-3 mb-4 sm:mb-6">
              La Excelencia en{' '}
              <span className="text-[#d4af37]">Cuidado Capilar</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              En Alisado Permanente Premium nos dedicamos a transformar tu cabello
              con los tratamientos más avanzados y seguros del mercado. Tu belleza
              y salud capilar son nuestra pasión.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-8 border-t border-b border-gray-700">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4af37]">5+</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4af37]">1000+</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">Clientas felices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4af37]">98%</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">Satisfacción</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Reasons List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] rounded-xl flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
