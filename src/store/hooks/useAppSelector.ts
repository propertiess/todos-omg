import {TypedUseSelectorHook, useSelector} from "react-redux";
import store, {RootState} from "../index";


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
