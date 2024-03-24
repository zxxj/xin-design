import type { Placement, Options } from '@popperjs/core'

export interface TooltipProps {
  // tooltip的内容
  content?: string

  // 触发模式
  trigger?: 'hover' | 'click'

  // tooltip的位置
  placement?: Placement

  // 是否手动控制tooltip的显示与隐藏
  manual?: boolean

  // popperjs插件配置项
  popperOptions?: Partial<Options>

  // 动画名称
  transition?: string
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
}

export interface TooltipInstance {
  showTooltip: () => void
  closeTooltip: () => void
}
