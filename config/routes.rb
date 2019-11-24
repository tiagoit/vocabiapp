Rails.application.routes.draw do
  # HOME
  root 'static_pages#home'

  # GAME
  get ':pos/:level', to: 'game#play'

  # ANSWERS
  post 'answers', to: 'answers#create'

  # USERS
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  get 'set-lang', to: 'users#lang'
  post 'set-lang', to: 'users#set_lang'

  # SESSION
  get 'login', to: 'session#new'
  post 'login', to: 'session#create'
  delete 'logout', to: 'session#destroy'
end
