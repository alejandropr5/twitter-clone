import { AuthButtonServer } from '@/app/components/server/auth-button-server'
import { CreateAccountButton, GoogleButton, SignInButton } from '@/app/components/client/auth-button-client'
import { LoginFooter } from '@/app/components/client/footers'

export default function Login () {
  return (
    <main className="flex flex-col min-h-screen h-full w-screen dark:bg-black bg-white items-center">
      <div className="max-[1000px]:p-4 w-fit min-[1000px]:w-full grow flex">
        <div className="max-[1000px]:p-5 flex grow">
          <div className="flex flex-col min-[1000px]:flex-row grow items-center">
            <div className="flex h-fit min-[1000px]:grow max-[1000px]:place-self-start">
              <svg className="pb-3 min-[1000px]:p-8 min-[1000px]:grow min-h-[45px] min-w-[45px] min-[1000px]:max-h-[444px]" fill="currentColor" viewBox="0 0 24 24">
                  <path className="text-[#0e1419] dark:text-[#e7e9ea]" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="min-[1000px]:p-4 flex items-center">
              <div className="min-[1000px]:p-5">
                <div className="min-[1000px]:w-[720px] max-w-[720px]">
                    <h1 className="text-7xl my-12 font-login text-[40px] min-[500px]:text-[48pt] text-[#0e1419] dark:text-[#e7e9ea]">
                      Happening now
                    </h1>
                </div>
                <div>
                  <h2 className="text-4xl mb-5 min-[1000px]:mb-8 font-login text-[23px] min-[500px]:text-[23.5pt] text-[#0e1419] dark:text-[#e7e9ea]">
                    Join today
                  </h2>
                </div>
                <div>
                  <div className="space-y-3">
                    <GoogleButton/>
                    <AuthButtonServer/>

                    <section className="flex flex-row justify-content w-[300px]">
                      <hr className="flex-auto border-t border-[#f0f4f4] dark:border-[#2e3336] my-2 mr-2"/>
                      <span className="flex items-center font-medium text-xs text-[#0e1419] dark:text-[#e7e9ea]">Or</span>
                      <hr className="flex-auto border-t border-[#f0f4f4] dark:border-[#2e3336] my-2 ml-2"/>
                    </section>

                    <CreateAccountButton/>

                    <p className="w-[300px] text-[8.5pt] text-[#516470] dark:text-[#70767b]">
                      By signing up, you agree to the{' '}
                      <a rel="noopener noreferrer nofollow external" target="_blank" className="text-[#009aec] hover:underline" href="https://twitter.com/en/tos">Terms of Service</a> and{' '}
                      <a rel="noopener noreferrer nofollow external" target="_blank" className="text-[#009aec] hover:underline" href="https://twitter.com/en/privacy">Privacy Policy</a>, including{' '}
                      <a rel="noopener noreferrer nofollow external" target="_blank" className="text-[#009aec] hover:underline" href="https://help.twitter.com/en/rules-and-policies/x-cookies">Cookie Use</a>.
                    </p>
                  </div>

                  <div className="flex flex-col mt-10">
                    <span className="text-[13pt] font-bold text-[#0e1419] dark:text-[#e7e9ea] mb-5">
                      Already have an account?
                    </span>
                    <SignInButton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LoginFooter/>
      </div>
    </main>
  )
}
