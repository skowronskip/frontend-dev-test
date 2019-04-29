import {Block} from './block';
const MAX_Y = 10;

export class BlockColumn {
    constructor (x) {
        this.col = [];

        for (let y = 0; y < MAX_Y; y++) {
            this.col.push(new Block(x, y));
        }
    }

    render (colEl, blockClicked) {
        this.col.forEach((block) => {
            block.render(colEl, blockClicked);
        })
    }

    getBlock(index) {
        return this.col[index] || null;
    }
}

