import { SuccessCheckoutContainer } from "./style"

export const Success = () => {
    return (
        <SuccessCheckoutContainer>
            <article>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <div className="deliveryInformation">
                    <article>
                        <div className="delivery-location">
                            <img src="icons/delivery-location.png" alt="" />
                        </div>
                        <div>
                            <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
                            <p>Farrapos - Rio de Janeiro, RJ</p>
                        </div>
                    </article>

                    <article>
                        <img src="icons/entrega_rapida.png " alt="" />
                        <div>
                            <p>Previsão de entrega</p>
                            <p><span>20 min - 30 min </span></p>
                        </div>
                    </article>

                    <article>
                        <img src="icons/real.png" alt="" />
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><span>Cartão de Crédito</span></p>
                        </div>
                    </article>
                </div>
            </article>

            <article>
                <img src="images/ilustration.png" alt="" />
            </article>
        </SuccessCheckoutContainer>
    )
}