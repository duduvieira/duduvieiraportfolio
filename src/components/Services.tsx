
import { motion } from 'framer-motion';
import { Code, Bot, Palette, Video, TrendingUp, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Sites rápidos, modernos e responsivos.',
      icon: Code
    },
    {
      title: 'Automações & Bots',
      description: 'Soluções para automatizar tarefas e processos.', 
      icon: Bot
    },
    {
      title: 'Design Digital',
      description: 'Interfaces, identidade visual e edição de imagens.',
      icon: Palette
    },
    {
      title: 'Edição & Vídeo',
      description: 'Vídeos editados com foco e fluidez.',
      icon: Video
    },
    {
      title: 'Marketing Digital',
      description: 'Estratégias digitais, gestão de redes sociais e campanhas',
      icon: TrendingUp
    }
  ];

  return (
    <section id="serviços" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light">Serviços</h2>
            <p className="text-muted-foreground">
              Soluções completas em tecnologia, design e marketing digital para seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-border p-6 hover:bg-accent/50 transition-colors group"
                >
                  <div className="space-y-3">
                    <Icon size={24} className="text-foreground" />
                    <h3 className="text-lg font-medium">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
