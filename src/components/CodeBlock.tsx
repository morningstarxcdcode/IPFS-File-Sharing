import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700">{language}</span>
          </div>
        </div>
      )}
      <div className="relative">
        <pre className="code-block overflow-x-auto p-4 text-sm text-gray-800">
          <code>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-500" />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;