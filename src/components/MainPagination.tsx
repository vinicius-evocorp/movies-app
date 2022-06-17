import { Pagination, PaginationProps } from '@mui/material';

// * prevent the pagination from being rendered if there is more 500 pages
// ! Paging is not working properly above page 500.
const normalizeCount = (count: number | undefined) => (Number(count) > 500 ? 500 : count);

function MainPagination(props: PaginationProps) {
  const { shape = 'rounded', defaultPage = 1, siblingCount = 0, boundaryCount = 2, count, ...rest } = props;

  return (
    <Pagination
      {...rest}
      count={normalizeCount(count)}
      shape={shape}
      defaultPage={defaultPage}
      siblingCount={siblingCount}
      boundaryCount={boundaryCount}
    />
  );
}

export default MainPagination;
