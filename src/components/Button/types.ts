// 按钮类型
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// 按钮大小
export type ButtonSize = 'large' | 'small'

// 原生button的类型
export type NativeType = 'button' | 'submit' | 'reset'

// 所有的按钮配置项
export interface ButtonProps {
  // 按钮类型
  type?: ButtonType

  // 按钮大小
  size?: ButtonSize

  // 是否为朴素按钮
  plain?: boolean

  // 是否为圆角按钮
  round?: boolean

  // 是否为圆形按钮
  circle?: boolean

  // 是否禁用按钮
  disabled?: boolean

  // 原生button的类型
  nativeType?: NativeType

  // 是否聚焦,原生Button
  autofocus?: boolean

  // 按钮加载状态
  loading?: boolean

  // 按钮图标
  icon?: string
}

// 原生按钮实例类型
export interface ButtonInstance {
  ref: HTMLButtonElement
}
