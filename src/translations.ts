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
    about: string;
    privacy: string;
    contact: string;
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
    team: {
      title: string;
      content: string;
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
    madeWith: string;
  };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      privacy: 'Privacy Policy',
      contact: 'Contact',
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
      { grade: 'Silver', description: { general: 'Solid and reliable. A dependable teammate.', overwatch: 'A reliable Tank like Reinhardt or D.Va would suit you well.', lol: 'You\'d do well in Top lane with a strong frontliner like Garen or Ornn.' } },
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
        ],
      },
      team: {
        title: 'About the Developer',
        content: 'DreamURL is developed by a passionate frontend developer who loves creating interactive web experiences. Our goal is to provide high-quality, free tools that help people learn about themselves and improve their abilities.',
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
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you for your message! We\'ll get back to you soon.',
      },
    },
    footer: {
      copyright: '© 2025 DreamURL. All rights reserved.',
      madeWith: 'Made with ❤️ for gamers worldwide',
    },
  },
  ko: {
    nav: {
      home: '홈',
      about: '소개',
      privacy: '개인정보처리방침',
      contact: '문의하기',
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
        ],
      },
      team: {
        title: '개발자 소개',
        content: 'DreamURL은 인터랙티브 웹 경험을 만드는 것을 좋아하는 열정적인 프론트엔드 개발자가 개발했습니다. 우리의 목표는 사람들이 자신에 대해 배우고 능력을 향상시키는 데 도움이 되는 고품질의 무료 도구를 제공하는 것입니다.',
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
      form: {
        name: '이름',
        email: '이메일',
        message: '메시지',
        submit: '메시지 보내기',
        success: '메시지를 보내주셔서 감사합니다! 곧 답변드리겠습니다.',
      },
    },
    footer: {
      copyright: '© 2025 DreamURL. All rights reserved.',
      madeWith: '전 세계 게이머를 위해 ❤️로 만들었습니다',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      privacy: 'Política de Privacidad',
      contact: 'Contacto',
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
        ],
      },
      team: {
        title: 'Sobre el Desarrollador',
        content: 'DreamURL es desarrollado por un apasionado desarrollador frontend que ama crear experiencias web interactivas. Nuestro objetivo es proporcionar herramientas gratuitas y de alta calidad que ayuden a las personas a conocerse a sí mismas y mejorar sus habilidades.',
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
      madeWith: 'Hecho con ❤️ para gamers de todo el mundo',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      privacy: '隐私政策',
      contact: '联系我们',
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
        ],
      },
      team: {
        title: '关于开发者',
        content: 'DreamURL由一位热爱创建互动网络体验的前端开发者开发。我们的目标是提供高质量的免费工具，帮助人们了解自己并提高能力。',
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
      madeWith: '为全球游戏玩家用 ❤️ 制作',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: 'サイト概要',
      privacy: 'プライバシーポリシー',
      contact: 'お問い合わせ',
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
        ],
      },
      team: {
        title: '開発者について',
        content: 'DreamURLは、インタラクティブなウェブ体験を作成することが大好きな情熱的なフロントエンド開発者によって開発されています。私たちの目標は、人々が自分自身について学び、能力を向上させるのに役立つ高品質の無料ツールを提供することです。',
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
          content: '個人データを収集しないため、リスクにさらされる個人情報はありません。すべてのゲームデータはブラウザ内でローカルに処理されます。',
        },
        {
          title: 'お子様のプライバシー',
          content: '当サービスはすべての年齢のユーザーが利用できます。13歳未満のお子様を含め、誰からも個人情報を意図的に収集することはありません。',
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
      madeWith: '世界中のゲーマーのために❤️で作られました',
    },
  },
};
