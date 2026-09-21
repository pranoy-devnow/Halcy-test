import { BrowserRouter } from 'react-router-dom'
import { PhoneFrame } from '@/components/PhoneFrame'
import { useShowPhoneFrame } from '@/lib/platform'
import { HomeScreen } from '@/screens/HomeScreen'

export default function App() {
  const showFrame = useShowPhoneFrame()
  const screen = (
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  )

  if (!showFrame) {
    return <div className="flex h-svh min-h-0 flex-col">{screen}</div>
  }

  return <PhoneFrame>{screen}</PhoneFrame>
}
