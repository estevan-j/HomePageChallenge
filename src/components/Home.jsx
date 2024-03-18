import { useDarkMode } from '../store/DarkMode';
import Header from './Header/Header'
import Main from './Main/Main'

const Home = () => {
  const darkMode = useDarkMode((state) => state.activeDarkMode);
  return (
    <div className={`min-w-full min-h-[100Vh] ${darkMode ? 'bg-[#111729] text-[#FFFFFF]': ''}`}>
      <Header />
      <Main />
    </div>
  )
}

export default Home
