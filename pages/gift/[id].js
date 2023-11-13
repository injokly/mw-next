import { React, useState, useEffect } from "react";
import HeadInfo from "@/components/HeadInfo";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { cntntState } from "@/recoil/cntnt";
import { useRecoilState } from "recoil";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const uri = `/ib20/act/CMMNOT0201000200A?ib20_media=MDA00003&evntId=` + id;
  let params = { pStrCscTitle: "title Test" };
  //   const [eventList, setEventList] = useState([]);
  //   var event = {};
  //   useEffect(() => {
  //     axios
  //       .post(`${uri}`, params)
  //       .then((res) => {
  //         var decodedEvent = decodeURIComponent(res.data._msg_._body_.cntnt);
  //         event = decodedEvent || {};
  //         console.log("event cntnt : " + event);
  //         setEventList(event);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, [eventList]);

  const [cntnt, setCntntState] = useRecoilState(cntntState);
  const fetchData = async () => {
    const response = axios.post(`${uri}`, params).then((res) => {
      let decodedEvent = decodeURIComponent(res.data._msg_._body_.cntnt.replace(/\+/g, " "));
      let pCntnt = decodedEvent || {};
      console.log("cntnt : " + pCntnt);
      setCntntState(pCntnt);
    });
  };
  //const { data, isLoading, error } = useQuery(queryKey, queryFn, options)
  const { data, isLoading } = useQuery("cntnt", fetchData, {
    onError: (error) => {
      console.error("request failed : ", error);
    },
  });

  return (
    <div>
      <HeadInfo></HeadInfo>
      <div dangerouslySetInnerHTML={{ __html: cntnt }}></div>
      <div>Post : {id}</div>
    </div>
  );
};

export default Detail;
