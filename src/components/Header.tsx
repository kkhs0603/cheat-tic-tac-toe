import "../App.scss";
import CustomizedSwitches from "./Switch";

export const Header = ({ ...props }) => {
  return (
    <div className={`header${props.isDark ? "_dark" : ""}`}>
      <div>
        <div className={`title${props.isDark ? "_dark" : ""}`}>
          <span className={`hidden-title${props.isDark ? "_dark" : ""}`}>
            Cheat{" "}
          </span>
          Tic Tac Toe
        </div>
      </div>
      <div>
        <CustomizedSwitches {...props} />
      </div>
    </div>
  );
};
