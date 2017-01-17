Rails.application.routes.draw do
  root 'pages#show'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '*pages', to: 'pages#show'
end
