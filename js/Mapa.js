export default class Mapa {

    constructor(linhas = 8, colunas = 12, tamanho = 32) {
        this.LINHAS = linhas;
        this.COLUNAS = colunas;
        this.SIZE = tamanho;
        this.tiles = [];
        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l] = [];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = 0;
            }
        }
        this.cena = null;
    }

    desenhar(ctx) {
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch (this.tiles[l][c]) {
                    case 0:
                        ctx.drawImage(this.cena.assets.img("piso"), 0, 0, 84, 84, c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
                        /*ctx.fillStyle = "grey";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "black";*/
                        break;
                    case 1:
                        ctx.drawImage(this.cena.assets.img("parede"), 0, 0, 84, 71, c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
                        /*ctx.fillStyle = "red";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "black";*/
                        break;
                    /*default:
                        ctx.fillStyle = "black";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "grey";*/
                }
                /*ctx.fillRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
                ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);*/
            }
        }
    }

                     
    carregaMapa(modelo) {
        this.LINHAS = modelo.length;
        this.COLUNAS = modelo[0]?.length ?? 0;
        this.tiles = [];
        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l] = [];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = modelo[l][c];
            }
        }    
    }                  
                
            
}