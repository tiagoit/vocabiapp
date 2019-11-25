class AnswersController < ApplicationController
  def create
    @answer = current_user.answers.build(word_id: params[:word_id],
                                         answer_id: params[:answer_id],
                                         source: current_user.source,
                                         target: current_user.target)
    if @answer.save
      if @answer.word_id.eql?(@answer.answer_id)
        current_user.update(score: current_user.score + @answer.word.level * 5 + 5)
      end
      render json: {}
    else
      render json: {}
      # render json: {}, status: 500
      # TODO: Send to Stackdriver
    end
  end
end
