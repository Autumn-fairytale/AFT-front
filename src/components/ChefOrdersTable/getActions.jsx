import CancelIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';

export const getActions = (
  id,
  row,
  rowModesModel,
  handleSaveClick,
  handleCancelClick,
  handleEditClick
) => {
  const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  const isEditableStatus = !['completed', 'canceled'].includes(row.status);

  if (isInEditMode) {
    return [
      <GridActionsCellItem
        icon={<SaveIcon />}
        sx={{
          color: 'primary.main',
        }}
        key={'save'}
        label="Save"
        onClick={handleSaveClick(id)}
      />,
      <GridActionsCellItem
        icon={<CancelIcon />}
        key={'cancel'}
        label="Cancel"
        onClick={handleCancelClick(id)}
      />,
    ];
  }

  return [
    <GridActionsCellItem
      icon={<EditOutlinedIcon />}
      key={'edit'}
      label="Edit"
      onClick={handleEditClick(id)}
      disabled={!isEditableStatus}
    />,
  ];
};
