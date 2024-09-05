import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Bin from '../../assets/image/lixeira-de-reciclagem 1.jpg'
import { TagButton } from '../Button/styles'
import { close, remove, clearCart } from '../../Store/Reducers/cart'
import Button from '../Button'

import { usePurchaseMutation } from '../../Services/api'

import * as S from './styles'

interface FormValues {
  nameOwner: string
  address: string
  city: string
  cepOwner: string
  numberOwner: string
  complement: string
  cardName: string
  cardNumber: string
  cvvCard: string
  monthMaturity: string
  yearMaturity: string
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<'cart' | 'userData' | 'payment' | 'finish'>(
    'cart'
  )
  const [purchase, { data, isLoading }] = usePurchaseMutation()

  const form = useFormik<FormValues>({
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
      yearMaturity: ''
    },
    validationSchema: Yup.object({
      nameOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatório'),
      cepOwner: Yup.string()
        .length(8, 'O CEP precisa ter 8 caracteres')
        .required('O Campo é obrigatório'),
      numberOwner: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O Campo é obrigatório'),
      complement: Yup.string().min(
        10,
        'O complemento precisa ter pelo menos 10 caracteres'
      ),
      cardName: Yup.string()
        .min(5, 'O nome no cartão precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O número do cartão precisa ter pelo menos 5 caracteres')
        .required('O Campo é obrigatório'),
      cvvCard: Yup.string()
        .length(3, 'O CVV precisa ter 3 caracteres')
        .required('O Campo é obrigatório'),
      monthMaturity: Yup.string()
        .length(2, 'O mês de vencimento precisa ter 2 caracteres')
        .required('O Campo é obrigatório'),
      yearMaturity: Yup.string()
        .length(4, 'O ano de vencimento precisa ter 4 caracteres')
        .required('O Campo é obrigatório')
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
              year: Number(values.yearMaturity)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
        .then(({ data }) => {
          if (data && data.orderId) {
            setStep('finish')
          }
        })
        .catch((error) => {
          console.error('Erro na requisição:', error)
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
    return items.reduce(
      (accumulatio, currrentItem) => accumulatio + currrentItem.preco,
      0
    )
  }

  const checkInputHasError = (fieldName: keyof FormValues) => {
    const isTouched = form.touched[fieldName]
    const isInvalid = form.errors[fieldName]
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <S.List key={item.id}>
                  <S.Img src={item.foto} alt={item.nome} />
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
                </S.List>
              ))}
            </ul>
            <p className="prices">
              Valor Total <span>{getTotalPrice().toFixed(2)}</span>
            </p>
            <TagButton
              onClick={() => setStep('userData')}
              type={'button'}
              title={'Entrega'}
            >
              Continuar com a entrega
            </TagButton>
          </>
        )}
        {step === 'userData' && (
          <S.Checkout>
            <S.Form onSubmit={form.handleSubmit}>
              <h3>Entrega</h3>
              <label htmlFor="nameOwner">Quem irá receber</label>
              <input
                type="text"
                id="nameOwner"
                name="nameOwner"
                value={form.values.nameOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('nameOwner') ? 'error' : ''}
              />
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
              <div>
                <div>
                  <S.InputGroup $maxWidth="156px">
                    <label htmlFor="cepOwner">CEP</label>
                    <input
                      type="text"
                      id="cepOwner"
                      name="cepOwner"
                      value={form.values.cepOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cepOwner') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </div>
                <div>
                  <S.InputGroup $maxWidth="156px">
                    <label htmlFor="numberOwner">Número</label>
                    <input
                      type="text"
                      id="numberOwner"
                      name="numberOwner"
                      value={form.values.numberOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numberOwner') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
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
                className={checkInputHasError('complement') ? 'error' : ''}
              />
              <Button
                type={'button'}
                title={'Continuar com pagamento'}
                onClick={async () => {
                  await form.submitForm()

                  setStep('payment')
                }}
              >
                Continuar com pagamento
              </Button>
              <Button
                type={'button'}
                title={'Voltar ao carrinho'}
                onClick={() => setStep('cart')}
              >
                Voltar ao carrinho
              </Button>
            </S.Form>
          </S.Checkout>
        )}
        {step === 'payment' && (
          <S.Checkout>
            <S.Form onSubmit={form.handleSubmit}>
              <h3>Pagamento</h3>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
              <div>
                <S.InputGroup $maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup $maxWidth="87px">
                  <label htmlFor="cvvCard">CVV</label>
                  <input
                    type="text"
                    id="cvvCard"
                    name="cvvCard"
                    value={form.values.cvvCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cvvCard') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <div>
                <S.InputGroup $maxWidth="155px">
                  <label htmlFor="monthMaturity">Mês de vencimento</label>
                  <input
                    type="text"
                    id="monthMaturity"
                    name="monthMaturity"
                    value={form.values.monthMaturity}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('monthMaturity') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup $maxWidth="155px">
                  <label htmlFor="yearMaturity">Ano de vencimento</label>
                  <input
                    type="text"
                    id="yearMaturity"
                    name="yearMaturity"
                    value={form.values.yearMaturity}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('yearMaturity') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </div>
              <Button
                type={'submit'}
                title={'Finalizar pagamento'}
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando Pagamento' : 'Finalizar'}
              </Button>
              <Button
                type={'button'}
                title={'Voltar para a edição de endereço'}
                onClick={() => setStep('userData')}
              >
                Voltar para a edição de endereço
              </Button>
            </S.Form>
          </S.Checkout>
        )}
        {step === 'finish' && data && data.orderId && (
          <S.Checkout>
            <S.FinishTitle>Pedido realizado - {data.orderId} </S.FinishTitle>
            <S.Paragraph>
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
            </S.Paragraph>
            <Button
              type={'button'}
              title={'Concluir'}
              onClick={() => {
                dispatch(clearCart())
                closeCart()
              }}
            >
              Concluir
            </Button>
          </S.Checkout>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
