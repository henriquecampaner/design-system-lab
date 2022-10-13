import './styles/global.css'
import { Text } from './components/Text'
import { Logo } from './Logo'
import { Heading } from './components/Heading'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

const App = () => {
  return (
    <div
      className="w-screen h-screen bg-gray-900 flex flex-col
        items-center justify-center text-gray-100"
    >
      <header className="flex flex-col items-center">
        <Logo />
        <Heading className="mt-4" size="lg">
          Ignite Lab
        </Heading>
        <Text className="text-gray- mt-1" size="lg">
          Log in and start using
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Type your email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="Password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="Password"
              placeholder="*****"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button className="mt-4" type="submit">
          Log in
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Forgot your password?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Don&apos;t have an account? Create one now!
          </a>
        </Text>
      </footer>
    </div>
  )
}

export { App }
