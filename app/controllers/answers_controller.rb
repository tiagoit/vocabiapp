class AnswersController < ApplicationController
  def create
    answer = {
      word_id: params[:word_id],
      answer_id: params[:answer_id],
      source: current_user.source,
      target: current_user.target
    }

    @answer = current_user.answers.build(answer)

    if @answer.save
      if @answer.word_id.eql?(@answer.answer_id)
        current_user.score = current_user.score + @answer.word.level * 5 + 10
        current_user.save
      end
      render json: {}
    else
      render json: {}
      # render json: {}, status: 500
      # TODO: Send to Stackdriver
    end
  end
end
