// src/components/DeepSeekChat.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useDeepSeek } from '../hooks/useDeepSeek';
import { env } from '../config/env';

const DeepSeekChat: React.FC = () => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const { messages, isLoading, error, sendMessage, clearMessages, isConfigured } = useDeepSeek();

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Ajuster la hauteur du textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !isConfigured) return;

    await sendMessage(input);
    setInput('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Écran de configuration manquante
  if (!isConfigured) {
    return (
      <div className="config-screen">
        <div className="config-container">
          <div className="config-header">
            <h1>🤖 DeepSeek Chat</h1>
            <p>Configurez votre clé API pour commencer</p>
          </div>
          
          <div className="config-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Obtenez votre clé API</h3>
                <p>
                  Rendez-vous sur{' '}
                  <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener noreferrer">
                    platform.deepseek.com
                  </a>{' '}
                  et créez une clé API gratuite
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Créez le fichier .env</h3>
                <p>À la racine de votre projet, créez un fichier <code>.env</code> :</p>
                <div className="code-block">
                  <code>VITE_DEEPSEEK_API_KEY=ds_votre_cle_api_ici</code>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Redémarrez l'application</h3>
                <p>Redémarrez le serveur de développement :</p>
                <div className="code-block">
                  <code>npm run dev</code>
                </div>
              </div>
            </div>
          </div>

          <div className="current-env">
            <p>Variable actuelle :</p>
            <code>{env.deepseekApiKey || 'Non définie'}</code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-app">
      {/* En-tête */}
      <header className="chat-header">
        <div className="header-left">
          <h1>🤖 DeepSeek Chat</h1>
          <span className="status-badge">
            {isLoading ? '🔄 En cours...' : '✅ Connecté'}
          </span>
        </div>
        
        <div className="header-actions">
          <button 
            onClick={clearMessages}
            disabled={isLoading || messages.length === 0}
            className="clear-button"
            title="Nouvelle conversation"
          >
            🗑️ Nouvelle discussion
          </button>
        </div>
      </header>

      {/* Messages d'erreur */}
      {error && (
        <div className="error-banner">
          <span>⚠️ {error}</span>
          <button onClick={() => clearMessages()} className="error-close">
            ×
          </button>
        </div>
      )}

      {/* Zone de messages */}
      <main className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <div className="welcome-message">
              <h2>Bonjour ! 👋</h2>
              <p>Je suis votre assistant DeepSeek. Posez-moi n'importe quelle question !</p>
              
              <div className="suggestions">
                <p>Quelques idées pour commencer :</p>
                <div className="suggestion-chips">
                  <button 
                    onClick={() => setInput("Explique-moi l'IA générative simplement")}
                    className="suggestion-chip"
                  >
                    Explique l'IA générative
                  </button>
                  <button 
                    onClick={() => setInput("Aide-moi à écrire un email professionnel")}
                    className="suggestion-chip"
                  >
                    Écrire un email
                  </button>
                  <button 
                    onClick={() => setInput("Donne-moi des idées de projet React")}
                    className="suggestion-chip"
                  >
                    Idées de projet React
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="messages-list">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-avatar">
                  {message.role === 'user' ? '👤' : '🤖'}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {message.content.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < message.content.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString('fr-FR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message assistant-message typing">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* Formulaire d'envoi */}
      <footer className="chat-footer">
        <form onSubmit={handleSubmit} className="message-form">
          <div className="input-container">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Tapez votre message... (Entrée pour envoyer, Shift+Entrée pour nouvelle ligne)"
              disabled={isLoading}
              rows={1}
              className="message-input"
            />
            
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="send-button"
              title="Envoyer le message"
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                '🚀'
              )}
            </button>
          </div>
          
          <div className="input-help">
            <span>DeepSeek peut faire des erreurs. Vérifiez les informations importantes.</span>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default DeepSeekChat;