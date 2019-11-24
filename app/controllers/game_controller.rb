class GameController < ApplicationController
  def play
    flash.now[:warning] = 'You should login to track progress.' unless current_user
    @pos = params[:pos].singularize
    @level = params[:level].to_i
    @words = Word.where(pos: @pos).where(level: @level - 1).order('random()').limit(30)
  end
end
