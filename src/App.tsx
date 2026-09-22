import { BrowserRouter } from 'react-router-dom'
import { PhoneFrame } from '@/components/PhoneFrame'
import { useShowPhoneFrame } from '@/lib/platform'
import { PHONE_VIEWPORT_WIDTH_PX } from '@/lib/viewport'
import { HomeScreen } from '@/screens/HomeScreen'

export default function App() {
  const showFrame = useShowPhoneFrame()
  const screen = (
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  )

  if (!showFrame) {
    return (
      <div
        className="mx-auto flex h-svh min-h-0 w-full flex-col bg-background"
        style={{ maxWidth: PHONE_VIEWPORT_WIDTH_PX }}
      >
        {screen}
      </div>
    )
  }

  return <PhoneFrame>{screen}</PhoneFrame>
}
