import { ref } from "vue";

const isOpen = ref(false)

export function useSaasSidebar() {
  return {
    isOpen
  };
}
