import { CheckoutContainer, DeliveryAdress, PaymentConfirmation } from "./style"

export const Checkout = () => {

    {document.title = 'Coffee Delivery | Checkout'}

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
                <h1>Cafés selecionados</h1>
                <article>
                    <div className="selectionContainer">
                        <img src="images/coffees/cubano.png" alt="" />
                        <div>
                            <p>Cubano</p>
                            <div className="selectionAction">
                                <div className="lengthContainer">
                                    <span className="controls minus">_</span>0<span className="controls">+</span>
                                </div>
                                <div className="deleteContainer">
                                    <img src="icons/trash.png" alt="" />
                                    REMOVER
                                </div>
                            </div>
                        </div>
                        <p>R$<span>9.90</span></p>
                    </div>
                </article>

                <article>
                    <div className="selectionContainer">
                        <img src="images/coffees/macchiato.png" alt="" />
                        <div>
                            <p>Macchiato</p>
                            <div className="selectionAction">

                                <div className="lengthContainer">
                                    <span className="controls minus">_</span>0<span className="controls">+</span>
                                </div>
                                <div className="deleteContainer">
                                    <img src="icons/trash.png" alt="" />
                                    REMOVER
                                </div>
                            </div>
                        </div>
                        <p>R$<span>9.90</span></p>
                    </div>
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

            </PaymentConfirmation>
        </CheckoutContainer>
    )
}