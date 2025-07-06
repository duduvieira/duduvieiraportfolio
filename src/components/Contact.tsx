
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-light">Contato</h2>
          
          <p className="text-muted-foreground">
            Interessado em colaborar ou saber mais sobre meu trabalho?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:duduvieiradev@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-3 border border-border hover:bg-accent transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              <span className="text-sm">Email</span>
            </motion.a>

            <motion.a
              href="https://wa.me/5599992075219"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 border border-border hover:bg-accent transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare size={16} />
              <span className="text-sm">WhatsApp</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/dudu-vieira-dev/"
              target="_blank"
              rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 px-6 py-3 border border-border hover:bg-accent transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin size={16} />
              <span className="text-sm">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
