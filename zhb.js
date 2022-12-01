console.log($request.body)
let req = eval("(" + $request.body +")");
let name = req.name
let id = req.userId

let i = 1
let today = new Date().Format("yyyy-MM-dd")
function subDays() {
    let date = new Date(new Date().setDate(new Date().getDate()-i)).Format("yyyy-MM-dd");
    i++
    today = date
    return date
}

function random10() {
    return Math.floor(Math.random()*10)
}

let o = {
    "message": "succ",
    "data": {
        "resultList": [
            {
                "idCard": id,
                "createTime": `${subDays()} 08:35:06`,
                "id": random10(),
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 17:45:08`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:27:06`,
                "id": random10(),
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 16:52:03`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 09:01:06`,
                "id": random10(),
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 19:22:16`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:05:06`,
                "id": random10(),
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 16:58:53`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:46:06`,
                "id": random10(),
                "checkResult": "阴性",
                "activyId": 999,
                "checkOrgName": "郑州和合医学检验实验室",
                "name": name,
                "reportTime": `${today} 17:45:08`
            },
            {
                "idCard": id,
                "createTime": `${subDays()} 08:35:06`,
                "id": random10(),
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

let body = JSON.stringify(o)

console.log(body)

$done({ body });
