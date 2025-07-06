
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  const initialCommands = [
    { cmd: 'whoami', delay: 500 },
    { cmd: 'skills', delay: 2000 },
  ];

  useEffect(() => {
    // Animação inicial
    if (!initialAnimationDone) {
      let totalDelay = 0;
      
      initialCommands.forEach(({ cmd, delay }) => {
        totalDelay += delay;
        
        setTimeout(() => {
          setCommand(cmd);
          setTimeout(() => {
            processCommand(cmd);
            setCommand('');
          }, 800);
        }, totalDelay);
      });
      
      setTimeout(() => {
        setInitialAnimationDone(true);
      }, totalDelay + 1000);
    }
    
    // Animação do cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, [initialAnimationDone]);

  const processCommand = (cmd: string) => {
    const commands: Record<string, string[]> = {
      'help': [
        'Comandos disponíveis:',
        '• whoami - Exibe informações sobre Dudu Vieira',
        '• skills - Lista habilidades técnicas',
        '• projects - Mostra projetos principais',
        '• education - Exibe formação acadêmica',
        '• clear - Limpa o terminal',
        '• contact - Exibe informações de contato'
      ],
      'whoami': [
        'Dudu Vieira',
        '-------------------------',
        'Desenvolvedor Full Stack & Mobile',
        'Formação: Técnico em Informática (IFMA)',
        'Cursando: Análise e Desenvolvimento de Sistemas',
        'Localização: Açailândia-MA, Brasil'
      ],
      'skills': [
        'Habilidades Técnicas:',
        '-------------------------',
        'FRONTEND: React, TypeScript, JavaScript, HTML, CSS',
        'MOBILE: React Native, Expo, Android, CodePush',
        'BACKEND: Node.js, Firebase, SQLite, REST API',
        'GAME DEV: Unity 3D, C#',
        'OUTROS: Git, GitHub, Redes, Hardware'
      ],
      'projects': [
        'Projetos Principais:',
        '-------------------------',
        'REDCOM - Jogo educativo sobre redes (Unity/C#)',
        'ARBORIZAR - App de identificação de árvores (React Native)',
        'ECOTOUR - App de sensibilização ecológica'
      ],
      'education': [
        'Formação:',
        '-------------------------',
        'Análise e Desenvolvimento de Sistemas',
        'Faculdade Descomplica - UNIAMÉRICA (2025-2027)',
        '',
        'Técnico em Informática',
        'IFMA - Campus Açailândia (2022-2025)'
      ],
      'contact': [
        'Contato:',
        '-------------------------',
        'Email: duduvieiradev@gmail.com',
        'LinkedIn: linkedin.com/in/dudu-vieira-dev'
      ],
      'clear': []
    };
    
    if (cmd.trim().toLowerCase() === 'clear') {
      setOutput([]);
      return;
    }
    
    const commandOutput = commands[cmd.trim().toLowerCase()] || [`Comando não reconhecido: ${cmd}. Digite 'help' para ver os comandos disponíveis.`];
    
    setOutput(prev => [...prev, `> ${cmd}`, ...commandOutput, '']);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && command.trim()) {
      processCommand(command);
      setCommand('');
    }
  };

  return (
    <motion.div
      className="w-full h-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center px-4 py-2 bg-muted border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm font-medium text-gray">Terminal ~ dudu@portfolio</div>
      </div>
      
      <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto font-mono text-sm">
        {output.map((line, index) => (
          <div key={index} className={`mb-1 ${line.startsWith('>') ? 'text-neon-blue' : 'text-gray'}`}>
            {line}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-neon-blue">λ</span>
          <span className="ml-2 text-white">{command}</span>
          {showCursor && <span className="w-2 h-5 ml-0.5 bg-neon-blue animate-pulse"></span>}
        </div>
      </div>
      
      <input
        type="text"
        className="absolute opacity-0"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </motion.div>
  );
};

export default Terminal;
