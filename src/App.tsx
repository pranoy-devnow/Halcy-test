import { BrowserRouter } from 'react-router-dom'
import { PhoneFrame } from '@/components/PhoneFrame'
import { useShowPhoneFrame } from '@/lib/platform'
import { useShellChrome } from '@/lib/useShellChrome'
import { PHONE_VIEWPORT_WIDTH_PX } from '@/lib/viewport'
import { HomeScreen } from '@/screens/HomeScreen'

export default function App() {
  const showFrame = useShowPhoneFrame()
  useShellChrome(showFrame ? 'preview' : 'native')
  const screen = (
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  )

  if (!showFrame) {
    return (
      <div
        className="fixed inset-x-0 top-0 mx-auto flex h-svh min-h-0 w-full max-w-full flex-col bg-background"
        style={{ maxWidth: PHONE_VIEWPORT_WIDTH_PX }}
      >
        {screen}
      </div>
    )
  }

  return <PhoneFrame>{screen}</PhoneFrame>
}
