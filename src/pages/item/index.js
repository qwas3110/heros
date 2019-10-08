import styles from './index.less';
import {Row,Col} from 'antd';
import { connect } from 'dva';  //---step1
function Item ({item}) {          //---step2
  const { items = [] } = item;      //---step4
  return (
    <Row className={styles.normal}>
      {
        items.reverse().map(data => (
          <Col key={data.item_id} span={3} className={styles.heroitem}>
            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${data.item_id}.jpg`} alt=""/>
            <p>{data.item_name}</p>
          </Col>
        ))
      }
    </Row>
  );
}
export default connect(({ item }) => ({ item }))(Item);  //--- step3
