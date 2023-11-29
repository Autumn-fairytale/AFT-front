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
  const isEditableStatus = ![
    'completed',
    'canceled',
    'readyToDelivery',
  ].includes(row.status);

  if (isInEditMode) {
    return [
      <GridActionsCellItem
        icon={<SaveIcon sx={{ fontSize: 24 }} />}
        key={'save'}
        label="Save"
        onClick={handleSaveClick(id)}
        color="primary"
      />,
      <GridActionsCellItem
        icon={<CancelIcon sx={{ fontSize: 24 }} />}
        key={'cancel'}
        label="Cancel"
        onClick={handleCancelClick(id)}
      />,
    ];
  }

  return [
    <GridActionsCellItem
      icon={<EditOutlinedIcon sx={{ fontSize: 24 }} />}
      key={'edit'}
      label="Edit"
      onClick={handleEditClick(id)}
      disabled={!isEditableStatus}
      color="primary"
    />,
  ];
};
