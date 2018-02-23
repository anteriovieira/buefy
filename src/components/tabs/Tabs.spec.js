import { mount } from '@vue/test-utils'
import BTabs from '@components/tabs/Tabs'
import BTabItem from '@components/tabs/TabItem'

describe('BTabs', () => {
    it('is called', () => {
        const wrapper = mount(BTabs)
        expect(wrapper.name()).toBe('BTabs')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('should register tabs', () => {
        const wrapper = mount(BTabs, {
            slots: {
                default: [BTabItem, BTabItem]
            }
        })

        const tabItem = wrapper.find(BTabItem)
        expect(wrapper.vm.tabItems.length).toBe(2)
        tabItem.destroy()
        expect(wrapper.vm.tabItems.length).toBe(1)
    })
})
