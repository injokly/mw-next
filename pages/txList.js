import Card from "@/components/Card/Card";
import CardItem from "@/components/Card/CardItem";
import Modal from "@/components/Modal/Modal";
import dtlList from "@/public/datas/dtlList";
import { useRouter } from "next/router";
import { useState } from "react";

const txListPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const [detailItem, setDetailItem] = useState([]);
  const onClickCardItem = (item) => {
    console.log(`onclickCardItem called `+item +` ` + isOpen);
    setDetailItem(item);
    setIsOpen(!isOpen);
    // router.push("/detail?pk=" + e.target.dataset.pk);
  };

  return (
    // 상단 헤더 크기만큼 컨텐츠를 내려줌.
    <div style={{ paddingTop: "40px" }}>
      <Card>
        <Card.CardContent>
          {dtlList.map((item, index) => {
            return <CardItem onClick={()=>onClickCardItem(item)} key={index} item={item} />;
          })}
        </Card.CardContent>
      </Card>

      {!isOpen && (
        <Modal item={detailItem} onClick={(data) => {setIsOpen(data);}}>
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
