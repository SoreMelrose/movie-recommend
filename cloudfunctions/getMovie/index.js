const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const MAX_LIMIT = 100
exports.main = async (event, context) => {
  // // 先取出集合记录总数
  // const countResult = await db.collection('data').count()
  // const total = countResult.total
  // // 计算需分几次取
  // const batchTimes = Math.ceil(total / 100)
  // // 承载所有读操作的 promise 的数组
  // const tasks = []
  // for (let i = 0; i < batchTimes; i++) {
  //   const promise = db.collection('data').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
  //   // const promise = db.collection('data').aggregate().sample({size:5})
  //   tasks.push(promise)
  // }
  
  // const promise = db.collection('data').limit(3).get()
  // tasks.push(promise)

  // 等待所有
  // let movies = (await Promise.all(tasks)).reduce((acc, cur) => {
  //   return {
  //     data: acc.data.concat(cur.data),
  //     errMsg: acc.errMsg,
  //   }
  // })

  const promise = db.collection('data').aggregate().sample({size: 10}).sort({movie_rating:-1}).end()
  return promise
  // return {
  //   // data:movies.data.slice(0,10)
  //   promise
  // }

  
}