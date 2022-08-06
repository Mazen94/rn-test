import { connect } from 'react-redux';

import Users from '_screens/Users/Users';

import { createFlagSelector } from '_store/flags/selectors';
import { RootState } from '_store/rootReducers';
import { fetchUsers } from '_store/users/actionCreators';
import { FLAGS } from '_store/users/reducer';
import { usersSelector } from '_store/users/selectors';

const loadingSelector = createFlagSelector(FLAGS.USERS_LOADING, true);
const errorSelector = createFlagSelector(FLAGS.USERS_ERROR);

const mapStateToProps = (state: RootState) => {
  return {
    list: usersSelector(state),
    isLoading: loadingSelector(state),
    isError: errorSelector(state),
  };
};

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
