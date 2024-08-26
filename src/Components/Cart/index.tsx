import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import {
  Overlay,
  CartContainer,
  Sidebar,
  List,
  Img,
  Checkout,
  Form,
  InputGroup,
  FinishTitle,
  Paragraph
} from './styles'
import Bin from '../../assets/image/lixeira-de-reciclagem 1.jpg'
import { TagButton } from '../Button/styles'
import { close, remove } from '../../Store/Reducers/cart'
import Button from '../Button'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../Services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<'cart' | 'userData' | 'payment' | 'finish'>(
    'cart'
  )
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nameOwner: '',
      address: '',
      city: '',
      cepOwner: '',
      numberOwner: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvvCard: '',
      monthMaturity: '',
      yaerMaturity: ''
    },
    validationSchema: Yup.object({
      nameOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatorio'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatorio'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatorio'),
      cepOwner: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(8, 'O campo precisa ter 8 caracteres')
        .required('O Campo é obrigatorio'),
      numberOwner: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('O Campo é obrigatorio'),
      complement: Yup.string()
        .min(10, 'O nome precisa ter pelo menos 10 caracteres')
        .required('O Campo é obrigatorio'),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatorio'),
      cardNumber: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatorio'),
      cvvCard: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .max(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O Campo é obrigatorio'),
      monthMaturity: Yup.string()
        .min(4, 'O nome precisa ter pelo menos 4 caracteres')
        .max(4, 'O nome precisa ter pelo menos 4 caracteres')
        .required('O Campo é obrigatorio'),
      yaerMaturity: Yup.string()
        .min(4, 'O nome precisa ter pelo menos 4 caracteres')
        .max(4, 'O nome precisa ter pelo menos 4 caracteres')
        .required('O Campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nameOwner,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cepOwner,
            number: Number(values.numberOwner),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvvCard),
            expires: {
              month: Number(values.monthMaturity),
              year: Number(values.yaerMaturity)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const getErroMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step == 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <List key={item.id}>
                  <Img src={item.foto} alt={item.nome} />
                  <div className="description">
                    <p>{item.nome}</p>
                    <span>{item.preco.toFixed(2)}</span>
                    <img
                      onClick={() => removeItem(item.id)}
                      className="bin"
                      src={Bin}
                      alt="lixeira de excluir"
                    />
                  </div>
                </List>
              ))}
            </ul>
            <p className="prices">
              Valor Total <span>{getTotalPrice().toFixed(2)}</span>
            </p>
            <TagButton
              onClick={() => setStep('userData')}
              type={'button'}
              title={'entrga'}
            >
              Continuar com a entrega
            </TagButton>
          </>
        )}
        {step == 'userData' && (
          <Checkout>
            <Form onSubmit={form.handleSubmit}>
              <h3>Entrega</h3>
              <label htmlFor="nameOwner">Quem irá receber</label>
              <input
                type="text"
                id="nameOwner"
                name="nameOwner"
                value={form.values.nameOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErroMessage('nameOwner', form.errors.nameOwner)}
              </small>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErroMessage('address', form.errors.nameOwner)}</small>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErroMessage('city', form.errors.nameOwner)}</small>
              <div>
                <div>
                  <label htmlFor="cepOwner">Cep</label>
                  <input
                    className="this-input"
                    type="text"
                    id="cepOwner"
                    name="cepOwner"
                    value={form.values.cepOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErroMessage('cepOwner', form.errors.nameOwner)}
                  </small>
                </div>
                <div>
                  <label htmlFor="numberOwner">Número</label>
                  <input
                    className="this-input"
                    type="text"
                    id="numberOwner"
                    name="numberOwner"
                    value={form.values.numberOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErroMessage('numberOwner', form.errors.nameOwner)}
                  </small>
                </div>
              </div>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErroMessage('complement', form.errors.nameOwner)}
              </small>
              <Button
                onClick={() => {
                  form.submitForm()
                  setStep('payment')
                }}
                type={'button'}
                title={'continuar com o pagamento'}
              >
                Continuar com o pagamento
              </Button>
              <Button
                onClick={() => setStep('cart')}
                type={'button'}
                title={'volta para o carrinho'}
              >
                Voltar para o carrinho
              </Button>
            </Form>
          </Checkout>
        )}
        {step == 'payment' && (
          <Checkout>
            <Form onSubmit={form.handleSubmit}>
              <span>
                Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}
              </span>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                className="this-input"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErroMessage('cardName', form.errors.nameOwner)}</small>
              <div>
                <InputGroup $maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErroMessage('cardNumber', form.errors.nameOwner)}
                  </small>
                </InputGroup>
                <InputGroup $maxWidth="87px">
                  <label htmlFor="cvvCard">CVV</label>
                  <input
                    type="text"
                    id="cvvCard"
                    name="cvvCard"
                    value={form.values.cvvCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErroMessage('cvvCard', form.errors.nameOwner)}
                  </small>
                </InputGroup>
              </div>
              <div>
                <InputGroup $maxWidth="155px">
                  <label htmlFor="monthMaturity">Mês de vencimento</label>
                  <input
                    type="text"
                    id="monthMaturity"
                    name="monthMaturity"
                    value={form.values.monthMaturity}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErroMessage('monthMaturity', form.errors.nameOwner)}
                  </small>
                </InputGroup>
                <InputGroup $maxWidth="155px">
                  <label htmlFor="yaerMaturity">Ano de vencimento</label>
                  <input
                    type="text"
                    id="yaerMaturity"
                    name="yaerMaturity"
                    value={form.values.yaerMaturity}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErroMessage('yaerMaturity', form.errors.nameOwner)}
                  </small>
                </InputGroup>
              </div>
              <Button
                type={'button'}
                title={'Finalizar pagamento'}
                onClick={() => {
                  form.submitForm()
                  setStep('finish')
                }}
              >
                Finalizar pagamento
              </Button>
              <Button
                type={'button'}
                title={'Voltar para a edição de endereço'}
                onClick={() => setStep('userData')}
              >
                Voltar para a edição de endereço
              </Button>
            </Form>
          </Checkout>
        )}
        {step == 'finish' && (
          <Checkout>
            <FinishTitle>Pedido realizado - </FinishTitle>
            <Paragraph>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <span />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <span />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <span />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Paragraph>
            <Button type={'button'} title={'Concluir'}>
              Concluir
            </Button>
          </Checkout>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
