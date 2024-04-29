import { Coffees } from "./components/Products"
import { CoffeeLayout, HomeLayout } from "./style"

export interface iCoffees {
    id: number
    img: string
    tags: string[]
    name: string
    description: string
    value: number
    amount: number
}

const coffees: iCoffees[] = [
    {id:1, img: '/images/coffees/expresso.png', tags: ['Tradicional'], name: 'Expresso Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', value: 9.90, amount: 0 },
    {id:2, img: '/images/coffees/americano.png', tags: ['Tradicional'], name: 'Expresso Americano', description: 'Expresso diluído, menos intenso que o tradicional', value: 9.90, amount: 0 },
    {id:3, img: '/images/coffees/expresso-cremoso.png', tags: ['Tradicional'], name: 'Expresso Cremoso', description: 'Café expresso tradicional com espuma cremosa', value: 9.90, amount: 0 },
    {id:4, img: '/images/coffees/cafe-gelado.png', tags: ['Tradicional', 'Gelado'], name: 'Expresso Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', value: 9.90, amount: 0 },
    {id:5, img: '/images/coffees/cafe-com-leite.png', tags: ['Tradicional', 'Com Leite'], name: 'Café com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado', value: 9.90, amount: 0 },
    {id:6, img: '/images/coffees/latte.png', tags: ['Tradicional', 'Com Leite'], name: 'Latte', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', value: 9.90, amount: 0 },
    {id:7, img: '/images/coffees/capuccino.png', tags: ['Tradicional', 'Com Leite'], name: 'Capuccino', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', value: 9.90, amount: 0 },
    {id:8, img: '/images/coffees/macchiato.png', tags: ['Tradicional', 'Com Leite'], name: 'Macchiato', description: 'Café expresso misturado com um pouco de leite quente e espuma', value: 9.90, amount: 0 },
    {id:9, img: '/images/coffees/mocaccino.png', tags: ['Tradicional', 'Com Leite'], name: 'Mocaccino', description: 'Café expresso com calda de chocolate, pouco leite e espuma', value: 9.90, amount: 0 },
    {id:10, img: '/images/coffees/chocolate-quente.png', tags: ['Tradicional', 'Com Leite'], name: 'Chocolate Quente', description: 'Bebida feita com chocolate dissolvido no leite quente e café', value: 9.90, amount: 0 },
    {id:11, img: '/images/coffees/cubano.png', tags: ['Tradicional', 'Alcoólico', 'Gelado'], name: 'Cubano', description: 'Drink gelado de café expresso com rum, creme de leite e hortelã', value: 9.90, amount: 0 },
    {id:12, img: '/images/coffees/havaiano.png', tags: ['Tradicional', 'Especial'], name: 'Havaiano', description: 'Bebida adocicada preparada com café e leite de coco', value: 9.90, amount: 0 },
    {id:13, img: '/images/coffees/arabe.png', tags: ['Especial'], name: 'Árabe', description: 'Bebida preparada com grãos de café árabe e especiarias', value: 9.90, amount: 0 },
    {id:14, img: '/images/coffees/irlandes.png', tags: ['Especial', 'Alcoólico'], name: 'Irlandês', description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', value: 9.90, amount: 0 },
]

export const Home = () => {

    {document.title = 'Coffee Delivery | Home'}

    return (
        <>
            <HomeLayout>
                <article>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <div>
                        <span>
                            <img src="/icons/compra_simples.png" alt="" />
                            Compra simples e segura
                        </span>
                        <span>
                            <img src="/icons/embalagem.png" alt="" />
                            Embalagem mantém o café intacto
                        </span>

                        <span>
                            <img src="/icons/entrega_rapida.png" alt="" />
                            Entrega rápida e rastreada

                        </span>
                        <span>
                            <img src="/icons/cafe_fresco.png" alt="" />
                            O café chega fresquinho até você

                        </span>
                    </div>
                </article>

                <img src="images/imagemPrincipal.png" alt="Copo de café com logo coffee delivery" />
            </HomeLayout >

            <CoffeeLayout>
                <h2>Nossos cafés</h2>
                <article>
                    {coffees.map((coffee) => (
                        <Coffees key={coffee.id}
                            {...coffee}    
                        />
                    ))}
                </article>
            </CoffeeLayout>
        </>
    )
}