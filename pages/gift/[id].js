import { React, useState, useEffect } from "react";
import HeadInfo from "@/components/HeadInfo";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { unmountComponentAtNode } from 'react-dom';
import { cntntState } from "@/recoil/cntnt";
import { useRecoilState } from "recoil";

const Detail = () => {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  const uri = `/ib20/act/CMMNOT0201000200A?ib20_media=MDA00003&joinMode=N&evntId=` + id;
  let params = { evntId: id, joinMode: 'N' };
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
    // const headers = {
    //   'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //   'Accept': '*/*'
    // }
    const response = axios.post(`${uri}`, params)
    .then((res) => {
      console.log("res cntnt : " + JSON.stringify(res));
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

  const removeChildren = (parent, ...children) => children.forEach(child => parent.removeChild(child))

  const createMarkup = () => {
    useEffect(() => {
      const tick = setTimeout(() => {
        console.log(`hihihih`);
        let parent = document.querySelector('#danger');
        const targets = parent.querySelectorAll('.mob_show, .pc_show');
        removeChildren(parent, ...targets);
      }, 1000);
    }, [])
    return { __html: cntnt }
  }
  return (
    <div>
      <HeadInfo></HeadInfo>
      <div id="danger" dangerouslySetInnerHTML={createMarkup()}></div>
      <div>Post : {id}</div>
    </div >
  );
};

export default Detail;
