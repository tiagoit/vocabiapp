class GameController < ApplicationController
  def play
    @source = 'es'
    @target = 'en'
    @pos = params[:pos].singularize
    @level = params[:level].to_i
    @words = Word.where(pos: @pos).where(level: @level - 1).order('random()').limit(30)
  end
end
