import Button from '../../components/atoms/Button'
import { ComponentStory } from '@storybook/react'

const Story = {
  title: 'atoms/Button',
  component: Button,

}
export default Story

export const AtomButton: ComponentStory<typeof Button> = (...args) => {
  return (
    <Button {...args}>
      Test
    </Button>
  )
}
