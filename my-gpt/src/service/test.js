const testAPI = (data, callback) => {
    setTimeout(() => { // 비동기통신에서 필요한 데이터 전달
        callback("안녕")
    },1000)
}

testAPI({id: 10}, (res) => {
    // 결과 res 를 사용
    testAPI({id: res}, (res2) => {
        testAPI({id: res2}, (res3) => {
            // 콜백지옥
        })
    })
})

$.ajax({ // ajax가 콜백함수임: 콜백기반의 비동기통신
    url: ~~,
    method: "get",
    dataType: "json",
    data: ~~,
    sucess: (res) => {

    },
    error: () => {

    }
})

function ajax(requestJson){
    let xhr = new XMLHttpRequest();

    requestJson.method = requestJson.method ? requestJson.method : "get";

    xhr.open(requestJson.method, requestJson.url);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200) {
                let result = JSON.parse(xhr.responseText)
                requestJson.sucess(result);
            } else{
                requestJson.error(xhr.status);
            }
        }
    }
}



// 콜백지옥을 없애주는 함수
const testAPI2 = new Promise((resolve, reject) => {
    setTimeout(() => { // 비동기통신에서 필요한 데이터 전달
        resolve("완료")
    },1000)

})

testAPI2().then((res) => {
    console.log(res)
}).error(() =>{

});

// 제이쿼리는 돔을 건드려서 변경 : 자스랑 씀
// 리액트는 돔 안건드림 : 대신 axios 씀, Promise 기반

const getPromise = function(seconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => { // 비동기통신에서 필요한 데이터 전달
            resolve("완료")
        }, seconds * 1000)
    
    });
}


// async 키워드가 선언된 함수에서는 await을 사용할 수 있다.
// await 키워드는 비동기통신을 마치 동기코드처럼 사용할 수 있게 해준다.
const runner = async () => {
    const res1 = await getPromise(1);
    console.log(res1)

    const res2 = await getPromise(2);
    console.log(res2)

    const res3 = await getPromise(3);
    console.log(res3) //res 값을 받아서 쓸 수 있다.
}

runner();


getPromise(1).then((res) => { // await 안썼을 때
    console.log(res)
    getPromise(2).then((res2) => {
        console.log(res2)
    })
})