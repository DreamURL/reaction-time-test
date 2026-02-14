import React, { useState, useRef, useCallback, useEffect } from 'react';
import './src/index.css';
import type { GameState, Language, Page } from './src/types';
import { translations } from './src/translations';

const TOTAL_ROUNDS = 5;
const DOT_SIZE = 28;
const MIN_DELAY = 500;
const MAX_DELAY = 3500;
const TARGET_AVERAGE_DELAY = 1300;
const DECOY_CHANCE = 0.7;

const REACTION_GRADES_CONFIG = [
  { min: 0, max: 150, color: 'border-purple-500' },
  { min: 151, max: 250, color: 'border-sky-400' },
  { min: 251, max: 350, color: 'border-yellow-400' },
  { min: 351, max: 450, color: 'border-slate-400' },
  { min: 451, max: 600, color: 'border-orange-900' },
  { min: 601, max: Infinity, color: 'border-red-500' },
];

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const randomExponential = (rate: number): number => {
  let u = 0;
  while (u === 0) u = Math.random();
  return -Math.log(u) / rate;
};

// Navigation Component
const Navigation = ({
  currentPage,
  setCurrentPage,
  t
}: {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  t: typeof translations['en'];
}) => (
  <nav className="w-full max-w-4xl mb-6">
    <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
      {(['home', 'faq', 'guides', 'science', 'about', 'privacy', 'contact'] as Page[]).map((page) => (
        <li key={page}>
          <button
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 text-sm md:text-base rounded-lg transition-colors duration-200 ${
              currentPage === page
                ? 'bg-gray-900 text-white font-bold'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t.nav[page]}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

// Footer Component
const Footer = ({ t }: { t: typeof translations['en'] }) => (
  <footer className="w-full max-w-4xl mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
    <p>{t.footer.copyright}</p>
  </footer>
);

// FAQ Page Component
const FAQPage = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t.faq.title}</h1>
    <p className="text-gray-600 text-center mb-8">{t.faq.description}</p>
    
    <div className="space-y-6">
      {t.faq.questions.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            <span className="text-blue-600">Q{index + 1}.</span> {faq.question}
          </h2>
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

// Guides Page Component
const GuidesPage = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t.guides.title}</h1>
    <p className="text-gray-600 text-center mb-8">{t.guides.description}</p>
    
    <div className="space-y-8">
      {t.guides.sections.map((section, index) => (
        <section key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">{section.icon}</span>
            {section.title}
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
            {section.tips && (
              <ul className="mt-4 space-y-2">
                {section.tips.map((tip, tIndex) => (
                  <li key={tIndex} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  </div>
);

// Science Page Component
const SciencePage = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t.science.title}</h1>
    <p className="text-gray-600 text-center mb-8">{t.science.description}</p>
    
    <div className="space-y-8">
      {t.science.sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">{section.icon}</span>
            {section.title}
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-3">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
          {section.keyPoints && (
            <ul className="mt-4 space-y-2">
              {section.keyPoints.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  </div>
);

// About Page Component
const AboutPage = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t.about.title}</h1>

    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.mission.title}</h2>
      <p className="text-gray-600 leading-relaxed">{t.about.mission.content}</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.features.title}</h2>
      <ul className="space-y-2">
        {t.about.features.items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="text-green-500 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.whyImportant.title}</h2>
      <p className="text-gray-600 leading-relaxed">{t.about.whyImportant.content}</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.founders.title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {t.about.founders.members.map((member, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.about.history.title}</h2>
      <div className="space-y-4">
        {t.about.history.milestones.map((milestone, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-24 text-sm font-bold text-blue-600">{milestone.date}</div>
            <p className="text-gray-600">{milestone.event}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// Privacy Page Component
const PrivacyPage = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">{t.privacy.title}</h1>
    <p className="text-gray-500 text-center mb-8">{t.privacy.lastUpdated}</p>

    <div className="space-y-6">
      {t.privacy.sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h2>
          <p className="text-gray-600 leading-relaxed">{section.content}</p>
        </section>
      ))}
    </div>
  </div>
);

// Contact Page Component
const ContactPage = ({ t }: { t: typeof translations['en'] }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">{t.contact.title}</h1>
      <p className="text-gray-600 text-center mb-8">{t.contact.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">{t.contact.email}</h3>
            <a href="mailto:contact@dreamurl.io" className="text-blue-600 hover:underline">
              contact@dreamurl.io
            </a>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">{t.contact.github}</h3>
            <a
              href="https://github.com/dreamurl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/dreamurl
            </a>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-gray-800 mb-2">{t.contact.faq}</h3>
            <p className="text-gray-600 text-sm">{t.contact.faqDescription}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">{t.contact.form.name}</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">{t.contact.form.email}</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">{t.contact.form.message}</label>
            <textarea
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
          >
            {t.contact.form.submit}
          </button>
          {formStatus === 'success' && (
            <p className="text-green-600 text-center">{t.contact.form.success}</p>
          )}
        </form>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ t, onStartGame }: { t: typeof translations['en']; onStartGame: () => void }) => (
  <div className="w-full max-w-4xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 md:p-12 text-white mb-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
      <p className="text-xl md:text-2xl mb-6 opacity-90">{t.hero.subtitle}</p>
      <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">{t.hero.description}</p>
      <button
        onClick={onStartGame}
        className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
      >
        {t.hero.cta}
      </button>
    </div>
  </div>
);

// Quick Tips Component
const QuickTips = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.quickTips.title}</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {t.quickTips.tips.map((tip, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">{tip.icon}</div>
          <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
          <p className="text-gray-600 text-sm">{tip.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// Game Section Component
const GameSection = ({ t }: { t: typeof translations['en'] }) => {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [round, setRound] = useState<number>(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [targetPosition, setTargetPosition] = useState<{ top: number; left: number }>({ top: -100, left: -100 });
  const [decoyPosition, setDecoyPosition] = useState<{ top: number; left: number }>({ top: -100, left: -100 });
  const [showDecoy, setShowDecoy] = useState<boolean>(false);
  const [finishReason, setFinishReason] = useState<'success' | 'decoy' | null>(null);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const showTarget = useCallback(() => {
    if (!gameAreaRef.current) return;

    const { clientWidth, clientHeight } = gameAreaRef.current;

    const generatePosition = () => ({
        top: Math.random() * (clientHeight - DOT_SIZE),
        left: Math.random() * (clientWidth - DOT_SIZE)
    });

    const pos1 = generatePosition();
    let pos2 = generatePosition();

    const areOverlapping = (p1: { top: number, left: number }, p2: { top: number, left: number }) => {
        const dx = p1.left - p2.left;
        const dy = p1.top - p2.top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < DOT_SIZE * 2;
    };

    const shouldShowDecoy = round >= 3 && Math.random() < DECOY_CHANCE;
    setShowDecoy(shouldShowDecoy);

    if (shouldShowDecoy) {
        while (areOverlapping(pos1, pos2)) {
            pos2 = generatePosition();
        }
        setDecoyPosition(pos2);
    }

    setTargetPosition(pos1);
    setGameState('playing');
    startTimeRef.current = Date.now();
  }, [round]);

  const scheduleNextTarget = useCallback(() => {
    clearTimer();
    setTargetPosition({ top: -100, left: -100 });
    setDecoyPosition({ top: -100, left: -100 });
    setShowDecoy(false);

    const rate = 1 / TARGET_AVERAGE_DELAY;
    let delay = randomExponential(rate);
    delay = Math.max(MIN_DELAY, Math.min(delay, MAX_DELAY));

    timerRef.current = setTimeout(showTarget, Math.round(delay));
  }, [clearTimer, showTarget]);

  const startGame = useCallback(() => {
    setReactionTimes([]);
    setRound(1);
    setShowDecoy(false);
    setFinishReason(null);
    setGameState('waiting');
    scheduleNextTarget();
    
    // Scroll to game area
    setTimeout(() => {
      gameAreaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }, [scheduleNextTarget]);

  const handleNormalTargetClick = useCallback(() => {
    if (gameState !== 'playing') return;

    clearTimer();

    const endTime = Date.now();
    const time = endTime - startTimeRef.current;
    setReactionTimes((currentTimes: number[]) => [...currentTimes, time]);

    if (round < TOTAL_ROUNDS) {
      setRound((prev: number) => prev + 1);
      setGameState('waiting');
      scheduleNextTarget();
    } else {
      setGameState('finished');
      setFinishReason('success');
    }
  }, [gameState, round, clearTimer, scheduleNextTarget]);

  const handleDecoyClick = useCallback(() => {
      if (gameState !== 'playing') return;
      clearTimer();
      setGameState('finished');
      setFinishReason('decoy');
  }, [gameState, clearTimer]);

  const averageTime = reactionTimes.length > 0
    ? Math.round(reactionTimes.reduce((a: number, b: number) => a + b, 0) / reactionTimes.length)
    : 0;

  const getStatusMessage = () => {
    switch (gameState) {
      case 'idle':
        return t.statusIdle;
      case 'waiting':
        return t.statusWaiting.replace('{round}', String(round)).replace('{totalRounds}', String(TOTAL_ROUNDS));
      case 'playing':
        return t.statusPlaying.replace('{round}', String(round)).replace('{totalRounds}', String(TOTAL_ROUNDS));
      case 'finished':
        return finishReason === 'decoy' ? t.gameOverDecoy : t.statusFinished;
      default:
        return '';
    }
  };

  const reactionGrades = REACTION_GRADES_CONFIG.map((config, index) => ({
      ...config,
      ...t.grades[index],
  }));

  const userGrade = gameState === 'finished' && finishReason === 'success'
    ? reactionGrades.find(g => averageTime >= g.min && averageTime <= g.max)
    : null;

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
      <header className="w-full text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{t.title}</h2>
        <p className="text-gray-500 mt-2 min-h-[24px]">{getStatusMessage()}</p>
      </header>

      <div
        ref={gameAreaRef}
        className="relative w-full h-64 md:h-96 bg-gray-100 rounded-lg border border-gray-200 cursor-crosshair overflow-hidden"
      >
        {gameState === 'playing' && (
          <>
            <div
              className="absolute rounded-full bg-black"
              style={{
                top: `${targetPosition.top}px`,
                left: `${targetPosition.left}px`,
                width: `${DOT_SIZE}px`,
                height: `${DOT_SIZE}px`,
              }}
              onClick={handleNormalTargetClick}
              role="button"
              aria-label="target"
            />
            {showDecoy && (
               <div
                  className="absolute rounded-full bg-red-500"
                  style={{
                    top: `${decoyPosition.top}px`,
                    left: `${decoyPosition.left}px`,
                    width: `${DOT_SIZE}px`,
                    height: `${DOT_SIZE}px`,
                  }}
                  onClick={handleDecoyClick}
                  role="button"
                  aria-label="decoy target"
              />
            )}
          </>
        )}
      </div>

      <div className="w-full mt-6 text-center min-h-[124px] flex items-center justify-center">
        {gameState === 'idle' && (
          <button
            onClick={startGame}
            className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            {t.startGame}
          </button>
        )}

        {gameState === 'finished' && (
          <div className="flex flex-col items-center gap-4">
            {finishReason === 'success' ? (
              <div className="text-center">
                <p className="text-gray-600">{t.avgReactionTime}</p>
                <p className="text-5xl font-bold text-gray-900">{averageTime}ms</p>
              </div>
            ) : (
               <p className="text-3xl font-bold text-red-500">{t.gameOverDecoy}</p>
            )}
            <button
              onClick={startGame}
              className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              {t.playAgain}
            </button>
          </div>
        )}
      </div>

      {/* Grades Section */}
      <div className="w-full mt-8 pt-6 border-t border-gray-200">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">{t.gradesTitle}</h2>
        <div className="flex flex-col gap-4">
          {reactionGrades.map(({ min, max, grade, description, color }) => (
            <div
              key={grade}
              className={`p-4 rounded-lg bg-white border border-gray-200 border-l-4 ${color} transition-all duration-300 ${userGrade?.grade === grade ? 'ring-2 ring-offset-2 ring-offset-white ring-gray-900 scale-105 shadow-md' : 'shadow-sm'}`}
            >
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900 text-lg">{grade}</h3>
                <span className="text-sm font-mono text-gray-500">
                  {max === Infinity ? `> ${min - 1}ms` : `${min}-${max}ms`}
                </span>
              </div>
              <div className="text-gray-600 text-base mt-3 space-y-3">
                <p>{description.general}</p>
                <div className="font-medium text-gray-800 space-y-1">
                    <p><span className="font-bold text-sky-500">Overwatch:</span> {description.overwatch}</p>
                    <p><span className="font-bold text-violet-500">LoL:</span> {description.lol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Additional Content Sections
const ContentSections = ({ t }: { t: typeof translations['en'] }) => (
  <div className="w-full max-w-4xl mt-8 space-y-8">
    {/* What is Reaction Time */}
    <section className="p-6 bg-blue-50 rounded-lg border border-blue-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-3xl">🧠</span>
        {t.content.whatIsReactionTime.title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{t.content.whatIsReactionTime.description}</p>
    </section>

    {/* How to Play */}
    <section className="p-6 bg-green-50 rounded-lg border border-green-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-3xl">🎮</span>
        {t.content.howToPlay.title}
      </h2>
      <ol className="space-y-2">
        {t.content.howToPlay.steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>

    {/* How to Improve */}
    <section className="p-6 bg-yellow-50 rounded-lg border border-yellow-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-3xl">💪</span>
        {t.content.howToImprove.title}
      </h2>
      <ul className="space-y-2">
        {t.content.howToImprove.tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="text-yellow-500 mt-1">•</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Fun Facts */}
    <section className="p-6 bg-purple-50 rounded-lg border border-purple-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-3xl">✨</span>
        {t.content.funFacts.title}
      </h2>
      <ul className="space-y-2">
        {t.content.funFacts.facts.map((fact, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="text-purple-500 mt-1">★</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Pro Gamer Comparison */}
    <section className="p-6 bg-orange-50 rounded-lg border border-orange-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-3xl">🏆</span>
        {t.content.proGamer.title}
      </h2>
      <div className="space-y-4">
        {t.content.proGamer.games.map((game, index) => (
          <div key={index} className="p-4 bg-white rounded-lg border border-orange-200">
            <h3 className="font-bold text-gray-900 mb-2">{game.name}</h3>
            <p className="text-gray-600 mb-2">{game.description}</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-orange-600">Avg: {game.avgReaction}</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">{game.topPlayers}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Age and Reaction Time */}
    <section className="p-6 bg-pink-50 rounded-lg border border-pink-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-3xl">📊</span>
        {t.content.ageReaction.title}
      </h2>
      <p className="text-gray-600 mb-4">{t.content.ageReaction.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {t.content.ageReaction.ages.map((age, index) => (
          <div key={index} className="p-3 bg-white rounded-lg border border-pink-200 text-center">
            <div className="font-bold text-gray-900">{age.range}</div>
            <div className="text-sm text-gray-600">{age.avgTime}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

// Home Page Component
const HomePage = ({ t }: { t: typeof translations['en'] }) => {
  const gameSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToGame = useCallback(() => {
    gameSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection t={t} onStartGame={scrollToGame} />
      <QuickTips t={t} />
      <div ref={gameSectionRef}>
        <GameSection t={t} />
      </div>
      <ContentSections t={t} />
    </div>
  );
};

const App = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const t = translations[language];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage t={t} />;
      case 'faq':
        return <FAQPage t={t} />;
      case 'guides':
        return <GuidesPage t={t} />;
      case 'science':
        return <SciencePage t={t} />;
      case 'about':
        return <AboutPage t={t} />;
      case 'privacy':
        return <PrivacyPage t={t} />;
      case 'contact':
        return <ContactPage t={t} />;
      default:
        return <HomePage t={t} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center justify-start p-4 font-sans">
      {/* Language Selector */}
      <div className="w-full max-w-4xl flex justify-center mb-4 space-x-2">
        {LANGUAGES.map(({ code, name, flag }) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 flex items-center gap-2 ${
              language === code
                ? 'bg-gray-900 text-white font-bold shadow-sm'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span>{flag}</span>
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} t={t} />

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
};

export default App;