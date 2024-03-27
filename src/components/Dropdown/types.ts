import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'

// 继承Tooltip组件的props
export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[]
}

// MenuOption数据项规则
export interface MenuOption {
  // 每一项唯一的标识
  key: string | number

  // 选择是需展示的内容,支持Vnode
  label: string | VNode

  // 是否禁用选项
  disabled?: boolean

  // 每一个选项下方是否显示下划线
  divided?: boolean
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOption): void
}

// Dropdown组件实例
export interface DropdownInstance {
  showDropdown: () => void
  closeDropdown: () => void
}
