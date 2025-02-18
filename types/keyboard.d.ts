interface KeyboardReturn {
  activeKey: Ref<string>
  setActiveKey: (key: string) => void
  clearActiveKey: (key: string) => void
  handleKeyDown: (e: KeyboardEvent) => void
  handleKeyPress: (key: string) => void
}
