import styles from './index.less';
import { connect } from 'dva';
import { Row, Col } from 'antd';
function Summoner({summoner}) {
  const { summoneritems = [] } = summoner;
  console.log(summoneritems);
  return (
    <Row className={styles.normal}>
      {
        summoneritems.reverse().map(data => (
          <Col key={data.item_id} span={3} className={styles.heroitem}>
            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${data.item_id}.jpg`} alt=""/>
            <p>{data.item_name}</p>
          </Col>
        ))
      }
    </Row>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
