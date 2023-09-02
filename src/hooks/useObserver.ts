import { MutableRefObject, useEffect, useRef } from 'react'

export const useObserver = (
  ref: MutableRefObject<HTMLDivElement | null>,
  canLoad: boolean,
  isLoading: boolean,
  callback: Function,
) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    // eslint-disable-next-line no-unused-vars
    const cb = function (entries: { isIntersecting: any }[]) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb)
    ref?.current && observer?.current?.observe(ref.current)
  }, [isLoading])
}
