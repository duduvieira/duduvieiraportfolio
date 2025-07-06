
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React Native', 'Node.js', 'TypeScript', 'JavaScript',
    'React', 'Firebase', 'REST API', 'Unity 3D',
    'SAP', 'Microsoft 365', 'Hardware', 'Networking'
  ];

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">Sobre</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Atuo como Assistente de TI na Cimento Açaí, garantindo a eficiência da infraestrutura 
                tecnológica e suporte ágil aos usuários. Minhas responsabilidades abrangem desde gestão 
                de acessos SAP e Microsoft 365 até manutenção completa de hardware e infraestrutura de rede.
              </p>
              
              <p>
                Cursando Análise e Desenvolvimento de Sistemas (Descomplica - UniAmérica), 
                utilizo minha experiência em desenvolvimento de software para aprimorar projetos 
                externos e pessoais.
              </p>
              
              <p>
                Meu objetivo é consolidar expertise que una desenvolvimento de software à gestão 
                de infraestrutura de TI, buscando projetos desafiadores onde essa sinergia seja 
                crucial para inovação.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-light">Principais Habilidades</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-2 bg-accent rounded-sm text-sm text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-medium mb-3">Formação Principal</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Análise e Desenvolvimento de Sistemas</p>
                <p>Descomplica - UniAmérica (2025-2027)</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Experiência</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Assistente de TI - Cimento Açaí</p>
                <p>+ outras formações complementares</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
