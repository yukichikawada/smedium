Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:create, :destroy, :show, :update, :index] do
      resources :comments, only: [:create, :index]
    end
    resources :comments, only: [:destroy, :index]
  end
end
