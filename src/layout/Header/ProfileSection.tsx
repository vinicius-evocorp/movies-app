import { Avatar, ButtonBase } from '@mui/material';

import avatar from '@/assets/images/avatar.svg';

function ProfileSection() {
  return (
    <ButtonBase aria-label="toggle popover" disableRipple>
      <Avatar
        src={avatar}
        alt="avatar"
        variant="rounded"
        // sx={{ borderRadius: '4px' }}
        // sx={(theme) => ({ width: theme.spacing(7), height: theme.spacing(7) })}
      />
    </ButtonBase>
  );
}

export default ProfileSection;
