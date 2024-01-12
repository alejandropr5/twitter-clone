import React, { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function CloseToolTip ({ children }: Props) {
  return (
    <div className="group relative">
        {children}
        <div className="invisible group-hover:visible absolute px-1 py-0.5 text-[8pt] text-white bg-[#666666] rounded-sm dark:bg-gray-700 ml-[calc(-11px)] mt-0.5">
            Close
        </div>
    </div>
  )
}
