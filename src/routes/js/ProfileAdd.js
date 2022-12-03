import { useDispatch, useSelector } from "react-redux";


function ProfileAdd() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return(
    dispatch(loginUser(user))
  )
}

export default ProfileAdd