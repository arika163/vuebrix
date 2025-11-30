import System from 'systemjs'

declare global {
  interface Window {
    System: typeof System
  }
}
