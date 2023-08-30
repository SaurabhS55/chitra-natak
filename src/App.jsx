import HomePage from './pages/HomePage';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
function App() {
  return (
    <SkeletonTheme baseColor='#525151' highlightColor='#d0d0d0'>
      <HomePage/>
    </SkeletonTheme>
  )
}

export default App
