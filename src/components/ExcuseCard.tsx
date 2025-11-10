import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ExcuseCardProps {
  reason: string;
  index: number;
}

export function ExcuseCard({ reason, index }: ExcuseCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reason);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-start gap-3 hover:shadow-lg transition-all duration-200 animate-slide-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex-1">
        <p className="text-gray-800 dark:text-slate-100 text-base leading-relaxed">{reason}</p>
      </div>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
