import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1  text-gray-100
      text-xs placeholder:text-gray-400 outline-none"
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}

TextInputInput.displayName = 'TextInput.Input'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputRoot.displayName = 'TextInput.Root'
