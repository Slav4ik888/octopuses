import * as React from 'react';
// MUI Stuff
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// Icons
import Delete from '@material-ui/icons/Delete';
// Components
import DialogConfirm from '../../dialogs/dialog-confirm/dialog-confirm';
import { ConfirmType, DeleteBtnType } from '../../../../types/btn';
// Types & Const
import themes from '../../../utils/themes/themes';



const typeComp = {
  companyProfile: {
    tooltipTitle: `Удалить аккаунт компании, всех добавленных на курс сотрудников и все данные по прохождению курса`,
    buttonTitle: `Удалить аккаунт`,
    titleConfirm: `Вы действительно хотите удалить аккаунт компании, без возможности восстановления?`,
  },
  companyPayer: {
    tooltipTitle: `Удалить реквизиты данной компании`,
    buttonTitle: ``,
    titleConfirm: `Подтвердите удаление реквизитов выбранной организации`,
  },
  userProfile: {
    tooltipTitle: `Удалить этот аккаунт и все данные по прохождению курса`,
    buttonTitle: `Удалить аккаунт`,
    titleConfirm: `Вы действительно хотите удалить аккаунт, без возможности восстановления?`,
  },
  answerTask: {
    tooltipTitle: `Удалить файл`,
    buttonTitle: `Удалить файл`,
    titleConfirm: `Действительно удалить этот файл?`,
  },
};


type Props = {
  type: DeleteBtnType;
  icon?: boolean;
  button?: boolean;
  placement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start";
  classname?: string;
  sxActiveDel?: object; // Style for icon:hover
  onDel: () => void;
}

const DeleteButton: React.FC<Props> = ({ type, icon, button, placement, classname, sxActiveDel, onDel }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOk = () => {
    setIsOpen(false);
    onDel();
  };
  const handleOpenConfirm = () => setIsOpen(true);
  
  const [isHover, setIsHover] = React.useState(false);
  const handleIsHoverOn = () => {
    console.log(`TEST NAH`);
    setIsHover(true);
  }
  const handleIsHoverOff = () => setIsHover(false);

  const iconActiveDel = sxActiveDel ? sxActiveDel : { color: `secondary` };
  const iconButton = Object.assign({
      color: themes.delete_button.icon_background,
      '&:hover': iconActiveDel,
    },
    classname
  );

  return (
    <>
      {
        icon &&
          <Tooltip
            title={typeComp[type].tooltipTitle}
            placement={placement ? placement : "bottom"}
            arrow
            enterDelay={1000}
            enterNextDelay={1000}
          >
            <IconButton
              aria-label="Delete"
              sx={iconButton}
              onMouseEnter={handleIsHoverOn} onMouseLeave={handleIsHoverOff}
              onClick={handleOpenConfirm}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        }
        {
          button &&
            <Tooltip
              title={typeComp[type].tooltipTitle}
              placement={placement ? placement : "bottom"}
              arrow
              enterDelay={1000}
              enterNextDelay={1000}
            >
              <Button
                // className={cl(classes.icon, { [classes.iconActiveDel]: isHover })}
                onClick={handleOpenConfirm}
              >
                {typeComp[type].buttonTitle}
              </Button>
            </Tooltip>
        }

      <DialogConfirm
        typeOk={ConfirmType.DEL}
        open={isOpen}
        onOk={handleOk}
        onClose={handleClose}
        title={typeComp[type].titleConfirm}
      />

    </>
  )
};

export default DeleteButton;
