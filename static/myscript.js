

const name = 'Kolya'
let age = 15
const user = {
    age,
    nam: 19
    }

function sun (a, b = 9){
    let c
    const type = typeof (a && b) === 'number'
    if (type === true){
        if (a === 12 || b === 12 || a != 11){
            c = a + b
            const twouser = {
                ...user,
                number:c
            }
            console.table(twouser)
        }
        else{
            c = 404
            console.log(c)
        }
    }
    else{
        console.log('Not number')
    }
}

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id:1,
    author: 'Bogdan',
}

sun(w = 10)

const oneError = () => {
    throw new Error('Some error')
}

try {
} catch (error){
    console.log(error.message)
}

console.log('Continue...')
