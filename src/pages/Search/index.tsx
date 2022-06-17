import { useParams } from 'react-router-dom';

import { Page } from '@/components/Page';
import { useSearchMovie } from '@/services/search/hooks';

function Search() {
  const { query } = useParams();
  console.log('params', query);

  const data = useSearchMovie(query, { page: 1 });

  return (
    <Page title={query}>
      <div>search</div>
    </Page>
  );
}

export default Search;
