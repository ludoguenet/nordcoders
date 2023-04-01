/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Navbar from '../src/components/includes/Navbar.vue';
import { useRoute } from "vue-router";
import navbarState from "../src/composables/navbar/state";

vi.mock('vue-router', () => ({ useRoute: vi.fn() }))

vi.mocked(useRoute).mockReturnValue({
    fullPath: "",
    hash: "",
    matched: [],
    meta: {},
    name: undefined,
    params: {},
    query: {},
    redirectedFrom: undefined,
    path: '/'
})

describe('navbar works correctly', () => {
    it('hides the mobile menu', async () => {
        const wrapper = mount(Navbar);
        expect(wrapper.text()).toMatchSnapshot();

        const mobileButton = wrapper.find("#mobile-button");
        const mobileLinks = wrapper.find("#mobile-links");

        expect(mobileButton.exists()).toBeTruthy();
        expect(mobileLinks.exists()).toBeTruthy();

        const spyOnButton = vi.spyOn(mobileButton, 'trigger')
        await mobileButton.trigger('click');

        expect(spyOnButton).toHaveBeenCalledOnce();
    });

    it('show mobile menu', () => {
        const {
            mobileMenuState,
            showMobileMenu,
        } = navbarState();

        expect(mobileMenuState.value).toBeTruthy();

        showMobileMenu();

        expect(mobileMenuState.value).toBeFalsy();
    })

    it('show mobile menu', () => {
        const {
            mobileMenuState,
            hideMobileMenu,
        } = navbarState();

        expect(mobileMenuState.value).toBeTruthy();

        hideMobileMenu();

        expect(mobileMenuState.value).toBeTruthy();
    })
});