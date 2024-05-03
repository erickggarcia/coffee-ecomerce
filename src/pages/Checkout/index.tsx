import {useContext, useEffect, useState } from "react"
import { CheckoutContainer, DeliveryAdress, PaymentConfirmation } from "./style"
import { Minus, Plus } from 'phosphor-react'
import { ProductsContext } from "../../contexts/productsContext"
import { useForm } from "react-hook-form"
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

const DeliveryFormValidationSchema = zod.object({
    cep: zod.string().min(5, 'Digite seu cep'),
    street: zod.string().min(6, 'Digite o nome da Rua'),
    number: zod.number()
        .min(1, 'É necessário informar o número'),   
    streetComplement: zod.string(),
    cityNeighborhood: zod.string().min(5, 'Insira o seu Bairro'),
    city: zod.string().min(6, 'Insira sua cidade'),
    uf: zod.string().min(2, 'Insira a sigla do seu estado').max(2, 'A sigla deve conter no máximo 2 caractéres' )
})

export type iDeliveryFormData = zod.infer<typeof DeliveryFormValidationSchema>

export const Checkout = () => {
    
    {document.title = 'Coffee Delivery | Checkout'}
    const {products, handleIncreaseProduct, handleDecreaseProduct, handleDeleteProduct} = useContext(ProductsContext)
    const [paymentLink, setPaymentLink] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const {register, handleSubmit, formState} = useForm<iDeliveryFormData>({
        resolver: zodResolver(DeliveryFormValidationSchema),
        defaultValues: {
            street: '',
            cityNeighborhood: '',
            city: '',
            uf: '',
        }
    })

    const {errors} = formState

    const total = products.reduce((acc, product) => {
        return acc + (Number(product.value) * Number(product.amount));
    }, 0);
    
    const frete = 7.50

    const navigate = useNavigate()

    useEffect(() => {
        if(products.length === 0) {
            navigate("/")
        }
    }, [products])


    function handleActiveNavLink(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = event.target as HTMLDivElement
        setPaymentLink(target.id)
        setMessage('')
    }

    function showErrorInput(error: any) {
        if (error) {
            return (
                <span className="errorFormMessage">* {error.message}</span>
            )
        }
    }

    function onSubmit(data: iDeliveryFormData) {
        if(data && paymentLink) {
            localStorage.setItem('deliveryAddress', JSON.stringify({...data, paymentLink}))
            navigate("/success")
        } else {
            setMessage('Selecione um método de pagamento')
        }
    }

    return (
        <CheckoutContainer>
            <DeliveryAdress>
                <h1>Complete seu pedido</h1>
                <section>
                    <article className="formSection">
                        <div>
                            <img src="icons/address.png" alt="" />
                            <h2>Endereço de Entrega</h2>
                        </div>
                        <p>Informe o endereço onde deseja receber seu pedido</p>

                        <form id="deliveryForm" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('cep')} type="text" id="cep" placeholder="CEP" />
                            {errors.cep && showErrorInput(errors.cep)}
                            <input {...register('street')} type="text" id="rua" placeholder="Rua" />
                            {errors.street && showErrorInput(errors.street)}
                            <div className="inputs-container">
                                <div>
                                    <input {...register('number', {valueAsNumber: true})} type="number" id="numero" placeholder="Número" min={1} />
                                    {errors.number && showErrorInput(errors.number)}
                                </div>
                                <input {...register('streetComplement')} type="text" id="complemento" placeholder="Complemento" />
                            </div>
                            <div className="inputs-container">
                                <div>
                                    <input {...register('cityNeighborhood')} type="text" id="bairro" placeholder="Bairro" />
                                    {errors.cityNeighborhood && showErrorInput(errors.cityNeighborhood)}
                                </div>
                                <div>
                                    <input {...register('city')} type="text" id="cidade" placeholder="Cidade" />
                                    {errors.city && showErrorInput(errors.city)}
                                </div>
                                <div>
                                    <input {...register('uf')} type="text" id="uf" placeholder="UF" />
                                    {errors.uf && showErrorInput(errors.uf)}
                                </div>
                            </div>

                        </form>
                    </article>

                    <article className="paymentSection">
                        <div style={{visibility: message ? 'visible' : 'hidden', color: 'red', fontSize: '12px', height: '12px'}}>{message}</div>
                        <div>
                            <img src="icons/payment.png" alt="" />
                            <h2>Pagamento</h2>
                        </div>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                        <section>
                            <div
                            id="credito"
                            className={paymentLink === 'credito' ? 'active' : ''}
                            onClick={handleActiveNavLink}
                            >
                                <img src="icons/credito.png" alt="" />
                                CARTÃO DE CRÉDITO
                            </div>
                            <div
                                id="debito"
                                className={paymentLink === 'debito' ? 'active' : ''}
                                onClick={handleActiveNavLink}
                            >
                                <img src="icons/debito.png" alt="" />
                                CARTÃO DE DÉBITO
                            </div>
                            <div
                                id="dinheiro"
                                className={paymentLink === 'dinheiro' ? 'active' : ''}
                                onClick={handleActiveNavLink}
                            >
                                <img src="icons/dinheiro.png" alt="" />
                                DINHEIRO
                            </div>
                        </section>
                    </article>
                </section>
            </DeliveryAdress>

            <PaymentConfirmation>
                { products.length > 0 ?  (
                <>
                <h1>Cafés selecionados</h1>
                <section>
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
                                        <p>R$<span>{(product.value * product.amount).toFixed(2).replace('.', ',')}</span></p>
                                    </div>
                                )
                            )}
                    </article>

                    <div className="summary">
                        <span>Total de itens</span>
                        <span> R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <div className="summary">
                        <span>Entrega </span>
                        <span> R$ {frete.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <div className="summary">
                        <span>Total </span>
                        <span>R$ {(total + frete).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="buttonContainer">
                        <button form="deliveryForm">Confirmar Pedido</button>
                    </div>
                </section>
                
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