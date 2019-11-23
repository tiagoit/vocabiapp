class Answer < ApplicationRecord
  belongs_to :word
  belongs_to :user
end
