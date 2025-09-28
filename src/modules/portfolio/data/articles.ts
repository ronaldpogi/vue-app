export interface ArticlesItem {
  title: string
  content: string
  icon: string
}

const articles: ArticlesItem[] = [
  {
    title: 'About Me',
    icon: 'weui:me-filled',
    content: `
    I am a <span class="text-brand-highlight">full-stack developer</span>
    with experience building web applications using modern technologies
    such as Vue.js, Nuxt.js, Laravel, Tailwind CSS, and AWS. I specialize
    in creating responsive, user-friendly interfaces and efficient
    back-end systems, and I enjoy optimizing applications for performance,
    <span class="text-brand-highlight">scalability</span>, and <span class="text-brand-highlight">maintainability</span>.
  `,
  },
  {
    title: 'My Work',
    icon: 'material-symbols:work',
    content:
      'This portfolio showcases projects I contributed to at my previous company. Each project demonstrates practical use of <span class="text-brand-highlight">modern web technologies</span>, including cloud deployment, database design, API development, and UI/UX design. From front-end frameworks to <span class="text-brand-highlight">containerized</span> deployments and automated <span class="text-brand-highlight">CI/CD</span> pipelines, these projects reflect my hands-on experience and problem-solving skills in <span class="text-brand-highlight">real-world applications</span>.',
  },
  {
    title: 'Technologies I Use',
    icon: 'pixel:technology',
    content:
      'Front-end: Vue.js, Nuxt.js, Tailwind CSS, Ant Design, Bootstrap. Back-end: Laravel, PHP, MySQL, MSSQL. DevOps & Deployment: <span class="text-brand-highlight">AWS (EC2, ECS, ECR, Route 53, CodeBuild, CodePipeline)</span>, Docker. Tools: Git, Postman',
  },
]

export default articles
