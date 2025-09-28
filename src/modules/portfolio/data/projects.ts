export interface ProjectsItem {
  order: string
  name: string
  img: string
  imgTwo: string
  description: string
}

const projects: ProjectsItem[] = [
  {
    order: '01',
    name: 'HR Portal',
    description:
      'Developed back-end features for a web-based HR management system using Laravel, including employee records, leave tracking, and RESTful APIs with MySQL.',
    img: '/hr-portal.png',
    imgTwo: '/hr-portal-dashboard.png',
  },
  {
    order: '02',
    name: 'Thermal LRMS',
    description:
      'Built a Laravel & Vue web app for managing land operations, including permits, reports, litigation, and contracts, with optimized back-end APIs and dynamic front-end components.',
    img: '/thermal.png',
    imgTwo: '/thermal-dashboard.png',
  },
  {
    order: '03',
    name: 'Hedcor LRMS',
    description:
      'Full-stack development for Hedcor LRMS using Laravel & Vue, managing land permits, reports, litigation, and contracts with a centralized platform for efficiency and compliance.',
    img: '/lrms.png',
    imgTwo: '',
  },
  {
    order: '04',
    name: 'CASH',
    description:
      'Created CASH (Commercial Application for Sales Handling) to automate monthly billing, organize key data, reduce errors, and save time for the Commercial team.',
    img: '/cash.png',
    imgTwo: '/cash-dashboard.png',
  },
  {
    order: '05',
    name: 'IAP',
    description:
      'Developed the IAP-CR system to plan and approve helicopter flights to offshore sites, ensuring safe, organized, and efficient flight operations.',
    img: '/iap.png',
    imgTwo: '/iap-dashboard.png',
  },
  {
    order: '06',
    name: 'PTS',
    description:
      'Built PTS (Permit Tracking System) to track and remind users of permit renewals, ensuring timely updates and accountability across teams.',
    img: '/pts.png',
    imgTwo: '/pts-dashboard.png',
  },
]

export default projects
