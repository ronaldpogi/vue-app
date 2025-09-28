// composables/useGsapReveal.ts
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useGsapReveal() {
  let triggers: ScrollTrigger[] = []

  onMounted(() => {
    // Register plugin once
    gsap.registerPlugin(ScrollTrigger)

    // Initial hidden state
    gsap.set('.reveal-hero-text', { opacity: 0, y: '100%' })
    gsap.set('.reveal-hero-img', { opacity: 0, y: '100%' })
    gsap.set('.reveal-up', { opacity: 0, y: '100%' })

    // Animate hero text
    gsap.to('.reveal-hero-text', {
      opacity: 1,
      y: '0%',
      duration: 0.8,
      stagger: 0.5,
    })

    // Animate hero image
    gsap.to('.reveal-hero-img', {
      opacity: 1,
      y: '0%',
      duration: 0.8,
    })

    // Reveal sections on scroll
    const sections: HTMLElement[] = gsap.utils.toArray('section') as HTMLElement[]
    sections.forEach((sec) => {
      const targets = sec.querySelectorAll('.reveal-up')

      if (targets.length) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: '10% 80%',
            end: '20% 90%',
          },
        })

        tl.to(targets, {
          opacity: 1,
          duration: 0.8,
          y: '0%',
          stagger: 0.2,
        })

        triggers.push(tl.scrollTrigger!)
      }
    })
  })

  onBeforeUnmount(() => {
    // Clean up ScrollTriggers to prevent memory leaks
    triggers.forEach((t) => t.kill())
    triggers = []
  })
}
