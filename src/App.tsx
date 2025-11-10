import { useState } from 'react';
import { MessageSquareOff, Loader2 } from 'lucide-react';
import { ExcuseCard } from './components/ExcuseCard';
import { ThemeToggle } from './components/ThemeToggle';
import { fetchNewExcuse } from './services/excuseService';
import { useTheme } from './hooks/useTheme';

function App() {
  const [excuseHistory, setExcuseHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  async function handleGetExcuse() {
    setLoading(true);
    setError(null);

    try {
      const reason = await fetchNewExcuse();
      setExcuseHistory(prev => {
        const updated = [reason, ...prev];
        return updated.slice(0, 10);
      });
    } catch (err) {
      setError('Failed to fetch excuse. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-200 flex flex-col">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="container mx-auto px-4 py-12 max-w-3xl flex-grow">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageSquareOff className="w-12 h-12 text-slate-700" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            How About No?
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Need an excuse? We've got you covered.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <button
            onClick={handleGetExcuse}
            disabled={loading}
            className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 disabled:bg-slate-400 dark:disabled:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center gap-3 text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              'Give Me an Excuse'
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {excuseHistory.length > 0 ? (
          <div className="relative max-h-[500px] overflow-y-auto space-y-4 pb-4">
            {excuseHistory.map((reason, index) => (
              <div
                key={`${reason}-${index}`}
                style={{
                  opacity: index < 5 ? 1 - (index * 0.15) : 0.25,
                  transform: index < 5 ? 'none' : 'translateY(0)',
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                }}
              >
                <ExcuseCard reason={reason} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No excuses yet. Click the button to generate one!
            </p>
          </div>
        )}
      </div>

      <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-700 text-center space-y-2">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Powered by{' '}
          <a
            href="https://github.com/hotheadhacker/no-as-a-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:underline"
          >
            No-as-a-Service
          </a>
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Created by{' '}
          <a
            href="https://github.com/lloyd094"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:underline"
          >
            lloyd094
          </a>
          {' '}with{' '}
          <a
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-300 hover:underline"
          >
            Bolt.new
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
