import styles from './hero.css';
import { connect } from 'dva';  //---step1
function Summoner (props) {          //---step2
  console.log(props.summoner);      //---step4
  return (
    <div className={styles.normal}>
      <h1>Page hero</h1>
      <h2>This is {props.summoner}</h2>
    </div>
  );
}
export default connect(({ summoner }) => ({ summoner }))(Summoner);  //--- step3
