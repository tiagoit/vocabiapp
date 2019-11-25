class Answer < ApplicationRecord
  belongs_to :word
  belongs_to :user
  belongs_to :answer, class_name: 'Word', foreign_key: 'answer_id'
end
