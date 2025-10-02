export interface appsItem {
  name: string
  desciption: string
  img: string
  scopes: string[]
}

const apps: appsItem[] = [
  {
    name: 'SaaS',
    desciption: 'Developed a multi-tenant web application using Laravel and Vue.js, enabling multiple organizations to share a single platform with secure, isolated data and a responsive, user-friendly interface for each tenant.',
    img: '/saas.png',
    scopes: [
      'RBAC',
      'register-tenant',
      'create-members',
      'login',
      'logout',
      'update',
      'delete',
      'list',
    ],
  },

]

export default apps
