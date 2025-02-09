import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const x = ref(0)
    // To store our Mouse Coordinates (state)
    const y = ref(0)

    function update(event) {
        // Set the X & Y
    x.value = event.pageX
    y.value = event.pageY
    }

    // When mouse moves call update(up)
    onMounted(() => window.addEventListener('mousemove', update))   
    onUnmounted(() => window.removeEventListener('mousemove', update))  
}