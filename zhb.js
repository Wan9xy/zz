
// let req = eval("(" + $request.body +")");
// console.log(req)
// let name = req.name
// let id = req.userId
let name = '王馨宇'
let id = '152127199709191512'
// let i = 1
// let today = new Date().Format("yyyy-MM-dd")

// console.log("name:",name)
// console.log("id:",id)

// function subDays() {
//     let date = new Date(new Date().setDate(new Date().getDate()-i)).Format("yyyy-MM-dd");
//     i++
//     today = date
//     return date
// }
//
// function random10() {
//     return Math.floor(Math.random()*10)
// }

let y1 = new Date(new Date().setDate(new Date().getDate()-1)).Format("yyyy-MM-dd")
let y2 = new Date(new Date().setDate(new Date().getDate()-2)).Format("yyyy-MM-dd")
let y3 = new Date(new Date().setDate(new Date().getDate()-3)).Format("yyyy-MM-dd")
let y4 = new Date(new Date().setDate(new Date().getDate()-4)).Format("yyyy-MM-dd")
let y5 = new Date(new Date().setDate(new Date().getDate()-5)).Format("yyyy-MM-dd")
let y6 = new Date(new Date().setDate(new Date().getDate()-6)).Format("yyyy-MM-dd")
let y7 = new Date(new Date().setDate(new Date().getDate()-7)).Format("yyyy-MM-dd")


let o = {
    "message": "succ",
    "data": {
        "resultList": [
            {
                "idCard": id,
                "createTime": `${y1()} 08:35:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${y1} 17:45:08`
            },
            {
                "idCard": id,
                "createTime": `${y2()} 08:27:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${y2} 16:52:03`
            },
            {
                "idCard": id,
                "createTime": `${y3()} 09:01:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${y3} 19:22:16`
            },
            {
                "idCard": id,
                "createTime": `${y4()} 08:05:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${y4} 16:58:53`
            },
            {
                "idCard": id,
                "createTime": `${y5()} 08:46:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${y5} 17:45:08`
            },
            {
                "idCard": id,
                "createTime": `${y6()} 08:35:06`,
                "id": 999999,
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${y6} 17:45:08`
            }
        ]
    },
    "code": 0
}

console.log(o)

let body = JSON.stringify(o)

// console.log(body)

$done({ body });
