// Database Configuration File
// This file contains placeholder database configuration
// Replace these values with your actual database credentials

const dbConfig = {
  // MongoDB Configuration (Example)
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/fretty',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  // PostgreSQL Configuration (Example)
  postgresql: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'fretty_db',
    username: process.env.DB_USER || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

  // MySQL Configuration (Example)
  mysql: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'fretty_db',
    username: process.env.DB_USER || 'your_username',
    password: process.env.DB_PASSWORD || 'your_password',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

  // Supabase Configuration (Recommended)
  supabase: {
    url: process.env.SUPABASE_URL || 'your_supabase_url',
    anonKey: process.env.SUPABASE_ANON_KEY || 'your_supabase_anon_key',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || 'your_service_role_key'
  },

  // Firebase Configuration (Alternative)
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY || 'your_api_key',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'your_project.firebaseapp.com',
    projectId: process.env.FIREBASE_PROJECT_ID || 'your_project_id',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'your_project.appspot.com',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || 'your_sender_id',
    appId: process.env.FIREBASE_APP_ID || 'your_app_id'
  }
};

// Database Tables/Collections Schema
const dbSchema = {
  // Users table/collection
  users: {
    id: 'Primary Key',
    email: 'String, Unique',
    name: 'String',
    phone: 'String',
    address: 'Text',
    created_at: 'Timestamp',
    updated_at: 'Timestamp'
  },

  // Products/Salads table/collection
  products: {
    id: 'Primary Key',
    name: 'String',
    description: 'Text',
    price: 'Decimal',
    calories: 'Integer',
    protein: 'Integer',
    image_url: 'String',
    category: 'String',
    ingredients: 'JSON Array',
    is_active: 'Boolean',
    created_at: 'Timestamp',
    updated_at: 'Timestamp'
  },

  // Ingredients table/collection
  ingredients: {
    id: 'Primary Key',
    name: 'String',
    calories_per_serving: 'Integer',
    protein_per_serving: 'Integer',
    price_per_serving: 'Decimal',
    category: 'String', // protein, vegetable, grain, etc.
    is_available: 'Boolean',
    created_at: 'Timestamp',
    updated_at: 'Timestamp'
  },

  // Orders table/collection
  orders: {
    id: 'Primary Key',
    user_id: 'Foreign Key',
    items: 'JSON Array', // Array of order items
    total_amount: 'Decimal',
    status: 'String', // pending, confirmed, preparing, delivered, cancelled
    delivery_address: 'Text',
    delivery_time: 'Timestamp',
    payment_status: 'String',
    payment_method: 'String',
    created_at: 'Timestamp',
    updated_at: 'Timestamp'
  },

  // Order Items table/collection (if using relational DB)
  order_items: {
    id: 'Primary Key',
    order_id: 'Foreign Key',
    product_id: 'Foreign Key (nullable)', // null for custom salads
    custom_ingredients: 'JSON Array', // for custom salads
    quantity: 'Integer',
    unit_price: 'Decimal',
    total_price: 'Decimal',
    created_at: 'Timestamp'
  },

  // Blog Posts table/collection
  blog_posts: {
    id: 'Primary Key',
    title: 'String',
    slug: 'String, Unique',
    excerpt: 'Text',
    content: 'Text',
    author: 'String',
    category: 'String',
    image_url: 'String',
    read_time: 'String',
    is_published: 'Boolean',
    created_at: 'Timestamp',
    updated_at: 'Timestamp'
  }
};

// CRUD Operations Examples
const crudOperations = {
  // Create operations
  createUser: async (userData) => {
    // Implementation depends on your chosen database
    // Example: INSERT INTO users (email, name, phone) VALUES (?, ?, ?)
  },

  createOrder: async (orderData) => {
    // Implementation for creating new orders
  },

  // Read operations
  getUserById: async (userId) => {
    // Implementation for fetching user data
  },

  getProducts: async (filters = {}) => {
    // Implementation for fetching products with optional filters
  },

  getIngredients: async () => {
    // Implementation for fetching available ingredients
  },

  // Update operations
  updateOrderStatus: async (orderId, status) => {
    // Implementation for updating order status
  },

  updateUserProfile: async (userId, userData) => {
    // Implementation for updating user profile
  },

  // Delete operations
  deleteOrder: async (orderId) => {
    // Implementation for soft delete (update status) or hard delete
  }
};

// Export configuration
export default dbConfig;
export { dbSchema, crudOperations };

// Usage Instructions:
// 1. Choose your preferred database from the configurations above
// 2. Set up environment variables in your .env file
// 3. Install the appropriate database driver/SDK
// 4. Implement the CRUD operations based on your chosen database
// 5. Update the schema as needed for your specific requirements

// Environment Variables Template (.env):
/*
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fretty_db
DB_USER=your_username
DB_PASSWORD=your_password

# Supabase (Recommended)
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Firebase (Alternative)
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
*/