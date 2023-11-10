import axios from 'axios'
//1. HTTP Request & Response 관련된 기본 설정 

// export const callAction = axios.post(`${url}`, postDto)
// .then(response => console.log(`requestPost test : `+response))
// .catch(error => console.log(error))


//2. API 함수들을 정리
// export const callAction = axios.create({
// 	baseURL : 'ib20/act/',
// 	//쿼리로 넘길 키들을 prams 객체에 키밸류로 순서대로 넣어준다.
// 	params : {
// 		api_key : '받은 api',
// 	}
// }).then(response => {console.log(response)})


// function fetchinfoList(url){
//     return axios.get(`${url}`)
//     .then(response => console.log(`decode response : `+ decodeURIComponent(JSON.parse(JSON.stringify(response.data._msg_._body_)))))
//     .catch(error => console.log(error))
// }

// //3. 꺼내주기 
// export {
//     fetchinfoList
// }