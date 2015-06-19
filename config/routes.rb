Rails.application.routes.draw do

  resources :activities
  get '/activities/', to: 'activities#index'
  post '/activities/new', to: 'activities#create'
  # GET '/activities/new', to: 'activities#new'
  # GET '/activities/:id/edit', to: 'activities#edit'
  # PUT '/activities/:id', to: 'activities#update'
  # DELETE  '/activities/:id', to: 'activities#destroy'

  resources :users

  get '/users/', to: 'users#index'
  post '/users/new', to: 'users#create'
  # GET '/users/new', to: 'users#new'
  # GET '/users/:id/edit', to: 'users#edit'
  # GET '/users/:id', to: 'users#show'
  # PATCH '/users/:id', to: 'users#update'
  # PUT '/users/:id', to: 'users#update'
  # DELETE  '/users/:id', to: 'users#destroy'

  resources :user_activities
  get '/user_activities', to: 'user_activities#index'
  post  '/user_activities/new', to: 'user_activities#create'
  # GET '/user_activities/:id/edit', to: 'user_activities#edit'
  # GET '/user_activities/:id', to: 'user_activities#show'
  # PATCH '/user_activities/:id', to: 'user_activities#update'
  put '/user_activities/:id', to: 'user_activities#update'
  # DELETE  '/user_activities/:id', to: 'user_activities#destroy'

  root 'application#index'
end
