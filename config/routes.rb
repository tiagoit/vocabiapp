Rails.application.routes.draw do
  root 'static_pages#home'
  get ':pos/:level', to: 'game#play'
end
