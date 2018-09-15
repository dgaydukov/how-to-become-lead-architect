(()=>{
    const getBoatNumber = (m, n)=> {
        const arr = generateField(m, n)
        const len = m * n
        let number = 0
        const hash = {}
        for (let i = 0; i < len; i++) {
            if (!hash[i] && arr[i] == 1) {
                let h = i + 1
                let v = i + m
                let moveRight = true
                let moveDown = true
                if(h % m == 0){
                    moveRight = false
                }
                while (true) {
                    if (moveRight && arr[h] == 1) {
                        hash[h] = 1
                        h++
                        if(h % m == 0){
                            moveRight = false
                        }
                        moveDown = false
                    }
                    else if (moveDown && arr[v] == 1) {
                        hash[v] = 1
                        v = v + m
                    }
                    else {
                        number++
                        break
                    }
                }
            }
        }
        return number
    }

    const generateField = (m, n)=>{
        const arr = []
        const len = m * n
        for(let i = 0; i < len; i++){
            const cell = Math.round(Math.random()*5) == 3 ? 1 : 0
            arr.push(cell)
        }
        let list = []
        console.log("******************start******************")
        for(let i = 0; i < m * n; i++){
            list.push(arr[i])
            if((i+1) % m == 0){
                console.log(list.join(" "))
                list = []
            }
        }
        console.log("*******************end*******************")

        return arr
    }


    console.log(
        getBoatNumber(8, 8)
    )
});