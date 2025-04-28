// menuSlice.js

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("/data/menu.json");
//       const data = await response.json();
//       dispatch(setMenuList(data.categories));
//       dispatch(setFilteredMenuList(data.categories));
//       console.log("menu list", menuList);
//       console.log("menu filter list", filteredMenuList);
//     } catch (error) {
//       console.error(error);
//     }
//     dispatch(setLoading(false));
//   };
//   fetchData();
// }, [dispatch]);
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  menuList: [],
  filteredMenuList: [],
  loading: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuList: (state, action) => {
      state.menuList = action.payload;
      state.filteredMenuList = action.payload;
      state.category = Array.from(
        new Set(action.payload.map((menu) => menu.name))
      );
    },
    setFilteredMenuList: (state, action) => {
      state.filteredMenuList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsBook: (state, action) => {
      state.isBook = action.payload;
    },
  },
});

export const { setMenuList, setFilteredMenuList, setLoading, setIsBook } =
  menuSlice.actions;

export default menuSlice.reducer;
