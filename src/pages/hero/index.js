import styles from './index.css';
import { connect } from 'dva';  //---step1
function Hero(props) {          //---step2
  console.log(props.hero);      //---step4
  return (
    <div className={styles.normal}>
      <h1>Page hero</h1>
      <h2>This is {JSON.stringify(props.hero)}</h2>
    </div>
  );
}
export default connect(({ hero }) => ({ hero }))(Hero);  //--- step3
