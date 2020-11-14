export declare global {
  interface Window {
    _trustvox: Array<[string, string] | [string, [string]]>
    TrustvoxWidget?: {
      start: () => void
      restart: () => void
    }
  }
}
