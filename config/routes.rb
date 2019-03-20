Rails.application.routes.draw do
  get 'api/results', to: 'results#show'
  get 'api/reviews', to: 'reviews#show'
end
