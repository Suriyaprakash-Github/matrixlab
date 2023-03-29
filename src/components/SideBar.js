import classes from "./Sidebar.module.css";
import Dashboard from "./../assets/Dashboard.png";
import Calculator from "./../assets/Calculator.png";
import Globe from "./../assets/Globe.png";
import Buy from "./../assets/Buy.png";
import Hashtag from "./../assets/Hashtag.png";
import Help from "./../assets/Help.png";
import Swap from "./../assets/Swap.png";
import Todo from "./../assets/Todo.png";

const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.core}>
          <p>CORE</p>

          <p className={classes.highlight}>
            <img src={Dashboard} alt="" />
            Dashboard
          </p>

          <p>
            <img src={Calculator} alt="" /> Calculator
          </p>
          <p>
            <img src={Swap} alt="" /> Swap
          </p>

          <p>
            <img src={Todo} alt="" /> To Do List
          </p>

          <p>
            <img src={Help} alt="" /> FAQ
          </p>
        </div>
        <br />
        <div className={classes.links}>
          <p>LINKS</p>
          <p>
            <img src={Hashtag} alt="" /> Socials
          </p>
          <p>
            <img src={Globe} alt="" /> Website
          </p>
          <p>
            <img src={Buy} alt="" /> Buy Now
          </p>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
