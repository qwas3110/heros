import styles from './index.less';
import { Row, Col, Radio, Card } from 'antd';
import { connect } from 'dva';  //---step1



const RadioGroup = Radio.Group;
const itemType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];

function Item ({ item, dispatch }) {          //---step2
  const { items = [], filterKey = 0 } = item;      //---step4
  const onChange = e => {
    dispatch({
      type: 'item/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };

  return (
    <Row className={styles.normal}>
      <Card className={styles.radioPanel}>
        <RadioGroup onChange={onChange} value={filterKey}>
          {itemType.map(data => (
            <Radio value={data.key} key={`hero-rodio-${data.key}`}>
              {data.value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      {
        items
          .filter(data=>filterKey===0||data.item_type === filterKey)
          .reverse()
          .map(data => (
          <Col key={data.item_id} span={3} className={styles.heroitem}>
            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${data.item_id}.jpg`} />
            <p>{data.item_name}</p>
          </Col>
        ))
      }
    </Row>
  );
}
export default connect(({ item }) => ({ item }))(Item);  //--- step3
