import classes from "./Dashboard.module.css";
import Button from "./Button";
import Sidebar from "./SideBar";
import Content from "./Content";
import Swap from "../assets/Swap.png";
const Dashboard = () => {
  return (
    <>
      <div className={classes.dashboard}>
        <div className={classes.header} style={{ backgroundColor: "#212529" }}>
          <button>
            SWAP <img src={Swap} alt="" />{" "}
          </button>
          <Button />
        </div>
        <div className={classes.dashboard_body}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
