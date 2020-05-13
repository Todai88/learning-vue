import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import mockRouter from './helpers/mockRouter'
import flushPromises from 'flush-promises'
import EventList from '@/views/EventList'

describe('router', () => {
  it('should route to event-show when link is clicked', async () => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const mockedRouter = mockRouter.mock()
    const wrapper = mount(EventList, {
      localVue,
      router: mockedRouter
    })
    const headerText = wrapper.find('h1').element.textContent
    await flushPromises()

    expect(headerText).toBe('Events Listing')
  })
})
