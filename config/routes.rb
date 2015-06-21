Rails.application.routes.draw do

  resources :activities
  get '/activities/', to: 'activities#index'
  post '/activities/new', to: 'activities#create'

  resources :users

  get '/users/', to: 'users#index'
  post '/users/new', to: 'users#create'

  resources :user_activities
  get '/user_activities', to: 'user_activities#index'
  post  '/user_activities/new', to: 'user_activities#create'
  put '/user_activities/:id', to: 'user_activities#update'

  resources :posts

  get '/posts/', to: 'posts#index'
  post '/posts/new', to: 'posts#create'

  post 'login', to: 'sessions#create', as: 'create_session'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  root 'application#index'
end
