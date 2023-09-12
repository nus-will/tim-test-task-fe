import { useCallback, useState } from "react";

const useTable = () => {
  const [selectedContractor, setSelectedContractor] = useState<Number[]>([])
  const [selectSortColumn, setSelectSortColumn] = useState<boolean>(true)
  const [checkedContractor, setCheckedContractor] = useState<boolean>(false)

  const handleSelectedContractor = useCallback((index: number) => {
    let arrSelectors: Number[] = []

    if (!selectedContractor.includes(index)) {
      arrSelectors = [...selectedContractor, index]
      setSelectedContractor(arrSelectors)
    } else {
      setSelectedContractor(selectedContractor.filter((item) => item !== index));
    }
  }, [selectedContractor])

  const handleSortColumn = useCallback((type: string, direction: string) => {
    console.log(type)
    console.log(direction)
    setSelectSortColumn(!selectSortColumn)
  }, [])

  const handleCheckedContractor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedContractor(e.target.checked)
  }, [selectedContractor])

  return {
    handleSelectedContractor,
    selectedContractor,
    handleSortColumn,
    handleCheckedContractor,
    checkedContractor
  }
}

export default useTable
