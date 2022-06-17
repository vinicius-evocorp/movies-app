import { ButtonBase, Chip } from '@mui/material';

type CategoryProps = {
  label: string;
  icon: React.ReactElement;
  selected?: boolean;
  onClick?: VoidFunction;
};

function Category(props: CategoryProps) {
  const { label, icon, selected, onClick } = props;

  return (
    <Chip
      component={ButtonBase}
      label={label}
      icon={icon}
      color={selected ? 'primary' : 'default'}
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    />
  );
}

export default Category;
