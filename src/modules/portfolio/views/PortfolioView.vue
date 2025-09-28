<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import projects from '../data/projects'
import testimonials from '../data/testimonials'
import tech from '../data/tech'
import articles from '../data/articles'

const typedProjects = projects
const typedTestimonials = testimonials
const typedTech = tech
const typedArticles = articles

const RESPONSIVE_WIDTH = 1024

// state
const isHeaderCollapsed = ref<boolean>(window.innerWidth < RESPONSIVE_WIDTH)
const collapseBtn = ref<HTMLButtonElement | null>(null)
const collapseHeaderItems = ref<HTMLDivElement | null>(null)

function toggleHeader(): void {
  if (!collapseBtn.value || !collapseHeaderItems.value) return

  if (isHeaderCollapsed.value) {
    collapseHeaderItems.value.classList.add('opacity-100')
    collapseHeaderItems.value.style.width = '60vw'
    collapseBtn.value.classList.remove('bi-list')
    collapseBtn.value.classList.add('bi-x', 'max-lg:tw-fixed')
    isHeaderCollapsed.value = false

    setTimeout(() => window.addEventListener('click', onHeaderClickOutside), 1)
  } else {
    collapseHeaderItems.value.classList.remove('opacity-100')
    collapseHeaderItems.value.style.width = '0vw'
    collapseBtn.value.classList.remove('bi-x', 'max-lg:tw-fixed')
    collapseBtn.value.classList.add('bi-list')
    isHeaderCollapsed.value = true
    window.removeEventListener('click', onHeaderClickOutside)
  }
}

function onHeaderClickOutside(e: MouseEvent): void {
  if (collapseHeaderItems.value && !collapseHeaderItems.value.contains(e.target as Node)) {
    toggleHeader()
  }
}

function responsive(): void {
  if (!collapseHeaderItems.value) return

  if (window.innerWidth > RESPONSIVE_WIDTH) {
    collapseHeaderItems.value.style.width = ''
  } else {
    isHeaderCollapsed.value = true
  }
}

onMounted(() => {
  window.addEventListener('resize', responsive)

  // GSAP setup
  gsap.registerPlugin(ScrollTrigger)

  // Set initial hidden state instead of animating them away
  gsap.set('.reveal-hero-text', { opacity: 0, y: '100%' })
  gsap.set('.reveal-hero-img', { opacity: 0, y: '100%' })
  gsap.set('.reveal-up', { opacity: 0, y: '100%' })

  // Animate into view when component mounts
  gsap.to('.reveal-hero-text', {
    opacity: 1,
    y: '0%',
    duration: 0.8,
    stagger: 0.5,
  })

  gsap.to('.reveal-hero-img', {
    opacity: 1,
    y: '0%',
    duration: 0.8,
  })

  // Reveal sections on scroll
  const sections: HTMLElement[] = gsap.utils.toArray('section') as HTMLElement[]
  sections.forEach((sec) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sec,
          start: '10% 80%',
          end: '20% 90%',
        },
      })
      .to(sec.querySelectorAll('.reveal-up'), {
        opacity: 1,
        duration: 0.8,
        y: '0%',
        stagger: 0.2,
      })
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', responsive)
  window.removeEventListener('click', onHeaderClickOutside)
})
</script>

<template>
  <body class="flex min-h-[100vh] flex-col bg-[#fff] font-mono">
    <header
      class="absolute top-0 z-20 flex h-[60px] w-full bg-opacity-0 px-[5%] max-lg:px-4 justify-end py-10"
    >
      <div
        class="mx-4 flex place-items-center gap-[20px] text-base max-md:flex-col max-md:place-content-center"
      >
        <a
          href="/ronald-bibon-resume.pdf"
          download
          aria-label="signup"
          class="flex h-[40px] place-items-center gap-2 rounded-full bg-black p-1 pl-4 text-white hover:bg-brand-highlight font-semibold"
        >
          <span>My Resume</span>
          <div
            class="flex h-[30px] w-[30px] place-content-center place-items-center rounded-full bg-white font-semibold text-black"
          >
            <Icon icon="akar-icons:arrow-up-right" width="24" height="24" />
          </div>
        </a>
      </div>
    </header>

    <section
      class="flex min-h-[100vh] w-full max-w-[100vw] flex-col overflow-hidden max-lg:p-4 max-md:mt-[50px]"
    >
      <div
        class="flex h-full min-h-[100vh] w-full place-content-center gap-6 p-[5%] max-xl:place-items-center max-lg:flex-col"
      >
        <div class="flex flex-col place-content-center">
          <div
            class="flex flex-wrap text-7xl font-semibold uppercase leading-[85px] max-lg:text-4xl max-md:leading-snug"
          >
            <span class="reveal-hero-text bg-brand-highlight p-1 px-6"> ronald </span>
            <br />
            <span class="reveal-hero-text"> Laravel & Vue.js Developer</span>
          </div>
          <div class="reveal-hero-text mt-2 max-w-[450px] p-2 max-lg:max-w-full">
            I’m a Laravel and Vue.js developer with a strong focus on building fast, scalable, and
            user-friendly web applications. With experience in both backend and frontend
            development, I enjoy turning complex problems into simple, elegant solutions.
          </div>

          <div class="reveal-hero-text mt-4 flex place-items-center gap-4 overflow-hidden p-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=ronaldjohnbibon20@gmail.com"
              target="_blank"
              aria-label="signup"
              class="font-semibold flex h-[40px] place-items-center gap-2 rounded-full border-[1px] border-solid border-black bg-white p-1 pl-4 text-black transition-colors duration-[0.5s] hover:bg-black hover:text-white"
            >
              <span>Let’s connect</span>
              <div
                class="flex h-[30px] w-[30px] place-content-center place-items-center rounded-full bg-white font-semibold text-black"
              >
                <Icon icon="akar-icons:arrow-up-right" width="24" height="24" />
              </div>
            </a>
          </div>
        </div>

        <div
          class="flex w-full max-w-[50%] place-content-center place-items-center overflow-hidden max-lg:max-w-[unset]"
        >
          <div
            class="flex max-h-[580px] min-h-[450px] min-w-[350px] max-w-[650px] overflow-hidden max-lg:h-fit max-lg:max-h-[320px] max-lg:min-h-[180px] max-lg:w-[320px] max-lg:min-w-[320px]"
          >
            <img src="/me-2.jpg" alt="app" class="reveal-hero-img h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex min-h-[100vh] w-full max-w-[100vw] flex-col place-items-center overflow-hidden p-6 py-5"
    >
      <h3 class="reveal-up text-6xl font-medium max-lg:text-3xl">Past works</h3>
      <div class="reveal-up my-4 h-[1px] w-[80%] bg-black"></div>
      <small class="reveal-up text-gray-500 text-xsm">
        These projects showcase my contributions at my previous company.
      </small>
      <div class="mt-8 gap-10 space-y-8 max-md:columns-1 lg:columns-2 xl:columns-3">
        <div
          v-for="x in typedProjects"
          :key="x.order"
          class="reveal-up flex h-fit w-[450px] break-inside-avoid flex-col gap-2 rounded-lg bg-[#f3f3f3b4] p-4 shadow-lg max-lg:w-full max-lg:max-w-[400px]"
        >
          <div class="flex place-items-center gap-3">
            <div class="h-auto w-auto overflow-hidden rounded-lg">
              <img :src="x.img" class="h-full w-full object-cover" alt="design" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-medium">{{ x.name }}</h3>
            <p class="text-gray-600 text-sm">
              {{ x.description }}
            </p>
            <!-- <a href="http://" class="mt-4">
              <span>Learn more</span>
              <i class="bi bi-arrow-right"></i>
            </a> -->
          </div>
        </div>
      </div>
    </section>

    <section
      class="mt-10 flex min-h-[100vh] w-full max-w-[100vw] flex-col place-content-center place-items-center lg:p-6"
    >
      <div
        class="flex h-full w-full justify-around gap-8 rounded-xl bg-[#e7e6e685] p-4 max-lg:max-w-full max-lg:flex-col"
      >
        <div
          class="reveal-up flex h-full w-[50%] place-content-center max-lg:w-full lg:sticky lg:top-[20%]"
        >
          <h3 class="text-center text-6xl font-medium max-lg:text-3xl">What my colleagues say</h3>
        </div>

        <div class="reveal-up flex w-[30%] flex-col place-items-center gap-4 p-2 max-lg:w-full">
          <div
            v-for="x in typedTestimonials"
            :key="x.name"
            class="flex h-fit w-full flex-col gap-4 border-2 border-black bg-white p-4"
          >
            <div class="flex w-full justify-end">
              <a
                :href="x.href"
                target="_blank"
                aria-label="signup"
                class="reveal-up flex h-[30px] place-items-center gap-2 rounded-full bg-black p-1 pl-4 text-white text-sm hover hover:bg-brand-highlight"
              >
                <span><Icon icon="logos:linkedin" width="60" height="60" /></span>
                <div
                  class="flex h-[20px] w-[20px] place-content-center place-items-center rounded-full bg-white font-semibold text-black"
                >
                  <Icon icon="akar-icons:arrow-up-right" width="24" height="24" />
                </div>
              </a>
            </div>
            <div class="flex w-full place-items-center gap-4 p-2">
              <div class="flex h-[60px] w-[60px] overflow-hidden rounded-full">
                <img :src="x.img" alt="women" class="h-full w-full object-cover" />
              </div>

              <div>
                <p class="text-xl font-semibold">{{ x.name }}</p>
                <p class="text-md text-gray-600">{{ x.role }}</p>
              </div>
            </div>
            <div class="text-gray-800 text-sm">
              {{ x.testimonial }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="flex min-h-[80vh] w-full max-w-[100vw] flex-col place-content-center place-items-center overflow-hidden p-6"
    >
      <div class="mt-8 flex flex-col place-items-center gap-5">
        <div class="reveal-up mt-5 flex flex-col gap-3 text-center">
          <h2 class="text-4xl font-semibold p-8">Work with an expert</h2>
        </div>
        <div class="flex max-w-[100%] flex-wrap place-content-center gap-2 max-lg:flex-col">
          <div
            v-for="x in typedTech"
            :key="x.name"
            class="reveal-up flex h-auto w-[400px] flex-col gap-2 p-8"
          >
            <!-- <img src="./assets/images/home/sample.jpg"
                                alt="feature1"> -->
            <div class="flex gap-1">
              <Icon :icon="x.icon" width="30" height="30" />
              <h3 class="text-2xl font-semibold">{{ x.name }}</h3>
            </div>
            <div class="text-[#595959]">
              {{ x.description }}
            </div>
          </div>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&to=ronaldjohnbibon20@gmail.com"
          target="_blank"
          aria-label="signup"
          class="font-semibold reveal-up flex h-[40px] place-items-center gap-2 rounded-full bg-black p-1 pl-4 text-white"
        >
          <span>Let’s connect</span>
          <div
            class="flex h-[30px] w-[30px] place-content-center place-items-center rounded-full bg-white font-semibold text-black"
          >
            <Icon icon="akar-icons:arrow-up-right" width="24" height="24" />
          </div>
        </a>
      </div>
    </section>

    <section class="mt-5 flex w-full flex-col place-items-center p-[2%] max-lg:p-3">
      <h3 class="reveal-up text-center text-4xl font-medium max-md:text-2xl">
        Read my articles for more insights
      </h3>
      <!-- pricing -->
      <div class="reveal-up mt-10 flex flex-wrap place-content-center gap-10 max-lg:flex-col">
        <div
          v-for="x in typedArticles"
          :key="x.title"
          class="flex h-auto w-[340px] flex-col gap-2 overflow-clip rounded-lg bg-[#edecec79] p-4 shadow-xl"
        >
          <div class="h-auto w-full overflow-hidden rounded-md align-self-center">
            <Icon :icon="x.icon" width="30" height="30" />
          </div>
          <h3 class="text-2xl font-semibold max-md:text-xl">{{ x.title }}</h3>
          <p class="mt-2 text-gray-600 text-sm" v-html="x.content"></p>
        </div>
      </div>
    </section>

    <hr
      class="mt-10 h-1 border-0 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 rounded"
    />

    <footer
      class="mt-auto flex min-h-[100px] w-full place-content-around place-items-center gap-3 text-black max-md:flex-col"
    >
      <div class="flex gap-6 text-2xl">
        <a href="https://github.com/ronaldpogi" target="_blank" aria-label="Github">
          <Icon icon="mdi:git" class="text-[25px]" />
        </a>
        <a href="https://www.instagram.com/rjsb_20" target="_blank" aria-label="Twitter">
          <Icon icon="mdi:instagram" class="text-[25px]" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100089220332626"
          target="_blank"
          aria-label="stackoverflow"
        >
          <Icon icon="ic:baseline-facebook" class="text-[25px]" />
        </a>
      </div>
    </footer>
  </body>
</template>

<style scoped>
:root {
  --btn-color: #fdfdfd; /* button color*/
  --btn-bg: #0d0d0d; /* button bg color*/

  --primary-text-color: #000;
  --footer-link-hover: #6dbb00;
  --input-focus-bd-color: #0d0d0d;
}

html {
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
}

.outline-effect {
  color: black;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke: 2px black;
}

.animated-collapse {
  transition: width 0.3s ease;
}

.material-icons.md-40 {
  font-size: 40px;
}

.primary-text-color {
  color: var(--primary-text-color);
}

.opacity-0 {
  opacity: 0 !important;
}

.opacity-100 {
  opacity: 100 !important;
}

.btn {
  padding: 10px 15px;
  width: max-content;
  border-radius: 25px;
  color: var(--btn-color);
  background-color: var(--btn-bg);
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.btn:hover {
}

.btn:disabled {
  cursor: default;
}

.input {
  padding: 10px;
  background-color: transparent;
  border-radius: 25px;
  /* outline: none; */
  min-width: 100px;
  border: 2px solid #818080;
  transition: border 0.3s;
}

.input:active,
.input:focus,
.input:focus-within {
  border: 2px solid var(--input-focus-bd-color);
}

.input-error {
  border-bottom: 3px solid #ff1e1e;
}

.input-error:focus-within {
  border-bottom: 3px solid #fd0101;
}

/* Navigation dots styling */
.dots-container {
  text-align: center;
  margin-top: 20px;
}

.footer-link {
  color: #0d0d0d;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--footer-link-hover);
}

.review-container {
  position: relative;
  max-width: 600px;
  margin: auto;
}

.review-card {
  box-shadow: 0px 2px 4px #757474a0;
  border-radius: 15px;
  /* width: 200px; */
  /* height: 550px; */
  padding: 10px;
}

/* --------- collapsible div ---------- */
.collapsible {
  background-color: #f3f0f0;
  color: #2b2929;
  /* cursor: pointer; */
  padding: 5px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 16px;
  transition: 0.4s;
}

/* Style for the collapsible content */
.content {
  padding: 0 18px;
  /* display: none; */
  height: 0px;
  overflow: hidden;
  background-color: transparent;
  transition: height 0.5s;
  text-align: justify;
  margin-top: 10px;
}
</style>
