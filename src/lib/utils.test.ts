import { describe, it, expect, vi, afterEach } from 'vitest'
import { isMobile } from '@/lib/utils'

describe('isMobile', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns false in SSR environments where window is undefined', () => {
    vi.stubGlobal('window', undefined)
    expect(isMobile()).toBe(false)
  })

  it('returns true when window.innerWidth is at the mobile boundary (1024px)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    expect(isMobile()).toBe(true)
  })

  it('returns false when window.innerWidth is above the mobile threshold', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1025,
    })
    expect(isMobile()).toBe(false)
  })
})
