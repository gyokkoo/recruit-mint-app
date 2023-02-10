import { JobItem } from './job-list/job-list.component';

export const jobData: JobItem[] = [
   {
      id: '1',
      name: 'Senior Java Software Engineer',
      requirements: '5+ години опит с Java',
      description: 'Using Java and Spring Boot in Microservices-based Architecture.',
      longDescription: `
Търсим Senior Java програмист за да се присъедини към нашия екип.

Отговорности:
Разработване на високо качествен и ефективен софтуер
Управление на жизнения цикъл на проектите, включително анализ, дизайн, реализация, тестване и деплой
Работа в екип с други разработчици, QA инженери и мениджъри
Поддръжка и подобряване на съществуващи приложения
Предоставяне на техническа експертиза и поддръжка на клиентите

Изисквания:
Над 5 години опит в Java разработка
Добри знания на Java, ООП, структури от данни и алгоритми
Умение да работи със Spring, Hibernate или друг фреймуърк за приложения
Умение да работи с бази данни като MySQL, PostgreSQL или Oracle
Добри знания на английски език
`,
      isRemote: true,
   },
   {
      id: '2',
      name: 'Python Developer',
      requirements: '2+ години опит с Python',
      description:
         'Writing and testing code, debugging programs and integrating applications with third-party web services.',
      isRemote: false,
   },
   {
      id: '3',
      name: 'Senior iOS Developer',
      requirements: '2+ години опит с Objective-C или Swift',
      description:
         'Responsible for designing and developing mobile applications for devices powered by Apple’s iOS OS',
      isRemote: false,
   },
   {
      id: '4',
      name: 'Intern Cloud Computing',
      requirements: 'студент',
      description:
         'Contribute to the implementation of a parallel programming system. Participate in a consensus-oriented design process.',
      isRemote: false,
   },
   {
      id: '5',
      name: 'Software Development Lead .NET',
      requirements: '5+ години опит .NET',
      description:
         'Looking to hire a motivated individual with strong leadership potential, technical skills.',
      isRemote: false,
   },
   {
      id: '6',
      name: 'Системен администратор',
      requirements: 'Минимум 2 години опит в IT сферата',
      description: '',
      longDescription: `
      Към семейството ни търсим да се присъеди Системен администратор, отговарящ на следните изисквания:
      
-Завършено образование или друга подготовка в областта на информационните технологии;
-Практически опит и познания по Microsoft OS;
-Основни познания на мрежовите LAN стандарти и протоколи;
-Аналитичност, систематизираност, организираност и отношение към работната среда;
-Умения за работа в екип;
-Минимум 2 години опит в IT сферата;
-Отлични умения за отстраняване на проблеми и техническо разбиране;
-Добро разбиране на TCP/IP и свързаните мрежови технологии;
-Отлични умения за писмена и устна комуникация на английски език.

Предимства:
-Познания относно Backup хардуер и решения;
-Познаване на платформата за виртуализация hyper-v, PowerShell && Linux – предимство;
-Познания в операционните системи за сървъри.

Основни задължения:
-IT HELP DESK - Решаване на проактивни хардуерни и софтуерни проблеми, отстраняване на проблеми;
-Инсталиране, администриране и оптимизиране на технологии за настолни компютри и лаптопи, отдалечено и на място при клиенти;
-Осигуряване на ежедневна поддръжка и мониторинг на настолни компютри, лаптопи, принтери и среди за съхранение;
-Управление и администриране на софтуер, приложения, архивиране и възстановяване;
-Разбиране и прилагане на ИТ стандарти и най -добри практики в зависимост от областта;
Инсталиране, конфигуриране, миграция, ъпгрейд и пачове за защита.
`,
      isRemote: false,
   },
];
