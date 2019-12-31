Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #resources :users
  resources :games
  get('/users/login/:username', to: 'users#show_alt')
  get('/users/show/:id', to: 'users#show')
  get('/users', to: 'users#index')
  post('/users', to: 'users#create')
end
