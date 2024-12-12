import { Terrestre } from "./Terreste";
import { Transporte } from "./Transporte";
import { Automovel } from "./Automovel";

function main() {

    const t1 = new Transporte(5);
    t1.visualizar()

    const tr1 = new Terrestre(5, 4, 100)
    t1.visualizar()

    const a1 = new Automovel(5, 4, 250, "Cinza", 5, "FLV-4566", 5);
    t1.visualizar()
    
}

main();

