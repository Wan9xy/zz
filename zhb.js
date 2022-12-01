;eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('e f(a,c){2 l=c.4;2 b,5,6,7,d=0,1;1=g h(j.k(a.4/3));b=1.4;m(2 i=0;i<b;i++){5=c.8(a.9(d));d++;6=c.8(a.9(d));d++;7=c.8(a.9(d));d++;1[i]=5*l*l+6*l+7}b=n("o.p("+1.q(\',\')+")");r b}',28,28,'|s|var||length|bl|b2|b3|indexOf|charAt|||||function|fromCode|new|Array||Math|floor||for|eval|String|fromCharCode|join|return'.split('|'),0,{}));
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('e.f.g=h(a){6 o={"i+":0.7()+1,"d+":0.j(),"l+":0.n(),"m+":0.p(),"s+":0.r(),"q+":t.u((0.7()+3)/3),"v":0.w()};8(/(y+)/.9(a))a=a.b(2.$1,(0.x()+"").c(4-2.$1.5));z(6 k A o)8(B 2("("+k+")").9(a))a=a.b(2.$1,(2.$1.5==1)?(o[k]):(("C"+o[k]).c((""+o[k]).5)));D a}',40,40,'this||RegExp|||length|var|getMonth|if|test||replace|substr||Date|prototype|Format|function|M|getDate||H||getHours||getMinutes||getSeconds||Math|floor|S|getMilliseconds|getFullYear||for|in|new|00|return'.split('|'),0,{}));

let req = eval("(" + $request.body +")");
console.log(req)
let name = decodeURIComponent(req.name)
let id = req.userId
// let name = '王馨宇'
// let id = '152127199709191512'
let i = 1
let today = new Date().Format("yyyy-MM-dd")

console.log("name:"+name)
console.log("id:"+id)

function subDays() {
    let date = new Date(new Date().setDate(new Date().getDate()-i)).Format("yyyy-MM-dd");
    i++
    today = date
    return date
}

//
let o = {
    "message": "succ",
    "data": {
        "resultList": [
            {
                "idCard": id,
                "createTime": `${subDays()} 08:35:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 17:45:08`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:27:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 16:52:03`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 09:01:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 19:22:16`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:05:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 16:58:53`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:46:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 17:45:08`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:35:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 17:45:08`
            }
        ]
    },
    "code": 0
}

console.log(o)

let body = JSON.stringify(o)

// console.log(body)
//
$done({ body });



// function subDays() {
//     let date = new Date(new Date().setDate(new Date().getDate()-i)).Format("yyyy-MM-dd");
//     i++
//     today = date
//     return date
// }
//
// // function random10() {
// //     return Math.floor(Math.random()*10)
// // }
//
// let i = 1
//
// let today = new Date().Format("yyyy-MM-dd")
// let yesterday = new Date(new Date().setDate(new Date().getDate()-1)).Format("yyyy-MM-dd")
// let name = '罗浩男'
//
// // let o = {
// //     "message": "succ",
// //     "data": {
// //         "resultList": [
// //             {
// //                 "idCard": "4xxxxxxxxxxxxxxx3",
// //                 "createTime": `${subDays()} 14:56:06`,
// //                 "id": 433110066,
// //                 "checkResult": "阴性",
// //                 "activyId": 202205,
// //                 "checkOrgName": "郑州和合医学检验实验室",
// //                 "name": name,
// //                 "reportTime": `${today} 19:45:08`
// //             },
// //             {
// //                 "idCard": "4xxxxxxxxxxxxxxx3",
// //                 "createTime": `${subDays()} 14:56:06`,
// //                 "id": 433110067,
// //                 "checkResult": "阴性",
// //                 "activyId": 202205,
// //                 "checkOrgName": "郑州和合医学检验实验室",
// //                 "name": name,
// //                 "reportTime": `${today} 20:45:08`
// //             }
// //         ]
// //     },
// //     "code": 0
// // }
//
// // 张起灵
// let body = JSON.stringify(o)
//
// console.log(body)