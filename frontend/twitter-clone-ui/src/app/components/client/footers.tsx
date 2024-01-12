import React, { type ReactNode } from 'react'

interface linkLabelProps {
  children: ReactNode
  linkUrl: string
}

export function LinkLabel ({ children, linkUrl }: linkLabelProps) {
  return (
    <a rel="noopener noreferrer" target="_blank" className="hover:underline" href={linkUrl}>
      {children}
    </a>
  )
}

export function LiCustom ({ children }: { children: ReactNode }) {
  return (
    <li className="pl-4 my-1">
        {children}
    </li>
  )
}

export function LoginFooter () {
  return (
    <footer className="px-4 py-3">
        <ul className="flex flex-wrap content-center justify-center text-[#516470] dark:text-[#70767b] text-[10pt]">
            <LiCustom>
                <LinkLabel linkUrl="">About</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Download the X app</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Help Center</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Terms of Service</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Privacy Policy</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Cookie Policy</LinkLabel>
            </LiCustom>
            <LiCustom>
            <LinkLabel linkUrl="">Accessibility</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Ads Info</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Blog</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Status</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Careers</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Brand Resources</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Advertising</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Marketing</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">X for Business</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Developers</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Directory</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">Settings</LinkLabel>
            </LiCustom>
            <LiCustom>
                <LinkLabel linkUrl="">© 2023 X Corp.</LinkLabel>
            </LiCustom>
        </ul>
    </footer>
  )
}
