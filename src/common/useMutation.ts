export const useMutation = () => {
  const [openModelType, setOpenModelType] = useState<string | boolean>(false);

  const handleAddItem = () => {
    setEditedItem({});
    setOpenModelType(CREATE);
  };

  const handleEditItem = (item: any) => {
    setEditedItem(item);
    setOpenModelType(UPDATE);
  };

  const handleMutationClose = () => {
    setOpenModelType(false);
    setEditedItem({});
  };

  const handleSubmit = (item: any) => {
    console.log('Submitted Item:', item);
    handleMutationClose();
  };

  return {
    openModelType,
    handleOpenChange: setOpenModelType,
    handleMutationClose,
    handleSubmit,
    handleAddItem,
    handleEditItem,
  };
};
