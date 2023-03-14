import { GET_POSTS_CMD } from '../../../../consts';
import { postAction } from '../testActionCreater/testActionCreater';
import apiRequst from '../../../../configs';

export const getPostAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await apiRequst(GET_POSTS_CMD);
      dispatch(postAction(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
