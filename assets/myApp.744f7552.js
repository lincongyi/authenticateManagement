import{bm as t}from"./index.a49703b8.js";import{M as r}from"./mock.ea8ae120.js";const u="https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7";r.mock({ret:!0,retCode:0,retMessage:"\u83B7\u53D6\u53C2\u6570\u6210\u529F",data:{list:[{description:"\u7B2C\u4E8C\u4EE3\u5C45\u6C11\u8EAB\u4EFD\u8BC1",count:"@integer(100, 500)"},{description:"\u6E2F\u6FB3\u5C45\u6C11\u6765\u5F80\u5185\u5730\u901A\u884C\u8BC1",count:"@integer(100, 500)"},{description:"\u53F0\u6E7E\u5C45\u6C11\u6765\u5F80\u5927\u9646\u901A\u884C\u8BC1",count:"@integer(100, 500)"},{description:"\u6E2F\u6FB3\u53F0\u5C45\u6C11\u5C45\u4F4F\u8BC1",count:"@integer(100, 500)"},{description:"\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1",count:"@integer(100, 500)"},{description:"\u666E\u901A\u62A4\u7167",count:"@integer(100, 500)"}]}});const i=()=>t.post(`${u}/user/getAppCount`),a=()=>t.post(`${u}/user/getMyAppList`),c=({startDate:e,endDate:s})=>t.post(`${u}/user/getAmount`),p=({startDate:e,endDate:s})=>t.post(`${u}/user/getPercentage`),C=({startDate:e,endDate:s})=>t.post(`${u}/user/getDistribution`),g=({startDate:e,endDate:s})=>t.post(`${u}/user/getDistributionList`);export{p as a,C as b,g as c,i as d,a as e,c as g};
//# sourceMappingURL=myApp.744f7552.js.map
