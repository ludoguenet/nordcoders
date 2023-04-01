/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import View from '../src/views/WelcomeView.vue';

describe('welcome view is correctly rendered', () => {
    it('has h1', () => {
        const wrapper = mount(View);

        expect(wrapper.find('h1').exists()).toBeTruthy();
    });
});