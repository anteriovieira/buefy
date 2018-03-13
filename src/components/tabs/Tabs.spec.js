import { mount } from '@vue/test-utils'
import BTabs from '@components/tabs/Tabs'
import BTabItem from '@components/tabs/TabItem'

const tabsStub = (items = ['foo', 'bar']) => ({
    inheritAttrs: false,
    render(h) {
        return h(BTabs, {
            attrs: this.$attrs
        }, [
            items.map((item) => h(BTabItem, {
                props: { label: item },
                item
            }))
        ])
    }
})

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

    it('should change tab and content when model changes', async () => {
        const wrapper = mount(tabsStub())
        const Tab = wrapper.find(BTabs)

        await wrapper.vm.$nextTick()
        const Second = Tab.find('ul li:nth-child(2)')

        console.log(Second)
        expect(Tab.vm.newValue).toBe(0)
        // const items = Tab.findAll('ul li')
        // console.log(items)
    })

    it('should toggle active tab', () => {
        // ...
    })
})
