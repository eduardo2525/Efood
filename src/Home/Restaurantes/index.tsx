import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../Components/Button'
import Close from '../../assets/image/close .png'
import { Modal, Lists, Item, ImgModal, CloseImg } from './styles'
import {
  ListProducts,
  Img,
  ItemList,
  Title,
  Paragraph
} from '../../pages/PageStructure/List/styles'

import { useGetCardapioQuery } from '../../Services/api'
import { add, open } from '../../Store/Reducers/cart'
import { useDispatch } from 'react-redux'

export type CardapioItemType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const ItemCardapio = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurante } = useGetCardapioQuery(id!)
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<CardapioItemType>()

  const dispatch = useDispatch()

  const addCart = () => {
    if (itemSelecionado) {
      dispatch(add(itemSelecionado))
      dispatch(open())
    }
  }

  const abrirModal = (item: CardapioItemType) => {
    setItemSelecionado(item)
    setModalEstaAberto(true)
  }

  const fechaItem = () => {
    setModalEstaAberto(false)
  }

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  const { cardapio } = restaurante

  const getParagraph = (describe: string) => {
    if (describe.length > 185) {
      return describe.slice(0, 182) + '...'
    }
    return describe
  }

  return (
    <>
      <ListProducts>
        {cardapio.map((item) => (
          <ItemList key={item.id}>
            <Img src={item.foto} title={item.nome} />
            <Title>{item.nome}</Title>
            <Paragraph>{getParagraph(item.descricao)}</Paragraph>
            <Button
              type="button"
              title="Adicionar"
              onClick={() => abrirModal(item)}
            >
              Adicionar ao carrinho
            </Button>
          </ItemList>
        ))}
      </ListProducts>
      {itemSelecionado && (
        <Modal className={modalEstaAberto ? 'visivel' : ''} onClick={fechaItem}>
          <Lists onClick={(e) => e.stopPropagation()}>
            <CloseImg
              onClick={fechaItem}
              src={Close}
              alt="imagem de fechamento"
            />
            <Item key={itemSelecionado.id}>
              <ImgModal src={itemSelecionado.foto} alt={itemSelecionado.nome} />
              <div>
                <h3>{itemSelecionado.nome}</h3>
                <p>{itemSelecionado.descricao}</p>
                <span>{`Serve: de ${itemSelecionado.porcao}`}</span>
                <button onClick={addCart}>
                  Adicionar ao Carrinho - R$ {itemSelecionado.preco.toFixed(2)}
                </button>
              </div>
            </Item>
          </Lists>
        </Modal>
      )}
    </>
  )
}

export default ItemCardapio
