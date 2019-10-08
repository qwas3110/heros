import styles from './hero.css';
import { connect } from 'dva';  //---step1
function Item(props) {          //---step2
  console.log(props.item);      //---step4
  return (
    <div className={styles.normal}>
      <h1>Page Item</h1>
      <h2>This is {JSON.stringify(props.item)}</h2>
    </div>
  );
}
export default connect(({ item }) => ({ item }))(Item);  //--- step3
