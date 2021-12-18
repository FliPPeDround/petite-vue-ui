interface buttonProps {
  slot: string
  icon?: string
  title?: string
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  border?: 'rect'|'round'|'circle'
  disabled?: boolean
  click?: string
}