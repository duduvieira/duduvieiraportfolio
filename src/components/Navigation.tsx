
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-lg font-medium cursor-pointer"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
        >
          dudu vieira
        </motion.div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm">
            {['sobre', 'projetos', 'serviços', 'contato'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-colors capitalize"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-accent/50 hover:bg-accent transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? 
              <Sun size={16} /> : 
              <Moon size={16} />
            }
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
