class GameController < ApplicationController
  def play
    @source = 'es'
    @target = 'en'

    @words = Word.where(pos: params[:pos].singularize)
                 .where(level: params[:level].to_i - 1)
                 .order('random()').limit(30)
  end
end
