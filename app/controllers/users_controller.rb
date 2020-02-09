class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to Vocabi app #{@user.name}."
      helpers.log_in @user
      redirect_to root_url
    else
      flash.now[:error] = 'Something went wrong, please try again.'
      render :new
    end
  end

  def lang; end

  def set_lang
    current_user.source = params[:lang][:source]
    current_user.target = params[:lang][:target]
    if current_user.save
      redirect_to root_path
    else
      flash.now[:error] = 'Something went wrong, please try again.'
      render :lang
    end
  end

  #############################################################################
  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
