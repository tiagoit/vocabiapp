Rails.application.routes.draw do
  # HOME
  root 'static_pages#home'

  # GAME
  get ':pos/:level', to: 'game#play'

  # ANSWERS
  post 'answers', to: 'answers#create'
end
