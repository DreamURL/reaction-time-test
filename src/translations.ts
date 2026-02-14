import type { Language } from './types';

type GradeTranslation = {
  grade: string;
  description: {
    general: string;
    overwatch: string;
    lol: string;
  };
};

type TranslationSet = {
  // Navigation
  nav: {
    home: string;
    faq: string;
    guides: string;
    science: string;
    about: string;
    privacy: string;
    contact: string;
  };
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  // Quick Tips
  quickTips: {
    title: string;
    tips: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  // Game
  title: string;
  introduction: string;
  statusIdle: string;
  statusWaiting: string;
  statusPlaying: string;
  statusFinished: string;
  gameOverDecoy: string;
  avgReactionTime: string;
  startGame: string;
  playAgain: string;
  gradesTitle: string;
  grades: GradeTranslation[];
  // Content sections
  content: {
    whatIsReactionTime: {
      title: string;
      description: string;
    };
    howToImprove: {
      title: string;
      tips: string[];
    };
    howToPlay: {
      title: string;
      steps: string[];
    };
    funFacts: {
      title: string;
      facts: string[];
    };
    proGamer: {
      title: string;
      games: Array<{
        name: string;
        description: string;
        avgReaction: string;
        topPlayers: string;
      }>;
    };
    ageReaction: {
      title: string;
      description: string;
      ages: Array<{
        range: string;
        avgTime: string;
      }>;
    };
  };
  // FAQ
  faq: {
    title: string;
    description: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  // Guides
  guides: {
    title: string;
    description: string;
    sections: Array<{
      icon: string;
      title: string;
      content: string[];
      tips?: string[];
    }>;
  };
  // Science
  science: {
    title: string;
    description: string;
    sections: Array<{
      icon: string;
      title: string;
      content: string[];
      keyPoints?: string[];
    }>;
  };
  // About page
  about: {
    title: string;
    mission: {
      title: string;
      content: string;
    };
    features: {
      title: string;
      items: string[];
    };
    whyImportant: {
      title: string;
      content: string;
    };
    founders: {
      title: string;
      members: Array<{
        name: string;
        role: string;
        description: string;
      }>;
    };
    history: {
      title: string;
      milestones: Array<{
        date: string;
        event: string;
      }>;
    };
  };
  // Privacy page
  privacy: {
    title: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  // Contact page
  contact: {
    title: string;
    description: string;
    email: string;
    github: string;
    faq: string;
    faqDescription: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  // Footer
  footer: {
    copyright: string;
  };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    nav: {
      home: 'Home',
      faq: 'FAQ',
      guides: 'Guides',
      science: 'Science',
      about: 'About',
      privacy: 'Privacy',
      contact: 'Contact',
    },
    hero: {
      title: 'Test Your Reaction Time',
      subtitle: 'How fast can you react?',
      description: 'Discover your reaction speed in milliseconds and see how you compare to pro gamers and average person. Free, accurate, and fun!',
      cta: 'Start Test Now',
    },
    quickTips: {
      title: 'Quick Tips for Better Performance',
      tips: [
        {
          icon: '😴',
          title: 'Get Enough Sleep',
          description: 'Fatigue can slow your reaction time by up to 20%. Aim for 7-9 hours of quality sleep.',
        },
        {
          icon: '💧',
          title: 'Stay Hydrated',
          description: 'Dehydration impairs cognitive function. Drink water regularly throughout day.',
        },
        {
          icon: '🎯',
          title: 'Practice Regularly',
          description: 'Consistent practice can improve reaction time by 10-15% over several weeks.',
        },
      ],
    },
    title: 'Reaction Time Test',
    introduction: 'A simple test to measure your reaction time to a visual stimulus. Rules are simple: click the black dot as soon as it appears. In later rounds, avoid the red decoy dots! The average human reaction time is ~250ms. With practice, many can reach 200ms. Feel free to test as many times as you like.',
    statusIdle: 'Click "Start" to begin.',
    statusWaiting: 'Round {round}/{totalRounds}. Get ready...',
    statusPlaying: 'Round {round}/{totalRounds}. Click the BLACK dot!',
    statusFinished: 'Game Over!',
    gameOverDecoy: 'Game Over! You clicked the red dot.',
    avgReactionTime: 'Your average reaction time is:',
    startGame: 'Start Game',
    playAgain: 'Play Again',
    gradesTitle: 'Reaction Time Grades',
    grades: [
      { grade: 'God Tier', description: { general: 'Are you human? Unbelievable reaction speed.', overwatch: 'Perfect for a Tracer/Genji main, dominating the backline.', lol: 'You belong in the mid lane playing assassins like Zed or Akali.' } },
      { grade: 'Diamond', description: { general: 'Pro-level speed. You can react to anything.', overwatch: 'Excel as a hitscan DPS like Cassidy or Ashe.', lol: 'A perfect fit for an ADC like Kai\'Sa or Vayne who needs to dodge everything.' } },
      { grade: 'Gold', description: { general: 'Excellent! Faster than most players.', overwatch: 'You\'d be a great playmaking support like Ana or Kiriko.', lol: 'Try a versatile Jungler like Lee Sin to make plays across the map.' } },
      { grade: 'Silver', description: { general: 'Solid and reliable. A dependable teammate.', overwatch: 'A reliable Tank like Reinhardt or D.Va would suit you well.', lol: 'You\'d do well in the Top lane with a strong frontliner like Garen or Ornn.' } },
      { grade: 'Bronze', description: { general: 'Perfectly normal human reaction time.', overwatch: 'Try a support with consistent value that doesn\'t require flick shots, like Mercy.', lol: 'A scaling mage like Lux or Veigar would be a good fit.' } },
      { grade: 'Needs Practice', description: { general: 'A bit on the slower side, but practice makes perfect!', overwatch: 'Start with a straightforward tank like Winston to learn the game sense.', lol: 'Learn the ropes with a simple and effective support like Janna or Soraka.' } },
    ],
    content: {
      whatIsReactionTime: {
        title: 'What is Reaction Time?',
        description: 'Reaction time is the interval between the presentation of a stimulus and the initiation of the muscular response to that stimulus. It is a crucial cognitive ability that affects performance in many activities, from sports to gaming to everyday tasks like driving. The average human reaction time to visual stimuli is approximately 250 milliseconds, though this can vary based on factors like age, fatigue, and practice.',
      },
      howToImprove: {
        title: 'How to Improve Your Reaction Time',
        tips: [
          'Get enough sleep - fatigue significantly slows reaction time',
          'Stay hydrated and maintain proper nutrition',
          'Practice regularly with reaction time tests',
          'Exercise regularly to improve overall cognitive function',
          'Reduce distractions and improve focus through meditation',
          'Play video games that require quick reflexes',
          'Avoid caffeine crashes - moderate caffeine can help',
        ],
      },
      howToPlay: {
        title: 'How to Play',
        steps: [
          'Click the "Start Game" button to begin',
          'Wait for the black dot to appear on the screen',
          'Click the black dot as quickly as possible',
          'Avoid clicking the red decoy dots in later rounds',
          'Complete 5 rounds to get your average reaction time',
          'Compare your results with the grade chart below',
        ],
      },
      funFacts: {
        title: 'Fun Facts About Reaction Time',
        facts: [
          'Professional esports players often have reaction times under 150ms',
          'Your reaction time is fastest in the afternoon, around 2-4 PM',
          'Audio stimuli typically produce faster reactions than visual stimuli',
          'The world record for fastest reaction time is around 120ms',
          'Reaction time naturally slows with age, starting around 24 years old',
        ],
      },
      proGamer: {
        title: 'Pro Gamer Reaction Times',
        games: [
          {
            name: 'Overwatch',
            description: 'Professional Overwatch players need lightning-fast reactions for hitscan heroes and ability usage.',
            avgReaction: '150-180ms',
            topPlayers: 'Top DPS: 130-150ms, Supports: 160-200ms',
          },
          {
            name: 'League of Legends',
            description: 'ADC players require the fastest reactions for dodging skill shots and positioning.',
            avgReaction: '160-200ms',
            topPlayers: 'Faker, Uzi: 160-180ms',
          },
          {
            name: 'CS:GO/CS2',
            description: 'Professional FPS players need exceptional reaction times for aim duels and peeking.',
            avgReaction: '140-180ms',
            topPlayers: 's1mple, ZywOo: 130-160ms',
          },
          {
            name: 'Valorant',
            description: 'Similar to CS:GO, Valorant pros need fast reactions for dueling opponents.',
            avgReaction: '150-190ms',
            topPlayers: 'TenZ, scream: 140-170ms',
          },
        ],
      },
      ageReaction: {
        title: 'Reaction Time by Age',
        description: 'Reaction time changes throughout your life. Here\'s how it typically varies by age group:',
        ages: [
          { range: '10-20', avgTime: '180-220ms' },
          { range: '20-30', avgTime: '200-240ms' },
          { range: '30-40', avgTime: '220-260ms' },
          { range: '40-50', avgTime: '240-280ms' },
        ],
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about reaction time testing and improvement.',
      questions: [
        {
          question: 'What is a good reaction time?',
          answer: 'A good reaction time is typically considered to be around 200-250 milliseconds. Professional athletes and gamers often have reaction times between 150-200ms. The average person has a reaction time of about 250ms. Anything below 200ms is considered excellent, while anything above 300ms might benefit from some practice.',
        },
        {
          question: 'Can I improve my reaction time?',
          answer: 'Yes! Reaction time can be improved with consistent practice. Studies show that regular reaction time training can improve your speed by 10-15% over several weeks. The key is consistent practice, getting enough sleep, staying hydrated, and maintaining good overall health.',
        },
        {
          question: 'Why is my reaction time different each time I test?',
          answer: 'Reaction time naturally varies due to several factors: fatigue, stress, caffeine intake, time of day, and even your level of focus. It\'s normal to see variations of 20-50ms between tests. This is why we recommend taking the average of multiple attempts.',
        },
        {
          question: 'Is visual or auditory reaction time faster?',
          answer: 'Auditory (sound) reaction time is typically faster than visual reaction time by about 40-50 milliseconds. This is because the brain processes sound information more quickly than visual information. However, for most activities including gaming and driving, visual reaction time is more relevant.',
        },
        {
          question: 'Does reaction time decline with age?',
          answer: 'Yes, reaction time typically begins to slow down in your mid-20s and continues to decline gradually throughout life. However, rate of decline varies greatly between individuals based on genetics, lifestyle, and physical activity. Regular exercise and cognitive training can help slow this decline.',
        },
        {
          question: 'How does this test measure reaction time?',
          answer: 'Our test uses JavaScript\'s high-precision timing methods (performance.now()) to measure the exact time between when the target appears and when you click it. This provides millisecond-accurate results. The test randomizes the delay between rounds to prevent anticipation.',
        },
        {
          question: 'What affects reaction time the most?',
          answer: 'Several factors significantly impact reaction time: sleep quality, stress levels, fatigue, caffeine intake, age, and physical fitness. Poor sleep is one of the biggest factors - just one night of bad sleep can slow reaction time by up to 20%.',
        },
        {
          question: 'Are there medical conditions that affect reaction time?',
          answer: 'Yes, various conditions can affect reaction time including neurological disorders, vision problems, hearing impairments, medications (especially sedatives), and conditions affecting cognitive function. If you notice sudden changes in your reaction time, consult a healthcare professional.',
        },
        {
          question: 'How do pro gamers train their reaction time?',
          answer: 'Pro gamers use a combination of methods: regular aim training drills, playing reflex-based games, physical exercise, maintaining consistent sleep schedules, and using specialized training software. Many also work on cognitive exercises to improve focus and decision-making speed.',
        },
        {
          question: 'Is there a world record for reaction time?',
          answer: 'The fastest verified human reaction times are around 120-130 milliseconds, achieved by trained athletes and gamers. However, these are exceptional cases. The theoretical minimum for human visual reaction time is believed to be around 100-110ms due to biological limitations of the nervous system.',
        },
      ],
    },
    guides: {
      title: 'Comprehensive Guides',
      description: 'In-depth guides to help you understand and improve your reaction time.',
      sections: [
        {
          icon: '🎯',
          title: '10 Ways to Improve Your Reaction Time',
          content: [
            'Improving reaction time is a combination of lifestyle changes and dedicated practice. Here are ten proven methods to help you react faster.',
            'First, prioritize sleep. Research shows that even mild sleep deprivation can slow reaction time by 10-20%. Aim for 7-9 hours of quality sleep per night.',
            'Second, stay physically active. Regular aerobic exercise improves blood flow to the brain and enhances neural connections. Even 30 minutes of daily exercise can make a difference.',
            'Third, practice deliberately. Use reaction time tests regularly, but focus on quality over quantity. Short, focused sessions are more effective than long, unfocused ones.',
          ],
          tips: [
            'Get 7-9 hours of sleep nightly',
            'Exercise 30 minutes daily',
            'Stay hydrated throughout the day',
            'Practice in short, focused sessions',
            'Reduce screen time before bed',
            'Meditate to improve focus',
            'Play reflex-based games regularly',
            'Take breaks during long gaming sessions',
            'Maintain a balanced diet rich in omega-3s',
            'Limit caffeine intake to avoid crashes',
          ],
        },
        {
          icon: '📅',
          title: 'Weekly Training Schedule',
          content: [
            'Consistency is key to improving reaction time. Here\'s a sample weekly training routine you can follow.',
            'This schedule combines reaction time testing with other activities that support cognitive performance. Adjust based on your schedule and fitness level.',
            'Remember: recovery is just as important as training. Listen to your body and take rest days when needed.',
          ],
          tips: [
            'Monday: Reaction time test (5 attempts) + 30 min exercise',
            'Tuesday: Reflex games (20 min) + meditation (10 min)',
            'Wednesday: Reaction time test (5 attempts) + 30 min exercise',
            'Thursday: Focus exercises + brain training apps',
            'Friday: Reaction time test (5 attempts)',
            'Saturday: Active recovery (light exercise, stretching)',
            'Sunday: Rest day - light walking only',
          ],
        },
        {
          icon: '🎮',
          title: 'Best Games for Training',
          content: [
            'Certain video games are excellent for training reaction time. Here are some of the best options.',
            'FPS games like CS:GO, Valorant, and Overwatch are particularly effective because they require constant attention and quick reactions.',
            'Aim training software like KovaaK\'s or Aim Lab provides structured drills specifically designed to improve reflexes.',
          ],
          tips: [
            'CS:GO / CS2 - Classic FPS with high reaction demands',
            'Valorant - Tactical shooter with precise aiming',
            'Overwatch - Fast-paced team shooter',
            'Aim Lab - Dedicated aim training software',
            'KovaaK\'s - Advanced aim trainer',
            'osu! - Rhythm game for hand-eye coordination',
            'Quake Live - Arena FPS for quick reactions',
            'Reflex - Pure reaction time game',
          ],
        },
        {
          icon: '🧠',
          title: 'Brain Training Techniques',
          content: [
            'Beyond physical practice, cognitive exercises can help improve the neural pathways involved in reaction time.',
            'The brain is highly plastic and can form new connections throughout life. Targeted cognitive training can enhance processing speed and decision-making abilities.',
          ],
          tips: [
            'Dual n-back training for working memory',
            'Stroop test exercises for cognitive flexibility',
            'Pattern recognition games',
            'Mental arithmetic for processing speed',
            'Decision-making drills',
            'Focus and concentration exercises',
          ],
        },
        {
          icon: '🏋️',
          title: 'Physical Exercises',
          content: [
            'Physical fitness directly impacts cognitive performance, including reaction time.',
            'Cardiovascular exercise increases blood flow to the brain and promotes the growth of new neural connections. This can lead to faster processing and better reflexes.',
          ],
          tips: [
            'HIIT (High-Intensity Interval Training)',
            'Boxing or martial arts for hand-eye coordination',
            'Tennis or badminton for tracking skills',
            'Basketball for reaction-based movements',
            'Swimming for overall fitness',
            'Yoga for mind-body connection',
          ],
        },
      ],
    },
    science: {
      title: 'The Science of Reaction Time',
      description: 'Explore the neurological and physiological mechanisms behind reaction time.',
      sections: [
        {
          icon: '⚡',
          title: 'How the Brain Processes Reactions',
          content: [
            'Reaction time is a complex neurological process involving multiple stages: sensory perception, information processing, decision making, and motor execution.',
            'When you see a stimulus, your eyes send signals to the visual cortex. This information is then processed and compared with stored patterns. The decision to act is made in the prefrontal cortex, and motor signals are sent through the spinal cord to your muscles.',
            'The entire process typically takes 150-300 milliseconds in healthy adults, depending on various factors.',
          ],
          keyPoints: [
            'Sensory input (50-100ms)',
            'Cognitive processing (70-100ms)',
            'Motor response (30-100ms)',
            'Total: 150-300ms average',
          ],
        },
        {
          icon: '🔬',
          title: 'Visual vs Auditory vs Tactile',
          content: [
            'Different sensory modalities produce different reaction times due to varying neural pathways.',
            'Auditory reactions are typically the fastest (140-160ms) because sound travels directly to the brainstem. Visual reactions are slower (180-200ms) as they involve more complex processing. Tactile reactions fall in between (150-170ms).',
            'This is why starters in sports use auditory signals (starting gun) rather than visual ones.',
          ],
          keyPoints: [
            'Auditory: 140-160ms (fastest)',
            'Tactile: 150-170ms',
            'Visual: 180-200ms (slowest)',
          ],
        },
        {
          icon: '🧬',
          title: 'Biological Factors',
          content: [
            'Several biological factors influence reaction time, including genetics, age, and neural health.',
            'Myelin sheaths around neurons act like insulation, speeding up signal transmission. People with thicker myelin tend to have faster reaction times. This can be improved through exercise and diet.',
            'Neurotransmitter levels, particularly dopamine and acetylcholine, also play crucial roles in processing speed.',
          ],
        },
        {
          icon: '📊',
          title: 'Age and Reaction Time',
          content: [
            'Reaction time changes throughout the lifespan, following a predictable pattern.',
            'Childhood: Reaction time decreases rapidly as the nervous system develops, reaching optimal levels in early adulthood (early 20s).',
            'Adulthood: Gradual decline begins in the mid-20s, continuing at about 1-2ms per year.',
            'Older age: Decline accelerates after age 60, but can be mitigated through lifestyle and cognitive training.',
          ],
        },
        {
          icon: '💤',
          title: 'Sleep and Fatigue',
          content: [
            'Sleep is perhaps the single most important factor affecting reaction time.',
            'During sleep, the brain consolidates learning and repairs neural connections. Lack of sleep impairs attention, decision-making, and motor coordination.',
            'Research shows that 24 hours without sleep can slow reaction time by up to 50%, equivalent to being legally intoxicated in many jurisdictions.',
          ],
          keyPoints: [
            'One night of poor sleep: 10-20% slower',
            '24 hours without sleep: up to 50% slower',
            'Chronic sleep deprivation: cumulative effects',
            'Recovery: requires multiple nights of quality sleep',
          ],
        },
        {
          icon: '🏃',
          title: 'Exercise and Neural Plasticity',
          content: [
            'Physical exercise has profound effects on the brain\'s ability to process information quickly.',
            'Aerobic exercise increases BDNF (Brain-Derived Neurotrophic Factor), a protein that promotes the growth of new neurons and strengthens existing connections.',
            'Complex exercises that require coordination (like dancing or martial arts) are particularly effective for improving reaction time.',
          ],
        },
      ],
    },
    about: {
      title: 'About DreamURL',
      mission: {
        title: 'Our Mission',
        content: 'DreamURL is dedicated to creating fun, interactive web experiences that help people understand and improve their cognitive abilities. Our reaction time test is designed to be accessible, accurate, and enjoyable for users of all ages and skill levels. We believe that understanding your reaction time can help you improve in gaming, sports, and everyday activities.',
      },
      features: {
        title: 'Features',
        items: [
          'Accurate millisecond-precision timing',
          'Multi-language support (English, Korean, Spanish, Chinese, Japanese)',
          'Decoy system for advanced testing',
          'Detailed performance grades with gaming recommendations',
          'Mobile-friendly responsive design',
          'No registration required - completely free to use',
          'Comprehensive FAQ section',
          'In-depth guides for improvement',
          'Scientific explanations of reaction time',
          'Pro gamer comparison data',
        ],
      },
      whyImportant: {
        title: 'Why Reaction Time Matters',
        content: 'Reaction time is more than just a gaming metric - it\'s a fundamental cognitive ability that affects daily life. Faster reaction times can improve driving safety, sports performance, and overall cognitive health. By understanding and training your reaction time, you\'re investing in a skill that has applications across countless aspects of life.',
      },
      founders: {
        title: 'Our Team',
        members: [
          {
            name: 'DreamURL Team',
            role: 'Development Team',
            description: 'A passionate group of developers and designers dedicated to creating high-quality web experiences. We combine expertise in web development, user experience design, and cognitive science to build tools that are both useful and enjoyable.',
          },
          {
            name: 'Scientific Advisors',
            role: 'Research Consultants',
            description: 'Our team includes experts in neuroscience and cognitive psychology who ensure our content is accurate and based on the latest scientific research.',
          },
        ],
      },
      history: {
        title: 'Our History',
        milestones: [
          { date: '2024', event: 'DreamURL founded with the vision of creating accessible cognitive tools' },
          { date: '2024 Q3', event: 'First version of reaction time test launched' },
          { date: '2024 Q4', event: 'Multi-language support added' },
          { date: '2025 Q1', event: 'Comprehensive guides and science sections added' },
          { date: '2025 Q2', event: 'Continued expansion with new features and content' },
        ],
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: February 2025',
      sections: [
        {
          title: 'Information We Collect',
          content: 'We do not collect any personal information from our users. Your reaction time test results are stored locally in your browser and are never transmitted to our servers. We use Google Analytics to understand how visitors use our site, which collects anonymous usage data.',
        },
        {
          title: 'Cookies and Tracking',
          content: 'We use cookies for essential site functionality and analytics purposes. Google Analytics uses cookies to collect anonymous information about how you interact with our website. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.',
        },
        {
          title: 'Third-Party Services',
          content: 'We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting Google Ads Settings.',
        },
        {
          title: 'Data Security',
          content: 'Since we do not collect personal data, there is no personal information at risk. All game data is processed locally in your browser.',
        },
        {
          title: 'Children\'s Privacy',
          content: 'Our service is available to users of all ages. We do not knowingly collect any personal information from anyone, including children under 13.',
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.',
        },
        {
          title: 'Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us through our Contact page.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      description: 'Have questions, feedback, or suggestions? We\'d love to hear from you! Feel free to reach out through any of the following channels.',
      email: 'Email',
      github: 'GitHub',
      faq: 'FAQ',
      faqDescription: 'Check our FAQ section for quick answers to common questions.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you for your message! We\'ll get back to you soon.',
      },
    },
    footer: {
      copyright: '©2025 DreamURL. All rights reserved.',
    },
  },
  ko: {
    nav: {
      home: '홈',
      faq: 'FAQ',
      guides: '가이드',
      science: '과학',
      about: '소개',
      privacy: '개인정보처리방침',
      contact: '문의하기',
    },
    hero: {
      title: '반응 속도 테스트',
      subtitle: '당신의 반응 속도는 얼마나 빠른가요?',
      description: '밀리초 단위로 반응 속도를 측정하고 프로게이머 및 평균적인 사람들과 비교해보세요. 무료, 정확하고 재미있습니다!',
      cta: '테스트 시작하기',
    },
    quickTips: {
      title: '더 나은 성능을 위한 빠른 팁',
      tips: [
        {
          icon: '😴',
          title: '충분한 수면',
          description: '피로는 반응 속도를 최대 20%까지 늦출 수 있습니다. 양질의 수면 7-9시간을 목표로 하세요.',
        },
        {
          icon: '💧',
          title: '수분 섭취',
          description: '탈수는 인지 기능을 저하시킵니다. 하루 종일 정기적으로 물을 마시세요.',
        },
        {
          icon: '🎯',
          title: '규칙적인 연습',
          description: '꾸준한 연습은 몇 주 동안 반응 속도를 10-15% 향상시킬 수 있습니다.',
        },
      ],
    },
    title: '반응 속도 테스트',
    introduction: '시각적 자극에 대한 당신의 반응 속도를 측정하는 간단한 테스트입니다. 규칙은 간단합니다: 검은 점이 나타나면 최대한 빨리 클릭하세요. 후반 라운드에서는 미끼인 빨간 점을 피해야 합니다! 평균적인 사람의 반응 속도는 약 250ms입니다. 훈련을 통해 많은 사람들이 200ms에 도달할 수 있습니다. 얼마든지 여러 번 테스트해보세요.',
    statusIdle: '시작 버튼을 눌러 게임을 시작하세요.',
    statusWaiting: '라운드 {round}/{totalRounds}. 준비하세요...',
    statusPlaying: '라운드 {round}/{totalRounds}. 검은 점을 클릭하세요!',
    statusFinished: '게임 종료!',
    gameOverDecoy: '게임 오버! 빨간 점을 클릭했습니다.',
    avgReactionTime: '평균 반응 속도:',
    startGame: '게임 시작',
    playAgain: '다시하기',
    gradesTitle: '반응 속도 등급',
    grades: [
      { grade: '신', description: { general: '혹시 사람이 아니신가요? 믿을 수 없는 반응 속도입니다.', overwatch: '트레이서/겐지 주력 플레이어에게 완벽하며, 적의 후방을 지배할 수 있습니다.', lol: '제드나 아칼리 같은 암살자로 미드 라인을 지배할 운명입니다.' } },
      { grade: '다이아몬드', description: { general: '프로 수준의 속도. 어떤 상황에도 반응할 수 있습니다.', overwatch: '캐서디나 애쉬 같은 히트스캔 DPS로 뛰어난 활약을 펼칠 수 있습니다.', lol: '모든 것을 피해야 하는 카이사나 베인 같은 원거리 딜러에게 안성맞춤입니다.' } },
      { grade: '골드', description: { general: '훌륭합니다! 대부분의 플레이어보다 빠릅니다.', overwatch: '아나나 키리코처럼 플레이를 만드는 서포터가 되면 훌륭할 것입니다.', lol: '맵 전체에서 활약할 수 있는 리 신 같은 다재다능한 정글러를 시도해보세요.' } },
      { grade: '실버', description: { general: '견고하고 신뢰할 수 있습니다. 믿음직한 팀원입니다.', overwatch: '라인하르트나 D.Va 같은 든든한 탱커가 잘 어울립니다.', lol: '가렌이나 오른 같은 강력한 선봉장으로 탑 라인에서 좋은 성과를 낼 것입니다.' } },
      { grade: '브론즈', description: { general: '완벽하게 평범한 인간의 반응 속도입니다.', overwatch: '메르시처럼 순간적인 조준이 필요 없는 꾸준한 가치를 지닌 서포터를 해보세요.', lol: '럭스나 베이가 같은 성장형 마법사가 좋은 선택이 될 것입니다.' } },
      { grade: '연습 필요', description: { general: '조금 느린 편이지만, 연습이 완벽을 만듭니다!', overwatch: '게임 감각을 익히기 위해 윈스턴 같은 직관적인 탱커로 시작해보세요.', lol: '잔나나 소라카처럼 간단하고 효과적인 서포터로 기본기를 다져보세요.' } },
    ],
    content: {
      whatIsReactionTime: {
        title: '반응 속도란?',
        description: '반응 속도는 자극이 제시되는 순간부터 그에 대한 근육 반응이 시작되는 순간까지의 시간 간격입니다. 이는 스포츠, 게임, 운전과 같은 일상 활동에서 성과에 영향을 미치는 중요한 인지 능력입니다. 시각적 자극에 대한 인간의 평균 반응 시간은 약 250밀리초이며, 이는 나이, 피로도, 연습량 등의 요인에 따라 달라질 수 있습니다.',
      },
      howToImprove: {
        title: '반응 속도를 향상시키는 방법',
        tips: [
          '충분한 수면을 취하세요 - 피로는 반응 속도를 크게 저하시킵니다',
          '수분을 충분히 섭취하고 올바른 영양을 유지하세요',
          '반응 속도 테스트로 규칙적으로 연습하세요',
          '정기적인 운동으로 전반적인 인지 기능을 향상시키세요',
          '명상을 통해 집중력을 높이고 방해 요소를 줄이세요',
          '빠른 반사 신경이 필요한 비디오 게임을 플레이하세요',
          '카페인 급락을 피하세요 - 적당한 카페인은 도움이 될 수 있습니다',
        ],
      },
      howToPlay: {
        title: '게임 방법',
        steps: [
          '"게임 시작" 버튼을 클릭하여 시작하세요',
          '화면에 검은 점이 나타날 때까지 기다리세요',
          '검은 점을 최대한 빨리 클릭하세요',
          '후반 라운드에서는 빨간 미끼 점을 클릭하지 마세요',
          '5라운드를 완료하여 평균 반응 시간을 확인하세요',
          '아래 등급표와 결과를 비교해보세요',
        ],
      },
      funFacts: {
        title: '반응 속도에 관한 재미있는 사실',
        facts: [
          '프로 e스포츠 선수들의 반응 속도는 종종 150ms 미만입니다',
          '반응 속도는 오후 2-4시경에 가장 빠릅니다',
          '청각 자극은 일반적으로 시각 자극보다 더 빠른 반응을 유발합니다',
          '가장 빠른 반응 속도 세계 기록은 약 120ms입니다',
          '반응 속도는 24세경부터 자연스럽게 느려지기 시작합니다',
        ],
      },
      proGamer: {
        title: '프로게이머 반응 속도',
        games: [
          {
            name: '오버워치',
            description: '프로 오버워치 선수들은 히트스캔 영웅과 스킬 사용을 위해 번개 같은 반응 속도가 필요합니다.',
            avgReaction: '150-180ms',
            topPlayers: '탑 DPS: 130-150ms, 서포터: 160-200ms',
          },
          {
            name: '리그 오브 레전드',
            description: 'ADC 플레이어는 스킬 샷 회피와 포지셔닝을 위해 가장 빠른 반응 속도가 필요합니다.',
            avgReaction: '160-200ms',
            topPlayers: '페이커, 우지: 160-180ms',
          },
          {
            name: 'CS:GO/CS2',
            description: '프로 FPS 선수들은 에임 듀얼과 피킹을 위해 예외적인 반응 속도가 필요합니다.',
            avgReaction: '140-180ms',
            topPlayers: 's1mple, ZywOo: 130-160ms',
          },
          {
            name: '발로란트',
            description: 'CS:GO와 유사하게, 발로란트 프로들은 상대와 듀얼하기 위해 빠른 반응이 필요합니다.',
            avgReaction: '150-190ms',
            topPlayers: 'TenZ, scream: 140-170ms',
          },
        ],
      },
      ageReaction: {
        title: '연령별 반응 속도',
        description: '반응 속도는 일생 동안 변합니다. 연령 그룹별로 어떻게 변하는지 확인해보세요:',
        ages: [
          { range: '10-20세', avgTime: '180-220ms' },
          { range: '20-30세', avgTime: '200-240ms' },
          { range: '30-40세', avgTime: '220-260ms' },
          { range: '40-50세', avgTime: '240-280ms' },
        ],
      },
    },
    faq: {
      title: '자주 묻는 질문',
      description: '반응 속도 테스트 및 향상에 대한 일반적인 질문에 대한 답변을 찾아보세요.',
      questions: [
        {
          question: '좋은 반응 속도는 얼마인가요?',
          answer: '좋은 반응 속도는 일반적으로 200-250밀리초 정도로 간주됩니다. 프로 운동선수와 게이머들은 종종 150-200ms 사이의 반응 속도를 가집니다. 평균적인 사람의 반응 속도는 약 250ms입니다. 200ms 미만은 훌륭한 것으로 간주되며, 300ms 이상은 약간의 연습이 도움이 될 수 있습니다.',
        },
        {
          question: '반응 속도를 향상시킬 수 있나요?',
          answer: '네! 꾸준한 연습으로 반응 속도를 향상시킬 수 있습니다. 연구에 따르면 규칙적인 반응 속도 훈련은 몇 주 동안 속도를 10-15% 향상시킬 수 있습니다. 핵심은 꾸준한 연습, 충분한 수면, 수분 섭취, 그리고 좋은 전반적인 건강 유지입니다.',
        },
        {
          question: '테스트할 때마다 반응 속도가 다른 이유는 무엇인가요?',
          answer: '반응 속도는 피로, 스트레스, 카페인 섭취, 하루 중 시간, 심지어 집중도 수준 등 여러 요인에 의해 자연스럽게 변합니다. 테스트 간 20-50ms의 변화를 보는 것은 정상입니다. 이것이 우리가 여러 번의 시도의 평균을 권장하는 이유입니다.',
        },
        {
          question: '시각 반응과 청각 반응 중 어느 것이 더 빠른가요?',
          answer: '청각 반응이 시각 반응보다 약 40-50밀리초 더 빠릅니다. 이는 뇌가 소리 정보를 시각 정보보다 더 빨리 처리하기 때문입니다. 하지만 대부분의 활동, 게임 및 운전을 포함해서는 시각 반응 속도가 더 관련성이 높습니다.',
        },
        {
          question: '반응 속도는 나이가 들면 감소하나요?',
          answer: '네, 반응 속도는 일반적으로 20대 중반부터 느려지기 시작하며, 평생 계속 점차 감소합니다. 하지만 감소 속도는 유전학, 생활 방식, 신체 활동에 따라 개인마다 크게 다릅니다. 규칙적인 운동과 인지 훈련은 이 감소를 늦추는 데 도움이 될 수 있습니다.',
        },
        {
          question: '이 테스트는 반응 속도를 어떻게 측정하나요?',
          answer: '우리 테스트는 JavaScript의 고정밀 타이밍 메서드(performance.now())를 사용하여 타겟이 나타나는 순간부터 클릭하는 순간까지의 정확한 시간을 측정합니다. 이는 밀리초 정확도의 결과를 제공합니다. 테스트는 예상을 방지하기 위해 라운드 간 지연을 무작위화합니다.',
        },
        {
          question: '반응 속도에 가장 큰 영향을 미치는 것은 무엇인가요?',
          answer: '여러 요소가 반응 속도에 큰 영향을 미칩니다: 수면의 질, 스트레스 수준, 피로, 카페인 섭취, 나이, 신체 적합도입니다. 나쁜 수면은 가장 큰 요인 중 하나입니다 - 단 하룻밤의 나쁜 수면도 반응 속도를 최대 20%까지 늦출 수 있습니다.',
        },
        {
          question: '반응 속도에 영향을 미치는 의학적 상태가 있나요?',
          answer: '네, 신경 장애, 시력 문제, 청각 장애, 약물(특히 진정제), 인지 기능에 영향을 미치는 상태 등 다양한 상태가 반응 속도에 영향을 미칠 수 있습니다. 반응 속도에 갑작스러운 변화를 느끼면 의료 전문가와 상담하세요.',
        },
        {
          question: '프로게이머들은 반응 속도를 어떻게 훈련하나요?',
          answer: '프로게이머들은 여러 가지 방법의 조합을 사용합니다: 규칙적인 에임 훈련 드릴, 반사 신경 기반 게임 플레이, 신체 운동, 일관된 수면 스케줄 유지, 특화된 훈련 소프트웨어 사용. 많은 사람들이 또한 집중력과 의사결정 속도를 향상시키기 위해 인지 운동도 합니다.',
        },
        {
          question: '반응 속도 세계 기록이 있나요?',
          answer: '가장 빠르게 검증된 인간 반응 속도는 약 120-130밀리초이며, 훈련된 운동선수와 게이머들에 의해 달성되었습니다. 하지만 이들은 예외적인 경우입니다. 인간 시각 반응 속도의 이론적 최소값은 신경계의 생물학적 한계로 인해 약 100-110ms로 믿어집니다.',
        },
      ],
    },
    guides: {
      title: '종합 가이드',
      description: '반응 속도를 이해하고 향상시키는 데 도움이 되는 심층 가이드입니다.',
      sections: [
        {
          icon: '🎯',
          title: '반응 속도를 향상시키는 10가지 방법',
          content: [
            '반응 속도 향상은 생활 방식의 변화와 전념하는 연습의 조합입니다. 더 빨리 반응하는 데 도움이 되는 10가지 입증된 방법입니다.',
            '첫째, 수면을 우선시하세요. 연구에 따르면 경미한 수면 부족도 반응 속도를 10-20% 늦출 수 있습니다. 밤마다 7-9시간의 양질의 수면을 목표로 하세요.',
            '둘째, 신체적으로 활동하게 지내세요. 규칙적인 유산소 운동은 뇌로의 혈류를 개선하고 신경 연결을 강화합니다. 매일 30분의 운동도 차이를 만들 수 있습니다.',
            '셋째, 의도적으로 연습하세요. 반응 속도 테스트를 규칙적으로 사용하지만, 양보다는 질에 집중하세요. 짧고 집중된 세션이 길고 산만한 세션보다 더 효과적입니다.',
          ],
          tips: [
            '매일 7-9시간의 수면을 취하세요',
            '매일 30분 운동하세요',
            '하루 종일 수분을 섭취하세요',
            '짧고 집중된 세션으로 연습하세요',
            '잠자기 전 스크린 시간을 줄이세요',
            '집중력을 높이기 위해 명상하세요',
            '규칙적으로 반사 신경 기반 게임을 플레이하세요',
            '긴 게임 세션 동안 휴식을 취하세요',
            '오메가-3가 풍부한 균형 잡힌 식단을 유지하세요',
            '카페인 급락을 피하기 위해 카페인 섭취를 제한하세요',
          ],
        },
        {
          icon: '📅',
          title: '주간 훈련 일정',
          content: [
            '일관성은 반응 속도 향상의 핵심입니다. 따를 수 있는 샘플 주간 훈련 루틴입니다.',
            '이 일정은 반응 속도 테스트와 인지 성능을 지원하는 다른 활동들을 결합합니다. 일정과 체력 수준에 맞게 조정하세요.',
            '기억하세요: 회복은 훈련만큼 중요합니다. 몸의 신호를 듣고 필요할 때 휴식일을 가지세요.',
          ],
          tips: [
            '월요일: 반응 속도 테스트 (5번 시도) + 30분 운동',
            '화요일: 반사 신경 게임 (20분) + 명상 (10분)',
            '수요일: 반응 속도 테스트 (5번 시도) + 30분 운동',
            '목요일: 집중 운동 + 뇌 훈련 앱',
            '금요일: 반응 속도 테스트 (5번 시도)',
            '토요일: 적극적 회복 (가벼운 운동, 스트레칭)',
            '일요일: 휴식일 - 가벼운 산책만',
          ],
        },
        {
          icon: '🎮',
          title: '훈련을 위한 최고의 게임',
          content: [
            '특정 비디오 게임은 반응 속도 훈련에 탁월합니다. 여기 최고의 옵션들이 있습니다.',
            'CS:GO, 발로란트, 오버워치 같은 FPS 게임은 지속적인 주의와 빠른 반응이 필요하기 때문에 특히 효과적입니다.',
            'KovaaK\'s나 Aim Lab 같은 에임 훈련 소프트웨어는 반사 신경을 향상시키도록 특별히 설계된 구조화된 드릴을 제공합니다.',
          ],
          tips: [
            'CS:GO / CS2 - 높은 반응 요구사항이 있는 고전 FPS',
            '발로란트 - 정밀한 에이밍이 있는 전술 슈터',
            '오버워치 - 빠른 속도의 팀 슈터',
            'Aim Lab - 전용 에임 훈련 소프트웨어',
            'KovaaK\'s - 고급 에임 트레이너',
            'osu! - 핸드-아이 코디네이션을 위한 리듬 게임',
            'Quake Live - 빠른 반응을 위한 아레나 FPS',
            'Reflex - 순수 반응 속도 게임',
          ],
        },
        {
          icon: '🧠',
          title: '뇌 훈련 기법',
          content: [
            '물리적 연습 외에도 인지 운동은 반응 속도에 관여하는 신경 경로를 향상시키는 데 도움이 될 수 있습니다.',
            '뇌는 매우 가소성이 있으며 평생 새로운 연결을 형성할 수 있습니다. 표적화된 인지 훈련은 처리 속도와 의사결정 능력을 향상시킬 수 있습니다.',
          ],
          tips: [
            '작업 기억을 위한 듀얼 n-백 훈련',
            '인지 유연성을 위한 스트룹 테스트 운동',
            '패턴 인식 게임',
            '처리 속도를 위한 정신 산술',
            '의사결정 드릴',
            '집중력과 집중 운동',
          ],
        },
        {
          icon: '🏋️',
          title: '신체 운동',
          content: [
            '신체 적합도는 반응 속도를 포함한 인지 성능에 직접적인 영향을 미칩니다.',
            '유산소 운동은 뇌로의 혈류를 증가시키고 새로운 신경 연결의 성장을 촉진합니다. 이는 더 빠른 처리와 더 나은 반사 신경으로 이어질 수 있습니다.',
          ],
          tips: [
            'HIIT (고강도 인터벌 트레이닝)',
            '핸드-아이 코디네이션을 위한 복싱이나 무술',
            '추적 기술을 위한 테니스나 배드민턴',
            '반응 기반 움직임을 위한 농구',
            '전반적인 적합도를 위한 수영',
            '마인드-바디 연결을 위한 요가',
          ],
        },
      ],
    },
    science: {
      title: '반응 속도의 과학',
      description: '반응 속도 뒤에 있는 신경학적 및 생리학적 메커니즘을 탐구하세요.',
      sections: [
        {
          icon: '⚡',
          title: '뇌가 반응을 처리하는 방식',
          content: [
            '반응 속도는 감각 인지, 정보 처리, 의사결정, 그리고 운동 실행을 포함한 여러 단계를 포함하는 복잡한 신경학적 과정입니다.',
            '자극을 볼 때, 눈은 시각 피질로 신호를 보냅니다. 이 정보는 처리되고 저장된 패턴과 비교됩니다. 행동에 대한 결정은 전두엽 피질에서 내려지며, 운동 신호는 척수를 통해 근육으로 전송됩니다.',
            '전체 과정은 다양한 요인에 따라 건강한 성인에서 일반적으로 150-300밀리초가 걸립니다.',
          ],
          keyPoints: [
            '감각 입력 (50-100ms)',
            '인지 처리 (70-100ms)',
            '운동 응답 (30-100ms)',
            '총계: 평균 150-300ms',
          ],
        },
        {
          icon: '🔬',
          title: '시각 vs 청각 vs 촉각',
          content: [
            '다양한 감각 양상은 다양한 신경 경로로 인해 다른 반응 시간을 생성합니다.',
            '청각 반응은 소리가 뇌간으로 직접 전달되기 때문에 일반적으로 가장 빠릅니다 (140-160ms). 시각 반응은 더 복잡한 처리를 포함하기 때문에 느립니다 (180-200ms). 촉각 반응은 그 사이에 있습니다 (150-170ms).',
            '이것이 스포츠의 스타터가 시각 신호가 아닌 청각 신호(스타팅 건)를 사용하는 이유입니다.',
          ],
          keyPoints: [
            '청각: 140-160ms (가장 빠름)',
            '촉각: 150-170ms',
            '시각: 180-200ms (가장 느림)',
          ],
        },
        {
          icon: '🧬',
          title: '생물학적 요인',
          content: [
            '유전학, 나이, 신경 건강을 포함한 여러 생물학적 요인이 반응 속도에 영향을 미칩니다.',
            '뉴런 주변의 마이엘린 시스는 절연처럼 작용하여 신호 전송 속도를 높입니다. 더 두꺼운 마이엘린을 가진 사람들은 일반적으로 더 빠른 반응 속도를 가집니다. 이것은 운동과 식단을 통해 개선될 수 있습니다.',
            '도파민과 아세틸콜린과 같은 신경전달물질 수준도 처리 속도에 중요한 역할을 합니다.',
          ],
        },
        {
          icon: '📊',
          title: '나이와 반응 속도',
          content: [
            '반응 속도는 평생 동안 변하며 예측 가능한 패턴을 따릅니다.',
            '어린 시절: 신경계가 발달함에 따라 반응 속도가 빠르게 감소하여 성인기 초기(20대 초반)에 최적 수준에 도달합니다.',
            '성인기: 20대 중반부터 점진적 감소가 시작되며 매년 약 1-2ms씩 계속됩니다.',
            '노년기: 60세 이후 감소가 가속화되지만, 생활 방식과 인지 훈련으로 완화될 수 있습니다.',
          ],
        },
        {
          icon: '💤',
          title: '수면과 피로',
          content: [
            '수면은 아마도 반응 속도에 영향을 미치는 가장 중요한 단일 요인일 것입니다.',
            '수면 동안 뇌는 학습을 통합하고 신경 연결을 복구합니다. 수면 부족은 주의력, 의사결정, 그리고 운동 조정을 저하시킵니다.',
            '연구에 따르면 24시간 동안 수면을 하지 않으면 반응 속도를 최대 50%까지 늦출 수 있으며, 이는 많은 관할권에서 법적으로 음주 중인 것과 동등합니다.',
          ],
          keyPoints: [
            '나쁜 수면 한 밤: 10-20% 더 느림',
            '24시간 수면 없음: 최대 50% 더 느림',
            '만성 수면 부족: 누적 효과',
            '회복: 양질의 수면을 여러 밤이 필요',
          ],
        },
        {
          icon: '🏃',
          title: '운동과 신경 가소성',
          content: [
            '신체 운동은 뇌가 정보를 빠르게 처리하는 능력에 깊은 영향을 미칩니다.',
            '유산소 운동은 BDNF(뇌 유래 신경 영양 인자)를 증가시키는데, 이는 새로운 뉴런의 성장을 촉진하고 기존 연결을 강화하는 단백질입니다.',
            '조정이 필요한 복잡한 운동(댄스나 무술과 같은)은 반응 속도를 향상시키는 데 특히 효과적입니다.',
          ],
        },
      ],
    },
    about: {
      title: 'DreamURL 소개',
      mission: {
        title: '우리의 미션',
        content: 'DreamURL은 사람들이 자신의 인지 능력을 이해하고 향상시키는 데 도움이 되는 재미있고 인터랙티브한 웹 경험을 만드는 데 전념하고 있습니다. 우리의 반응 속도 테스트는 모든 연령과 기술 수준의 사용자가 접근하기 쉽고, 정확하며, 즐겁게 사용할 수 있도록 설계되었습니다. 반응 속도를 이해하면 게임, 스포츠, 일상 활동에서 향상에 도움이 된다고 믿습니다.',
      },
      features: {
        title: '특징',
        items: [
          '밀리초 단위의 정확한 타이밍',
          '다국어 지원 (영어, 한국어, 스페인어, 중국어, 일본어)',
          '고급 테스트를 위한 미끼 시스템',
          '게임 추천이 포함된 상세한 성능 등급',
          '모바일 친화적인 반응형 디자인',
          '회원가입 불필요 - 완전 무료 사용',
          '포괄적인 FAQ 섹션',
          '향상을 위한 심층 가이드',
          '반응 속도의 과학적 설명',
          '프로게이머 비교 데이터',
        ],
      },
      whyImportant: {
        title: '반응 속도가 중요한 이유',
        content: '반응 속도는 단순한 게이밍 지표가 아닙니다 - 일상생활에 영향을 미치는 기본적인 인지 능력입니다. 더 빠른 반응 속도는 운전 안전, 스포츠 성과, 그리고 전반적인 인지 건강을 향상시킬 수 있습니다. 반응 속도를 이해하고 훈련함으로써, 수많은 생활 측면에 적용되는 기술에 투자하는 것입니다.',
      },
      founders: {
        title: '우리 팀',
        members: [
          {
            name: 'DreamURL 팀',
            role: '개발 팀',
            description: '고품질 웹 경험을 만드는 데 열정적인 개발자와 디자이너 그룹입니다. 웹 개발, 사용자 경험 디자인, 인지 과학에 대한 전문 지식을 결합하여 유용하고 즐거운 도구를 구축합니다.',
          },
          {
            name: '과학적 고문',
            role: '연구 컨설턴트',
            description: '우리 팀에는 콘텐츠가 정확하고 최신 과학 연구에 기반하도록 보장하는 신경과학 및 인지 심리학 전문가가 포함되어 있습니다.',
          },
        ],
      },
      history: {
        title: '우리의 역사',
        milestones: [
          { date: '2024년', event: '접근 가능한 인지 도구를 만드는 비전으로 DreamURL 설립' },
          { date: '2024년 3분기', event: '반응 속도 테스트 첫 번째 버전 출시' },
          { date: '2024년 4분기', event: '다국어 지원 추가' },
          { date: '2025년 1분기', event: '포괄적인 가이드와 과학 섹션 추가' },
          { date: '2025년 2분기', event: '새로운 기능과 콘텐츠로 계속 확장' },
        ],
      },
    },
    privacy: {
      title: '개인정보처리방침',
      lastUpdated: '최종 업데이트: 2025년 2월',
      sections: [
        {
          title: '수집하는 정보',
          content: '저희는 사용자로부터 개인 정보를 수집하지 않습니다. 반응 속도 테스트 결과는 브라우저에 로컬로 저장되며 서버로 전송되지 않습니다. 방문자들이 사이트를 어떻게 사용하는지 이해하기 위해 Google Analytics를 사용하며, 이는 익명의 사용 데이터를 수집합니다.',
        },
        {
          title: '쿠키 및 추적',
          content: '필수적인 사이트 기능과 분석 목적으로 쿠키를 사용합니다. Google Analytics는 쿠키를 사용하여 웹사이트와의 상호작용에 대한 익명 정보를 수집합니다. Google Analytics 옵트아웃 브라우저 추가 기능을 설치하여 추적을 거부할 수 있습니다.',
        },
        {
          title: '제3자 서비스',
          content: 'Google AdSense를 사용하여 광고를 표시합니다. Google은 이 웹사이트 또는 다른 웹사이트에 대한 이전 방문을 기반으로 쿠키를 사용하여 광고를 제공할 수 있습니다. Google 광고 설정을 방문하여 맞춤형 광고를 거부할 수 있습니다.',
        },
        {
          title: '데이터 보안',
          content: '개인 데이터를 수집하지 않으므로 위험에 처한 개인 정보가 없습니다. 모든 게임 데이터는 브라우저에서 로컬로 처리됩니다.',
        },
        {
          title: '아동 개인정보 보호',
          content: '저희 서비스는 모든 연령의 사용자가 이용할 수 있습니다. 13세 미만 아동을 포함하여 누구로부터도 개인 정보를 의도적으로 수집하지 않습니다.',
        },
        {
          title: '정책 변경',
          content: '이 개인정보처리방침은 수시로 업데이트될 수 있습니다. 변경 사항이 있을 경우 이 페이지에 새 정책을 게시하여 알려드립니다.',
        },
        {
          title: '문의하기',
          content: '이 개인정보처리방침에 대한 질문이 있으시면 문의하기 페이지를 통해 연락해 주세요.',
        },
      ],
    },
    contact: {
      title: '문의하기',
      description: '질문, 피드백 또는 제안이 있으신가요? 여러분의 의견을 듣고 싶습니다! 아래 채널을 통해 자유롭게 연락해 주세요.',
      email: '이메일',
      github: 'GitHub',
      faq: 'FAQ',
      faqDescription: '일반적인 질문에 대한 빠른 답변을 보려면 FAQ 섹션을 확인하세요.',
      form: {
        name: '이름',
        email: '이메일',
        message: '메시지',
        submit: '메시지 보내기',
        success: '메시지를 보내주셔서 감사합니다! 곧 답변드리겠습니다.',
      },
    },
    footer: {
      copyright: '©2025 DreamURL. All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      faq: 'FAQ',
      guides: 'Guías',
      science: 'Ciencia',
      about: 'Acerca de',
      privacy: 'Privacidad',
      contact: 'Contacto',
    },
    hero: {
      title: 'Prueba Tu Tiempo de Reacción',
      subtitle: '¿Qué tan rápido puedes reaccionar?',
      description: 'Descubre tu velocidad de reacción en milisegundos y compara cómo te comparas con jugadores profesionales y la persona promedio. ¡Gratis, preciso y divertido!',
      cta: 'Comenzar Prueba',
    },
    quickTips: {
      title: 'Consejos Rápidos para Mejor Rendimiento',
      tips: [
        {
          icon: '😴',
          title: 'Duerme Suficiente',
          description: 'La fatiga puede ralentizar tu tiempo de reacción hasta un 20%. Apunta a 7-9 horas de sueño de calidad.',
        },
        {
          icon: '💧',
          title: 'Mantente Hidratado',
          description: 'La deshidratación deteriora la función cognitiva. Bebe agua regularmente durante el día.',
        },
        {
          icon: '🎯',
          title: 'Practica Regularmente',
          description: 'La práctica constante puede mejorar tu tiempo de reacción en un 10-15% durante varias semanas.',
        },
      ],
    },
    title: 'Prueba de Tiempo de Reacción',
    introduction: 'Esta es una prueba simple para medir tu tiempo de reacción a un estímulo visual. Las reglas son sencillas: haz clic en el punto negro tan pronto como aparezca. ¡En rondas posteriores, evita los puntos rojos de señuelo! El tiempo de reacción humano promedio es de alrededor de 250ms. Con práctica, muchos pueden alcanzar los 200ms. Siéntete libre de probar tantas veces como quieras.',
    statusIdle: 'Haz clic en "Iniciar" para comenzar.',
    statusWaiting: 'Ronda {round}/{totalRounds}. Prepárate...',
    statusPlaying: 'Ronda {round}/{totalRounds}. ¡Haz clic en el punto NEGRO!',
    statusFinished: '¡Juego Terminado!',
    gameOverDecoy: '¡Juego Terminado! Hiciste clic en el punto rojo.',
    avgReactionTime: 'Tu tiempo de reacción promedio es:',
    startGame: 'Iniciar Juego',
    playAgain: 'Jugar de Nuevo',
    gradesTitle: 'Niveles de Tiempo de Reacción',
    grades: [
      { grade: 'Nivel Dios', description: { general: '¿Eres humano? Velocidad de reacción increíble.', overwatch: 'Perfecto para un main Tracer/Genji, dominando la retaguardia.', lol: 'Perteneces al carril central jugando asesinos como Zed o Akali.' } },
      { grade: 'Diamante', description: { general: 'Velocidad de nivel profesional. Puedes reaccionar a cualquier cosa.', overwatch: 'Destaca como un DPS de hitscan como Cassidy o Ashe.', lol: 'Ideal para un ADC como Kai\'Sa o Vayne que necesita esquivarlo todo.' } },
      { grade: 'Oro', description: { general: '¡Excelente! Más rápido que la mayoría de los jugadores.', overwatch: 'Serías un gran soporte creador de jugadas como Ana o Kiriko.', lol: 'Prueba un jungla versátil como Lee Sin para hacer jugadas por todo el mapa.' } },
      { grade: 'Plata', description: { general: 'Sólido y confiable. Un compañero de equipo dependable.', overwatch: 'Un tanque confiable como Reinhardt o D.Va te iría bien.', lol: 'Te iría bien en el carril superior con un vanguardia fuerte como Garen u Ornn.' } },
      { grade: 'Bronce', description: { general: 'Tiempo de reacción humano perfectamente normal.', overwatch: 'Prueba un soporte con valor constante que no requiera disparos rápidos, como Mercy.', lol: 'Un mago de escalado como Lux o Veigar sería una buena opción.' } },
      { grade: 'Necesita Práctica', description: { general: 'Un poco lento, ¡pero la práctica hace al maestro!', overwatch: 'Comienza con un tanque sencillo como Winston para aprender la percepción del juego.', lol: 'Aprende con un soporte simple y efectivo como Janna o Soraka.' } },
    ],
    content: {
      whatIsReactionTime: {
        title: '¿Qué es el Tiempo de Reacción?',
        description: 'El tiempo de reacción es el intervalo entre la presentación de un estímulo y el inicio de la respuesta muscular a ese estímulo. Es una capacidad cognitiva crucial que afecta el rendimiento en muchas actividades, desde deportes hasta juegos y tareas cotidianas como conducir. El tiempo de reacción humano promedio a estímulos visuales es de aproximadamente 250 milisegundos, aunque esto puede variar según factores como la edad, la fatiga y la práctica.',
      },
      howToImprove: {
        title: 'Cómo Mejorar tu Tiempo de Reacción',
        tips: [
          'Duerme lo suficiente - la fatiga reduce significativamente el tiempo de reacción',
          'Mantente hidratado y mantén una nutrición adecuada',
          'Practica regularmente con pruebas de tiempo de reacción',
          'Haz ejercicio regularmente para mejorar la función cognitiva general',
          'Reduce las distracciones y mejora el enfoque mediante la meditación',
          'Juega videojuegos que requieran reflejos rápidos',
          'Evita los bajones de cafeína - la cafeína moderada puede ayudar',
        ],
      },
      howToPlay: {
        title: 'Cómo Jugar',
        steps: [
          'Haz clic en el botón "Iniciar Juego" para comenzar',
          'Espera a que aparezca el punto negro en la pantalla',
          'Haz clic en el punto negro lo más rápido posible',
          'Evita hacer clic en los puntos rojos de señuelo en rondas posteriores',
          'Completa 5 rondas para obtener tu tiempo de reacción promedio',
          'Compara tus resultados con la tabla de grados a continuación',
        ],
      },
      funFacts: {
        title: 'Datos Curiosos sobre el Tiempo de Reacción',
        facts: [
          'Los jugadores profesionales de esports a menudo tienen tiempos de reacción inferiores a 150ms',
          'Tu tiempo de reacción es más rápido por la tarde, alrededor de las 2-4 PM',
          'Los estímulos auditivos típicamente producen reacciones más rápidas que los visuales',
          'El récord mundial de tiempo de reacción más rápido es de alrededor de 120ms',
          'El tiempo de reacción naturalmente se ralentiza con la edad, comenzando alrededor de los 24 años',
        ],
      },
      proGamer: {
        title: 'Tiempos de Reacción de Jugadores Pro',
        games: [
          {
            name: 'Overwatch',
            description: 'Los jugadores profesionales de Overwatch necesitan reflejos extremadamente rápidos para héroes hitscan y el uso de habilidades.',
            avgReaction: '150-180ms',
            topPlayers: 'Top DPS: 130-150ms, Soportes: 160-200ms',
          },
          {
            name: 'League of Legends',
            description: 'Los jugadores ADC necesitan los tiempos de reacción más rápidos para esquivar habilidades de habilidad y posicionamiento.',
            avgReaction: '160-200ms',
            topPlayers: 'Faker, Uzi: 160-180ms',
          },
          {
            name: 'CS:GO/CS2',
            description: 'Los jugadores profesionales de FPS necesitan tiempos de reacción excepcionales para duelos de puntería y acechos.',
            avgReaction: '140-180ms',
            topPlayers: 's1mple, ZywOo: 130-160ms',
          },
          {
            name: 'Valorant',
            description: 'Similar a CS:GO, los pros de Valorant necesitan reacciones rápidas para duelos contra oponentes.',
            avgReaction: '150-190ms',
            topPlayers: 'TenZ, scream: 140-170ms',
          },
        ],
      },
      ageReaction: {
        title: 'Tiempo de Reacción por Edad',
        description: 'El tiempo de reacción cambia a lo largo de tu vida. Así es como típicamente varía por grupo de edad:',
        ages: [
          { range: '10-20', avgTime: '180-220ms' },
          { range: '20-30', avgTime: '200-240ms' },
          { range: '30-40', avgTime: '220-260ms' },
          { range: '40-50', avgTime: '240-280ms' },
        ],
      },
    },
    faq: {
      title: 'Preguntas Frecuentes',
      description: 'Encuentra respuestas a preguntas comunes sobre la prueba de tiempo de reacción y mejora.',
      questions: [
        {
          question: '¿Qué es un buen tiempo de reacción?',
          answer: 'Un buen tiempo de reacción típicamente se considera alrededor de 200-250 milisegundos. Los atletas y jugadores profesionales a menudo tienen tiempos de reacción entre 150-200ms. La persona promedio tiene un tiempo de reacción de aproximadamente 250ms. Cualquier cosa por debajo de 200ms se considera excelente, mientras que cualquier cosa por encima de 300ms podría beneficiarse de algo de práctica.',
        },
        {
          question: '¿Puedo mejorar mi tiempo de reacción?',
          answer: '¡Sí! El tiempo de reacción se puede mejorar con práctica constante. Los estudios muestran que el entrenamiento regular de tiempo de reacción puede mejorar tu velocidad en un 10-15% durante varias semanas. La clave es la práctica constante, dormir lo suficiente, mantenerse hidratado y mantener una buena salud general.',
        },
        {
          question: '¿Por qué mi tiempo de reacción es diferente cada vez que pruebo?',
          answer: 'El tiempo de reacción varía naturalmente debido a varios factores: fatiga, estrés, ingesta de cafeína, hora del día e incluso tu nivel de enfoque. Es normal ver variaciones de 20-50ms entre pruebas. Por eso recomendamos tomar el promedio de múltiples intentos.',
        },
        {
          question: '¿Es el tiempo de reacción visual o auditivo más rápido?',
          answer: 'El tiempo de reacción auditivo (sonido) típicamente es más rápido que el tiempo de reacción visual en aproximadamente 40-50 milisegundos. Esto se debe a que el cerebro procesa la información de sonido más rápido que la información visual. Sin embargo, para la mayoría de las actividades, incluyendo juegos y conducir, el tiempo de reacción visual es más relevante.',
        },
        {
          question: '¿El tiempo de reacción disminuye con la edad?',
          answer: 'Sí, el tiempo de reacción típicamente comienza a desacelerarse en la mitad de los 20 y continúa disminuyendo gradualmente durante toda la vida. Sin embargo, la tasa de disminución varía mucho entre individuos según la genética, el estilo de vida y la actividad física. El ejercicio regular y el entrenamiento cognitivo pueden ayudar a ralentizar esta disminución.',
        },
      ],
    },
    guides: {
      title: 'Guías Completas',
      description: 'Guías detalladas para ayudarte a entender y mejorar tu tiempo de reacción.',
      sections: [
        {
          icon: '🎯',
          title: '10 Maneras de Mejorar tu Tiempo de Reacción',
          content: [
            'Mejorar el tiempo de reacción es una combinación de cambios en el estilo de vida y práctica dedicada. Aquí hay diez métodos probados para ayudarte a reaccionar más rápido.',
            'Primero, prioriza el sueño. La investigación muestra que incluso una privación leve de sueño puede ralentizar el tiempo de reacción en un 10-20%. Apunta a 7-9 horas de sueño de calidad por noche.',
            'Segundo, mantente físicamente activo. El ejercicio aeróbico regular mejora el flujo sanguíneo al cerebro y mejora las conexiones neuronales. Incluso 30 minutos de ejercicio diario pueden marcar la diferencia.',
          ],
          tips: [
            'Duerme 7-9 horas cada noche',
            'Ejercicio 30 minutos diariamente',
            'Mantente hidratado durante todo el día',
            'Practica en sesiones cortas y enfocadas',
            'Reduce el tiempo de pantalla antes de dormir',
            'Medita para mejorar el enfoque',
            'Juega juegos basados en reflejos regularmente',
            'Toma descansos durante sesiones largas de juegos',
            'Mantén una dieta equilibrada rica en omega-3',
            'Limita la ingesta de cafeína para evitar bajones',
          ],
        },
      ],
    },
    science: {
      title: 'La Ciencia del Tiempo de Reacción',
      description: 'Explora los mecanismos neurológicos y fisiológicos detrás del tiempo de reacción.',
      sections: [
        {
          icon: '⚡',
          title: 'Cómo el Cerebro Procesa las Reacciones',
          content: [
            'El tiempo de reacción es un proceso neurológico complejo que involucra múltiples etapas: percepción sensorial, procesamiento de información, toma de decisiones y ejecución motora.',
            'Cuando ves un estímulo, tus ojos envían señales a la corteza visual. Esta información se procesa y se compara con patrones almacenados. La decisión de actuar se toma en la corteza prefrontal, y las señales motoras se envían a través de la médula espinal a tus músculos.',
            'Todo el proceso típicamente toma 150-300 milisegundos en adultos sanos.',
          ],
          keyPoints: [
            'Entrada sensorial (50-100ms)',
            'Procesamiento cognitivo (70-100ms)',
            'Respuesta motora (30-100ms)',
            'Total: Promedio 150-300ms',
          ],
        },
      ],
    },
    about: {
      title: 'Acerca de DreamURL',
      mission: {
        title: 'Nuestra Misión',
        content: 'DreamURL se dedica a crear experiencias web divertidas e interactivas que ayudan a las personas a comprender y mejorar sus capacidades cognitivas. Nuestra prueba de tiempo de reacción está diseñada para ser accesible, precisa y agradable para usuarios de todas las edades y niveles de habilidad. Creemos que comprender tu tiempo de reacción puede ayudarte a mejorar en juegos, deportes y actividades cotidianas.',
      },
      features: {
        title: 'Características',
        items: [
          'Temporización precisa en milisegundos',
          'Soporte multilingüe (inglés, coreano, español, chino, japonés)',
          'Sistema de señuelos para pruebas avanzadas',
          'Grados de rendimiento detallados con recomendaciones de juegos',
          'Diseño responsivo compatible con móviles',
          'Sin registro requerido - completamente gratis',
          'Sección FAQ completa',
          'Guías detalladas para mejora',
          'Explicaciones científicas del tiempo de reacción',
          'Datos de comparación con jugadores profesionales',
        ],
      },
      whyImportant: {
        title: 'Por Qué es Importante el Tiempo de Reacción',
        content: 'El tiempo de reacción es más que solo una métrica de juegos - es una capacidad cognitiva fundamental que afecta la vida diaria. Los tiempos de reacción más rápidos pueden mejorar la seguridad al conducir, el rendimiento deportivo y la salud cognitiva general. Al entender y entrenar tu tiempo de reacción, estás invirtiendo en una habilidad que tiene aplicaciones en innumerables aspectos de la vida.',
      },
      founders: {
        title: 'Nuestro Equipo',
        members: [
          {
            name: 'Equipo DreamURL',
            role: 'Equipo de Desarrollo',
            description: 'Un grupo apasionado de desarrolladores y diseñadores dedicados a crear experiencias web de alta calidad. Combinamos experiencia en desarrollo web, diseño de experiencia de usuario y ciencia cognitiva para construir herramientas que son útiles y agradables.',
          },
          {
            name: 'Asesores Científicos',
            role: 'Consultores de Investigación',
            description: 'Nuestro equipo incluye expertos en neurociencia y psicología cognitiva que aseguran que nuestro contenido sea preciso y se base en la investigación científica más reciente.',
          },
        ],
      },
      history: {
        title: 'Nuestra Historia',
        milestones: [
          { date: '2024', event: 'DreamURL fundada con la visión de crear herramientas cognitivas accesibles' },
          { date: '2024 T3', event: 'Primera versión de la prueba de tiempo de reacción lanzada' },
          { date: '2024 T4', event: 'Soporte multilingüe añadido' },
          { date: '2025 T1', event: 'Guías completas y secciones científicas añadidas' },
          { date: '2025 T2', event: 'Continuación de la expansión con nuevas características y contenido' },
        ],
      },
    },
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última Actualización: Febrero 2025',
      sections: [
        {
          title: 'Información que Recopilamos',
          content: 'No recopilamos ninguna información personal de nuestros usuarios. Los resultados de tu prueba de tiempo de reacción se almacenan localmente en tu navegador y nunca se transmiten a nuestros servidores. Usamos Google Analytics para entender cómo los visitantes usan nuestro sitio, lo cual recopila datos de uso anónimos.',
        },
        {
          title: 'Cookies y Seguimiento',
          content: 'Usamos cookies para la funcionalidad esencial del sitio y propósitos de análisis. Google Analytics usa cookies para recopilar información anónima sobre cómo interactúas con nuestro sitio web. Puedes optar por no participar en el seguimiento de Google Analytics instalando el Complemento de Navegador para la Desactivación de Google Analytics.',
        },
        {
          title: 'Servicios de Terceros',
          content: 'Usamos Google AdSense para mostrar anuncios. Google puede usar cookies para mostrar anuncios basados en tus visitas anteriores a este sitio web u otros sitios. Puedes optar por no recibir publicidad personalizada visitando la Configuración de Anuncios de Google.',
        },
        {
          title: 'Seguridad de Datos',
          content: 'Como no recopilamos datos personales, no hay información personal en riesgo. Todos los datos del juego se procesan localmente en tu navegador.',
        },
        {
          title: 'Privacidad de los Niños',
          content: 'Nuestro servicio está disponible para usuarios de todas las edades. No recopilamos conscientemente ninguna información personal de nadie, incluidos los niños menores de 13 años.',
        },
        {
          title: 'Cambios a Esta Política',
          content: 'Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política en esta página.',
        },
        {
          title: 'Contáctanos',
          content: 'Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos a través de nuestra página de Contacto.',
        },
      ],
    },
    contact: {
      title: 'Contáctanos',
      description: '¿Tienes preguntas, comentarios o sugerencias? ¡Nos encantaría saber de ti! No dudes en comunicarte a través de cualquiera de los siguientes canales.',
      email: 'Correo Electrónico',
      github: 'GitHub',
      faq: 'FAQ',
      faqDescription: 'Revisa nuestra sección FAQ para respuestas rápidas a preguntas comunes.',
      form: {
        name: 'Tu Nombre',
        email: 'Tu Correo Electrónico',
        message: 'Tu Mensaje',
        submit: 'Enviar Mensaje',
        success: '¡Gracias por tu mensaje! Te responderemos pronto.',
      },
    },
    footer: {
      copyright: '© 2025 DreamURL. Todos los derechos reservados.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      faq: 'FAQ',
      guides: '指南',
      science: '科学',
      about: '关于我们',
      privacy: '隐私政策',
      contact: '联系我们',
    },
    hero: {
      title: '测试你的反应时间',
      subtitle: '你能多快反应？',
      description: '以毫秒为单位发现你的反应速度，看看你与职业玩家和普通人相比如何。免费、准确、有趣！',
      cta: '开始测试',
    },
    quickTips: {
      title: '提高表现的快速技巧',
      tips: [
        {
          icon: '😴',
          title: '充足睡眠',
          description: '疲劳会使反应时间减慢最多20%。目标每晚7-9小时高质量睡眠。',
        },
        {
          icon: '💧',
          title: '保持水分',
          description: '脱水会损害认知功能。全天定期喝水。',
        },
        {
          icon: '🎯',
          title: '定期练习',
          description: '持续练习可以在几周内将反应时间提高10-15%。',
        },
      ],
    },
    title: '反应速度测试',
    introduction: '这是一个简单的测试，用于测量您对视觉刺激的反应时间。规则很简单：黑点出现时，请尽快点击。在后面的回合中，请避开红色的诱饵点！人类的平均反应时间约为250毫秒。通过练习，许多人可以达到200毫高。欢迎您随时进行多次测试。',
    statusIdle: '点击"开始"以开始游戏。',
    statusWaiting: '第 {round}/{totalRounds} 回合。准备...',
    statusPlaying: '第 {round}/{totalRounds} 回合。点击黑点！',
    statusFinished: '游戏结束！',
    gameOverDecoy: '游戏结束！你点击了红点。',
    avgReactionTime: '你的平均反应时间是：',
    startGame: '开始游戏',
    playAgain: '再玩一次',
    gradesTitle: '反应速度等级',
    grades: [
      { grade: '神级', description: { general: '你是人类吗？难以置信的反应速度。', overwatch: '完美适合猎空/源氏玩家，主宰后排。', lol: '你属于中路，玩劫或阿卡丽这样的刺客。' } },
      { grade: '钻石', description: { general: '职业级速度。你能对任何事情做出反应。', overwatch: '作为像卡西迪或艾什这样的即时命中DPS表现出色。', lol: '非常适合需要躲避一切的ADC，如卡莎或薇恩。' } },
      { grade: '黄金', description: { general: '优秀！比大多数玩家都快。', overwatch: '你会成为一个出色的 playmaker 辅助，比如安娜或雾子。', lol: '尝试像李青这样多才多艺的打野，在地图上创造机会。' } },
      { grade: '白银', description: { general: '稳定可靠。一个可靠的队友。', overwatch: '一个可靠的坦克，如莱因哈特或D.Va，会很适合你。', lol: '你会在上路表现出色，使用像盖伦或奥恩这样的强大前排。' } },
      { grade: '青铜', description: { general: '完全正常的人类反应时间。', overwatch: '尝试一个不需要甩枪的稳定型辅助，比如天使。', lol: '像拉克丝或维迦这样的发育型法师会是一个不错的选择。' } },
      { grade: '需要练习', description: { general: '有点慢，但熟能生巧！', overwatch: '从像温斯顿这样直观的坦克开始，学习游戏意识。', lol: '用像迦娜或索拉卡这样简单有效的辅助来学习基础。' } },
    ],
    content: {
      whatIsReactionTime: {
        title: '什么是反应时间？',
        description: '反应时间是指从刺激呈现到肌肉反应开始之间的时间间隔。这是一种重要的认知能力，影响着从运动到游戏再到驾驶等日常任务的表现。人类对视觉刺激的平均反应时间约为250毫秒，但这可能因年龄、疲劳和练习等因素而异。',
      },
      howToImprove: {
        title: '如何提高反应速度',
        tips: [
          '保证充足的睡眠 - 疲劳会显著降低反应速度',
          '保持水分充足并维持适当的营养',
          '通过反应速度测试定期练习',
          '定期锻炼以提高整体认知功能',
          '通过冥想减少干扰并提高注意力',
          '玩需要快速反应的视频游戏',
          '避免咖啡因崩溃 - 适量咖啡因可能有帮助',
        ],
      },
      howToPlay: {
        title: '游戏说明',
        steps: [
          '点击"开始游戏"按钮开始',
          '等待黑点出现在屏幕上',
          '尽快点击黑点',
          '在后面的回合中避免点击红色诱饵点',
          '完成5个回合以获得平均反应时间',
          '将您的结果与下方的等级表进行比较',
        ],
      },
      funFacts: {
        title: '关于反应时间的有趣事实',
        facts: [
          '专业电竞选手的反应时间通常低于150毫秒',
          '您的反应时间在下午2-4点左右最快',
          '听觉刺激通常比视觉刺激产生更快的反应',
          '最快反应时间的世界纪录约为120毫秒',
          '反应时间从24岁左右开始自然变慢',
        ],
      },
      proGamer: {
        title: '职业玩家反应时间',
        games: [
          {
            name: '守望先锋',
            description: '职业守望先锋选手需要闪电般的反应时间来使用即时命中英雄和技能。',
            avgReaction: '150-180ms',
            topPlayers: '顶级DPS: 130-150ms, 辅助: 160-200ms',
          },
          {
            name: '英雄联盟',
            description: 'ADC玩家需要最快的反应时间来躲避技能和定位。',
            avgReaction: '160-200ms',
            topPlayers: 'Faker, Uzi: 160-180ms',
          },
          {
            name: 'CS:GO/CS2',
            description: '职业FPS选手需要卓越的反应时间来进行瞄准对决和探头。',
            avgReaction: '140-180ms',
            topPlayers: 's1mple, ZywOo: 130-160ms',
          },
          {
            name: 'Valorant',
            description: '与CS:GO类似，Valorant职业选手需要快速反应来与对手决斗。',
            avgReaction: '150-190ms',
            topPlayers: 'TenZ, scream: 140-170ms',
          },
        ],
      },
      ageReaction: {
        title: '按年龄的反应时间',
        description: '反应时间在你的一生中会发生变化。以下是它如何在年龄组间变化：',
        ages: [
          { range: '10-20岁', avgTime: '180-220ms' },
          { range: '20-30岁', avgTime: '200-240ms' },
          { range: '30-40岁', avgTime: '200-260ms' },
          { range: '40-50岁', avgTime: '240-280ms' },
        ],
      },
    },
    faq: {
      title: '常见问题',
      description: '查找关于反应时间测试和改进的常见问题答案。',
      questions: [
        {
          question: '什么是好的反应时间？',
          answer: '好的反应时间通常被认为是200-250毫秒左右。职业运动员和玩家通常有150-200ms之间的反应时间。普通人的反应时间约为250ms。200ms以下被认为是优秀的，而300ms以上可能需要一些练习。',
        },
        {
          question: '我能提高我的反应时间吗？',
          answer: '能！通过持续练习可以提高反应时间。研究表明，定期反应时间训练可以在几周内提高速度10-15%。关键是持续练习、充足睡眠、保持水分和良好的整体健康。',
        },
        {
          question: '为什么每次测试我的反应时间都不同？',
          answer: '由于多种因素，反应时间自然变化：疲劳、压力、咖啡因摄入、一天中的时间，甚至你的注意力水平。测试之间看到20-50ms的变化是正常的。这就是为什么我们建议取多次尝试的平均值。',
        },
      ],
    },
    guides: {
      title: '综合指南',
      description: '详细指南帮助您理解和提高您的反应时间。',
      sections: [
        {
          icon: '🎯',
          title: '提高反应时间的10种方法',
          content: [
            '提高反应时间是生活方式改变和专注练习的结合。这里有10种经过验证的方法可以帮助你反应更快。',
            '首先，优先考虑睡眠。研究表明，即使是轻微的睡眠不足也会使反应时间减慢10-20%。目标每晚7-9小时高质量睡眠。',
            '其次，保持身体活跃。定期有氧运动改善大脑血流量并增强神经连接。即使每天30分钟的运动也能产生差异。',
          ],
          tips: [
            '每晚睡7-9小时',
            '每天锻炼30分钟',
            '全天保持水分',
            '在短暂专注的环节中练习',
            '睡前减少屏幕时间',
            '冥想以提高注意力',
            '定期玩需要快速反应的游戏',
            '长时间游戏期间休息',
            '保持富含omega-3的均衡饮食',
            '限制咖啡因摄入以避免崩溃',
          ],
        },
      ],
    },
    science: {
      title: '反应时间的科学',
      description: '探索反应时间背后的神经和生理机制。',
      sections: [
        {
          icon: '⚡',
          title: '大脑如何处理反应',
          content: [
            '反应时间是一个涉及多个阶段的复杂神经过程：感觉知觉、信息处理、决策制定和运动执行。',
            '当你看到刺激时，你的眼睛向视觉皮层发送信号。这些信息被处理并与存储的模式进行比较。行动决定在前额叶皮层做出，运动信号通过脊髓发送到你的肌肉。',
            '整个过程在健康成年人中通常需要150-300毫秒。',
          ],
          keyPoints: [
            '感觉输入 (50-100ms)',
            '认知处理 (70-100ms)',
            '运动反应 (30-100ms)',
            '总计: 平均150-300ms',
          ],
        },
      ],
    },
    about: {
      title: '关于 DreamURL',
      mission: {
        title: '我们的使命',
        content: 'DreamURL致力于创建有趣的互动网络体验，帮助人们了解和提高他们的认知能力。我们的反应速度测试旨在让所有年龄和技能水平的用户都能轻松访问、准确测量并愉快使用。我们相信，了解您的反应时间可以帮助您在游戏、运动和日常活动中有所提高。',
      },
      features: {
        title: '功能特点',
        items: [
          '毫秒级精确计时',
          '多语言支持（英语、韩语、西班牙语、中文、日语）',
          '高级测试的诱饵系统',
          '包含游戏推荐的详细性能等级',
          '适配移动设备的响应式设计',
          '无需注册 - 完全免费使用',
          '完整的FAQ部分',
          '改进的详细指南',
          '反应时间的科学解释',
          '职业玩家比较数据',
        ],
      },
      whyImportant: {
        title: '反应时间为什么重要',
        content: '反应时间不仅仅是游戏指标 - 它是影响日常生活的基本认知能力。更快的反应时间可以提高驾驶安全、运动表现和整体认知健康。通过了解和训练您的反应时间，您正在投资于一种在生活无数方面都有应用的技能。',
      },
      founders: {
        title: '我们的团队',
        members: [
          {
            name: 'DreamURL 团队',
            role: '开发团队',
            description: '一群热衷于创建高质量网络体验的开发人员和设计师。我们结合了网络开发、用户体验设计和认知科学方面的专业知识，构建既有用又愉快的工具。',
          },
          {
            name: '科学顾问',
            role: '研究顾问',
            description: '我们的团队包括神经科学和认知心理学专家，他们确保我们的内容准确并基于最新的科学研究。',
          },
        ],
      },
      history: {
        title: '我们的历史',
        milestones: [
          { date: '2024年', event: 'DreamURL成立，愿景是创建可访问的认知工具' },
          { date: '2024年第三季度', event: '反应速度测试第一个版本发布' },
          { date: '2024年第四季度', event: '添加多语言支持' },
          { date: '2025年第一季度', event: '添加综合指南和科学部分' },
          { date: '2025年第二季度', event: '继续扩展新功能和内容' },
        ],
      },
    },
    privacy: {
      title: '隐私政策',
      lastUpdated: '最后更新：2025年2月',
      sections: [
        {
          title: '我们收集的信息',
          content: '我们不收集用户的任何个人信息。您的反应速度测试结果存储在您的浏览器本地，永远不会传输到我们的服务器。我们使用Google Analytics来了解访问者如何使用我们的网站，它收集匿名使用数据。',
        },
        {
          title: 'Cookie和跟踪',
          content: '我们使用Cookie来实现基本网站功能和分析目的。Google Analytics使用Cookie收集有关您如何与我们网站互动的匿名信息。您可以通过安装Google Analytics选择退出浏览器插件来选择退出Google Analytics跟踪。',
        },
        {
          title: '第三方服务',
          content: '我们使用Google AdSense来展示广告。Google可能会使用Cookie根据您之前对本网站或其他网站的访问来投放广告。您可以通过访问Google广告设置来选择退出个性化广告。',
        },
        {
          title: '数据安全',
          content: '由于我们不收集个人数据，因此没有个人信息面临风险。所有游戏数据都在您的浏览器中本地处理。',
        },
        {
          title: '儿童隐私',
          content: '我们的服务面向所有年龄的用户。我们不会故意收集任何人的个人信息，包括13岁以下的儿童。',
        },
        {
          title: '政策变更',
          content: '我们可能会不时更新此隐私政策。我们将通过在此页面上发布新政策来通知您任何更改。',
        },
        {
          title: '联系我们',
          content: '如果您对此隐私政策有任何疑问，请通过我们的联系页面与我们联系。',
        },
      ],
    },
    contact: {
      title: '联系我们',
      description: '有问题、反馈或建议吗？我们很想听到您的声音！请随时通过以下任何渠道与我们联系。',
      email: '电子邮件',
      github: 'GitHub',
      faq: 'FAQ',
      faqDescription: '查看我们的FAQ部分以获取常见问题的快速答案。',
      form: {
        name: '您的姓名',
        email: '您的电子邮件',
        message: '您的留言',
        submit: '发送消息',
        success: '感谢您的留言！我们会尽快回复您。',
      },
    },
    footer: {
      copyright: '© 2025 DreamURL。保留所有权利。',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      faq: 'FAQ',
      guides: 'ガイド',
      science: '科学',
      about: 'サイト概要',
      privacy: 'プライバシーポリシー',
      contact: 'お問い合わせ',
    },
    hero: {
      title: '反応時間テスト',
      subtitle: 'どれくらい速く反応できますか？',
      description: 'ミリ秒単位で反応速度を発見し、プロゲーマーや平均的な人と比較してみてください。無料、正確、楽しい！',
      cta: 'テスト開始',
    },
    quickTips: {
      title: 'パフォーマンス向上のためのクイックヒント',
      tips: [
        {
          icon: '😴',
          title: '十分な睡眠',
          description: '疲労は反応時間を最大20%まで遅くする可能性があります。質の高い睡眠7〜9時間を目指してください。',
        },
        {
          icon: '💧',
          title: '水分補給',
          description: '脱水は認知機能を損ないます。一日中定期的に水を飲んでください。',
        },
        {
          icon: '🎯',
          title: '定期的な練習',
          description: '継続的な練習は数週間で反応時間を10〜15%向上させることができます。',
        },
      ],
    },
    title: '反応速度テスト',
    introduction: 'これは視覚刺激に対するあなたの反応速度を測定するための簡単なテストです。ルールは簡単です：黒い点が表示されたら、できるだけ早くクリックしてください。後のラウンドでは、おとりの赤い点を避けてください！人間の平均反応時間は約250msです。練習すれば、多くの人が200msに到達できます。何度でも自由にテストしてください。',
    statusIdle: '「開始」をクリックしてゲームを始めます。',
    statusWaiting: 'ラウンド {round}/{totalRounds}。準備してください...',
    statusPlaying: 'ラウンド {round}/{totalRounds}。黒い点をクリック！',
    statusFinished: 'ゲーム終了！',
    gameOverDecoy: 'ゲームオーバー！赤い点をクリックしました。',
    avgReactionTime: '平均反応時間：',
    startGame: 'ゲーム開始',
    playAgain: 'もう一度プレイ',
    gradesTitle: '反応速度グレード',
    grades: [
      { grade: '神ティア', description: { general: 'あなたは人間ですか？信じられないほどの反応速度です。', overwatch: 'トレーサー/ゲンジのメインに最適で、バックラインを支配します。', lol: 'あなたはミッドレーンに属し、ゼドやアカリのようなアサシンをプレイします。' } },
      { grade: 'ダイヤモンド', description: { general: 'プロレベルのスピード。何にでも反応できます。', overwatch: 'キャスディやアッシュのようなヒットスキャンDPSとして優れています。', lol: 'すべてを避ける必要があるカイ＝サやヴェインのようなADCに最適です。' } },
      { grade: 'ゴールド', description: { general: '素晴らしい！ほとんどのプレイヤーよりも速いです。', overwatch: 'アナやキリコのようなプレイメイキングサポートとして素晴らしいでしょう。', lol: 'マップ全体でプレイを作るために、リー・シンのような多才なジャングラーを試してみてください。' } },
      { grade: 'シルバー', description: { general: '堅実で信頼できます。頼りになるチームメイトです。', overwatch: 'ラインハルトやD.Vaのような信頼できるタンクがあなたに合っています。', lol: 'ガレンやオーンのような強力なフロントライナーでトップレーンでうまくやるでしょう。' } },
      { grade: 'ブロンズ', description: { general: '完全に正常な人間の反応時間です。', overwatch: 'マーシーのようにフリックショットを必要としない一貫した価値を持つサポートを試してみてください。', lol: 'ラックスやベイガーのようなスケーリングメイジが良い選択でしょう。' } },
      { grade: '要練習', description: { general: '少し遅いですが、練習すれば完璧になります！', overwatch: 'ゲームセンスを学ぶために、ウィンストンのような分かりやすいタンクから始めましょう。', lol: 'ジャンナやソラカのようなシンプルで効果的なサポートで基本を学びましょう。' } },
    ],
    content: {
      whatIsReactionTime: {
        title: '反応時間とは？',
        description: '反応時間とは、刺激が提示されてから、その刺激に対する筋肉の反応が始まるまでの時間間隔です。これは、スポーツからゲーム、運転などの日常的なタスクまで、多くの活動のパフォーマンスに影響を与える重要な認知能力です。視覚刺激に対する人間の平均反応時間は約250ミリ秒ですが、年齢、疲労、練習などの要因によって異なる場合があります。',
      },
      howToImprove: {
        title: '反応時間を改善する方法',
        tips: [
          '十分な睡眠をとる - 疲労は反応時間を大幅に遅くします',
          '水分を十分に摂り、適切な栄養を維持する',
          '反応時間テストで定期的に練習する',
          '定期的な運動で全体的な認知機能を改善する',
          '瞑想を通じて集中力を高め、気が散ることを減らす',
          '素早い反射神経が必要なビデオゲームをプレイする',
          'カフェインクラッシュを避ける - 適度なカフェインは役立つ可能性があります',
        ],
      },
      howToPlay: {
        title: '遊び方',
        steps: [
          '「ゲーム開始」ボタンをクリックして開始',
          '画面に黒い点が表示されるまで待つ',
          'できるだけ早く黒い点をクリック',
          '後のラウンドでは赤いおとりの点をクリックしないように',
          '5ラウンドを完了して平均反応時間を取得',
          '以下のグレード表と結果を比較',
        ],
      },
      funFacts: {
        title: '反応時間に関する豆知識',
        facts: [
          'プロのeスポーツ選手の反応時間は150ms未満であることが多い',
          '反応時間は午後2〜4時頃が最も速い',
          '聴覚刺激は通常、視覚刺激よりも速い反応を引き出す',
          '最速反応時間の世界記録は約120ms',
          '反応時間は24歳頃から自然に遅くなり始める',
        ],
      },
      proGamer: {
        title: 'プロゲーマーの反応時間',
        games: [
          {
            name: 'オーバーウォッチ',
            description: 'プロのオーバーウォッチ選手は、ヒットスキャンヒーローやアビリティ使用のために稲妻のような反応時間が必要です。',
            avgReaction: '150-180ms',
            topPlayers: 'トップDPS: 130-150ms, サポート: 160-200ms',
          },
          {
            name: 'リーグ・オブ・レジェンド',
            description: 'ADCプレイヤーは、スキルショットを回避しポジショニングを取るために最速の反応時間が必要です。',
            avgReaction: '160-200ms',
            topPlayers: 'Faker, Uzi: 160-180ms',
          },
          {
            name: 'CS:GO/CS2',
            description: 'プロのFPS選手は、エイムデュエルとピークのために卓越した反応時間が必要です。',
            avgReaction: '140-180ms',
            topPlayers: 's1mple, ZywOo: 130-160ms',
          },
          {
            name: 'Valorant',
            description: 'CS:GOと同様に、Valorantのプロは対戦相手とデュエルするために迅速な反応が必要です。',
            avgReaction: '150-190ms',
            topPlayers: 'TenZ, scream: 140-170ms',
          },
        ],
      },
      ageReaction: {
        title: '年齢別の反応時間',
        description: '反応時間は一生の間で変化します。年齢グループごとにどのように変化するかを確認してください：',
        ages: [
          { range: '10-20歳', avgTime: '180-220ms' },
          { range: '20-30歳', avgTime: '200-240ms' },
          { range: '30-40歳', avgTime: '220-260ms' },
          { range: '40-50歳', avgTime: '240-280ms' },
        ],
      },
    },
    faq: {
      title: 'よくある質問',
      description: '反応時間テストと改善に関する一般的な質問への回答を見つけてください。',
      questions: [
        {
          question: '良い反応時間とは？',
          answer: '良い反応時間は通常200〜250ミリ秒程度と考えられています。プロのアスリートやゲーマーはしばしば150〜200msの反応時間を持っています。平均的な人の反応時間は約250msです。200ms以下は優秀と見なされ、300ms以上は少し練習が必要かもしれません。',
        },
        {
          question: '反応時間を改善できますか？',
          answer: 'はい！継続的な練習で反応時間を改善できます。研究によると、定期的な反応時間トレーニングは数週間で速度を10〜15%向上させることができます。鍵は継続的な練習、十分な睡眠、水分補給、良好な全体的な健康状態です。',
        },
        {
          question: 'テストするたびに反応時間が違うのはなぜですか？',
          answer: '反応時間は疲労、ストレス、カフェイン摂取、1日の時間、集中レベルなど、さまざまな要因により自然に変化します。テスト間で20〜50msの変化を見るのは正常です。これが複数回の試行の平均を推奨する理由です。',
        },
      ],
    },
    guides: {
      title: '包括的なガイド',
      description: '反応時間を理解し改善するのに役立つ詳細なガイドです。',
      sections: [
        {
          icon: '🎯',
          title: '反応時間を改善する10の方法',
          content: [
            '反応時間の改善は、ライフスタイルの変化と専念した練習の組み合わせです。より速く反応するのに役立つ10の実証された方法があります。',
            '第一に、睡眠を優先してください。研究によると、軽度の睡眠不足でさえ反応時間を10〜20%遅くすることができます。毎晩7〜9時間の質の高い睡眠を目指してください。',
            '第二に、身体的に活動的に過ごしてください。定期的な有酸素運動は脳への血流を改善し、神経接続を強化します。毎日30分の運動でも違いを生むことができます。',
          ],
          tips: [
            '毎晩7〜9時間の睡眠をとる',
            '毎日30分運動する',
            '一日中水分を補給する',
            '短く集中したセッションで練習する',
            '寝る前のスクリーン時間を減らす',
            '集中力を高めるために瞑想する',
            '定期的に反射神経が必要なゲームをプレイする',
            '長時間のゲームセッション中に休憩を取る',
            'オメガ3が豊富なバランスの取れた食事を維持する',
            'カフェインクラッシュを避けるためにカフェイン摂取を制限する',
          ],
        },
      ],
    },
    science: {
      title: '反応時間の科学',
      description: '反応時間の背後にある神経学的および生理学的メカニズムを探索してください。',
      sections: [
        {
          icon: '⚡',
          title: '脳が反応を処理する方法',
          content: [
            '反応時間は、感覚知覚、情報処理、意思決定、運動実行を含む複雑な神経プロセスです。',
            '刺激を見ると、目は視覚皮質に信号を送ります。この情報は処理され、保存されたパターンと比較されます。行動の決定は前頭前野皮質で行われ、運動信号は脊髄を通じて筋肉に送信されます。',
            'プロセス全体は健康な成人で通常150〜300ミリ秒かかります。',
          ],
          keyPoints: [
            '感覚入力 (50-100ms)',
            '認知処理 (70-100ms)',
            '運動反応 (30-100ms)',
            '合計: 平均150-300ms',
          ],
        },
      ],
    },
    about: {
      title: 'DreamURLについて',
      mission: {
        title: '私たちのミッション',
        content: 'DreamURLは、人々が自分の認知能力を理解し向上させるのに役立つ、楽しくインタラクティブなウェブ体験を作成することに専念しています。私たちの反応速度テストは、あらゆる年齢とスキルレベルのユーザーがアクセスしやすく、正確で、楽しく使用できるように設計されています。反応時間を理解することで、ゲーム、スポーツ、日常活動での向上に役立つと信じています。',
      },
      features: {
        title: '機能',
        items: [
          'ミリ秒単位の正確なタイミング',
          '多言語対応（英語、韓国語、スペイン語、中国語、日本語）',
          '上級テスト用のおとりシステム',
          'ゲーム推奨を含む詳細なパフォーマンスグレード',
          'モバイルフレンドリーなレスポンシブデザイン',
          '登録不要 - 完全無料で使用可能',
          '完全なFAQセクション',
          '改善のための詳細なガイド',
          '反応時間の科学的説明',
          'プロゲーマー比較データ',
        ],
      },
      whyImportant: {
        title: '反応時間が重要な理由',
        content: '反応時間は単なるゲーム指標ではありません - 日常生活に影響を与える基本的な認知能力です。より速い反応時間は、運転の安全性、スポーツのパフォーマンス、全体的な認知的健康を向上させることができます。反応時間を理解してトレーニングすることで、人生の無数の側面に応用されるスキルに投資しています。',
      },
      founders: {
        title: '私たちのチーム',
        members: [
          {
            name: 'DreamURLチーム',
            role: '開発チーム',
            description: '高品質なウェブエクスペリエンスを作成することに情熱的な開発者とデザイナーのグループです。ウェブ開発、ユーザーエクスペリエンスデザイン、認知科学の専門知識を組み合わせて、有用で楽しいツールを構築しています。',
          },
          {
            name: '科学アドバイザー',
            role: '研究コンサルタント',
            description: '私たちのチームには、コンテンツが正確であり、最新の科学研究に基づいていることを確保する神経科学および認知心理学の専門家が含まれています。',
          },
        ],
      },
      history: {
        title: '私たちの歴史',
        milestones: [
          { date: '2024年', event: 'アクセシブルな認知ツールを作成するというビジョンでDreamURL設立' },
          { date: '2024年第3四半期', event: '反応速度テストの最初のバージョンリリース' },
          { date: '2024年第4四半期', event: '多言語対応の追加' },
          { date: '2025年第1四半期', event: '包括的なガイドと科学セクションの追加' },
          { date: '2025年第2四半期', event: '新機能とコンテンツによる継続的な拡張' },
        ],
      },
    },
    privacy: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新：2025年2月',
      sections: [
        {
          title: '収集する情報',
          content: '私たちはユーザーから個人情報を収集しません。反応速度テストの結果はブラウザにローカルで保存され、サーバーに送信されることはありません。訪問者がサイトをどのように使用しているかを理解するためにGoogle Analyticsを使用しており、匿名の使用データを収集します。',
        },
        {
          title: 'Cookieとトラッキング',
          content: '必須のサイト機能と分析目的でCookieを使用しています。Google AnalyticsはCookieを使用して、ウェブサイトとのやり取りに関する匿名情報を収集します。Google Analyticsオプトアウトブラウザアドオンをインストールすることで、Google Analyticsのトラッキングをオプトアウトできます。',
        },
        {
          title: 'サードパーティサービス',
          content: 'Google AdSenseを使用して広告を表示しています。Googleは、このウェブサイトまたは他のウェブサイトへの以前の訪問に基づいて、Cookieを使用して広告を配信する場合があります。Google広告設定にアクセスして、パーソナライズド広告をオプトアウトできます。',
        },
        {
          title: 'データセキュリティ',
          content: '個人情報を収集しないため、リスクにさらされる個人情報はありません。すべてのゲームデータはブラウザ内でローカルに処理されます。',
        },
        {
          title: 'お子様のプライバシー',
          content: '当サービスはすべての年齢のユーザーが利用できます。13歳未満のお子様を含め、誰からも個人情報を意識的に収集することはありません。',
        },
        {
          title: 'ポリシーの変更',
          content: 'このプライバシーポリシーは随時更新される場合があります。変更がある場合は、このページに新しいポリシーを掲載してお知らせします。',
        },
        {
          title: 'お問い合わせ',
          content: 'このプライバシーポリシーについてご質問がある場合は、お問い合わせページからご連絡ください。',
        },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      description: 'ご質問、フィードバック、ご提案はありますか？ぜひお聞かせください！以下のいずれかのチャンネルからお気軽にお問い合わせください。',
      email: 'メール',
      github: 'GitHub',
      faq: 'FAQ',
      faqDescription: '一般的な質問への迅速な回答については、FAQセクションを確認してください。',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        submit: 'メッセージを送信',
        success: 'メッセージをお送りいただきありがとうございます！まもなく返信いたします。',
      },
    },
    footer: {
      copyright: '© 2025 DreamURL. All rights reserved.',
    },
  },
};
