import React, { createContext, useContext, useEffect, useState } from 'react'

export interface CartItem {
  id: string
  title: string
  price: number
  qty: number
  size?: string
  color?: string
  image?: string
}

interface CartContextValue {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQty: (key: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart')
      if (!raw) return []
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
      if (parsed && Array.isArray((parsed as any).items)) return (parsed as any).items
      return []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const list = Array.isArray(prev) ? prev : []
      // if same id & size & color, increase qty
      const idx = list.findIndex(i => i.id === item.id && i.size === item.size && i.color === item.color)
      if (idx > -1) {
        const copy = [...list]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + item.qty }
        return copy
      }
      return [...list, item]
    })
  }

  // key is composite: `${id}|${size||''}|${color||''}`
  const removeItem = (key: string) => {
    setItems((prev) => {
      const list = Array.isArray(prev) ? prev : []
      return list.filter(i => `${i.id}|${i.size||''}|${i.color||''}` !== key)
    })
  }

  const updateQty = (key: string, qty: number) => {
    setItems((prev) => {
      const list = Array.isArray(prev) ? prev : []
      const idx = list.findIndex(i => `${i.id}|${i.size||''}|${i.color||''}` === key)
      if (idx === -1) return list
      if (qty <= 0) {
        const copy = [...list]
        copy.splice(idx, 1)
        return copy
      }
      const copy = [...list]
      copy[idx] = { ...copy[idx], qty }
      return copy
    })
  }

  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
