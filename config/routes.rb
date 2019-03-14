Rails.application.routes.draw do
  get 'api/results', to: 'results#show'
end
