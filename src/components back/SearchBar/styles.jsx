import { COLORS } from "../../colors/colors";
export const styles = {
  container: {
    position: "relative",
    display: "flex",
    width: "60%",
    backgroundColor: COLORS.accentColor,
    alignItems: "center",
    borderRadius: 50,
    height: 40,
  },
  searchField: {
    backgroundColor: COLORS.highlightBackgroundColor,
    padding: 10,
    borderRadius: 50,
    width: "95%",
    border: 0,
    outline: "none",
    height: 14,
    marginRight: 5,
    marginLeft: 3,
    paddingLeft: 20,
    fontSize: 18,
  },
  searchIcon: {
    width: 25,
    height: 25,
    backgroundColor: COLORS.accentColor,
    color: COLORS.backgroundColor,
    textAlign: "center",
    borderRadius: 50,
    paddingRight: 10,
  },
};