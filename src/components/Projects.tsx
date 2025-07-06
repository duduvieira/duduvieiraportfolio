
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'REDCOM',
      description: 'Jogo educativo para ensino de redes de computadores usando Unity 3D e C#',
      tags: ['Unity 3D', 'C#', 'Educação'],
      status: 'Publicado',
      link: 'https://virtual.febrace.org.br/2024/EXA/5949/'
    },
    {
      title: 'ARBORIZAR',
      description: 'App que identifica espécies arbóreas com inteligência artificial',
      tags: ['React Native', 'Expo', 'Firebase'],
      status: 'Desenvolvido',
      link: 'https://www.even3.com.br/anais/connepi-belem-2024/833208-arborizar--tecnologia-e-inteligencia-artificial-como-meio-de-informacao-para-arborizacao-urbana/'
    },
    {
      title: 'ECOTOUR',
      description: 'Aplicativo para sensibilização ecológica sobre balneários',
      tags: ['Pesquisa', 'Sustentabilidade'],
      status: 'Pesquisa',
      link: 'https://www.even3.com.br/anais/connepi-belem-2024/833571-ecotour--dispositivo-mobile-para-recomendacao-de-balnearios-e-conscientizacao-ambiental-na-cidade-de-acailandia/'
    }
  ];

  return (
    <section id="projetos" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-2xl md:text-3xl font-light">Projetos</h2>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-border p-6 hover:bg-accent/50 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground px-2 py-1 bg-muted">
                        {project.status}
                      </span>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-background border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
