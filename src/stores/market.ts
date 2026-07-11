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
  image: string
}

export const useMarketStore = defineStore('market', () => {
  const products = ref<Product[]>([
    { 
      id: '1', 
      name: 'Ferns & Hanging Baskets', 
      category: 'plants', 
      seasons: ['spring', 'summer'], 
      description: 'Gorgeous, lush green ferns perfect for porches and patios.', 
      icon: '🌿', 
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '2', 
      name: 'Hibiscus Flowers', 
      category: 'plants', 
      seasons: ['spring', 'summer'], 
      description: 'Vibrant tropical hibiscus in multiple colors.', 
      icon: '🌺',
      image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '3', 
      name: 'Dipladenia & Bedding Plants', 
      category: 'plants', 
      seasons: ['spring'], 
      description: 'Climbing vines and colorful starter bedding plants.', 
      icon: '🌸',
      image: 'https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '4', 
      name: 'Vine-Ripened Tomatoes', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Sweet, juicy, locally-grown garden tomatoes.', 
      icon: '🍅', 
      badge: 'Fresh Crop',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '5', 
      name: 'Squash & Zucchini', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Tender squash and zucchini perfect for grilling.', 
      icon: '🥒',
      image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '6', 
      name: 'Sweet Corn', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Fresh, sweet ears of corn harvested daily.', 
      icon: '🌽',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '7', 
      name: 'Nana\'s Fried Pies', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Famous hand-made fried pies in apple, peach, and other seasonal fillings.', 
      icon: '🥧', 
      badge: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '8', 
      name: 'Boiled Peanuts', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Warm, salty southern-style boiled peanuts.', 
      icon: '🥜',
      image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '9', 
      name: 'Fresh Local Honey', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Pure, raw local Alabama honey.', 
      icon: '🍯',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '10', 
      name: 'Chow Chow & Pickles', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Homemade sweet & spicy chow chow, pickled beets, salsa, and pickled eggs.', 
      icon: '🫙',
      image: 'https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '11', 
      name: 'Fresh Peaches & Strawberries', 
      category: 'fruit', 
      seasons: ['spring', 'summer'], 
      description: 'Sweet seasonal fruits picked at their peak.', 
      icon: '🍑',
      image: 'https://images.unsplash.com/photo-1541256996761-85df2effaa16?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '12', 
      name: 'Autumn Apples', 
      category: 'fruit', 
      seasons: ['fall'], 
      description: 'Crisp autumn apples and zesty citrus fruits.', 
      icon: '🍎',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80'
    }
  ])

  return { products }
})
