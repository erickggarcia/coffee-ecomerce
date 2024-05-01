import { useContext, useEffect } from "react"
import { CheckoutContainer, DeliveryAdress, PaymentConfirmation } from "./style"
import { Minus, Plus } from 'phosphor-react'
import { ProductsContext } from "../../contexts/productsContext"
import { useNavigate } from "react-router-dom"


export const Checkout = () => {

    {document.title = 'Coffee Delivery | Checkout'}
    const {products, handleIncreaseProduct, handleDecreaseProduct, handleDeleteProduct} = useContext(ProductsContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(products.length === 0) {
            navigate("/")
        }
    }, [products])

    return (
        <CheckoutContainer>
            <DeliveryAdress>
                <h1>Complete seu pedido</h1>
                <article>
                    <div>
                        <img src="icons/address.png" alt="" />
                        <h2>Endereço de Entrega</h2>
                    </div>
                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <form action="">
                        <input type="text" name="" id="cep" placeholder="CEP" />
                        <input type="text" name="" id="rua" placeholder="Rua" />
                        <div className="inputs-container">
                            <input type="text" name="" id="numero" placeholder="Número" />
                            <input type="text" name="" id="complemento" placeholder="Complemento" />
                        </div>
                        <div className="inputs-container">
                            <input type="text" name="" id="bairro" placeholder="Bairro" />
                            <input type="text" name="" id="cidade" placeholder="Cidade" />
                            <input type="text" name="" id="uf" placeholder="UF" />
                        </div>
                    </form>

                    <div>
                        <img src="icons/payment.png" alt="" />
                        <h2>Pagamento</h2>
                    </div>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                    <section>
                        <div>
                            <img src="icons/credito.png" alt="" />
                            CARTÃO DE CRÉDITO
                        </div>
                        <div>
                            <img src="icons/debito.png" alt="" />
                            CARTÃO DE DÉBITO
                        </div>
                        <div>
                            <img src="icons/dinheiro.png" alt="" />
                            DINHEIRO
                        </div>
                    </section>

                </article>
            </DeliveryAdress>

            <PaymentConfirmation>
                { products.length > 0 ?  (
                <>
                <h1>Cafés selecionados</h1>
                <article>
                        {products.map((product) => 
                            (
                                <div key={product.id} className="selectionContainer">
                                    <img src={product.img} alt="" />
                                    <div>
                                        <p>{product.name}</p>
                                        <div className="selectionAction">
                                            <div className="lengthContainer">
                                                <span className="controls" onClick={() => handleDecreaseProduct(product)}><Minus/></span>
                                                    {product.amount}
                                                <span className="controls" onClick={() => handleIncreaseProduct(product)}><Plus/></span>
                                            </div>
                                            <div onClick={() => handleDeleteProduct(product)} className="deleteContainer">
                                                <img src="icons/trash.png" alt="" />
                                                REMOVER
                                            </div>
                                        </div>
                                    </div>
                                    <p>R$<span>{product.value.toFixed(2)}</span></p>
                                </div>
                            )
                        )}
                </article>

                <div className="summary">
                    <span>Total de itens</span>
                    <span> R$ 29,70</span>
                </div>

                <div className="summary">
                    <span>Entrega </span>
                    <span> R$ 3,50</span>
                </div>

                <div className="summary">
                    <span>Total </span>
                    <span>R$ 33,20</span>
                </div>

                <button>Confirmar Pedido</button>
                </>
                    ) : (
                        <> 
                            <h1>Você não selecionou nenhum produto</h1>
                        </>
                    )
                }
            </PaymentConfirmation>
        </CheckoutContainer>
    )
}