import { JobItem } from './job-list/job-list.component';

export const jobData: JobItem[] = [
   {
      id: '1',
      name: 'Senior Java Software Engineer',
      requirements: '5+ години опит с Java',
      description: 'Using Java and Spring Boot in Microservices-based Architecture.',
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
];
