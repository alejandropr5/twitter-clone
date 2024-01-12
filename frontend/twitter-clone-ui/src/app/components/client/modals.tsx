import React from 'react'
import { CloseToolTip } from './tooltips'
import { SignUpFormButton } from './buttons'
import { useForm } from 'react-hook-form'

type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>

interface SignUpModalProps {
  state: boolean
  setState: SetStateFunction<boolean>
}

export function SignUpModal ({ state, setState }: SignUpModalProps) {
  const { register, watch, handleSubmit, formState: { isValid, errors }, reset } = useForm(({
    mode: 'onChange'
  }))

  const onSubmit = async (data: any) => {
    console.log(data)

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password
    })

    fetch('http://127.0.0.1:8080/users/sign_up', {
      method: 'POST',
      headers: myHeaders,
      body: raw
    })
      .then(async response => await response.text())
      .then(result => { console.log(result) })
      .catch(error => { console.log('error', error) })
  }

  const handleClick = () => {
    setState(!state)
    reset()
  }

  const checkPasswords = () => {
    return (
      watch('password') !== watch('confirmPassword') &&
      watch('password').length === watch('confirmPassword').length
    )
  }

  return (
        <>
            {state &&
                <div className="w-screen h-screen fixed top-0 left-0 bg-[#38302A65] dark:bg-[#5a6f7e65] flex items-center justify-center flex-col">
                    <div className="w-[600px] dark:bg-black bg-white relative rounded-2xl flex flex-col">
                        <div className="flex flex-col">
                            <div className="flex flex-row px-4 h-[53px] items-center">
                                <div className="flex w-[56px] overflow-visible relative h-full items-center">
                                    <CloseToolTip>
                                        <button
                                        type="button"
                                        onClick={handleClick}
                                        className="flex w-[34px] h-[34px] dark:hover:bg-[#181919] hover:bg-[#e7e7e8] rounded-full ml-[calc(-11px)] items-center justify-center">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                        </button>
                                    </CloseToolTip>
                                </div>
                                <h3 className="font-semibold text-[20px]">
                                    Sign up to X clone
                                </h3>
                            </div>
                            <div className="flex flex-col">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                                    <div className="w-full px-20">
                                        <div>
                                            <h1 className="font-semibold text-[31px] my-5">
                                                Create your account
                                            </h1>
                                        </div>
                                            <div className="relative py-3">
                                                <input
                                                  id="name"
                                                  type="text"
                                                  {...register('name', {
                                                    required: true,
                                                    maxLength: 50
                                                  })}
                                                  className="peer h-[56px] w-full border-[1.5px] bg-white placeholder-transparent rounded-md pl-2 pt-4
                                                    dark:bg-black border-gray-300 dark:border-[#333639] dark:text-white
                                                    focus:border-[2.5px] focus:outline-none focus:border-[#209cf4]"
                                                  placeholder=""
                                                  autoComplete="name"
                                                />
                                                <label
                                                  className="absolute cursor-text left-0 top-0 text-xs translate-y-[20px] transition-all text-gray-900 dark:text-[#71767b] ml-2
                                                    peer-placeholder-shown:translate-y-[28px] peer-placeholder-shown:text-base
                                                    peer-focus:translate-y-[20px]  peer-focus:text-[#2ea3f1] peer-focus:text-xs"
                                                  htmlFor="name"
                                                >
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative py-3">
                                                <input
                                                  id="username"
                                                  type="text"
                                                  {...register('username', {
                                                    required: true,
                                                    maxLength: 50
                                                  })}
                                                  className="peer h-[56px] w-full border-[1.5px] bg-white placeholder-transparent rounded-md pl-2 pt-4
                                                    dark:bg-black border-gray-300 dark:border-[#333639] dark:text-white
                                                    focus:border-[2.5px] focus:outline-none focus:border-[#209cf4]"
                                                  placeholder=""
                                                  autoComplete="username"
                                                />
                                                <label
                                                  className="absolute cursor-text left-0 top-0 text-xs translate-y-[20px] transition-all text-gray-900 dark:text-[#71767b] ml-2
                                                    peer-placeholder-shown:translate-y-[28px] peer-placeholder-shown:text-base
                                                    peer-focus:translate-y-[20px]  peer-focus:text-[#2ea3f1] peer-focus:text-xs"
                                                  htmlFor="username"
                                                >
                                                    Username
                                                </label>
                                            </div>
                                            <div className="relative py-3 flex-col flex">
                                                <input
                                                  id="email"
                                                  type="email"
                                                  {...register('email', {
                                                    required: true,
                                                    maxLength: 50,
                                                    pattern: /^[\w-.]+@[\w-]+(\.[\w]+)*$/
                                                  })}
                                                  className={`peer h-[56px] w-full border-[1.5px] placeholder-transparent rounded-md pl-2 pt-4
                                                  dark:bg-black border-gray-300 dark:text-white
                                                  focus:border-[2.5px] focus:outline-none
                                                  ${
                                                    errors.email?.type === 'pattern'
                                                    ? 'border-[#f4212e]'
                                                    : 'focus:border-[#209cf4] dark:border-[#333639] bg-white'
                                                  }`}
                                                  placeholder=""
                                                  autoComplete="email"
                                                />
                                                <label
                                                  className={`absolute cursor-text left-0 top-0 text-xs translate-y-[20px] transition-all ml-2
                                                  peer-placeholder-shown:translate-y-[28px] peer-placeholder-shown:text-base
                                                  peer-focus:translate-y-[20px] peer-focus:text-xs
                                                  ${
                                                    errors.email?.type === 'pattern'
                                                    ? 'text-[#f4212e]'
                                                    : 'peer-focus:text-[#2ea3f1] text-gray-900 dark:text-[#71767b]'
                                                  }`}
                                                  htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                {(errors.email?.type === 'pattern') &&
                                                    <label className="text-[#f4212e] text-[13px] pl-2 absolute translate-y-[55px]" htmlFor="email">
                                                        Please enter a valid email.
                                                    </label>
                                                }
                                            </div>
                                            <div className="relative py-3 flex flex-col">
                                                <input
                                                  id="password"
                                                  type="password"
                                                  {...register('password', {
                                                    required: true,
                                                    maxLength: 50,
                                                    minLength: 8
                                                  })}
                                                  className={`peer h-[56px] w-full border-[1.5px] placeholder-transparent rounded-md pl-2 pt-4
                                                  dark:bg-black border-gray-300 dark:text-white
                                                  focus:border-[2.5px] focus:outline-none 
                                                  ${
                                                    errors.password?.type === 'minLength'
                                                    ? 'border-[#f4212e]'
                                                    : 'focus:border-[#209cf4] dark:border-[#333639] bg-white'
                                                  }`}
                                                  placeholder=""
                                                  autoComplete="password"
                                                />
                                                <label
                                                  className={`absolute cursor-text left-0 top-0 text-xs translate-y-[20px] transition-all ml-2
                                                  peer-placeholder-shown:translate-y-[28px] peer-placeholder-shown:text-base
                                                  peer-focus:translate-y-[20px] peer-focus:text-xs
                                                  ${
                                                    errors.password?.type === 'minLength'
                                                    ? 'text-[#f4212e]'
                                                    : 'peer-focus:text-[#2ea3f1] text-gray-900 dark:text-[#71767b]'
                                                  }`}
                                                  htmlFor="password"
                                                >
                                                    Password
                                                </label>
                                                {errors.password?.type === 'minLength' &&
                                                  <label className="text-[#f4212e] text-[13px] pl-2 absolute translate-y-[55px]">
                                                    Password must be at least 8 character long.
                                                  </label>
                                                }
                                            </div>
                                            <div className="relative py-3 flex flex-col">
                                                <input
                                                  id="confirmPassword"
                                                  type="password"
                                                  {...register('confirmPassword', {
                                                    required: true,
                                                    maxLength: 50,
                                                    validate: () => {
                                                      if (checkPasswords()) {
                                                        return ''
                                                      }
                                                    }
                                                  })}
                                                  className={`peer h-[56px] w-full border-[1.5px] placeholder-transparent rounded-md pl-2 pt-4
                                                    dark:bg-black border-gray-300 dark:text-white
                                                    focus:border-[2.5px] focus:outline-none 
                                                    ${
                                                      checkPasswords()
                                                      ? 'border-[#f4212e]'
                                                      : 'focus:border-[#209cf4] dark:border-[#333639] bg-white'
                                                    }`}
                                                  placeholder=""
                                                  autoComplete="password"
                                                />
                                                <label
                                                  className={`absolute cursor-text left-0 top-0 text-xs translate-y-[20px] transition-all ml-2
                                                    peer-placeholder-shown:translate-y-[28px] peer-placeholder-shown:text-base
                                                    peer-focus:translate-y-[20px] peer-focus:text-xs
                                                    ${
                                                      checkPasswords()
                                                      ? 'text-[#f4212e]'
                                                      : 'peer-focus:text-[#2ea3f1] text-gray-900 dark:text-[#71767b]'
                                                    }`}
                                                  htmlFor="confirmPassword"
                                                >
                                                    Confirm Password
                                                </label>
                                                {checkPasswords() &&
                                                  <label className="text-[#f4212e] text-[13px] pl-2 absolute translate-y-[55px]">
                                                    Passwords do not match
                                                  </label>
                                                }
                                            </div>
                                    </div>
                                    <div className="w-full px-20 ">
                                        <div className="flex items-center justify-center h-[100px]">
                                            <SignUpFormButton isDisabled={!isValid}>
                                                Sign Up
                                            </SignUpFormButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
  )
}
