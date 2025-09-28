export interface stepsItem {
  name: string
  description: string
  icon: string
}

const steps: stepsItem[] = [
  {
    name: 'Containerization',
    icon: 'lucide:container',
    description: 'Packaged the app into a Docker image with production-ready configuration.',
  },
  {
    name: 'Image Repository',
    icon: 'hugeicons:repository',
    description:
      'Pushed the built image to DockerHub for versioned image storage and distribution.',
  },
  {
    name: 'CI/CD with GitHub Actions',
    icon: 'material-symbols:build',
    description:
      'Configured GitHub Actions workflows to build the Docker image, push it to DockerHub, and trigger automated deployments.',
  },
  {
    name: 'Deployment Server',
    icon: 'mdi:server',
    description:
      'Provisioned an EC2 Linux server to host the application containers, ensuring scalability and control over the environment.',
  },
  {
    name: 'Nginx Reverse Proxy',
    icon: 'file-icons:nginx',
    description:
      'Set up Nginx on the EC2 instance as a reverse proxy to route traffic from port 80 to the Docker container running the app.',
  },
  {
    name: 'Automated Deployment',
    icon: 'eos-icons:pipeline',
    description:
      'Integrated CI/CD so every push to the main branch automatically rebuilds the Docker image, pushes it to DockerHub, pulls the latest version on EC2, and restarts the container through Nginx.',
  },
]

export default steps
