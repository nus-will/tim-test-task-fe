import { useCallback, useState } from "react";

const useTable = () => {
  const [selectedContractor, setSelectedContractor] = useState<Number[]>([])
  const [selectSortColumn, setSelectSortColumn] = useState<boolean>(true)
  const [checkedContractor, setCheckedContractor] = useState<boolean>(false)

  const [orderFullName, setOrderFullName] = useState<boolean>(false);
  const [orderDateRate, setOrderDateRate] = useState<boolean>(false);
  const [orderAvail, setOrderAvail] = useState<boolean>(false);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [sortedType, setSortedType] = useState<string>("full_name");

  const [removeSelectItem, setRemoveSelectItem] = useState<boolean | null>(
    false
  );

  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false)

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
    setSelectSortColumn(!selectSortColumn)
  }, [selectSortColumn])

  const handleCheckedContractor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedContractor(e.target.checked)
  }, [])

  const handleCheckAll = useCallback(() => {
    setIsCheckedAll(!isCheckedAll)
  }, [isCheckedAll])

  return {
    handleSelectedContractor,
    selectedContractor,
    handleSortColumn,
    handleCheckedContractor,
    checkedContractor,
    setSelectedContractor,
    orderFullName,
    setOrderFullName,
    orderDateRate,
    setOrderDateRate,
    orderAvail,
    setOrderAvail,
    isSorted,
    setIsSorted,
    sortedType,
    setSortedType,
    removeSelectItem,
    setRemoveSelectItem,
    handleCheckAll,
    isCheckedAll
  }
}

export default useTable
