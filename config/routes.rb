Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:create, :destroy, :show, :index, :update]
    resources :product_categories, only: [:create, :destroy, :index, :update]
    resources :category_listings, only: [:create, :destroy, :index, :update]
    resources :images, only: [:create, :destroy, :show, :index, :update]
    resources :carts, only: [:create, :show, :destroy]
    resources :cart_items, only: [:create, :destroy, :index, :update, :show]
  end
end
