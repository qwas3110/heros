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
          <Col key={data.summoner_id} span={3} className={styles.heroitem}>
            <p>{data.summoner_name}</p>
          </Col>
        ))
      }
    </Row>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
