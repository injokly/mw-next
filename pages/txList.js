import Card from "@/components/Card/Card";
import CardItem from "@/components/Card/CardItem";
import content from "@/public/datas/content";

const txList = () => {
  return (
    <div style={{
        paddingTop: "40px",
      }}>
      <Card>
        <Card.CardContent>
          {content.map((item, index) => {
            return <Card.Detail><CardItem key={index} item={item} /></Card.Detail>;
          })}
        </Card.CardContent>

        <Card.Expand>
          <div>show more</div>
        </Card.Expand>

        <Card.Collapse>
          <div>show less</div>
        </Card.Collapse>
      </Card>
    </div>
  );
};

export default txList;