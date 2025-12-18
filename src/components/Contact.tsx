import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            Contacto
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-[Playfair_Display] mt-3">
            Visítanos o Contáctanos
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Estamos listos para atenderte y transformar tu cabello con los mejores tratamientos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Location */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#f5f0e8] rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#d4af37] rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Ubicación</h3>
                <p className="text-sm sm:text-base text-gray-600">Juan Jaramillo 8-38</p>
                <p className="text-sm sm:text-base text-gray-600">Cuenca, Ecuador</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#f5f0e8] rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#d4af37] rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Teléfono / WhatsApp</h3>
                <a 
                  href="tel:+593987226871" 
                  className="text-sm sm:text-base text-gray-600 hover:text-[#d4af37] transition-colors"
                >
                  +593 98 722 6871
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#f5f0e8] rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#d4af37] rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Horarios de Atención</h3>
                <p className="text-sm sm:text-base text-gray-600">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                <p className="text-sm sm:text-base text-gray-600">Sábados: 9:00 AM - 5:00 PM</p>
                <p className="text-sm sm:text-base text-gray-600">Domingos: Cerrado</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/593987226871?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 sm:space-x-3 bg-[#25D366] text-white p-4 sm:p-6 rounded-2xl font-semibold text-base sm:text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Agenda tu cita por WhatsApp</span>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.7967055738896!2d-79.00489542505557!3d-2.8973055971508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18095fc8f807%3A0x46e2c7e2f7254c0!2sJuan%20Jaramillo%2C%20Cuenca!5e0!3m2!1ses!2sec!4v1702900000000!5m2!1ses!2sec"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Alisado Permanente Premium"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
