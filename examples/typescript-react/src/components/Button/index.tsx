import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import classNames from 'classnames'

/**
 * Render a Bylma styled button element.
 */
export function Button({ className, ...props }: ComponentPropsWithoutRef<'button'>): ReactNode {
  return <button className={classNames('button', className)} type="button" {...props} />
}
