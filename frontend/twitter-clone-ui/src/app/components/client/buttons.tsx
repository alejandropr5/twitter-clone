import React, { type ReactNode, useState } from 'react'
import { SignUpModal } from './modals'

interface SignButtonProps {
  children: ReactNode
  onClick: () => void
}

interface SignUpButtonProps {
  children: ReactNode
}

export function GitHubSignButton ({ children, onClick }: SignButtonProps) {
  return (
    <button type="button" onClick={onClick} className="text-[#0e1419] mt-2 bg-white hover:bg-[#e6e6e6] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-full text-sm py-[9px] text-center flex items-center justify-center w-[300px] border-[#dce4e7] border-[1px]">
      <svg className="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
      </svg>
      <span>{children}</span>
    </button>
  )
}

export function GoogleSignButton ({ children, onClick }: SignButtonProps) {
  return (
    <button type="button" onClick={onClick} className="text-[#0e1419] mt-2 bg-white hover:bg-[#e6e6e6] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-semibold rounded-full text-sm py-[9px] text-center flex items-center justify-center w-[300px] border-[#dce4e7] border-[1px]">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#fbc02d" fillRule="evenodd" clipRule="evenodd" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#e53935" fillRule="evenodd" clipRule="evenodd" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4caf50" fillRule="evenodd" clipRule="evenodd" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1565c0" fillRule="evenodd" clipRule="evenodd" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
      </svg>
      <span>{children}</span>
    </button>
  )
}

export function RegularSignInButton ({ children, onClick }: SignButtonProps) {
  return (
    <button type="button" onClick={onClick} className="text-[#009aec] bg-white dark:bg-black dark:hover:bg-[#00171e] hover:bg-[#e2f5fc] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-full text-sm py-[10px] text-center flex items-center justify-center w-[300px] border-[#dce4e7] dark:border-[#516470] border-[1px]">
      <span>{children}</span>
    </button>

  )
}

export function RegularSignUpButton ({ children }: SignUpButtonProps) {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <button type="button" onClick={handleClick} className="text-white mt-2 bg-[#009aec] hover:bg-[#0089cf] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-full text-sm py-[10px] text-center flex items-center justify-center w-[300px]">
        <span>{children}</span>
      </button>
      <SignUpModal state={showModal} setState={setShowModal}/>
    </>
  )
}

export function SignUpFormButton ({ children, isDisabled }: { children: ReactNode, isDisabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="text-[#0e1419] w-full h-[52px] mt-2 bg-white font-bold rounded-full text-[17px] py-[9px] text-center flex items-center justify-center border-[#dce4e7] border-[1px]
        hover:bg-[#e6e6e6]
        focus:ring-4 focus:outline-none focus:ring-[#24292F]/50
        disabled:bg-[#787a7a] disabled:border-[#787a7a]">
      <span>{children}</span>
    </button>
  )
}
