function day(time){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (time > 7.0){
                console.log('День пропав')
                reject('Ти Проспав')
            }else {
                console.log('Ти проснувся')
                resolve('День почався')
            }
        },1000)
    })
}


function action1(eat){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (eat===false){
                console.log('нема сил')
                reject('ти скоро впадеш')
            }
            else{
                console.log('поснідав')
                resolve('повний заряд сил')
            }
        },400)
    })
}


function action2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('сходив в душ')
            resolve()

        },700)
    })
}

function action3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('чекаю маршрутку')
            resolve()
        },1500)
    })
}


function action4(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Пообідав')
            resolve()
        },300)
    })
}

function action5(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Закінчив роботу')
            resolve()
        },400)
    })
}


function action6(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('їду додому')
            resolve()
        },1500)
    })
}

function action7(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Повечеряти')
            resolve()
        },500)
    })
}

function action8(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('лягай спати')
            resolve('День пройшов')
        },200)
    })
}


day(5)
    .then(value => {
        console.log(value)

        return action1(false)
    })
    .then(z =>{


        return action2()
    })
    .then(y =>{



        return action3()
    })
    .then(q =>{


        return action4()
    })
    .then(r =>{

        return action5()
    })
    .then(u => {


        return   action6()
    })
    .then(s =>{


        return action7()
    })
    .then((s) => {

        return action8()

    })

    .catch(reason=>{
        console.log(reason)
        console.log('***********День ти проспав**************')
    })



// async function alldays(){
//    const allday = await day(5)
//     console.log(allday)
//     await action1()
//     await action2()
//     await action3()
//     await action4()
//     await action5()
//     await action6()
//     await action7()
//    let day8 = await action8()
//     console.log(day8)
// }
//
// alldays()

