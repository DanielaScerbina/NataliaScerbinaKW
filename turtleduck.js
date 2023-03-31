
document.addEventListener('DOMContentLoaded', () => {

const input = document.querySelector('#name')

// document.querySelector('#submit').addEventListener('click', () => {
//     fetch(`http://localhost:3000/hello?name=${input.value}`, {
//         method: 'POST',
//     }).then(r => {
//         r.text().then(t => {
//             console.log(t)
//         })
//     })
//   })

document.querySelector('#submit').addEventListener('click', () => {
    console.log(input.value)
    fetch('http://localhost:3000/hello?name=' + input.value,{method: 'POST'

    }).then(response => {
        response.text().then(t =>{
            console.log(t)
        })
    })
})

})