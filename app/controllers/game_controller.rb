class GameController < ApplicationController
  def play
    redirect_to set_lang_path if current_user && !current_user.source

    flash.now[:warning] = 'You should login to track progress.' unless current_user
    @words = Word.where(pos: params[:pos].singularize)
                 .where(level: params[:level])
                 .order('random()').limit(30)
  end
end
