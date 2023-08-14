import { Button } from '@mantine/core';

function HeaderLink({ link, label }: { link: string; label: string }) {
  return (
    <Button component='a' variant='subtle' href={link} display='block' px={12} py={8} color='gray'>
      {label}
    </Button>
  );
}

export default HeaderLink;
