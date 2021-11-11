import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Avatars() {
  return (
    <Stack direction="row" spacing={2}>
    {/* <img src=""/> */}
      <Avatar alt="Remy Sharp" src="https://random.imagecdn.app/500/150" />
      {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
    </Stack>
  );
}
