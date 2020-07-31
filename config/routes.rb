Rails.application.routes.draw do
  root to: 'todos#index'
  get 'hello/index'
  resources :todos
  resources :boards
end
