import { React, useState, useEffect } from "react";
import HeadInfo from "@/components/HeadInfo";
import { useRouter } from "next/router";
import axios from "axios";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const uri = `/ib20/act/CMMNOT0201000200A?ib20_media=MDA00003&evntId=` + id;
  let params = { pStrCscTitle: "title Test" };
  const [eventList, setEventList] = useState([]);
  var event = {};
  useEffect(() => {
    axios
      .post(`${uri}`, params)
      .then((res) => {
        var decodedEvent = decodeURIComponent(res.data._msg_._body_.cntnt);
        event = decodedEvent || {};
        console.log("event cntnt : " + event);
        setEventList(event);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [eventList]);

  return (
    <div>
      <HeadInfo></HeadInfo>
      <div dangerouslySetInnerHTML={{ __html: eventList }}></div>
      <div>Post : {id}</div>
    </div>
  );
};

export default Detail;
