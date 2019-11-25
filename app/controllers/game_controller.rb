class GameController < ApplicationController
  def play
    @words = Word.where(pos: params[:pos].singularize)
                 .where(level: params[:level])
                 .order('random()').limit(30)
  end
end
