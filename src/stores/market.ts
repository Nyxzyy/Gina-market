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
      name: 'Vine-Ripened Tomatoes', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Sweet, juicy, locally-grown garden tomatoes.', 
      icon: '🍅', 
      badge: 'Fresh Crop',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '2', 
      name: 'Sweet Corn', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Fresh, sweet ears of corn harvested daily.', 
      icon: '🌽',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '3', 
      name: 'Cucumbers', 
      category: 'produce', 
      seasons: ['spring', 'summer'], 
      description: 'Crisp and refreshing green cucumbers, ideal for salads or pickling.', 
      icon: '🥒',
      image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: '4', 
      name: 'Potatoes', 
      category: 'produce', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Quality baking, sweet, and new red potatoes.', 
      icon: '🥔',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '5', 
      name: 'Bell Peppers', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Vibrant and crunchy green, yellow, and red bell peppers.', 
      icon: '🫑',
      image: 'https://images.unsplash.com/photo-1621953723422-6023013f659d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: '6', 
      name: 'Hot Peppers', 
      category: 'produce', 
      seasons: ['summer'], 
      description: 'Fresh and spicy jalapenos, habaneros, and chili peppers.', 
      icon: '🌶️',
      image: 'https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: '7', 
      name: 'Onions', 
      category: 'produce', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Sweet yellow onions, red onions, and scallions.', 
      icon: '🧅',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '8', 
      name: 'Lettuce', 
      category: 'produce', 
      seasons: ['spring', 'fall'], 
      description: 'Freshly harvested romaine, butterhead, and crisp leaf lettuce.', 
      icon: '🥬',
      image: 'https://images.unsplash.com/photo-1549736624-81a2ca809ad7?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: '9', 
      name: 'Strawberries', 
      category: 'fruit', 
      seasons: ['spring'], 
      description: 'Sweet, juicy, locally picked red strawberries.', 
      icon: '🍓',
      badge: 'Spring Treat',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '10', 
      name: 'Peaches', 
      category: 'fruit', 
      seasons: ['summer'], 
      description: 'Sweet and fragrant tree-ripened southern peaches.', 
      icon: '🍑',
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1639588473831-dd9d014646ae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: '11', 
      name: 'Watermelon', 
      category: 'fruit', 
      seasons: ['summer'], 
      description: 'Crisp, sweet, and refreshing icebox and seedless watermelons.', 
      icon: '🍉',
      image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '12', 
      name: 'Cantaloupe', 
      category: 'fruit', 
      seasons: ['summer'], 
      description: 'Deliciously sweet and fragrant local cantaloupes.', 
      icon: '🍈',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '13', 
      name: 'Blueberries', 
      category: 'fruit', 
      seasons: ['spring', 'summer'], 
      description: 'Freshly plucked, antioxidant-rich sweet blueberries.', 
      icon: '🫐',
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '14', 
      name: 'Fresh Honey', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Pure, raw local Alabama honey.', 
      icon: '🍯',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '15', 
      name: 'Farm Eggs', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Freshly gathered brown eggs from local cage-free chickens.', 
      icon: '🥚',
      badge: 'Farm Fresh',
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '16', 
      name: 'Homemade Pie', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Famous hand-made fried pies in apple, peach, and other seasonal fillings.', 
      icon: '🥧', 
      badge: 'Nana\'s Best',
      image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: '17', 
      name: 'Boiled Peanuts', 
      category: 'specialties', 
      seasons: ['spring', 'summer', 'fall'], 
      description: 'Warm, salty southern-style boiled peanuts.', 
      icon: '🥜',
      image: 'https://images.unsplash.com/photo-1724058663142-e6e1a5e89f2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: '18', 
      name: 'Bedding Flowers & Baskets', 
      category: 'plants', 
      seasons: ['spring', 'summer'], 
      description: 'Fern hanging baskets, hibiscus, and starter bedding plants.', 
      icon: '🌻',
      badge: 'Porch Ready',
      image: 'https://images.unsplash.com/photo-1494336877155-7fb9c6984f0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ])

  return { products }
})
