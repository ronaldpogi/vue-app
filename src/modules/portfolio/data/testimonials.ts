export interface TestimonalsItem {
  name: string
  role: string
  testimonial: string
  img: string // optional profile image
  href: string
}

const testimonials: TestimonalsItem[] = [
  {
    name: 'Dave Mabanag',
    role: 'C# Developer',
    testimonial:
      'Ronald is a highly skilled developer who always delivers clean and efficient code. Collaborating with him is smooth and productive.',
    img: '/dave.jpg',
    href: 'https://www.linkedin.com/in/mark-dave-mabanag',
  },
  {
    name: 'Michael Andaya',
    role: 'QA Tester',
    testimonial:
      'He pays great attention to detail and writes code that is easy to test. His work reduces bugs and improves overall project quality.',
    img: '/michael.jpg',
    href: 'https://www.linkedin.com/in/michael-andaya-40068a322',
  },
  {
    name: 'Earl Bryan Nebres',
    role: 'React Native Developer',
    testimonial:
      'Working with Ronald is a pleasure. He quickly adapts to new technologies and builds seamless user experiences.',
    img: '/bryan.jpg',
    href: 'https://www.linkedin.com/in/earl-bryan-nebres-60598a152/',
  },
  {
    name: 'Charles Dominic Narag',
    role: 'React Native Developer',
    testimonial:
      'Ronald is versatile and reliable. His expertise in both front-end and back-end makes him a valuable team member.',
    img: '/charles.jpg',
    href: 'https://www.linkedin.com/in/dmncnrg/',
  },
  {
    name: 'Aldrin Tejada',
    role: 'QA Tester',
    testimonial:
      'He consistently delivers well-tested and maintainable code. A true professional who cares about quality.',
    img: '/aldrin.jpg',
    href: 'https://www.linkedin.com/in/aldrin-tejada-33a902248/',
  },
]

export default testimonials
