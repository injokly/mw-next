import { Account } from "@/components/Account/Account";
import Card from "@/components/Card/Card";
import CardItem from "@/components/Card/CardItem";
import Modal from "@/components/Modal/Modal";
import dtlList from "@/public/datas/dtlList";
import acctDetailJson from "@/public/datas/acctDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { deviceState } from "@/recoil/global";
import { useRecoilState } from "recoil";

const txListPage = () => {
  const [lDeviceState, setDeviceState] = useRecoilState(deviceState);

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const [detailItem, setDetailItem] = useState([]);
  const [acctDetail, setAcctDetail] = useState([]);

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    // 여기서 추가 데이터를 가져오는 비동기 작업을 수행합니다.
    // 이 예제에서는 간단하게 더미 데이터를 추가합니다.
    setTimeout(() => {
      const newItems = dtlList.slice(0, 10);
      console.log(`newItems ` + newItems);
      setItems([...items, ...newItems]);

      console.log(`items.length ` + items);
      // 만약 가져올 데이터가 더 없다면 hasMore를 false로 설정합니다.
      if (items.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  };

  useEffect(() => {
    setDeviceState("APP"); //모바일 디바이스를 전역상태에 저장
    setAcctDetail(acctDetailJson[0]); //계좌상세
    setItems(dtlList.slice(0, 10)); //거래내역
    console.log(`setacct : ` + acctDetail);
    return () => {
      setDeviceState("MW"); //컴포넌트 사라질 때 해당 작업 수행. 모바일 디바이스를 전역상태에 저장
    };
  }, []);

  const onClickCardItem = (item) => {
    console.log(`onclickCardItem called ` + item + ` ` + isOpen);
    setDetailItem(item);
    setIsOpen(!isOpen);
    // router.push("/detail?pk=" + e.target.dataset.pk);
  };

  return (
    // 상단 헤더 크기만큼 컨텐츠를 내려줌.
    <div>
      <Account item={acctDetail}></Account>

      <Card>
        <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={hasMore} loader={<h1>Loading...</h1>}>
          {/* <Card.CardContent> */}
          {items.map((item, index) => {
            return <CardItem onClick={() => onClickCardItem(item)} key={index} item={item} />;
          })}
          {/* </Card.CardContent> */}
        </InfiniteScroll>
      </Card>

      {!isOpen && (
        <Modal
          item={detailItem}
          onClick={(data) => {
            setIsOpen(data);
          }}
        >
          <Modal.Header>
            <Modal.Close />
          </Modal.Header>
          <Modal.Content></Modal.Content>
        </Modal>
      )}
    </div>
  );
};

export default txListPage;
