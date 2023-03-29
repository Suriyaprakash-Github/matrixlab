import classes from "./Content.module.css";
import Buy from "./../assets/Buy.png";

const Content = () => {
  return (
    <>
      <div className={classes.content}>
        <p>
          <img src={Buy} alt="" /> Wallet Address:
        </p>
        <div className={classes.token_details}>
          <div className={classes.token_details_1}>
            <div>
              My Total Token <p>34234 TKN</p>
            </div>
            <div>
              Total Token Value <p>354343$</p>
            </div>
            <div>
              Token Burned <p>3234 TKN </p>
            </div>
          </div>
          <div className={classes.token_details_2}>
            <div>
              Total Supply <p>10000000</p>
            </div>
            <div>
              Market Volume(USD) <p>54658</p>
            </div>
            <div>
              Current Price <p>$0.005454</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
