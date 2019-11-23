Rails.application.routes.draw do
  root 'static_pages#home'
  get ':pos/:level', to: 'game#play'
  get 'words-txt', to: 'static_pages#words_txt'
end
