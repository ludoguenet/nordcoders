import { ref } from "vue";

export default function () {
    const mobileMenuState = ref<boolean>(true);

    const showMobileMenu = (): void => {
        mobileMenuState.value = false;
    }

    const hideMobileMenu = (): void => {
        mobileMenuState.value = true;
    }

    return {
        mobileMenuState,
        showMobileMenu,
        hideMobileMenu,
    }
}