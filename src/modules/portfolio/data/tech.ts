export interface TechItem {
  name: string
  icon: string
  description: string
}

const tech: TechItem[] = [
  {
    name: 'AWS',
    icon: 'mdi:aws',
    description:
      'Used AWS for project deployment, managing EC2 servers, Load Balancers, SSL certificates, Route 53 for DNS, ECS and ECR for containerized applications, and CI/CD pipelines with CodeBuild and CodePipeline.',
  },
  {
    name: 'VueJS',
    icon: 'flowbite:vue-solid',
    description:
      'Used Vue.js for front-end development, leveraging components, composables, Vuex and Pinia for state management, and creating interactive, reactive interfaces.',
  },
  {
    name: 'Laravel',
    icon: 'mdi:laravel',
    description:
      'Used Laravel as the main back-end framework, working with Eloquent ORM, query builder, scheduling cron jobs, and building RESTful APIs for applications.',
  },
  {
    name: 'MySQL',
    icon: 'lineicons:mysql',
    description:
      'Used MySQL as the primary relational database, designing schemas, writing queries, and managing data efficiently for all projects.',
  },
  {
    name: 'MSSQL',
    icon: 'devicon-plain:microsoftsqlserver',
    description:
      'Used MSSQL in projects that required Microsoft SQL Server for database management and reporting.',
  },
  {
    name: 'Docker',
    icon: 'mdi:docker',
    description:
      'Used Docker for containerizing applications, managing images and containers, and integrating with CI/CD pipelines to automate builds and deployments.',
  },
  {
    name: 'Nuxt',
    icon: 'mdi:nuxt',
    description:
      'Used Nuxt.js for building server-side rendered (SSR) and statically generated Vue applications, improving performance, SEO, and user experience.',
  },
  {
    name: 'Ant Design',
    icon: 'simple-icons:antdesign',
    description:
      'Used Ant Design as a UI framework to build clean, responsive, and consistent user interfaces efficiently for web applications.',
  },
  {
    name: 'Tailwind',
    icon: 'mdi:tailwind',
    description:
      'Used Tailwind CSS for utility-first styling, building responsive layouts and consistent designs rapidly without writing custom CSS.',
  },
  {
    name: 'Bootstrap',
    icon: 'mdi:bootstrap',
    description:
      'Used Bootstrap as part of the UI toolkit to create responsive and mobile-friendly web interfaces quickly.',
  },
  {
    name: 'Git',
    icon: 'mdi:git',
    description:
      'Used Git for version control to manage codebases, track changes, collaborate with team members, and maintain clean development workflows.',
  },
  {
    name: 'Postman',
    icon: 'lineicons:postman',
    description:
      'Used Postman for testing APIs, sending requests, debugging responses, and collaborating on API documentation during development.',
  },
  {
    name: 'Redis',
    icon: 'devicon-plain:redis',
    description:
      'Used Redis as an in-memory data store and cache for improving application performance, managing sessions, and handling real-time data efficiently.',
  },
  {
    name: 'SaaS',
    icon: 'carbon:ibm-saas-console',
    description:
      'Worked with multi-tenant SaaS platforms, designing and managing applications that serve multiple clients with isolated data, integrated APIs, and scalable cloud-based services.',
  },
  {
    name: 'SEO',
    icon: 'mdi:google-ads', // or any SEO-related icon you prefer
    description:
      'Implemented SEO strategies to improve website visibility, including meta tags, structured data, sitemaps, and optimizing page performance for better search engine rankings.',
  },
]

export default tech
