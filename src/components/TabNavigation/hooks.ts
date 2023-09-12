import { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Tabs } from "../../utils/constants"

const useTabNavigation = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const navigate = useNavigate()
  const location = useLocation()

  const onSelectTab = useCallback((index: number, item: string) => {
    setSelectedTab(index)
    navigate('/' + item.toLowerCase())
  }, [navigate])

  useEffect(() => {
    if (location.pathname) {
      const itemIndex = Tabs.findIndex((item) => item.tabName.toLowerCase() === location.pathname.slice(1))
      setSelectedTab(itemIndex)
    }
  }, [location])

  return {
    onSelectTab,
    selectedTab
  }
}

export default useTabNavigation
