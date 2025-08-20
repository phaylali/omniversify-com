<template>
    <div>
        <!-- Menu Toggle Button -->
        <button @click="toggleMenu" class="omni-btn">
            <Menu />
        </button>
        <!-- Full Screen Overlay -->
        <Teleport to="body">
            <div v-if="isMenuOpen" class="menu-overlay" @click.self="closeMenu">
                <!-- Left Vertical Bar -->
                <div class="vertical-bar-left"></div>

                <!-- Center Content Area -->
                <div class="menu-content">
                    <nav class="menu-nav">
                        <div class="menu-items-container">
                            <UButton v-for="item in menuItems" :key="item.id" @click="handleMenuClick(item)"
                                variant="ghost" size="xl" class="menu-item locale-text">
                                {{ $t(item.label) }}
                            </UButton>
                        </div>
                    </nav>
                </div>
                <!-- Right Vertical Bar with Close Button -->
                <div class="vertical-bar-right">
                    <button @click="closeMenu" class="omni-btn">
                        <Minimize2 />
                    </button>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
interface MenuItem {
    id: string;
    label: string;
    path?: string;
}
import { Menu, Minimize2 } from 'lucide-vue-next';
const { locale } = useI18n();
const localePath = useLocalePath();
// Menu state
const isMenuOpen = ref(false);

// Sample menu items - customize as needed
const menuItems: MenuItem[] = [
    { id: '1', label: 'home', path: '/' },
    { id: '2', label: 'ourMission', path: '/ourMission' },
    { id: '3', label: 'blog', path: '/blog' },
    { id: '4', label: 'games', path: '/games' },
    { id: '5', label: 'projects', path: '/projects' },
    { id: '6', label: 'loreCulture', path: '/loreCulture' },
    { id: '7', label: 'characters', path: '/characters' },
    { id: '8', label: 'chronicles', path: '/chronicles' },
    { id: '9', label: 'community', path: '/community' },
    { id: '10', label: 'maps', path: '/maps' },
    { id: '11', label: 'contact', path: '/contact' },
    { id: '12', label: 'shop', path: '/shop' },
];

// Menu functions
const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value;
    // Prevent body scroll when menu is open
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

const closeMenu = (): void => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
};

const handleMenuClick = async (item: MenuItem): Promise<void> => {
  console.log('Menu item clicked:', item);
  
  if (item.path) {
    await navigateTo(localePath(item.path));
  }
  
  closeMenu();
};

// Cleanup on unmount
onUnmounted(() => {
    document.body.style.overflow = '';
});

// Handle escape key
const handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && isMenuOpen.value) {
        closeMenu();
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
});
</script>