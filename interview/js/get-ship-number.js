/**
 * In Russia there is a game called "sea battle" https://en.wikipedia.org/wiki/Battleship_(game)
 * You have to write efficient algorithm that will count number of ships on the board
 *
 */
(()=>{
    const getShipNumber = (m, n)=> {
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
        const horizontalBorder = "-".repeat(m*2+1)
        console.log(horizontalBorder)
        for(let i = 0; i < m * n; i++){
            list.push(arr[i]==0?" ":"*")
            if((i+1) % m == 0){
                console.log(`|${list.join(" ")}|`)
                list = []
            }
        }
        console.log(horizontalBorder)
        return arr
    }

    console.log(
        getShipNumber(8, 8)
    )
})();