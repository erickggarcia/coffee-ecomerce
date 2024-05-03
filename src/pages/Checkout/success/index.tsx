import { useEffect, useState } from "react"
import { SuccessCheckoutContainer } from "./style"
import { iDeliveryFormData } from ".."

export const Success = () => {

    {document.title = 'Coffee Delivery | Success'}

    interface iData extends iDeliveryFormData {
        paymentLink: string
    }

    const [address, setAddress] = useState<iData>({
        cep:'',
        street: '',
        number: 0,
        streetComplement: '',
        cityNeighborhood:'',
        city:'',
        uf:'',
        paymentLink: ''
    })

    useEffect(() => {
        localStorage.removeItem('coffee-shop:productState-1.0.0')
        const deliveryAddress = localStorage.getItem('deliveryAddress')
        if(deliveryAddress) {
            console.log(deliveryAddress)
            const deliveryAccessJSON = JSON.parse(deliveryAddress)
            setAddress(deliveryAccessJSON)
        }
    }, [])

    let paymentMethod = address.paymentLink === 'credito' ? 'Cartão de Crédito' : address.paymentLink === 'debito' ? 'Cartão de Débito' : 'Dinheiro'

    return (
        <SuccessCheckoutContainer>
            {
             address ? (
            <>
                <article>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>

                    <div className="deliveryInformation">
                        <article>
                            <div className="delivery-location">
                                <img src="icons/delivery-location.png" alt="" />
                            </div>
                            <div>
                                <p>Entrega em <span>Rua {address.street}, {address.number}</span></p>
                                <p>{address.cityNeighborhood} - {address.city}, {address.uf}</p>
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
                                <p><span>{paymentMethod}</span></p>
                            </div>
                        </article>
                    </div>
                </article>

                <article>
                    <img src="images/ilustration.png" alt="" />
                </article>
            </>
            )
            : (<div> Nenhum pedido encontrado</div>)
            }
        </SuccessCheckoutContainer>
    )
}