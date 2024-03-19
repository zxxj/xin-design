import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

// 父组件中的配置项
export interface CollapseProps {
  modelValue: NameType[] // 传入v-model的户籍类型

  // 是否开启手风琴模式
  accordion?: boolean
}

// Collapse组件暴露的方法
export interface CollapseEmits {
  (e: 'update:modalValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>

  // 控制展开与收起
  handleItemClick: (name: NameType) => void
}

// 子组件的配置项
export interface CollapseItemProps {
  // 子项的名称
  name: string | number

  // 标题
  title?: string

  // 是否禁用
  disabled?: boolean
}

// 生成一个独一无二的key,用于inject获取类型
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
