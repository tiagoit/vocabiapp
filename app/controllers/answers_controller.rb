class AnswersController < ApplicationController
  def create
    # current_user.answers.build()
    puts '####'
    puts '####'
    puts '####'
    puts '####'
    puts params
    puts '####'
    puts '####'
    puts '####'
    puts '####'

    if true
      render :json => { } # send back any data if necessary
    else
      render :json => { }, :status => 500
    end
  end
end
