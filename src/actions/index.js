const CHANGE_FILTER = 'CHANGE_FILTER';
const QUERY_FILTER = 'QUERY_FILTER';

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

const queryFilter = query => ({
  type: QUERY_FILTER,
  query,
});

export {
  changeFilter, queryFilter, CHANGE_FILTER, QUERY_FILTER,
};
