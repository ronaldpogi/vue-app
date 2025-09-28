// composables/useDebounce.ts
import { onBeforeUnmount } from 'vue'

export function useDebounce<T extends (...args: any[]) => void>(fn: T, wait = 300) {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), wait)
  }

  onBeforeUnmount(() => {
    if (timeout) clearTimeout(timeout)
  })

  return debounced
}
