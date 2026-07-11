import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: string
  name: string
  category: 'plants' | 'produce' | 'fruit' | 'specialties'
  seasons: ('spring' | 'summer' | 'fall')[]
  description: string
  icon: string
  badge?: string
}

export const useMarketStore = defineStore('market', () => {
  const products = ref<Product[]>([
    { id: '1', name: 'Ferns & Hanging Baskets', category: 'plants', seasons: ['spring', 'summer'], description: 'Gorgeous, lush green ferns perfect for porches and patios.', icon: '🌿', badge: 'Popular' },
    { id: '2', name: 'Hibiscus Flowers', category: 'plants', seasons: ['spring', 'summer'], description: 'Vibrant tropical hibiscus in multiple colors.', icon: '🌺' },
    { id: '3', name: 'Dipladenia & Bedding Plants', category: 'plants', seasons: ['spring'], description: 'Climbing vines and colorful starter bedding plants.', icon: '🌸' },
    { id: '4', name: 'Vine-Ripened Tomatoes', category: 'produce', seasons: ['summer'], description: 'Sweet, juicy, locally-grown garden tomatoes.', icon: '🍅', badge: 'Fresh Crop' },
    { id: '5', name: 'Squash & Zucchini', category: 'produce', seasons: ['summer'], description: 'Tender squash and zucchini perfect for grilling.', icon: '🥒' },
    { id: '6', name: 'Sweet Corn', category: 'produce', seasons: ['summer'], description: 'Fresh, sweet ears of corn harvested daily.', icon: '🌽' },
    { id: '7', name: 'Nana\'s Fried Pies', category: 'specialties', seasons: ['spring', 'summer', 'fall'], description: 'Famous hand-made fried pies in apple, peach, and other seasonal fillings.', icon: '🥧', badge: 'Best Seller' },
    { id: '8', name: 'Boiled Peanuts', category: 'specialties', seasons: ['spring', 'summer', 'fall'], description: 'Warm, salty southern-style boiled peanuts.', icon: '🥜' },
    { id: '9', name: 'Fresh Local Honey', category: 'specialties', seasons: ['spring', 'summer', 'fall'], description: 'Pure, raw local Alabama honey.', icon: '🍯' },
    { id: '10', name: 'Chow Chow & Pickles', category: 'specialties', seasons: ['spring', 'summer', 'fall'], description: 'Homemade sweet & spicy chow chow, pickled beets, salsa, and pickled eggs.', icon: '🫙' },
    { id: '11', name: 'Fresh Peaches & Strawberries', category: 'fruit', seasons: ['spring', 'summer'], description: 'Sweet seasonal fruits picked at their peak.', icon: '🍑' },
    { id: '12', name: 'Autumn Apples', category: 'fruit', seasons: ['fall'], description: 'Crisp autumn apples and zesty citrus fruits.', icon: '🍎' }
  ])

  return { products }
})
