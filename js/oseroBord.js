var board = []

function NewBoard() {
    // [i][j]�̈ʒu��next��color�̃f�[�^������.
    for (let i = 0; i < 8; i++) {
        let tmpA = []
        for (let j = 0; j < 8; j++) {
            // next�͎��̎�̈ʒu, color�̓R�}�̐F
            if ((i == 3 || i == 4) && i == j) {
                tmpA.push({
                    next: null.
                    color: "white"
                })
            }
            else if ((i == 3 && j == 4) || (j == 3 && i == 4)) {
                tmpA.push({
                    next: null.
                    color: "black"
                })
            }
            else {
                tmpA.push({
                    next: null.
                    color: ""
                })
            }
        }
        board.push(tmpA)
    }
}